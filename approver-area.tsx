import React, { useEffect, useCallback, useState } from 'react'

import { Alert } from '@ds/comp-alert'
import { Combobox } from '@ds/comp-combobox'
import type { Selection } from '@react-types/shared'
import { get, isEmpty } from 'lodash'
import { isEqual } from 'lodash'
import { compose } from 'fe-hoc-compose'
import { connect } from 'fe-hoc-connect'
import { useWithI18n } from 'fe-lib-i18n'
import { ValidationBanner } from 'fe-pnc-comp-field-validation-item'
import {
  actions as ComposerMessageActions,
  getSelectedMessage,
  getSelectedMessageValue,
  store as composerMessageStore,
} from 'fe-pnc-data-composer-message'
import { store as OrganizationStore } from 'fe-pnc-data-organizations'
import { store as socialProfileStore } from 'fe-pnc-data-social-profiles-v2'
import type { SocialProfileState } from 'fe-pnc-data-social-profiles-v2'
import { isFeatureDisabledAndNotBeta, isFeatureEnabled, isFeatureEnabledOrBeta } from 'fe-pnc-lib-darklaunch'
import { FIELD_VALIDATIONS, FIELD_TYPES, CUSTOM_ERRORS } from 'fe-pnc-validation-error-messages'

import { TitleText } from '@/components/composer/composer-panels/message-edit-area/title-text'
import ComposerConstants from '@/constants/composer'
import Constants from '@/constants/constants'
import {
  ApproverAreaProps,
  ApproverMember,
  Approvers,
  ApproverTeam,
  OneTimeReviewers,
  OneTimeReviewerTypes,
} from '@/typings/Approver'
import type { OrganizationState } from '@/typings/Organization'
import ValidationUtils, {
  InvalidApproverSelected,
  NeedsApprovalAndNoApproverSelectedError,
} from '@/utils/validation-utils'
import { fetchApprovers } from '../api'
import { ComboboxContainer, ApprovalStatusValidationBanner, Header, Subtitle } from './approver-area.styles'

const COMBOBOX_STYLES = { minWidth: '100%' }
const MEMBER_ID_KEY = 'memberId'
const TEAM_ID_KEY = 'teamId'

export const ApproverArea: React.FC<ApproverAreaProps> = ({
  memberId,
  socialProfileIds,
  onApproversSelected,
  fieldValidations,
  selectedMessageForEdit,
  privateSocialProfiles,
  selectedOrganizationId,
  isEditMode,
  isCreator,
  isDraft,
}) => {
  const $i18n = useWithI18n({
    title: 'Request approval',
    subtitle: 'Ask a team or team members to approve this post.',
    placeholder: 'Search for a team member to approve your post',
    noResultsFoundText: "We couldn't find that member. Try a different name.",
    noApprovers: "You don't have team members with permission to approve posts for the selected accounts.",
  })

  const [approvers, setApprovers] = useState<Approvers>([])
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false)
  const [selectedApprovers, setSelectedApprovers] = useState<OneTimeReviewers>(null)
  const [isDirty, setIsDirty] = useState(false)

  const isApproverDropdownLocked = isEditMode && !isCreator && !isDraft

  useEffect(() => {
    const isPrivateSocialProfileSelected = () => {
      if (privateSocialProfiles?.length) {
        const privateSocialProfileIds = privateSocialProfiles.map(profile => profile.socialProfileId)
        return socialProfileIds.some(id => privateSocialProfileIds.includes(id))
      }
      return false
    }

    const getApproversData = async () => {
      if (isPrivateSocialProfileSelected()) {
        setApprovers([])
        setSelectedApprovers(null)
      } else {
        const approvers = await fetchApprovers(selectedOrganizationId, socialProfileIds)
        setApprovers(approvers)
        if (!isInitialDataLoaded) {
          setSelectedApprovers(selectedMessageForEdit?.oneTimeReviewers ?? null)
        }
      }
      if (!isInitialDataLoaded) {
        setIsInitialDataLoaded(true)
      }
    }

    getApproversData()
  }, [
    isInitialDataLoaded,
    socialProfileIds,
    selectedOrganizationId,
    privateSocialProfiles,
    selectedMessageForEdit,
  ])

  useEffect(() => {
    if (!isInitialDataLoaded) {
      return
    }

    const setInvalidOneTimeReviewer = isInvalid => {
      const updatedFieldValidations = isInvalid
        ? ValidationUtils.addCustomValidations(
            fieldValidations,
            [InvalidApproverSelected],
            FIELD_VALIDATIONS.ONE_TIME_REVIEWER,
            ComposerConstants.ERROR_LEVELS.ERRORS,
          )
        : ValidationUtils.removeErrors(fieldValidations, [
            CUSTOM_ERRORS.FE_INVALID_ONE_TIME_REVIEWER_SELECTED,
          ])

      if (isFeatureEnabled('PUB_34808_ERROR_ON_EXCESS_IMAGES')) {
        if (!isInvalid && isEmpty(updatedFieldValidations) && isEmpty(fieldValidations)) return

        ComposerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.FIELD_VALIDATIONS,
          updatedFieldValidations,
        )
      } else {
        ComposerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.FIELD_VALIDATIONS,
          updatedFieldValidations,
        )
      }
    }

    const isSelectedApproverAvailable = () => {
      const isApproverCurrentUser = selectedApprovers?.some(
        approver => approver.type === OneTimeReviewerTypes.MESSAGE_LEVEL && approver.id === memberId,
      )

      // If the selected approver is the current user clear the selection and not in edit mode (disabled)
      // e.g. duplicating a post from Planner where the current user is the selected approver
      if (isApproverCurrentUser && !isApproverDropdownLocked && !isDraft) {
        const updatedSelectedApprovers =
          selectedApprovers?.filter(approver => approver.id !== memberId) ?? null
        setSelectedApprovers(updatedSelectedApprovers)
      } else {
        onApproversSelected(selectedApprovers)

        const invalidApproversSelected =
          selectedApprovers !== null &&
          selectedApprovers.some(({ id, type }) => {
            if (type === OneTimeReviewerTypes.MESSAGE_LEVEL) {
              return !approvers.some(approver => (approver as ApproverMember).memberId === id)
            } else if (type === OneTimeReviewerTypes.MESSAGE_LEVEL_TEAM) {
              return !approvers.some(approver => (approver as ApproverTeam).teamId === id)
            }
            return false
          })
        if (selectedMessageForEdit) setInvalidOneTimeReviewer(invalidApproversSelected)
      }
    }

    isSelectedApproverAvailable()
  }, [approvers, isInitialDataLoaded, onApproversSelected, selectedApprovers])

  const getActivePills = useCallback((): Array<string> => {
    const activePills = []
    if (selectedApprovers) {
      selectedApprovers.forEach(({ id, type }) => {
        const approver = approvers.find(a => {
          if (type === OneTimeReviewerTypes.MESSAGE_LEVEL) {
            return (a as ApproverMember).memberId === id
          } else if (type === OneTimeReviewerTypes.MESSAGE_LEVEL_TEAM) {
            return (a as ApproverTeam).teamId === id
          }
        })
        if (approver) {
          if (type === OneTimeReviewerTypes.MESSAGE_LEVEL) {
            activePills.push(`${id}-${OneTimeReviewerTypes.MESSAGE_LEVEL}`)
          } else if (type === OneTimeReviewerTypes.MESSAGE_LEVEL_TEAM) {
            activePills.push(`${id}-${OneTimeReviewerTypes.MESSAGE_LEVEL_TEAM}`)
          }
        }
      })
    }
    return activePills
  }, [approvers, selectedApprovers])

  const isVisibleItem = useCallback(
    (approver: ApproverMember | ApproverTeam) => {
      let approverId: number | undefined

      if (MEMBER_ID_KEY in approver) {
        const member = approver as ApproverMember
        approverId = member.memberId
      } else if (TEAM_ID_KEY in approver) {
        const team = approver as ApproverTeam
        approverId = team.teamId
      }

      // Check if the approver should be visible in the dropdown list:
      // - Exclude the member if they are the creator of the post (to prevent self-approval)
      // - Include the member if in edit mode and they are already selected as an approver, or if the user is not the creator
      const isCurrentUserInSelectedApprovers = selectedApprovers?.some(approver => approver.id === memberId)
      return approverId !== memberId || (isEditMode && isCurrentUserInSelectedApprovers)
    },
    [isEditMode, memberId, selectedApprovers],
  )

  const renderError = () => {
    if (isFeatureEnabledOrBeta('PUB_34607_BAT_APPROVAL_STATUS')) {
      const oneTimeReviewerErrors = get(fieldValidations, ['errors', FIELD_VALIDATIONS.ONE_TIME_REVIEWER], [])
      const needsApprovalAndNoApproverSelectedError = oneTimeReviewerErrors.some(
        error => error.code === CUSTOM_ERRORS.FE_NEEDS_APPROVAL_AND_NO_APPROVER_SELECTED,
      )
      if (needsApprovalAndNoApproverSelectedError) {
        return (
          <ApprovalStatusValidationBanner
            fieldValidations={fieldValidations}
            field={FIELD_VALIDATIONS.ONE_TIME_REVIEWER}
            type={FIELD_TYPES.ONE_TIME_REVIEWER}
            isBulkComposer={false}
            isBento={isFeatureEnabled('PUB_32657_VALIDATION_BANNER_WITH_BENTO')}
          />
        )
      }
    }

    return (
      <ValidationBanner
        fieldValidations={fieldValidations}
        field={FIELD_VALIDATIONS.ONE_TIME_REVIEWER}
        type={FIELD_TYPES.ONE_TIME_REVIEWER}
        isBulkComposer={false}
        isBento={isFeatureEnabled('PUB_32657_VALIDATION_BANNER_WITH_BENTO')}
      />
    )
  }

  const shouldShowError = ValidationUtils.hasErrorsByField(
    fieldValidations,
    FIELD_VALIDATIONS.ONE_TIME_REVIEWER,
  )

  const needsApprovalAndNoApproverSelected =
    selectedMessageForEdit?.hasRequiresApprovalTagButNoApproverSelected() ?? false

  useEffect(() => {
    if (isFeatureDisabledAndNotBeta('PUB_34607_BAT_APPROVAL_STATUS')) {
      return
    }

    const setNeedsApprovalAndNoApproverSelected = (isInvalid: boolean) => {
      const updatedFieldValidations = isInvalid
        ? ValidationUtils.addCustomValidations(
            fieldValidations,
            [NeedsApprovalAndNoApproverSelectedError],
            FIELD_VALIDATIONS.ONE_TIME_REVIEWER,
            ComposerConstants.ERROR_LEVELS.ERRORS,
          )
        : ValidationUtils.removeErrors(fieldValidations, [
            CUSTOM_ERRORS.FE_NEEDS_APPROVAL_AND_NO_APPROVER_SELECTED,
          ])

      // only update if the updated field validations are different from the current field validations
      if (!isEqual(updatedFieldValidations, fieldValidations)) {
        ComposerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.FIELD_VALIDATIONS,
          updatedFieldValidations,
        )
      }
    }

    if (isDirty) {
      setNeedsApprovalAndNoApproverSelected(needsApprovalAndNoApproverSelected)
    }
  }, [isDirty, needsApprovalAndNoApproverSelected])

  const onSelectionChange = (keys: Selection) => {
    const selectedKeys = Array.from(keys)
    const oneTimeReviewers = approvers
      .filter(approver => {
        if (MEMBER_ID_KEY in approver) {
          const key = `${(approver as ApproverMember).memberId}-${OneTimeReviewerTypes.MESSAGE_LEVEL}`
          return selectedKeys.includes(key)
        } else if (TEAM_ID_KEY in approver) {
          const key = `${(approver as ApproverTeam).teamId}-${OneTimeReviewerTypes.MESSAGE_LEVEL_TEAM}`
          return selectedKeys.includes(key)
        }
        return false
      })
      .map(approver => {
        if (MEMBER_ID_KEY in approver) {
          const { memberId } = approver as ApproverMember
          return {
            id: memberId,
            type: OneTimeReviewerTypes.MESSAGE_LEVEL,
          }
        } else if (TEAM_ID_KEY in approver) {
          const { teamId } = approver as ApproverTeam
          return {
            id: teamId,
            type: OneTimeReviewerTypes.MESSAGE_LEVEL_TEAM,
          }
        }
        return null
      })
    setSelectedApprovers(oneTimeReviewers)
  }

  const filteredApprovers = approvers.filter(isVisibleItem)

  const getComboboxItems = () =>
    filteredApprovers.map(approver => {
      let key = ''
      let name = ''
      if (MEMBER_ID_KEY in approver) {
        const member = approver as ApproverMember
        key = `${member.memberId}-${OneTimeReviewerTypes.MESSAGE_LEVEL}`
        name = member.memberName
      } else if (TEAM_ID_KEY in approver) {
        const team = approver as ApproverTeam
        key = `${team.teamId}-${OneTimeReviewerTypes.MESSAGE_LEVEL_TEAM}`
        name = team.teamName
      }
      return <Combobox.Item key={key}>{name}</Combobox.Item>
    })

  return (
    <div>
      <Header>
        <TitleText>{$i18n.title()}</TitleText>
      </Header>
      {filteredApprovers.length > 0 ? (
        <>
          <Subtitle>{$i18n.subtitle()}</Subtitle>
          <ComboboxContainer data-testid="approver-combobox" onClick={() => setIsDirty(true)}>
            <Combobox
              style={COMBOBOX_STYLES}
              isDisabled={isApproverDropdownLocked}
              placeholder={$i18n.placeholder()}
              selectionMode="multiple"
              selectedKeys={getActivePills()}
              onSelectionChange={onSelectionChange}
              hasError={shouldShowError}
            >
              {getComboboxItems()}
            </Combobox>
          </ComboboxContainer>
          {shouldShowError && renderError()}
        </>
      ) : (
        <Alert type="info" message={$i18n.noApprovers()} />
      )}
    </div>
  )
}

ApproverArea.displayName = 'ApproverArea'

export default compose(
  connect(composerMessageStore, state => ({
    fieldValidations: getSelectedMessageValue(state, 'fieldValidations', false, {}),
    selectedMessageForEdit: getSelectedMessage(state),
  })),
  connect(socialProfileStore, (state: SocialProfileState) => ({
    privateSocialProfiles: state.private,
  })),
  connect(OrganizationStore, (state: OrganizationState) => ({
    selectedOrganizationId: state.selectedOrganization?.organizationId,
  })),
)(ApproverArea)
