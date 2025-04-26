import React, { ForwardedRef, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { Alert } from '@ds/comp-alert'
import loadable from '@loadable/component'
import axios from 'axios'
import Immutable, { OrderedMap } from 'immutable'
import { get, isEqual, isEmpty, isNil, over, omit, isNull, isUndefined } from 'lodash'
import moment from 'moment-timezone'
import { connect as reduxConnect } from 'react-redux'
import ReactTimeout from 'react-timeout'
import _ from 'underscore'
import ZenScroll from 'zenscroll'

import { CTA } from 'fe-comp-button'
import { useQuota } from 'fe-impact-lib-owlywriter-api'
import { isTikTokEnabled } from 'fe-lib-darklaunch'
import {
  COMPOSER_CANVA,
  DISABLE_HASHTAG_SUGGESTIONS,
  FLEXIBLE_APPROVALS,
  LINKEDIN_AUDIENCES,
  MESSAGE_TAGGING,
  PRODUCT_ACCESS_HASHTAG_SUGGESTIONS,
  VIDEO_TRANSCODING,
} from 'fe-lib-entitlements'
import { emit, off, on } from 'fe-lib-hootbus'
import { useWithI18n } from 'fe-lib-i18n'
import { logError } from 'fe-lib-logging'
import { hasMemberReachedSNMax } from 'fe-lib-pendo'
import { track } from 'fe-lib-tracking'
import { uuid } from 'fe-lib-uuid'
import { AudienceTargeting } from 'fe-pnc-comp-audience-targeting'
import { showConfirmationModal } from 'fe-pnc-comp-confirmation-modal'
import { FacebookTargeting } from 'fe-pnc-comp-facebook-targeting'
import { ValidationBanner, UnpairedInstagramIdsError } from 'fe-pnc-comp-field-validation-item'
import { ConnectedSocialNetworkPicker } from 'fe-pnc-comp-social-network-picker'
import { Constants as GlobalConstants } from 'fe-pnc-constants'
import { Constants as SocialProfileConstants } from 'fe-pnc-constants-social-profiles'
import type { SocialNetworkGroup, SocialNetworkType } from 'fe-pnc-constants-social-profiles'
import {
  actions as composerMessageActions,
  getSelectedMessage,
  getSelectedMessageValue,
  getState as getComposerMessageState,
  selectedMessageInterface as SelectedMessageState,
  store as composerMessageStore,
} from 'fe-pnc-data-composer-message'
import type { AttachmentData, AttachmentObject } from 'fe-pnc-data-composer-message'
import { hasEntitlement } from 'fe-pnc-data-entitlements'
import { getStore as getMessagePreviewsStore } from 'fe-pnc-data-message-previews'
import type { Mentions, PreviewsState, SanitizedMessage } from 'fe-pnc-data-message-previews'
import { checkContent } from 'fe-pnc-data-predictive-compliance'
import {
  createTag as createTagRequest,
  getTagsByOrganizationId,
  hasSeenPopover,
  isScrapeInProgress,
  linkScraperCancelRequests,
  scrape,
} from 'fe-pnc-lib-api'
import { withCTTIInstance } from 'fe-pnc-lib-ctti'
import {
  isFeatureDisabled,
  isFeatureDisabledAndNotBeta,
  isFeatureEnabled,
  isFeatureEnabledOrBeta,
  isThreadsEnabled,
} from 'fe-pnc-lib-darklaunch'
import { usePrevious } from 'fe-pnc-lib-hooks'

import { observeStore } from 'fe-pnc-lib-store-observer'
import { FIELD_VALIDATIONS, FIELD_TYPES } from 'fe-pnc-validation-error-messages'
import { ApprovalStatusPermissionsWrapper } from '@/components/approval-status/approval-status-buttons'
import ApproverArea from '@/components/approver-area'
import PeopleHotairBalloons from '@/components/bulk-composer/glyphs/people-hotair-balloon'
import SpotClouds from '@/components/bulk-composer/glyphs/spot-clouds'
import MessagePreviewArea from '@/components/composer/message-preview-area/message-preview-area'
import MessageEditContentComponent from '@/components/message-edit/message-edit-content/message-edit-content'
import MessageEditStates, {
  MessageEditStatesCta,
  MessageEditStatesImage,
  MessageEditStatesText,
  MessageEditStatesTitle,
} from '@/components/message-edit/message-edit-states/message-edit-states'
import { shouldShowPostTypeToggle } from '@/components/message-edit/post-type-toggle'
import { TagArea } from '@/components/tag-area'
import { ConnectedTagAreaWrapper } from '@/components/tag-area/TagAreaWrapper'
import ComposerConstants from '@/constants/composer'
import Constants from '@/constants/constants'
import { KEYBOARD_SHORTCUTS_EVENTS, ONBOARDING_WALKTHROUGH_EVENTS } from '@/constants/events'
import LOGGING_CATEGORIES from '@/constants/logging-categories'
import TrackingConstants from '@/constants/tracking'
import useCampaigns from '@/hooks/use-campaigns'
import useHashtagSuggestions from '@/hooks/use-hashtag-suggestions'
import Message from '@/models/message'
import { composerActions } from '@/redux/reducers/composer'
import { validationActions } from '@/redux/reducers/validation'
import { AppDispatch, RootState } from '@/redux/store'
import { OneTimeReviewers } from '@/typings/Approver'
import { EditMode, TrackingContext } from '@/typings/Constants'
import { Flux, Organization, Preset, Campaign } from '@/typings/Flux'
import {
  AdPromotionCreateBoostCampaignRequest,
  ErrorType,
  FieldValidations,
  LinkSettings,
  LinkSetting,
  Tag,
  URLPreview,
} from '@/typings/Message'
import { SocialNetwork, SocialNetworksKeyedById } from '@/typings/SocialNetwork'
import { CampaignUtils } from '@/utils/campaign-utils'
import ComposerUtils from '@/utils/composer-utils'
import LinkUtils from '@/utils/link-utils'
import { importInstagramMobileSetup } from '@/utils/load-ig-mobile-setup'
import { doMessagesContainUnlinkedMention } from '@/utils/mentions-utils'
import MessageUtils from '@/utils/message-utils'
import PredictiveComplianceUtils from '@/utils/predictive-compliance-utils'
import statusObject from '@/utils/status-bar'
import { getSessionId } from '@/utils/tracking'
import ValidationUtils from '@/utils/validation-utils'
import { ConnectedDualPublishWrapper } from '../../composer-footer/dual-publish-toggle/dual-publish-wrapper'
import CampaignPicker from './campaign-picker'
import { EditHeader } from './edit-header/edit-header'
import { ConnectedExtendedInfoTextEntry as ExtendedInfoTextEntry } from './extended-info-text-entry'
import InstagramFirstCommentArea from './instagram-first-comment-area'
import InstagramLocationTagging from './instagram-location-tagging'
import Locations from './locations'
import MediaPicker from './media-picker'
import {
  BannerArea,
  EditContainer,
  EditContent,
  MessageEditAreaWrapper,
  MessageSettingsContainer,
  ProfileSelectorErrorContainer,
} from './message-edit-area.style'
import { ConnectedPinterestBoardPicker } from './pinterest-board-picker'
import PublisherNotes from './publisher-notes/publisher-notes'
import TiktokEngagementArea from './tiktok-engagement-area'
import { TitleText } from './title-text'

const ProfileSelector = ConnectedSocialNetworkPicker
const { SN_TYPES } = SocialProfileConstants

const BoostPost = loadable(() => import(/* webpackChunkName: "BoostPost" */ 'fe-ae-comp-composer-boost-post'))
BoostPost.displayName = 'BoostPost' // The displayName is needed for finding the component in the unit tests

AudienceTargeting.displayName = 'LinkedInAudienceTargeting'

const InstagramStoryAspectRatioInfoBanner = loadable(
  () =>
    import(
      /* webpackChunkName: "InstagramStoryAspectRatioInfoBanner " */ '../../composer-banners/instagram-story-aspect-ratio-info-banner'
    ),
)
InstagramStoryAspectRatioInfoBanner.displayName = 'InstagramStoryAspectRatioInfoBanner'

const ProductTaggingInfoBanner = loadable(
  () =>
    import(
      /* webpackChunkName: "ProductTaggingInfoBanner" */ '../../composer-banners/product-tagging-info-banner'
    ),
)

const defaultScrollDuration = 250
const scrollEdgeOffset = 30
const noop = () => {}

const MessageEditContent = withCTTIInstance('Composer', 'MessageEditContent', MessageEditContentComponent)

const DualPublishWrapperWithSocialProfiles = ConnectedDualPublishWrapper
interface MessageEditAreaProps {
  additionalProps: Record<string, unknown>
  addProfile?(): void
  closeComposerConfirm(): void
  campaigns: Array<Campaign>
  composerConf?: Record<string, unknown>
  csrf: string
  customContext?: string
  dispatch: AppDispatch
  entitlements: Record<string, number>
  excludedNetworkTypes?: Array<SocialNetworkType>
  facadeApiUrl: string
  fetchPreviewData(): void
  flux: Flux
  hasAlbumTargetingWarning?: boolean
  ignoredPreviewValidationMessageCodes?: Array<string>
  isAIPanelOpen: boolean
  isBulkComposer?: boolean
  isEditMode?: boolean
  isEditOnly?: boolean
  isEligibleProductAccountSelected: boolean
  isHashtagPanelOpen: boolean
  isSchedulerOpen?: boolean
  isSendingMessage?: boolean
  isSequentialPostingEnabled?: boolean
  isSocialProfileSelectorDisabled?: boolean
  isUsingLATM?: boolean
  language?: string
  memberId: number
  messages?: Array<Message>
  mode?: EditMode
  onAddAttachment(attachmentData: AttachmentData, isUploadRequired?: boolean, currentSource?: string): void
  onAddIgnoredPreviewValidationMessageCode(code: number): void
  onAttachmentEdited: () => void
  onChangePreset(): void
  onChangeText(
    newText: string,
    newMentions: Mentions,
    newTemplate?: string,
    selectedNetworkGroup?: SocialNetworkGroup | null,
  ): void
  onClickContentTips(editorId: string): void
  onClickHashtagButton(editorId: string): void
  onClickQualityTips(): void
  onCreateBoardComplete(): void
  onFetchSocialProfiles?(): void
  onLinkPreviewChange(): void
  onManageTags(): void
  onModeChange(): void
  onScheduleAll(): void
  onToggleAIPanel(): void
  onToggleMediaLibrary?(): void
  onTrackMediaUploadError?(error: ErrorType, mediaAttachment?: AttachmentObject | null): void
  onUploadQueueComplete?(): void
  organizations?: Array<Organization>
  presets: Array<Preset>
  selectedMessageForEdit: Message
  selectedNetworkGroup?: SocialNetworkGroup
  selectedOrganization: Organization
  selectedProfileIds: Array<number>
  selectedSocialNetworkIds: Array<number>
  showOnboarding?: boolean
  showOnSubmitErrors?: boolean
  socialNetworks: Array<SocialNetwork>
  suggestedTags: Array<Tag>
  tags: Array<Tag>
  timezoneName: string
  trackingContext: TrackingContext
  isSandbox: boolean
  instagramPairingErrors: Array<ErrorType>
  editorRef: ForwardedRef<HTMLDivElement> | null
}

type CampaignObjectiveChanged = 'changed_to_video' | 'changed_to_engagement'
export const MessageEditArea = ({
  additionalProps,
  addProfile = noop,
  campaigns,
  closeComposerConfirm,
  composerConf,
  csrf,
  customContext,
  dispatch,
  entitlements,
  excludedNetworkTypes,
  facadeApiUrl,
  fetchPreviewData = noop,
  flux,
  hasAlbumTargetingWarning = false,
  ignoredPreviewValidationMessageCodes = [],
  isAIPanelOpen,
  isBulkComposer,
  isEditMode = false,
  isEditOnly = false,
  isEligibleProductAccountSelected = false,
  isHashtagPanelOpen,
  isSchedulerOpen = false,
  isSendingMessage,
  isSequentialPostingEnabled = false,
  isSocialProfileSelectorDisabled = false,
  isUsingLATM = false,
  language = 'en',
  memberId,
  messages,
  mode,
  onAddAttachment,
  onAddIgnoredPreviewValidationMessageCode,
  onAttachmentEdited,
  onChangePreset = noop,
  onChangeText,
  onClickContentTips,
  onClickHashtagButton,
  onCreateBoardComplete,
  onFetchSocialProfiles = noop,
  onLinkPreviewChange,
  onManageTags = noop,
  onModeChange,
  onScheduleAll,
  onToggleAIPanel,
  onToggleMediaLibrary,
  onTrackMediaUploadError,
  onUploadQueueComplete = noop,
  organizations,
  presets,
  selectedMessageForEdit,
  selectedNetworkGroup = null,
  selectedOrganization,
  selectedProfileIds,
  selectedSocialNetworkIds = [],
  showOnboarding = false,
  showOnSubmitErrors = false,
  socialNetworks,
  suggestedTags,
  tags,
  timezoneName,
  trackingContext,
  isSandbox,
  instagramPairingErrors,
  editorRef,
}: MessageEditAreaProps) => {
  const $i18n = useWithI18n({
    MESSAGES_READY_FOR_REVIEW: 'Your posts are ready to review!',
    MESSAGES_READY: 'Your posts are ready to go!',
    SCHEDULE_ALL_MESSAGES: 'Schedule all posts',
    SELECT_MESSAGE: 'Or select a post to review or edit',
    LINK_SETTINGS_SUCCESS: 'Your link settings have been applied successfully.',
    ENTER_TEXT_AND_LINKS: 'Craft your copy and add your links',
    MESSAGE_EDIT_TEXT_HEADER: 'Text',
    IG_STORY_CLIPBOARD_TEXT_PLACEHOLDER:
      'Enter text and links. They will be sent to your device for easy access.',
    BOOST_IG_CAROUSEL_WARNING: 'Posts with more than one image or video can’t be boosted from Hootsuite.',
    BOOST_IG_CAROUSEL_BOOSTED_WARNING:
      'Posts with more than one image or video can’t be boosted from Hootsuite. If you keep the extra image, your boost settings will be deleted when you publish your post.',
    BOOST_LI_CAROUSEL_WARNING: 'Posts with more than one image or video can’t be boosted from Hootsuite.',
    BOOST_LI_CAROUSEL_BOOSTED_WARNING:
      'Posts with more than one image or video can’t be boosted from Hootsuite. If you keep the extra image, your boost settings will be deleted when you publish your post.',
    BOOST_LINKEDIN_OBJECTIVE_WARNING_CHANGED_TO_VIDEO:
      "You added a video to this post, so we've changed your boost objective to Video views.",
    BOOST_LINKEDIN_OBJECTIVE_WARNING_CHANGED_TO_ENGAGEMENT:
      "You removed the video from this post, so we've changed your boost objective to Engagement.",
    PINTEREST_PLACEHOLDER: 'Say more about this Pin (required)',
    PINTEREST_EXTENDED_INFO_PLACEHOLDER: 'Add the URL this Pin links to (required)',
    PINTEREST_EXTENDED_INFO_TEXT: 'Website',
    INSTAGRAM_REEL_INFO_BANNER_TEXT:
      'Instagram reels must be between 3 seconds and 15 minutes long with a recommended aspect ratio of 9:16.',
    UNABLE_RETRIEVE_TAGS: 'Unable to retrieve tags', // Remove with PUB_34613_COMPOSER_FILE_SIZE_REDUCTION
    UNABLE_CREATE_TAGS_DUPLICATE: 'Tag cannot be created - tag already exists', // Remove with PUB_34613_COMPOSER_FILE_SIZE_REDUCTION
    UNABLE_CREATE_TAGS: 'Unable to create tag', // Remove with PUB_34613_COMPOSER_FILE_SIZE_REDUCTION
    TAGS: 'Tags', // Remove with PUB_34613_COMPOSER_FILE_SIZE_REDUCTION
    MESSAGES_CONTAIN_ERRORS:
      '{numErrors} of your posts will need a few fixes before they can be scheduled. Select a post from the list to review or edit.',
    newCampaign: 'Selecting a new campaign',
    newCampaignInfo: 'Selecting a new campaign may change your tags or link settings.',
    continueButton: 'Continue',
    cancelButton: 'Cancel',
  })

  const getSelectedMessageForEdit = () => getSelectedMessage(getComposerMessageState())

  /**
   * The AI feature should be hidden if the DL AMB_684_OWLY_WRITER_BLOCKED_ORGS in service-owly-writer namespace is enabled for the member's org.
   * Use useQuota custom hook to check if OwlyWriter and AI features should be excluded as a whole.
   * Do not render the AI button in Bulk Composer.
   */
  const { loading: isLoadingQuota = true, isOrgBlocked = true } = useQuota()

  const [editorId] = useState(uuid())
  const zenScroller = useRef()
  let scrollContainer = null
  let unsubscribeObservers = [noop]
  const attachmentAreaNode = useRef()
  const messageEditTextNode = useRef()
  const profileSelectorNode = useRef()
  const tagAreaNode = useRef()

  const selectedMessageForEditInConstructor = getSelectedMessageForEdit()

  const [lastScrapedUrl, setLastScrapedUrl] = useState<string | null>(null)
  const [linkScrapeInProgress, setLinkScrapeInProgress] = useState<boolean>(false)
  const [twSpIds, setTwSpIds] = useState<Array<string>>([])
  const [facebookPageProfiles, setFacebookPageProfiles] = useState<Array<number>>([])
  const [linkedInCompanyProfiles, setLinkedInCompanyProfiles] = useState<Array<number>>([])
  const [previewMessages, setPreviewMessages] = useState<Array<SanitizedMessage>>([])
  const [fieldValidations, setFieldValidations] = useState<FieldValidations>({})
  const [linkSettings, setLinkSettings] = useState<LinkSettings | null>([])
  const [campaignId, setCampaignId] = useState<string | null>(
    selectedMessageForEditInConstructor && selectedMessageForEditInConstructor.campaignId,
  )
  const [albumName, setAlbumName] = useState<string | null>('')
  const [publishingMode, setPublishingMode] = useState<string>(
    selectedMessageForEditInConstructor && selectedMessageForEditInConstructor.publishingMode,
  )
  const [socialNetworksKeyedById, setSocialNetworksKeyedById] = useState<SocialNetworksKeyedById>(
    (selectedMessageForEditInConstructor && selectedMessageForEditInConstructor.socialNetworksKeyedById) ||
      Immutable.OrderedMap({}),
  )
  const attachments = useMemo(() => {
    const selectedNetworkGroup = selectedMessageForEdit?.selectedNetworkGroup

    if (selectedNetworkGroup) {
      return MessageUtils.getAttachmentsBySelectedNetwork(
        getSelectedMessageValue(getComposerMessageState(), 'messages', false, []),
        selectedNetworkGroup,
      )
    }

    return getSelectedMessageValue(selectedMessageForEdit, 'attachments', false, [])
  }, [selectedMessageForEdit, selectedMessageForEdit?.hasAttachments(), selectedNetworkGroup])

  const [numOfPinterestBoardsSelected, setNumOfPinterestBoardsSelected] = useState<number>(0)
  const [selectedNetworkTypes, setSelectedNetworkTypes] = useState<Array<SocialNetworkType>>([])
  const [appliedTags, setAppliedTags] = useState<Array<Tag>>(selectedMessageForEditInConstructor?.tags || [])
  const [selectedSocialNetworkIdsState, setSelectedSocialNetworkIdsState] = useState<Array<number>>(
    getSelectedMessageForEdit()?.getSocialNetworkIds() || [],
  )
  const [sendDate, setSendDate] = useState<number>(0)
  const [appliedPublisherNotes, setAppliedPublisherNotes] = useState<string>(
    selectedMessageForEditInConstructor?.publisherNotes || '',
  )
  const [unpairedInstagramIds, setUnpairedInstagramIds] = useState<Array<number>>([]) //Remove with PUB_33046_COMPOSER_MESSAGE_STORE DL
  const unpairedInstagramProfileIds = instagramPairingErrors?.map(e => e.socialProfileId) || []

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [socialNetworkTypesForCounting, setSocialNetworkTypesForCounting] = useState<
    Array<SocialNetworkType>
  >([])
  const [boostCampaign, setBoostCampaign] = useState<AdPromotionCreateBoostCampaignRequest | null>(null)

  const [campaignObjectiveChanged, setCampaignObjectiveChanged] =
    useState<CampaignObjectiveChanged>(undefined)
  const [isBoosted, setIsBoosted] = useState<boolean>(false)
  const [isMentionSearchInProgress, setIsMentionSearchInProgress] = useState<boolean>(false)
  const [shouldShowInstagramStoriesInComposerInfoBanner, setShouldShowInstagramStoriesInComposerInfoBanner] =
    useState<boolean>(false)
  const [shouldShowOwlyWriterBanner, setShouldShowOwlyWriterBanner] = useState<boolean>(false)
  const [isPreviewChanged, setIsPreviewChanged] = useState<boolean>(false)
  const [isHashtagAccessAllowed, setIsHashtagAccessAllowed] = useState<boolean>(false) // Remove with PUB_34592_HIDE_HASHTAG_SUGGESTIONS_FOR_OWLY_WRITER_BLOCKED_ORGS
  const [isHashtagDisabled, setIsHashtagDisabled] = useState<boolean>(true) // Remove with PUB_34592_HIDE_HASHTAG_SUGGESTIONS_FOR_OWLY_WRITER_BLOCKED_ORGS
  const [isCanvaAccessAllowed, setIsCanvaAccessAllowed] = useState<boolean>(false)
  const [hasTagAccessEntitlement, setHasTagAccessEntitlement] = useState<boolean>(false)
  const [hasApprovalAccessEntitlement, setHasApprovalAccessEntitlement] = useState<boolean>(false)
  const [hasLinkedInAudiencesAccessEntitlement, setHasLinkedinAudiencesAccessEntitlement] =
    useState<boolean>(false)
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(null)
  const [selectedMessageCount, setSelectedMessageCount] = useState<number>(null)
  const [selectedMessageId, setSelectedMessageId] = useState<string | number>(null)

  const prevSelectedMessageForEdit = usePrevious(selectedMessageForEdit)
  const prevSelectedOrganization = usePrevious(selectedOrganization)
  const prevSelectedSocialNetworkIds = usePrevious(selectedSocialNetworkIds)
  const prevNumOfPinterestBoardsSelected = usePrevious(numOfPinterestBoardsSelected)
  const prevSelectedNetworkTypes = usePrevious(selectedNetworkTypes)
  const prevSelectedNetworkGroup = usePrevious(selectedNetworkGroup)
  const prevAttachments = usePrevious(attachments)
  const prevIsSendingMessage = usePrevious(isSendingMessage)
  const isEditingTemplate = ComposerUtils.isTemplate(selectedMessageForEdit?.messageType) && isEditMode
  const { canView: canViewCampaigns, canManage: canManageCampaigns } = useCampaigns(
    memberId,
    selectedOrganization,
    isEditingTemplate,
    composerConf,
    isBulkComposer,
  )

  const handleHashtagButtonClick = useCallback(() => {
    if (!isHashtagPanelOpen) {
      setIsPreviewChanged(false)
    }
    onClickHashtagButton(editorId, false)
  }, [isHashtagPanelOpen, onClickHashtagButton, editorId])

  const hasVideoTranscodingEntitlement = entitlements => {
    return entitlements && entitlements[VIDEO_TRANSCODING] > 0
  }

  const getFieldValidationErrors = () => fieldValidations?.errors || null

  const getNumOfErrors = () => {
    let errors = []

    if (messages) {
      errors = _.filter(messages, message => message.hasErrors())
    }

    return errors.length
  }

  const scrollToTagArea = () => {
    if (tagAreaNode.current && zenScroller?.current) {
      zenScroller.current.center(ReactDOM.findDOMNode(tagAreaNode.current), 150)
    }
  }

  const scrollToField = node => {
    if (node && zenScroller?.current) {
      zenScroller.current.center(ReactDOM.findDOMNode(node), 150)
    }
  }

  const scrollToFirstError = showOnSubmitErrors => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    let hasMessageEditAreaError = true

    if (!selectedMessageForEdit) {
      return false
    }

    if (
      ValidationUtils.hasErrorsByField(fieldValidations, FIELD_VALIDATIONS.SOCIAL_NETWORK, showOnSubmitErrors)
    ) {
      scrollToField(profileSelectorNode.current)
    } else if (
      ValidationUtils.hasErrorsByField(fieldValidations, FIELD_VALIDATIONS.TEMPLATE, showOnSubmitErrors)
    ) {
      scrollToField(messageEditTextNode.current)
    } else if (
      ValidationUtils.hasErrorsByField(fieldValidations, FIELD_VALIDATIONS.ATTACHMENTS, showOnSubmitErrors)
    ) {
      scrollToField(attachmentAreaNode.current)
    } else if (
      ValidationUtils.hasErrorsByField(fieldValidations, FIELD_VALIDATIONS.PLACE, showOnSubmitErrors)
    ) {
      const locationErrors = get(fieldValidations, ['errors', FIELD_VALIDATIONS.PLACE], null)
      if (Array.isArray(locationErrors) && locationErrors.length) {
        const { socialProfileType } = locationErrors[0]
        if (socialProfileType === SN_TYPES.TWITTER) {
          scrollToField(twitterLocationAreaNode.current)
        }
      }
    } else {
      hasMessageEditAreaError = false
    }

    return hasMessageEditAreaError
  }

  const resetPreviewArea = (hasError: boolean, hasWarning: boolean) => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    composerMessageActions.updateFieldsById(selectedMessageForEdit.id, {
      [Constants.FIELD_TO_UPDATE.UN_EDITED_URL_PREVIEW]: {
        hasWarning,
        hasError,
      },
      [Constants.FIELD_TO_UPDATE.URL_PREVIEW]: {
        hasWarning,
        hasError,
      },
    })
  }

  const onScrapeLink = (text: string) => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    if (isFeatureEnabled('PUB_34194_COMPOSER_CRASH_ORG_SWITCH')) {
      if (!isBulkComposer && !selectedMessageForEdit) {
        return
      }
    }

    const linkSettings = getSelectedMessageForEdit().linkSettings
    const supportsLinkPreview = selectedMessageForEdit.supportsLinkPreviewIncludingTwitter()
    const isLinkPreviewValid =
      selectedMessageForEdit &&
      selectedMessageForEdit.urlPreview &&
      linkSettings &&
      linkSettings.filter(
        (linkSetting: LinkSetting) =>
          LinkUtils.addHttpToUrlIfMissing(linkSetting.url) === selectedMessageForEdit.urlPreview.originalUrl,
      ).length > 0

    if (isFeatureEnabled('PUB_34046_DISABLE_LINK_SCRAPE')) {
      const hasOnlyTwitterSelected =
        !isLinkPreviewValid &&
        ComposerUtils.hasOnlySocialProfileType(
          selectedMessageForEdit.getSocialNetworkTypes(),
          SN_TYPES.TWITTER,
        )
      const hasNoPreviewLinkInText =
        selectedMessageForEdit.urlPreview && text.indexOf(selectedMessageForEdit.urlPreview.url) === -1

      if (
        selectedMessageForEdit.hasAttachments() ||
        (hasNoPreviewLinkInText &&
          (!selectedMessageForEdit.supportsLinkPreviewIncludingTwitter() || hasOnlyTwitterSelected)) // Twitter doesn't support link preview, so we don't want to keep it if there are no links in the text
      ) {
        composerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.URL_PREVIEW,
          null,
        )
        return
      }
    } else {
      if (
        (!supportsLinkPreview ||
          (!isLinkPreviewValid &&
            ComposerUtils.hasOnlySocialProfileType(
              selectedMessageForEdit.getSocialNetworkTypes(),
              SN_TYPES.TWITTER,
            ))) &&
        selectedMessageForEdit.urlPreview &&
        text.indexOf(selectedMessageForEdit.urlPreview.url) === -1
      ) {
        composerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.URL_PREVIEW,
          null,
        )
        return
      }
    }

    if (selectedMessageForEdit) {
      let shouldScrape: boolean
      if (isFeatureDisabled('PUB_34046_DISABLE_LINK_SCRAPE')) {
        const hasNoPreview = isEmpty(omit(selectedMessageForEdit?.urlPreview, 'hasError', 'hasWarning'))
        shouldScrape = hasNoPreview && attachments.length === 0 && !isScrapeInProgress()
      } else {
        shouldScrape =
          isEmpty(omit(selectedMessageForEdit?.urlPreview, 'hasError', 'hasWarning')) && !isScrapeInProgress()
      }

      if (shouldScrape) {
        const mentions = selectedMessageForEdit.supportsMentions()
          ? selectedMessageForEdit.getAllMentions(selectedNetworkGroup)
          : []
        const urls: string[] = text ? LinkUtils.getUrlsWithoutMentionOverlaps(text, mentions) : []
        if (urls.length > 0) {
          const urlToScrape = urls[urls.length - 1]
          if (lastScrapedUrl === urlToScrape) {
            return
          }

          setLastScrapedUrl(urlToScrape)
          resetPreviewArea(false, false)
          setLinkScrapeInProgress(true)

          scrape([urlToScrape], socialNetworks)
            .then(data => {
              // data.scrapeResults is an object with keys equal to the urls we sent
              if (
                !data.scrapeResults ||
                typeof data.scrapeResults !== 'object' ||
                data.scrapeResults[urlToScrape] === undefined
              ) {
                throw new Error('Scrape had an error, or the url was invalid')
              }

              const scrapeResult = data.scrapeResults[urlToScrape]

              const linkPreview = ComposerUtils.getLinkPreviewFromLinkScrapeResponse(scrapeResult)

              if (linkPreview?.hasError) {
                throw new Error('Scrape had an error, or the url was invalid')
              }

              // Remove any link preview validation errors
              resetPreviewArea(false, false)

              // Upload link preview thumbnail to S3 if LinkedIn SN is currently selected
              // and
              // Refresh the URL preview
              if (
                selectedMessageForEdit
                  .getSocialNetworkGroups()
                  .includes(SocialProfileConstants.SN_GROUP.LINKEDIN)
              ) {
                LinkUtils.updateMessageURLPreviewWithS3ThumbnailURL(
                  selectedMessageForEdit.id,
                  linkPreview,
                  composerMessageActions.updateFieldsById,
                )
              } else {
                composerMessageActions.updateFieldsById(selectedMessageForEdit.id, {
                  unEditedUrlPreview: {
                    ...linkPreview,
                    hasWarning: false,
                    hasError: false,
                  },
                  urlPreview: {
                    ...linkPreview,
                    hasWarning: false,
                    hasError: false,
                  },
                })
              }

              fetchPreviewData()

              setLinkScrapeInProgress(false)
            })
            .catch((e: any) => {
              setLinkScrapeInProgress(false)
              if (!axios.isCancel(e)) {
                logError(LOGGING_CATEGORIES.NEW_COMPOSER, 'Failed to scrape link', {
                  errorMessage: JSON.stringify(e.message),
                  stack: JSON.stringify(e.stack),
                })
              }

              resetPreviewArea(true, false)
            })
        } else {
          // already does not have a url, so unset if there is no link preview
          if (!selectedMessageForEdit.urlPreview) {
            composerMessageActions.updateFieldById(
              selectedMessageForEdit.id,
              Constants.FIELD_TO_UPDATE.UN_EDITED_URL_PREVIEW,
              null,
            )
          }
        }
      }
    }
  }

  const getSelectedBoards = () => {
    if (!ComposerUtils.isPinterestComposer(customContext)) {
      return []
    }
    const selectedMessageForEdit = getSelectedMessageForEdit()
    if (selectedMessageForEdit && ComposerUtils.isDraft(selectedMessageForEdit.messageType)) {
      // Pinterest Draft can have multiple selected boards
      return selectedMessageForEdit.baseMessage.extendedInfo.boards
    } else {
      // editing a Pinterest message can only have one selected board
      return get(selectedMessageForEdit, ['messages', 0, 'extendedInfo', 'boards'], [])
    }
  }

  const renderErrorState = () => {
    return (
      <MessageEditStates>
        <>
          <MessageEditStatesTitle>{$i18n.MESSAGES_READY_FOR_REVIEW()}</MessageEditStatesTitle>
          <MessageEditStatesText>
            {$i18n.MESSAGES_CONTAIN_ERRORS({ numErrors: getNumOfErrors().toString() })}
          </MessageEditStatesText>
        </>
      </MessageEditStates>
    )
  }

  const renderQuickSchedule = () => {
    // if member is logged in via latm, disable the schedule button
    const onClick = isUsingLATM ? noop : onScheduleAll
    const isDisabled = isUsingLATM || isLoading
    return (
      <MessageEditStates>
        <>
          <MessageEditStatesImage glyph={PeopleHotairBalloons} viewBox="0 0 311.6 548" />
          <MessageEditStatesTitle>{$i18n.MESSAGES_READY()}</MessageEditStatesTitle>
          <MessageEditStatesCta {...{ isLoading, onClick }} disabled={isDisabled} type={CTA}>
            {$i18n.SCHEDULE_ALL_MESSAGES()}
          </MessageEditStatesCta>
          <MessageEditStatesText>{$i18n.SELECT_MESSAGE()}</MessageEditStatesText>
        </>
      </MessageEditStates>
    )
  }

  const renderMultiple = () => {
    return (
      <MessageEditStates noBackground={true}>
        <MessageEditStatesImage glyph={SpotClouds} viewBox="0 0 162.3 88.1" />
      </MessageEditStates>
    )
  }

  const onChangeExtendedInfo = obj => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    composerMessageActions.updateFieldById(
      selectedMessageForEdit.id,
      Constants.FIELD_TO_UPDATE.EXTENDED_INFO,
      _.clone(obj),
    )
  }

  const onApplyLinkSettings = (
    linkSettings: LinkSettings,
    trackingData?: { shortener?: number; tracking?: string },
    localPreset?: Preset | undefined,
  ) => {
    // This is a hacky way to let the message editor update its state
    // and re-hydrate any linked mentions
    // before modal closes and editor re-renders on close
    const timeoutPromise = new Promise(resolve => resolve('resolve'))
    timeoutPromise.finally(() => {
      const selectedMessageForEdit = getSelectedMessageForEdit()

      // If we are applying presets to the link settings that have not diverged from the base link settings,
      // we need to generate new link ids
      const innerMessage = MessageUtils.getInnerMessageFromGroup(
        selectedMessageForEdit.messages,
        selectedMessageForEdit.selectedNetworkGroup,
      )
      if (!isNil(innerMessage?.linkSettings) && !isEmpty(linkSettings)) {
        const shouldGenerateLinkSettingsIds = LinkUtils.shouldGenerateNewLinkSettingIds(
          innerMessage.linkSettings,
          selectedMessageForEdit.baseMessage.linkSettings,
          linkSettings,
        )
        if (shouldGenerateLinkSettingsIds) {
          linkSettings.forEach(updatedLinkSetting => (updatedLinkSetting.id = uuid()))
        }

        const template = MessageUtils.buildTemplateFromMessage(
          innerMessage.renderMessageText(),
          linkSettings,
          innerMessage.mentions,
        )

        // Need to update message template with new link setting ids
        composerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.TEMPLATE,
          template,
        )
      }

      const linkSettingsWithPresetApplied = LinkUtils.getLinkSettingsWithPresetApplied(
        selectedMessageForEdit,
        linkSettings,
        undefined,
      )
      composerMessageActions.applyCampaignPresets(selectedMessageForEdit.id, {
        ...linkSettingsWithPresetApplied,
      })

      // Save default preset to the local storage if provided
      if (!isUndefined(localPreset) && localStorage && memberId) {
        if (JSON.parse(localStorage.getItem(Constants.LINK_PRESET_LOCAL_STORAGE))) {
          const currentLocalPresets = JSON.parse(localStorage.getItem(Constants.LINK_PRESET_LOCAL_STORAGE))
          currentLocalPresets[memberId] = localPreset
          localStorage.setItem(Constants.LINK_PRESET_LOCAL_STORAGE, JSON.stringify(currentLocalPresets))
        } else {
          localStorage.setItem(
            Constants.LINK_PRESET_LOCAL_STORAGE,
            JSON.stringify({ [memberId]: localPreset }),
          )
        }
      }

      const { tracking = null, shortener = null } = trackingData || {}
      if (!isNull(tracking)) {
        track(
          TrackingConstants.TRACKING_ORIGINS.LINK_SETTINGS_TRACKING,
          TrackingConstants.TRACKING_ACTION.LINK_SETTINGS_TRACKING_APPLIED,
          { tracking },
        )
      }

      if (!isNull(shortener)) {
        track(
          TrackingConstants.TRACKING_ORIGINS.LINK_SETTINGS_SHORTENER,
          TrackingConstants.TRACKING_ACTION.LINK_SETTINGS_SHORTENER_APPLIED,
          { shortener },
        )
      }

      statusObject.update($i18n.LINK_SETTINGS_SUCCESS(), 'success', true)
    })
  }

  const onLinkScrapeCancel = (prevUrlPreview: URLPreview) => {
    const lastScrapedUrl = prevUrlPreview?.originalUrl ?? null

    if (linkScrapeInProgress) {
      setLinkScrapeInProgress(false)
    }
    setLastScrapedUrl(lastScrapedUrl)
  }

  const getSocialProfileUsernameByIdFunc = id => getSelectedMessageForEdit()?.getSocialProfileUsernameById(id)
  const getSocialNetworkTypesFunc = () =>
    isFeatureEnabled('PUB_34194_COMPOSER_CRASH_ORG_SWITCH')
      ? getSelectedMessageForEdit()?.getSocialNetworkTypes() || []
      : getSelectedMessageForEdit()?.getSocialNetworkTypes()
  const hasAttachmentsFunc = () => getSelectedMessageForEdit()?.hasAttachments()
  const getAttachmentTypeFunc = () => getSelectedMessageForEdit()?.getAttachmentType()
  const hasVideoAttachmentFunc = () => getSelectedMessageForEdit()?.hasVideoAttachment()
  const getFirstErrorMessageForFieldFunc = field =>
    getSelectedMessageForEdit()?.getFirstErrorMessageForField(field)
  const isSocialProfileTypeSelectedFunc = (...type) =>
    getSelectedMessageForEdit()?.isSocialProfileTypeSelected(...type)
  const hasThumbnailUrlsFunc = () => getSelectedMessageForEdit()?.hasThumbnailUrls()
  const supportsLinkPreviewFunc = () => getSelectedMessageForEdit()?.supportsLinkPreview()

  const renderInstagramReelInfoBanner = () => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    if (
      shouldShowPostTypeToggle(selectedNetworkGroup, isBulkComposer) &&
      ComposerUtils.hasInstagramBusinessNetwork(selectedNetworkTypes) &&
      ComposerUtils.isInstagramReel(selectedMessageForEdit.postType)
    ) {
      return <Alert type="info" message={$i18n.INSTAGRAM_REEL_INFO_BANNER_TEXT()} />
    }
  }

  // Info banner explaining Instagram stories recommended aspect ratio
  const renderInstagramStoryAspectRatioInfoBanner = () => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    if (ComposerUtils.isInstagramStory(selectedMessageForEdit?.postType)) {
      return <InstagramStoryAspectRatioInfoBanner />
    }
  }
  const renderMediaBanners = () => {
    return (
      <BannerArea>
        {renderInstagramReelInfoBanner()}
        {isFeatureEnabledOrBeta('PUB_29578_ASPECT_RATIO_BANNER_INSTA_STORY') &&
          renderInstagramStoryAspectRatioInfoBanner()}
      </BannerArea>
    )
  }

  const handlePreviewCustomize = (nextLinkPreview: URLPreview) => {
    // Remove thumbnail warning if it's currently shown and new preview has thumbnail url
    if (!isEmpty(nextLinkPreview.thumbnailUrl) || !isEmpty(nextLinkPreview.thumbnailUrls)) {
      nextLinkPreview.hasWarning = false
    }

    setLastScrapedUrl(nextLinkPreview.originalUrl)
    const selectedMessageForEdit = getSelectedMessageForEdit()
    composerMessageActions.updateFieldById(
      selectedMessageForEdit.id,
      [Constants.FIELD_TO_UPDATE.URL_PREVIEW],
      nextLinkPreview,
    )
    fetchPreviewData()
  }

  const renderMedia = () => {
    const isTranscodingEnabled = hasVideoTranscodingEntitlement(entitlements)
    const selectedMessageForEdit = getSelectedMessageForEdit()

    return (
      <MediaPicker
        ref={node => (attachmentAreaNode.current = node)}
        albumName={albumName}
        attachments={attachments}
        csrf={csrf}
        facadeApiUrl={facadeApiUrl}
        flux={flux} // used by multiple stores
        fieldValidations={fieldValidations}
        getAttachmentType={getAttachmentTypeFunc}
        getFirstErrorMessageForField={getFirstErrorMessageForFieldFunc}
        getSocialNetworkTypes={getSocialNetworkTypesFunc}
        getSocialProfileUsernameById={getSocialProfileUsernameByIdFunc}
        hasAlbumTargetingWarning={hasAlbumTargetingWarning}
        hasAttachments={hasAttachmentsFunc}
        hasThumbnailUrls={hasThumbnailUrlsFunc}
        hasVideoAttachment={hasVideoAttachmentFunc}
        hideAltText={
          isFeatureEnabled('PUB_34430_ALT_TEXT_THREADS')
            ? !!ComposerUtils.isPinterestComposer(customContext) ||
              selectedNetworkGroup === SocialProfileConstants.SN_GROUP.THREADS ||
              selectedNetworkGroup === SocialProfileConstants.SN_GROUP.INSTAGRAM
            : !!ComposerUtils.isPinterestComposer(customContext) ||
              selectedNetworkGroup === SocialProfileConstants.SN_GROUP.INSTAGRAM
        }
        isBulkComposer={isBulkComposer}
        isCanvaAccessAllowed={isCanvaAccessAllowed}
        isPdfUploadAllowed={!ComposerUtils.isPinterestComposer(customContext)}
        isEditMode={isEditMode}
        isEditOnly={isEditOnly}
        isSocialProfileTypeSelected={isSocialProfileTypeSelectedFunc}
        isTranscodingEnabled={isTranscodingEnabled}
        linkSettings={linkSettings}
        messageId={selectedMessageForEdit && selectedMessageForEdit.id}
        messages={messages}
        onAddAttachment={onAddAttachment}
        onAttachmentEdited={onAttachmentEdited}
        onLinkPreviewChange={onLinkPreviewChange}
        onToggleMediaLibrary={onToggleMediaLibrary}
        onTrackMediaUploadError={onTrackMediaUploadError}
        onUploadQueueComplete={onUploadQueueComplete}
        socialNetworks={socialNetworks}
        socialNetworksKeyedById={socialNetworksKeyedById}
        supportsLinkPreview={supportsLinkPreviewFunc}
        trackingContext={trackingContext}
        urlPreview={selectedMessageForEdit && selectedMessageForEdit.urlPreview}
        unEditedUrlPreview={selectedMessageForEdit && selectedMessageForEdit.unEditedUrlPreview}
        customContext={customContext}
        showOnboarding={showOnboarding}
      />
    )
  }

  const onDoneApplyTags = tags => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    composerMessageActions.updateFieldById(selectedMessageForEdit.id, Constants.FIELD_TO_UPDATE.TAGS, tags)
  }

  const onDoneApplyPublisherNotes = publisherNotes => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    composerMessageActions.updateFieldById(
      selectedMessageForEdit.id,
      Constants.FIELD_TO_UPDATE.PUBLISHER_NOTES,
      publisherNotes,
    )
  }

  const onDoneApplyLocations = (
    snType: string,
    locationId: string,
    locationName: string,
    locationLat = null,
    locationLong = null,
  ) => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    const locations = selectedMessageForEdit.locations || []

    if (
      SocialProfileConstants.SN_GROUP_TO_SN_TYPES[SocialProfileConstants.SN_GROUP.TWITTER].includes(snType)
    ) {
      locations[SocialProfileConstants.SN_GROUP.TWITTER] = {
        latitude: locationLat,
        longitude: locationLong,
        placeId: locationId,
        placeName: locationName,
      }
    }

    composerMessageActions.updateFieldById(
      selectedMessageForEdit.id,
      Constants.FIELD_TO_UPDATE.LOCATIONS,
      locations,
    )
  }

  const onLocationReset = (snType: string) => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    const locations = selectedMessageForEdit.locations || {}

    if (snType === SocialProfileConstants.SN_GROUP.TWITTER) {
      delete locations[SocialProfileConstants.SN_GROUP.TWITTER]
    }

    composerMessageActions.updateFieldById(
      selectedMessageForEdit.id,
      Constants.FIELD_TO_UPDATE.LOCATIONS,
      locations,
    )
  }

  const onSetLinkedInTargeting = linkedInTargeting => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    const targeting = selectedMessageForEdit.targeting || {}
    if (linkedInTargeting) {
      targeting.linkedInV2Company = linkedInTargeting
    } else {
      delete targeting.linkedInV2Company
    }
    composerMessageActions.updateFieldById(
      selectedMessageForEdit.id,
      Constants.FIELD_TO_UPDATE.TARGETING,
      targeting,
    )
  }

  const onSetFacebookTargeting = facebookTargeting => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    const targeting = selectedMessageForEdit.targeting || {}
    if (facebookTargeting) {
      targeting.facebookPage = facebookTargeting
    } else {
      delete targeting.facebookPage
    }
    composerMessageActions.updateFieldById(
      selectedMessageForEdit.id,
      Constants.FIELD_TO_UPDATE.TARGETING,
      targeting,
    )
  }

  const getCampaignOutboundTags = (campaignId: string) => {
    const selectedCampaign = CampaignUtils.getSelectedCampaign(campaigns, campaignId)
    const campaignTagIds = CampaignUtils.getCampaignTagIds(selectedCampaign)
    return tags?.filter(tag => campaignTagIds.includes(tag.id.toString()))
  }

  const renderExtendedInfoTextEntry = () => {
    return (
      <ExtendedInfoTextEntry
        extendedInfo={SelectedMessageState.extendedInfoFromInnerMessage()} // the destinationUrl is the same for all messages
        extendedInfoKey={'destinationUrl'}
        getSelectedBoards={getSelectedBoards}
        onChange={onChangeExtendedInfo}
        placeHolder={$i18n.PINTEREST_EXTENDED_INFO_PLACEHOLDER()}
        text={$i18n.PINTEREST_EXTENDED_INFO_TEXT()}
        validationError={getFieldValidationErrors}
        fieldValidations={fieldValidations}
      />
    )
  }
  const hasSelectedOrgAndOrgId = useCallback(() => {
    return selectedOrganization && selectedOrganization.organizationId
  }, [selectedOrganization])

  const renderTags = () => {
    const canViewTags =
      typeof organizations !== 'undefined' &&
      hasSelectedOrgAndOrgId() &&
      hasTagAccessEntitlement &&
      (selectedOrganization.permissions.ORG_MANAGE_MESSAGE_TAGS || tags?.length > 0)

    if (isFeatureEnabled('PUB_34138_DISABLE_TAGS_IN_BULK_COMPOSER')) {
      if (!canViewTags || ComposerUtils.isPinterestComposer(customContext) || isBulkComposer) {
        return null
      }
    } else {
      if (!canViewTags || ComposerUtils.isPinterestComposer(customContext)) {
        return null
      }
    }

    let organizationId: number
    let canManageTags: boolean
    if (selectedOrganization) {
      organizationId = selectedOrganization.organizationId
      canManageTags = get(selectedOrganization, 'permissions.ORG_MANAGE_MESSAGE_TAGS', false)
    }

    const query = async (searchQuery: string) => {
      try {
        const data: Tag[] = await getTagsByOrganizationId(organizationId, searchQuery)
        return data
      } catch (e: any) {
        if (axios.isCancel(e)) return

        statusObject.update($i18n.UNABLE_RETRIEVE_TAGS(), 'error', true)
        logError(LOGGING_CATEGORIES.NEW_COMPOSER, 'Failed during tag search', {
          errorMessage: JSON.stringify(e.message),
          stack: JSON.stringify(e.stack),
        })
      }
    }

    const tagActions = flux.getActions('tags')
    const createTag = async (tagText: string) => {
      try {
        const tagCreated: Tag = await createTagRequest(organizationId, tagText)
        tagActions.addTag(tagCreated)
        return tagCreated
      } catch (e: any) {
        if (axios.isCancel(e)) return

        if (get(e, 'details[0].message') === 'This tag already exists') {
          statusObject.update($i18n.UNABLE_CREATE_TAGS_DUPLICATE(), 'error', true)
        } else {
          statusObject.update($i18n.UNABLE_CREATE_TAGS(), 'error', true)
        }
        logError(LOGGING_CATEGORIES.NEW_COMPOSER, 'Failed during create tag', {
          errorMessage: JSON.stringify(e.message),
          stack: JSON.stringify(e.stack),
        })
      }
    }

    return (
      // All the other sections (location, audience, promotion) are wrapped in a div.
      // This div is important to overwrite main css (.hs-app-composer .rc-TagArea).
      // In message-edit-area there's style linked to the direct child of messageSettingsContainer,
      // without this extra div this style is overwritten by CSS.
      <div>
        <TagArea
          appliedTags={appliedTags}
          canManageTags={canManageTags}
          onQuery={query}
          onCreateTag={createTag}
          onDone={onDoneApplyTags}
          onManageTags={onManageTags}
          organizationId={organizationId}
          ref={node => (tagAreaNode.current = node)}
          scrollToParent={scrollToTagArea}
          suggestedTags={suggestedTags}
          tagsToSelect={tags}
          isSequentialPostingInProgress={false}
          shouldShowInstagramWarning={ComposerUtils.isPushPublishing(publishingMode)}
          TitleComponent={<TitleText>{$i18n.TAGS()}</TitleText>}
        />
      </div>
    )
  }
  const profileSelectorDependencies = [
    selectedSocialNetworkIdsState,
    addProfile,
    customContext,
    excludedNetworkTypes,
    facadeApiUrl,
    fieldValidations,
    isEditMode,
    facebookPageProfiles,
    onCreateBoardComplete,
    hasSelectedOrgAndOrgId,
    isSocialProfileSelectorDisabled,
    onFetchSocialProfiles,
    selectedOrganization,
    showOnSubmitErrors,
    socialNetworks,
    unpairedInstagramIds.length,
  ]
  const renderProfileSelectorMemoized = useMemo((): ReactNode => {
    const onProfilesRemoved = () => {
      const selectedMessageForEdit = getSelectedMessageForEdit()
      composerMessageActions.removeAllMessagesFromWrapper(selectedMessageForEdit.id)
      composerMessageActions.updateFieldById(
        selectedMessageForEdit.id,
        Constants.FIELD_TO_UPDATE.SOCIAL_NETWORKS_KEYED_BY_ID,
        OrderedMap({}),
      )
      composerMessageActions.updateFieldById(
        selectedMessageForEdit.id,
        Constants.FIELD_TO_UPDATE.ALBUM_NAME,
        null,
      )
      composerMessageActions.updateFieldById(
        selectedMessageForEdit.id,
        Constants.FIELD_TO_UPDATE.ALBUM_TYPE,
        null,
      )

      // If there are no social profiles selected, remove all SOCIAL_NETWORK type field validations.
      const updatedFieldValidations = ValidationUtils.removeCustomDeauthedProfileErrors(fieldValidations)
      composerMessageActions.updateFieldById(
        selectedMessageForEdit.id,
        Constants.FIELD_TO_UPDATE.FIELD_VALIDATIONS,
        updatedFieldValidations,
      )
    }

    const onProfileSelected = async id => {
      let selectedMessageForEdit = getSelectedMessageForEdit()
      if (selectedMessageForEdit) {
        const isLinkedInSelected = selectedMessageForEdit
          .getSocialNetworkGroups()
          .includes(SocialProfileConstants.SN_GROUP.LINKEDIN)
        let selectedSocialNetworksKeyedById = selectedMessageForEdit.socialNetworksKeyedById
        const selectedNetworkTypes = []
        if (!Array.isArray(id)) {
          const idStr = id.toString()
          if (!_.isEmpty(selectedSocialNetworksKeyedById) && selectedSocialNetworksKeyedById.get(idStr)) {
            selectedSocialNetworksKeyedById = selectedSocialNetworksKeyedById.delete(idStr)

            // Remove the message from the message wrapper
            composerMessageActions.removeMessageFromWrapper(selectedMessageForEdit.id, idStr)

            // Remove ID from facebookNetworkIds, if present
            setFacebookPageProfiles(facebookPageProfiles.filter(i => i !== +idStr))
          } else {
            selectedSocialNetworksKeyedById = selectedSocialNetworksKeyedById.set(
              idStr,
              _.find(socialNetworks, sn =>
                isSandbox ? sn.socialProfileId === id : sn.socialNetworkId === id,
              ),
            )
            const selectedSocialProfile = selectedSocialNetworksKeyedById.get(idStr)
            const selectedNetworkType = isSandbox
              ? selectedSocialProfile.socialProfileType
              : selectedSocialProfile.type
            selectedNetworkTypes.push(selectedNetworkType)
            // Add the new message to the message wrapper
            composerMessageActions.addNewMessageToWrapper(
              selectedMessageForEdit.id,
              idStr,
              selectedNetworkType,
            )
          }
        } else {
          const idArray = id
          const isNetworksEmpty = _.isEmpty(selectedSocialNetworksKeyedById)
          const needToRemove = idArray.filter(
            i => !isNetworksEmpty && selectedSocialNetworksKeyedById.get(i.toString()),
          )

          const needToAdd = idArray.filter(i => {
            return isNetworksEmpty || !selectedSocialNetworksKeyedById.get(i.toString())
          })

          needToRemove.forEach(i => {
            const idStr = i.toString()
            selectedSocialNetworksKeyedById = selectedSocialNetworksKeyedById.delete(idStr)
            // Remove the message from the message wrapper
            composerMessageActions.removeMessageFromWrapper(selectedMessageForEdit.id, idStr)
          })

          needToAdd.forEach(i => {
            const idStr = i.toString()
            selectedSocialNetworksKeyedById = selectedSocialNetworksKeyedById.set(
              idStr,
              _.find(socialNetworks, sn => sn.socialNetworkId === i),
            )
            selectedNetworkTypes.push(selectedSocialNetworksKeyedById.get(idStr).type)
            // Add the new message to the message wrapper
            if (isFeatureDisabled('PUB_33825_FIX_LARGE_TEAM_LAG')) {
              composerMessageActions.addNewMessageToWrapper(
                selectedMessageForEdit.id,
                idStr,
                selectedSocialNetworksKeyedById.get(idStr).type,
              )
            }
          })
          if (isFeatureEnabled('PUB_33825_FIX_LARGE_TEAM_LAG')) {
            composerMessageActions.addNewMessagesToWrapper(
              selectedMessageForEdit.id,
              needToAdd,
              selectedSocialNetworksKeyedById,
            )
          }
        }

        await composerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.SOCIAL_NETWORKS_KEYED_BY_ID,
          selectedSocialNetworksKeyedById,
        )

        // get the updated selectedMessageForEdit
        selectedMessageForEdit = getSelectedMessageForEdit()

        const facebookTypes = [SN_TYPES.FACEBOOK, SN_TYPES.FACEBOOKPAGE, SN_TYPES.FACEBOOKGROUP]

        const hasFacebookNetworkIds = selectedMessageForEdit.isSocialProfileTypeSelected(...facebookTypes)

        if (_.isEmpty(selectedSocialNetworksKeyedById.toJS()) || !hasFacebookNetworkIds) {
          const fieldsToUpdate = {
            [Constants.FIELD_TO_UPDATE.ALBUM_NAME]: null,
            [Constants.FIELD_TO_UPDATE.ALBUM_TYPE]: null,
          }
          composerMessageActions.updateFieldsById(selectedMessageForEdit.id, fieldsToUpdate)
        }

        if (selectedMessageForEdit.urlPreview) {
          // Upload link preview thumbnail to S3 if LinkedIn is among the added SNs and LinkedIn SN hasn't been previously selected
          // and
          // Refresh the URL preview
          const isSelectingLinkedInSN = selectedNetworkTypes.some(networkType =>
            MessageUtils.isNetworkTypeInGroup(networkType, SocialProfileConstants.SN_GROUP.LINKEDIN),
          )

          if (isSelectingLinkedInSN && !isLinkedInSelected) {
            LinkUtils.updateMessageURLPreviewWithS3ThumbnailURL(
              selectedMessageForEdit.id,
              selectedMessageForEdit.urlPreview,
              composerMessageActions.updateFieldsById,
            )
          } else {
            // Refresh the URL preview to account for customization differences between network types
            composerMessageActions.updateFieldById(
              selectedMessageForEdit.id,
              Constants.FIELD_TO_UPDATE.URL_PREVIEW,
              selectedMessageForEdit.urlPreview,
            )
          }
        }
      }
    }

    const onChangeBoardsSelected = obj => {
      const selectedMessageForEdit = getSelectedMessageForEdit()

      if (selectedMessageForEdit) {
        let selectedSocialNetworksKeyedById = selectedMessageForEdit.socialNetworksKeyedById

        const currentSocialNetworksIdStrs = _.keys(selectedMessageForEdit.socialNetworksKeyedById.toJS())
        /*
         * Keys of selectedMessageForEdit.socialNetworksKeyedById are of strings, but socialNetworkId fields of
         * obj.boards are numbers.  Make sure both IDs are of type string for the sake of comparison.
         */
        const newSocialNetworksIdStrs = _.uniq(obj.boards.map(board => board.socialNetworkId.toString()))

        /*
         * We want to make the logic for adding and removing messages from wrappers the same for Pinterset and other social
         * networks.  But Pinterest is special because we do not have a profile selector to allow users to explicitly select
         * and deselect social profiles (see onProfileSelected).  We need to infer the selection and deselection of social
         * profiles from the boards user selected and deselected.
         */
        const socialNetworksIdsToAdd = _.difference(newSocialNetworksIdStrs, currentSocialNetworksIdStrs)
        const socialNetworksIdsToDelete = _.difference(currentSocialNetworksIdStrs, newSocialNetworksIdStrs)

        _.each(socialNetworksIdsToAdd, idStr => {
          composerMessageActions.addNewMessageToWrapper(selectedMessageForEdit.id, idStr, SN_TYPES.PINTEREST)

          selectedSocialNetworksKeyedById = selectedSocialNetworksKeyedById.set(
            idStr,
            _.find(socialNetworks, sn => sn.socialNetworkId === parseInt(idStr, 10)),
          )
        })

        _.each(socialNetworksIdsToDelete, idStr => {
          composerMessageActions.removeMessageFromWrapper(selectedMessageForEdit.id, idStr)

          selectedSocialNetworksKeyedById = selectedSocialNetworksKeyedById.delete(idStr)
        })

        composerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.SOCIAL_NETWORKS_KEYED_BY_ID,
          selectedSocialNetworksKeyedById,
        )
      }

      onChangeExtendedInfo(obj)
    }

    const getExtendedInfo = () => {
      const selectedMessageForEdit = getSelectedMessageForEdit()
      const extendedInfo = get(selectedMessageForEdit, ['extendedInfo'], undefined)
      return extendedInfo
    }

    const getSelectedBoards = () => {
      if (!ComposerUtils.isPinterestComposer(customContext)) {
        return []
      }
      const selectedMessageForEdit = getSelectedMessageForEdit()
      if (selectedMessageForEdit && ComposerUtils.isDraft(selectedMessageForEdit.messageType)) {
        // Pinterest Draft can have multiple selected boards
        return selectedMessageForEdit.baseMessage.extendedInfo.boards
      } else {
        // editing a Pinterest message can only have one selected board
        return get(selectedMessageForEdit, ['messages', 0, 'extendedInfo', 'boards'], [])
      }
    }

    const onReconnectCallback = socialProfileType => {
      const sessionId = getSessionId()
      if (sessionId) {
        track(
          TrackingConstants.TRACKING_ORIGINS.RECONNECT_PROFILE,
          TrackingConstants.TRACKING_ACTION.RECONNECT_PROFILE,
          {
            sessionId,
            socialNetwork: socialProfileType,
          },
        )
      }
    }

    const hasInstagramPairingErrors = ComposerUtils.isMessageStoreEnabled()
      ? !isEmpty(unpairedInstagramProfileIds)
      : unpairedInstagramIds.length > 0

    const isPinterest = ComposerUtils.isPinterestComposer(customContext)
    const shouldShowPaywall = hasMemberReachedSNMax()

    if (isPinterest) {
      const errors = fieldValidations?.errors || null
      return (
        <ConnectedPinterestBoardPicker
          extendedInfoKey={'boards'}
          getErrors={() => errors}
          fieldValidations={fieldValidations}
          onChange={onChangeBoardsSelected}
          isDraft={ComposerUtils.isDraft(SelectedMessageState.messageType)}
          selectedBoards={getSelectedBoards()} // we can only edit a pinterest message with one board selected unless it's a draft
          extendedInfo={getExtendedInfo()}
          addProfile={addProfile}
          isEditMode={isEditMode}
          socialNetworks={socialNetworks}
          onCreateBoardComplete={onCreateBoardComplete}
          selectedOrganization={selectedOrganization}
          onFetchSocialProfiles={onFetchSocialProfiles}
          shouldShowPaywall={shouldShowPaywall}
        />
      )
    }
    const orgId = hasSelectedOrgAndOrgId() ? selectedOrganization.organizationId : null
    let timeout = null

    // Map to track the amount of clicks a user has made on an SN
    let trackClicksPerSNId = {}

    return (
      <ProfileSelector
        onProfileSelected={id => {
          if (id.length === 1) {
            trackClicksPerSNId[id] = trackClicksPerSNId[id] ? trackClicksPerSNId[id] + 1 : 1
            if (timeout) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(() => {
              Object.entries(trackClicksPerSNId).forEach(([key, value]) => {
                // If the user clicked on the item an even amount of times we can skip calling `onProfileSelected`
                if (value % 2 !== 0) {
                  onProfileSelected(parseInt(key))
                }
              })

              trackClicksPerSNId = {}
            }, 500)
          } else {
            onProfileSelected(id)
          }
        }}
        onProfilesRemoved={onProfilesRemoved}
        onFetchSocialProfiles={onFetchSocialProfiles}
        selectedSocialNetworkIds={selectedSocialNetworkIdsState}
        organizationId={orgId}
        excludedNetworkTypes={excludedNetworkTypes}
        isDisabledState={isSocialProfileSelectorDisabled}
        isErrorState={
          hasInstagramPairingErrors ||
          ValidationUtils.hasErrorsByField(
            fieldValidations,
            FIELD_VALIDATIONS.SOCIAL_NETWORK,
            showOnSubmitErrors,
          )
        }
        ref={node => (profileSelectorNode.current = node)}
        shouldShowPaywall={shouldShowPaywall}
        onReconnectCallback={onReconnectCallback}
        isBento={isFeatureEnabledOrBeta('PUB_32228_COMPOSER_UX_BLITZ_PHASE_3')}
      />
    )
  }, profileSelectorDependencies)

  const renderPublisherNotes = () => {
    if (
      ComposerUtils.isPushPublishing(publishingMode) &&
      selectedNetworkGroup === SocialProfileConstants.SN_GROUP.INSTAGRAM
    ) {
      return (
        <PublisherNotes
          appliedPublisherNotes={appliedPublisherNotes}
          onDoneApplyPublisherNotes={onDoneApplyPublisherNotes}
        />
      )
    }
    return null
  }

  const getSPIdsByNetwork = (socialProfiles, networkTypes) => {
    return socialProfiles.filter(sn => networkTypes.includes(sn?.type)).map(sn => sn.socialProfileId)
  }

  const updateBulkComposerFieldValidations = () => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    if (selectedMessageForEdit) {
      const sendDate = selectedMessageForEdit.sendDate
        ? moment(selectedMessageForEdit.sendDate * Constants.DATE_TIME.NUM_SECONDS_IN_MILLISECONDS).tz(
            timezoneName,
          )
        : null
      const dateError = ValidationUtils.getFutureDateError({
        dateTime: sendDate,
        minimumScheduleMinutes: selectedMessageForEdit.hasVideoAttachment()
          ? ComposerConstants.MINIMUM_SCHEDULE_MINUTES.VIDEO
          : ComposerConstants.MINIMUM_SCHEDULE_MINUTES.DEFAULT,
        timezoneName,
      })
      if (dateError) {
        const updatedFieldValidations = ValidationUtils.addCustomValidations(
          fieldValidations,
          [dateError],
          FIELD_VALIDATIONS.SEND_DATE,
          ComposerConstants.ERROR_LEVELS.ERRORS,
        )
        composerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.FIELD_VALIDATIONS,
          updatedFieldValidations,
        )
      }
    }
  }

  //LinkedIn Targeting
  const renderAudienceTargeting = () => {
    if (isBulkComposer || linkedInCompanyProfiles.length === 0) {
      return null
    }

    // can combine with above if after DL removal
    if (isFeatureEnabledOrBeta('PUB_31994_LI_AUDIENCES_ENTITLEMENT')) {
      if (!hasLinkedInAudiencesAccessEntitlement) {
        return null
      }
    }

    const selectedMessageForEdit = getSelectedMessageForEdit()
    const appliedTargetingObj =
      selectedMessageForEdit && selectedMessageForEdit.hasLinkedInV2Targeting()
        ? selectedMessageForEdit.baseMessage.targeting.linkedInV2Company
        : null

    if (selectedNetworkGroup === SocialProfileConstants.SN_GROUP.LINKEDIN) {
      return (
        <AudienceTargeting
          hsLanguage={language}
          linkedInCompanyProfiles={linkedInCompanyProfiles}
          onApplyTargeting={onSetLinkedInTargeting}
          appliedTargetingObj={appliedTargetingObj}
        />
      )
    }
    return null
  }

  const renderFacebookTargeting = () => {
    if (isBulkComposer || facebookPageProfiles.length === 0) {
      return null
    }

    const selectedMessageForEdit = getSelectedMessageForEdit()
    const appliedTargetingObj =
      selectedMessageForEdit && selectedMessageForEdit.hasFacebookTargeting()
        ? selectedMessageForEdit.baseMessage.targeting.facebookPage
        : null

    if (selectedNetworkGroup === SocialProfileConstants.SN_GROUP.FACEBOOK) {
      return (
        <FacebookTargeting
          facebookPages={facebookPageProfiles}
          onApplyTargeting={onSetFacebookTargeting}
          appliedTargetingObj={appliedTargetingObj}
          isSequentialPostingEnabled={isSequentialPostingEnabled}
        />
      )
    }
    return null
  }

  const renderHeader = () => {
    if (isEditOnly) {
      return null
    }

    return <EditHeader mode={mode} onModeChange={onModeChange} />
  }
  const onChangeBoostCampaign = campaignData => {
    // Update separately as it could be `undefined`
    // and otherwise `updateFieldsById` will complain
    const selectedMessageForEdit = getSelectedMessageForEdit()
    composerMessageActions.updateFieldById(
      selectedMessageForEdit.id,
      Constants.FIELD_TO_UPDATE.BOOST_CAMPAIGN,
      campaignData,
    )

    setBoostCampaign(campaignData)

    const fieldsToUpdate = {
      [Constants.FIELD_TO_UPDATE.IS_BOOSTED]: !_.isEmpty(campaignData),
    }
    composerMessageActions.updateFieldsById(selectedMessageForEdit.id, fieldsToUpdate)
  }

  const renderCampaignPicker = () => {
    if (!canViewCampaigns) return null

    const selectedCampaign = campaigns?.find(campaign => campaign.id === campaignId) || null

    const handleCampaignSelect = ({ currentKey: newCampaignId }) => {
      const newCampaign = CampaignUtils.getSelectedCampaign(campaigns, newCampaignId)

      if (isNil(newCampaign)) {
        composerMessageActions.updateFieldById(selectedMessageForEdit.id, 'campaignId', null)
        setCampaignId(null)
        return null
      }

      const shouldShowPopup =
        CampaignUtils.willCampaignOverrideLinkSettings(linkSettings, newCampaign, presets) ||
        CampaignUtils.willCampaignOverrideTags(selectedMessageForEdit.tags, newCampaign)

      if (isNil(campaignId) || !shouldShowPopup) {
        composerMessageActions.updateFieldById(selectedMessageForEdit.id, 'campaignId', newCampaignId)
        setCampaignId(newCampaignId)
      } else {
        showConfirmationModal({
          titleText: $i18n.newCampaign(),
          bodyText: <p>{$i18n.newCampaignInfo()}</p>,
          submitButtonText: $i18n.continueButton(),
          cancelButtonText: $i18n.cancelButton(),
          onSubmit: (close: () => void) => {
            composerMessageActions.updateFieldById(selectedMessageForEdit.id, 'campaignId', newCampaignId)
            setCampaignId(newCampaignId)
            close()
          },
          onCancel: () => null,
          isBento: true,
        })
      }
    }

    return (
      <CampaignPicker
        canManageCampaigns={canManageCampaigns}
        campaigns={campaigns}
        organization={selectedOrganization}
        onCampaignSelect={handleCampaignSelect}
        selectedCampaign={selectedCampaign}
      />
    )
  }

  const getMultiNetworkMentionSnTypes = (): Array<string> => {
    const isInstagramNetworkSelected = ComposerUtils.hasInstagramNetwork(...selectedNetworkTypes)
    const isTwitterNetworkSelected = ComposerUtils.hasTwitterNetwork(...selectedNetworkTypes)
    const isThreadsNetworkSelected =
      isThreadsEnabled() && ComposerUtils.hasThreadsNetwork(...selectedNetworkTypes)

    const instagramMessageContainsUnlinkedMention = doMessagesContainUnlinkedMention(
      getSelectedMessageForEdit()?.messages.filter(({ snType }) =>
        SocialProfileConstants.SN_GROUP_TO_SN_TYPES[SocialProfileConstants.SN_GROUP.INSTAGRAM].includes(
          snType,
        ),
      ) || [],
    )
    const twitterMessageContainsUnlinkedMention = doMessagesContainUnlinkedMention(
      getSelectedMessageForEdit()?.messages.filter(({ snType }) =>
        SocialProfileConstants.SN_GROUP_TO_SN_TYPES[SocialProfileConstants.SN_GROUP.TWITTER].includes(snType),
      ) || [],
    )
    const threadsMessageContainsUnlinkedMention = doMessagesContainUnlinkedMention(
      getSelectedMessageForEdit()?.messages.filter(({ snType }) =>
        SocialProfileConstants.SN_GROUP_TO_SN_TYPES[SocialProfileConstants.SN_GROUP.THREADS].includes(snType),
      ) || [],
    )

    const selectedSNs: string[] = []

    if (isInstagramNetworkSelected && instagramMessageContainsUnlinkedMention) {
      selectedSNs.push(SocialProfileConstants.SN_TYPE_TO_DISPLAY_NAME[SN_TYPES.INSTAGRAM])
    }
    if (isThreadsNetworkSelected && threadsMessageContainsUnlinkedMention) {
      selectedSNs.push(SocialProfileConstants.SN_TYPE_TO_DISPLAY_NAME[SN_TYPES.THREADS])
    }
    if (isBulkComposer) {
      if (isTwitterNetworkSelected && twitterMessageContainsUnlinkedMention) {
        selectedSNs.push(SocialProfileConstants.SN_TYPE_TO_DISPLAY_NAME[SN_TYPES.TWITTER])
      }
    }
    return selectedSNs
  }

  const getMessageEditTextPlaceHolder = () => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    const isInstagramStory =
      selectedMessageForEdit?.postType === SocialProfileConstants.INSTAGRAM_POST_TYPES.IG_STORY
    if (
      selectedNetworkGroup === SocialProfileConstants.SN_GROUP.INSTAGRAM &&
      isInstagramStory &&
      ComposerUtils.isPushPublishing(publishingMode)
    ) {
      return $i18n.IG_STORY_CLIPBOARD_TEXT_PLACEHOLDER()
    }
    if (ComposerUtils.isPinterestComposer(customContext)) {
      return $i18n.PINTEREST_PLACEHOLDER()
    }
    return isFeatureEnabledOrBeta('PUB_32228_COMPOSER_UX_BLITZ_PHASE_3') && !isBulkComposer
      ? GlobalConstants.MESSAGE_CONTENT_PLACEHOLDER_TEXT
      : $i18n.ENTER_TEXT_AND_LINKS()
  }

  const renderUnpairedInstagramProfiles = () => {
    // Using socialNetworks as socialProfilesKeyedByType is not currently updated to contain private IG networks
    const socialProfileIds = ComposerUtils.isMessageStoreEnabled()
      ? unpairedInstagramProfileIds
      : unpairedInstagramIds

    return socialProfileIds?.map(instagramId => {
      const instagramProfile = socialNetworks.find(sn => sn.socialNetworkId === instagramId)
      if (instagramProfile) {
        const { socialNetworkId, username } = instagramProfile
        return (
          <UnpairedInstagramIdsError
            key={`ig-pairing-error-${socialNetworkId}`}
            username={username}
            onLinkClick={() => importInstagramMobileSetup(socialNetworkId)}
            isBento={isFeatureEnabled('PUB_32657_VALIDATION_BANNER_WITH_BENTO')}
          />
        )
      } else {
        return null
      }
    })
  }

  const renderPromotionTab = () => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    if (!selectedMessageForEdit) {
      return null
    }

    if (!boostCampaign && selectedMessageForEdit?.getSavedBoostCampaign()) {
      onChangeBoostCampaign(selectedMessageForEdit?.getSavedBoostCampaign())
    }
    if (!boostCampaign) {
      setCampaignObjectiveChanged(null)
    }

    const availableNetworks = [SN_TYPES.FACEBOOKPAGE, SN_TYPES.LINKEDINCOMPANY, SN_TYPES.INSTAGRAMBUSINESS]

    const selectedSocialNetworks: SocialNetwork[] = isFeatureEnabled('PUB_34194_COMPOSER_CRASH_ORG_SWITCH')
      ? socialNetworksKeyedById?.toArray() || []
      : (socialNetworksKeyedById || []).toArray()

    const isInstagramStory =
      selectedMessageForEdit?.postType === SocialProfileConstants.INSTAGRAM_POST_TYPES.IG_STORY

    const socialNetworkWithPermission = selectedSocialNetworks
      .filter(sn => Boolean(sn?.permissions?.[Constants.BOOST_PERMISSIONS.CAN_MANAGE_ADS]))
      .filter(sn => availableNetworks.includes(sn.type))
    const showPromotionTab = socialNetworkWithPermission.length > 0

    const hasIGBusinessCarousel =
      selectedMessageForEdit.attachments.length > 1 &&
      socialNetworkWithPermission.some(sn => sn.type === SN_TYPES.INSTAGRAMBUSINESS) &&
      (socialNetworkWithPermission.length === 1 ||
        (boostCampaign && boostCampaign.social_network === SN_TYPES.INSTAGRAM))

    const isLinkedIn = sn =>
      sn === SN_TYPES.LINKEDIN || sn === SN_TYPES.LINKEDINCOMPANY || sn === SN_TYPES.LINKEDINGROUP

    const hasLinkedInCarousel =
      selectedMessageForEdit.attachments.length > 1 &&
      socialNetworkWithPermission.some(sn => isLinkedIn(sn.type)) &&
      (socialNetworkWithPermission.length === 1 ||
        (boostCampaign && isLinkedIn(boostCampaign.social_network)))

    const boostableSocialNetworks =
      selectedMessageForEdit.attachments.length > 1
        ? socialNetworkWithPermission.filter(sn => sn.type !== SN_TYPES.INSTAGRAMBUSINESS)
        : socialNetworkWithPermission

    const isLinkedinSelected =
      selectedSocialNetworks.filter(({ type }) => type === SN_TYPES.LINKEDINCOMPANY).length > 0

    const linkedInWarningLabel: { [key in CampaignObjectiveChanged]: string } = {
      changed_to_video: $i18n.BOOST_LINKEDIN_OBJECTIVE_WARNING_CHANGED_TO_VIDEO(),
      changed_to_engagement: $i18n.BOOST_LINKEDIN_OBJECTIVE_WARNING_CHANGED_TO_ENGAGEMENT(),
    }

    // Checking if boostCampaign exists is insufficient because it can be populated with other SN boosted values.
    // It's safer to go deeply and check if boostCampaign.linkedin_spec exists
    if (isLinkedinSelected && boostCampaign && boostCampaign.linkedin_spec) {
      if (
        selectedMessageForEdit.hasVideoAttachment() &&
        boostCampaign.linkedin_spec.objective_type !== 'VIDEO_VIEW'
      ) {
        boostCampaign.linkedin_spec.objective_type = 'VIDEO_VIEW'
        boostCampaign.linkedin_spec.optimization_target_type = 'MAX_VIDEO_VIEW'
        onChangeBoostCampaign(boostCampaign)
        setCampaignObjectiveChanged('changed_to_video')
      }

      if (
        !selectedMessageForEdit.hasVideoAttachment() &&
        boostCampaign.linkedin_spec.objective_type === 'VIDEO_VIEW'
      ) {
        boostCampaign.linkedin_spec.objective_type = 'ENGAGEMENT'
        boostCampaign.linkedin_spec.optimization_target_type = 'MAX_CLICK'
        onChangeBoostCampaign(boostCampaign)
        setCampaignObjectiveChanged('changed_to_engagement')
      }
    }

    const renderWarningBanners = () => (
      <>
        {campaignObjectiveChanged && (
          <Alert type="warning" message={linkedInWarningLabel[campaignObjectiveChanged]} />
        )}
        {hasIGBusinessCarousel && (
          <Alert
            type="warning"
            message={
              isBoosted && boostCampaign.social_network === SN_TYPES.INSTAGRAM
                ? $i18n.BOOST_IG_CAROUSEL_BOOSTED_WARNING()
                : $i18n.BOOST_IG_CAROUSEL_WARNING()
            }
          />
        )}
        {hasLinkedInCarousel && (
          <Alert
            type="warning"
            message={
              isBoosted && boostCampaign.social_network === SN_TYPES.LINKEDIN
                ? $i18n.BOOST_LI_CAROUSEL_BOOSTED_WARNING()
                : $i18n.BOOST_LI_CAROUSEL_WARNING()
            }
          />
        )}
      </>
    )

    if (showPromotionTab) {
      return (
        <div>
          <BoostPost
            disabled={Boolean(hasIGBusinessCarousel || hasLinkedInCarousel)}
            campaignSettings={boostCampaign}
            isBoosted={isBoosted && !hasIGBusinessCarousel && !hasLinkedInCarousel}
            isVideoPost={selectedMessageForEdit.hasVideoAttachment()}
            hasErrors={ValidationUtils.hasErrorsByField(
              fieldValidations,
              FIELD_VALIDATIONS.BOOST_CAMPAIGN,
              showOnSubmitErrors,
            )}
            fieldErrors={
              <ValidationBanner
                field={FIELD_VALIDATIONS.BOOST_CAMPAIGN}
                type={FIELD_TYPES.BOOST_CAMPAIGN}
                showOnSubmitErrors={showOnSubmitErrors}
                isBulkComposer={isBulkComposer}
                fieldValidations={fieldValidations}
                isBento={isFeatureEnabled('PUB_32657_VALIDATION_BANNER_WITH_BENTO')}
              />
            }
            memberId={String(memberId)}
            sendDateAsSeconds={sendDate}
            socialNetworks={boostableSocialNetworks}
            onChangeBoostCampaign={onChangeBoostCampaign}
            language={language}
            onEdit={() => setCampaignObjectiveChanged(undefined)}
            isInstagramStory={isInstagramStory}
          />
          {renderWarningBanners()}
        </div>
      )
    }
  }

  const onMentionSearchProgressChange = (isMentionSearchInProgress = false) => {
    setIsMentionSearchInProgress(isMentionSearchInProgress)
  }

  const getSnGroupsWithUnlinkedMention = () => {
    const selectedMessages = getSelectedMessageForEdit()?.messages || []
    return ValidationUtils.getSnGroupsWithUnlinkedMention(
      MessageUtils.getInnerMessagesByGroup(selectedMessages, [SocialProfileConstants.SN_GROUP.INSTAGRAM]),
      isFeatureEnabled('PUB_33305_UNLINKED_MENTION_BANNER_FIX') ? false : isMentionSearchInProgress,
      selectedNetworkTypes,
      selectedNetworkGroup,
    )
  }

  const hasSingleNetworkAndMultipleUnlinkedMentions = (snGroupsWithUnlinkedMention: Array<string>) => {
    if (snGroupsWithUnlinkedMention.length === 1) {
      const selectedMessages = getSelectedMessageForEdit()?.messages
      if (selectedNetworkGroup && !_.isEmpty(selectedMessages)) {
        return ValidationUtils.hasMultipleUnlinkedMentions(
          MessageUtils.getInnerMessagesByGroup(selectedMessages)[selectedNetworkGroup],
          selectedNetworkGroup,
        )
      }
    }
    return false
  }

  const handleAIButtonClick = () => {
    if (!isAIPanelOpen) {
      const selectedSnTypesPNE = selectedNetworkTypes.filter(type =>
        SocialProfileConstants.SN_GROUP_TO_SN_TYPES[selectedNetworkGroup].includes(type),
      )

      setIsPreviewChanged(false)

      track(
        TrackingConstants.TRACKING_ORIGINS.AI_PANEL,
        TrackingConstants.TRACKING_ACTIONS.AI.OPEN_PANEL_BUTTON_CLICKED,
        { socialNetworkType: selectedSnTypesPNE },
      )
    }
    onToggleAIPanel()
  }

  const onApproversSelected = (approvers: OneTimeReviewers) => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    if (selectedMessageForEdit) {
      composerMessageActions.updateFieldById(
        selectedMessageForEdit.id,
        Constants.FIELD_TO_UPDATE.ONE_TIME_REVIEWERS,
        approvers,
      )
    }
  }

  useEffect(() => {
    if (prevSelectedMessageForEdit && selectedMessageForEdit) {
      if (
        prevSelectedOrganization &&
        selectedOrganization &&
        prevSelectedOrganization.organizationId !== selectedOrganization.organizationId
      ) {
        onDoneApplyTags([])
      }

      // want to clear info from the baseMessage in this case
      if (prevSelectedSocialNetworkIds.length > 0 && selectedSocialNetworkIds.length === 0) {
        onLocationReset(SocialProfileConstants.SN_GROUP.TWITTER)
      }
    }

    if (showOnSubmitErrors) {
      const hasMessageEditAreaError = scrollToFirstError(showOnSubmitErrors)
      if (
        !hasMessageEditAreaError &&
        ValidationUtils.hasErrorsByField(fieldValidations, FIELD_VALIDATIONS.SEND_DATE, showOnSubmitErrors) &&
        !isSchedulerOpen
      ) {
        dispatch(composerActions.setIsSchedulerOpen(true))
      }
    }
  }, [
    dispatch,
    isSchedulerOpen,
    selectedMessageForEdit,
    selectedOrganization,
    selectedSocialNetworkIds?.length,
    showOnSubmitErrors,
    fieldValidations,
    onDoneApplyTags,
    onLocationReset,
    scrollToFirstError,
  ])

  useEffect(() => {
    const onWalkthroughOpen = () => setIsOnboardingOpen(true)
    const onWalkthroughClose = () => setIsOnboardingOpen(false)

    on(ONBOARDING_WALKTHROUGH_EVENTS.OPEN, onWalkthroughOpen)
    on(ONBOARDING_WALKTHROUGH_EVENTS.CLOSE, onWalkthroughClose)

    return () => {
      off(ONBOARDING_WALKTHROUGH_EVENTS.OPEN, onWalkthroughOpen)
      off(ONBOARDING_WALKTHROUGH_EVENTS.CLOSE, onWalkthroughClose)
    }
  }, [])

  useEffect(() => {
    const unsubscribeMessageStoreObservers = [
      observeStore(
        composerMessageStore,
        selectedMessageCount => setSelectedMessageCount(selectedMessageCount),
        state => getSelectedMessageValue(state, 'messages', false, []).length,
      ),
      observeStore(
        composerMessageStore,
        selectedMessageId => setSelectedMessageId(selectedMessageId),
        state => state.selectedMessageId,
      ),
    ]

    return () => {
      over(unsubscribeMessageStoreObservers)()
    }
  }, [])

  useEffect(() => {
    if (scrollContainer) {
      zenScroller.current = ZenScroll.createScroller(scrollContainer, defaultScrollDuration, scrollEdgeOffset)
    }

    unsubscribeObservers = [
      observeStore(
        getMessagePreviewsStore(),
        (previewMessagesParam: Array<SanitizedMessage>) => {
          if (Array.isArray(previewMessagesParam)) {
            const isTextNotEmpty =
              previewMessagesParam.map(message => message.message.length > 0).find(t => t == true) !=
              undefined
            const isAttachmentNotEmpty =
              previewMessagesParam
                .map(message => (message.attachments ? message.attachments.length > 0 : false))
                .find(t => t == true) != undefined
            const isPreviewChanged =
              !isEqual(previewMessages, previewMessagesParam) && (isTextNotEmpty || isAttachmentNotEmpty)
            if (!isBulkComposer) {
              setPreviewMessages(previewMessagesParam)
              setIsPreviewChanged(isPreviewChanged)
              const socialProfiles = previewMessagesParam.map(message => message.socialProfile)
              const twSpIds = getSPIdsByNetwork(
                socialProfiles,
                SocialProfileConstants.SN_GROUP_TO_SN_TYPES[SocialProfileConstants.SN_GROUP.TWITTER],
              )
              if (!_.isEqual(twSpIds, twSpIds)) {
                setTwSpIds(twSpIds)
              }
              if (
                !_.isEqual(
                  getSPIdsByNetwork(socialProfiles, [SN_TYPES.LINKEDINCOMPANY]),
                  linkedInCompanyProfiles,
                )
              ) {
                setLinkedInCompanyProfiles(getSPIdsByNetwork(socialProfiles, [SN_TYPES.LINKEDINCOMPANY]))
              }
              if (
                !_.isEqual(getSPIdsByNetwork(socialProfiles, [SN_TYPES.FACEBOOKPAGE]), facebookPageProfiles)
              ) {
                setFacebookPageProfiles(getSPIdsByNetwork(socialProfiles, [SN_TYPES.FACEBOOKPAGE]))
              }
            } else {
              setPreviewMessages(previewMessagesParam)
              setIsPreviewChanged(isPreviewChanged)
            }
          }
        },
        (state: PreviewsState) => state.previewMessages,
        isEqual,
      ),
      observeStore(
        composerMessageStore,
        fieldValidations => setFieldValidations(fieldValidations),
        state => getSelectedMessageValue(state, 'fieldValidations'),
        isEqual,
      ),
      observeStore(
        composerMessageStore,
        campaignIdParam => {
          if (!isBulkComposer) {
            if (campaignId !== campaignIdParam) {
              if (campaignIdParam === null) {
                onDoneApplyTags([])
              } else if (campaignIdParam) {
                onDoneApplyTags(getCampaignOutboundTags(campaignIdParam))
              }
            }
          }
          setCampaignId(campaignId)
        },
        state => getSelectedMessageValue(state, 'campaignId'),
      ),
      observeStore(
        composerMessageStore,
        linkSettings => {
          if (!isBulkComposer && !_.isEmpty(linkSettings)) {
            if (scrollContainer) {
              zenScroller.current = ZenScroll.createScroller(
                scrollContainer,
                defaultScrollDuration,
                scrollEdgeOffset,
              )
            }
          }
          setLinkSettings(linkSettings)
        },
        state => getSelectedMessageValue(state, 'linkSettings'),
        isEqual,
      ),
      observeStore(
        composerMessageStore,
        socialNetworksKeyedByIdParam => {
          setSocialNetworksKeyedById(socialNetworksKeyedByIdParam)
          if (isBulkComposer) {
            let socialProfiles = []
            if (OrderedMap.isOrderedMap(socialNetworksKeyedByIdParam)) {
              socialProfiles = socialNetworksKeyedByIdParam.toArray()
            }
            const twSpIdsVar = getSPIdsByNetwork(
              socialProfiles,
              SocialProfileConstants.SN_GROUP_TO_SN_TYPES[SocialProfileConstants.SN_GROUP.TWITTER],
            )
            /* eslint-enable no-undef */

            if (!isEqual(twSpIdsVar, twSpIds)) {
              setTwSpIds(twSpIds)
            }
            const linkedInCompanyProfilesVar = getSPIdsByNetwork(socialProfiles, [SN_TYPES.LINKEDINCOMPANY])
            if (!isEqual(linkedInCompanyProfilesVar, linkedInCompanyProfiles)) {
              setLinkedInCompanyProfiles(linkedInCompanyProfilesVar)
            }
            const facebookPageProfilesVar = getSPIdsByNetwork(socialProfiles, [SN_TYPES.FACEBOOKPAGE])
            if (!isEqual(facebookPageProfilesVar, facebookPageProfiles)) {
              setFacebookPageProfiles(facebookPageProfilesVar)
            }
          }
        },
        state => getSelectedMessageValue(state, 'socialNetworksKeyedById'),
        isEqual,
      ),
      observeStore(
        composerMessageStore,
        albumName => setAlbumName(albumName),
        state => getSelectedMessageValue(state, 'baseMessage.albumName'),
        isEqual,
      ),
      observeStore(
        composerMessageStore,
        isBoosted => setIsBoosted(isBoosted),
        state => getSelectedMessageValue(state, 'isBoosted'),
      ),
      observeStore(
        composerMessageStore,
        publishingMode => setPublishingMode(publishingMode),
        state => getSelectedMessageValue(state, 'publishingMode'),
      ),
      observeStore(
        composerMessageStore,
        socialNetworkTypesParam => {
          const newSocialNetworkTypes = _.uniq(socialNetworkTypesParam)
          if (!isEqual(selectedNetworkTypes, newSocialNetworkTypes) || newSocialNetworkTypes.length === 0) {
            setSelectedNetworkTypes(newSocialNetworkTypes)
            setSocialNetworkTypesForCounting(
              ComposerUtils.getSocialNetworkTypesForCounting(socialNetworkTypesParam),
            )
          }
        },
        state => {
          const selectedMessageForEdit = getSelectedMessage(state)
          return (selectedMessageForEdit && selectedMessageForEdit.getSocialNetworkTypes()) || []
        },
        isEqual,
      ),
      observeStore(
        composerMessageStore,
        sendDate => {
          const msgSendDate = sendDate
            ? sendDate
            : Math.floor(Date.now() / Constants.DATE_TIME.NUM_SECONDS_IN_MILLISECONDS)
          setSendDate(msgSendDate)
        },
        state => getSelectedMessageValue(state, 'sendDate'),
        isEqual,
      ),
      observeStore(
        composerMessageStore,
        selectedSocialNetworkIds => setSelectedSocialNetworkIdsState(selectedSocialNetworkIds),
        state => {
          const selectedMessageForEdit = getSelectedMessage(state)
          return (selectedMessageForEdit && selectedMessageForEdit.getSocialNetworkIds()) || []
        },
        isEqual,
      ),
      observeStore(composerMessageStore, state => {
        if (ComposerUtils.isPinterestComposer(customContext)) {
          const boards = getSelectedMessageValue(state, ['messages', 0, 'extendedInfo', 'boards'], false, [])
          if (Array.isArray(boards) && boards.length !== numOfPinterestBoardsSelected) {
            setNumOfPinterestBoardsSelected(boards.length)
          }
        }
      }),
      observeStore(
        composerMessageStore,
        appliedTagsParam => {
          if (Array.isArray(appliedTags) && !isEqual(appliedTagsParam, appliedTags)) {
            setAppliedTags(appliedTagsParam)
          }
        },
        state => getSelectedMessageValue(state, 'tags', false, []),
      ),
      observeStore(
        composerMessageStore,
        appliedPublisherNotesParam => {
          if (!isEqual(appliedPublisherNotesParam, appliedPublisherNotes)) {
            setAppliedPublisherNotes(appliedPublisherNotesParam)
          }
        },
        state => getSelectedMessageValue(state, 'publisherNotes'),
      ),
      observeStore(
        composerMessageStore, // Remove with PUB_33046_COMPOSER_MESSAGE_STORE DL
        instagramPairingErrors => setUnpairedInstagramIds(instagramPairingErrors.map(e => e.socialProfileId)),
        state => get(state, 'instagramPairingErrors'),
      ),
    ]

    if (isFeatureDisabled('PUB_34592_HIDE_HASHTAG_SUGGESTIONS_FOR_OWLY_WRITER_BLOCKED_ORGS')) {
      Promise.all([
        hasEntitlement(memberId, PRODUCT_ACCESS_HASHTAG_SUGGESTIONS),
        hasEntitlement(memberId, DISABLE_HASHTAG_SUGGESTIONS),
      ]).then(
        ([productAccessHashtagSuggestionsFeatureAccess, disableHashtagSuggestionsFeatureAccess]: [
          boolean,
          boolean,
        ]) => {
          setIsHashtagAccessAllowed(productAccessHashtagSuggestionsFeatureAccess)
          setIsHashtagDisabled(isBulkComposer || disableHashtagSuggestionsFeatureAccess)
        },
      )
    }

    hasEntitlement(memberId, COMPOSER_CANVA).then((featureAccess: boolean) => {
      setIsCanvaAccessAllowed(featureAccess)
    })

    if (isFeatureEnabledOrBeta('PUB_31994_LI_AUDIENCES_ENTITLEMENT')) {
      if (!ComposerUtils.isPinterestComposer(customContext)) {
        hasEntitlement(memberId, LINKEDIN_AUDIENCES).then((featureAccess: boolean) => {
          setHasLinkedinAudiencesAccessEntitlement(featureAccess)
        })
      }
    }

    hasSeenPopover(ComposerConstants.INSTAGRAM_STORIES_IN_COMPOSER_ONBOARDING_SEEN).then(hasSeen => {
      setShouldShowInstagramStoriesInComposerInfoBanner(!hasSeen)
    })

    hasSeenPopover(ComposerConstants.OWLY_WRITER_BANNER_IN_COMPOSER_SEEN).then(hasSeen => {
      setShouldShowOwlyWriterBanner(!hasSeen)
    })

    if (isFeatureDisabled('PUB_34613_COMPOSER_FILE_SIZE_REDUCTION')) {
      hasEntitlement(memberId, MESSAGE_TAGGING).then(hasTagAccessEntitlement => {
        setHasTagAccessEntitlement(hasTagAccessEntitlement)
      })
    }

    hasEntitlement(memberId, FLEXIBLE_APPROVALS).then(hasApprovalAccessEntitlement =>
      setHasApprovalAccessEntitlement(hasApprovalAccessEntitlement),
    )

    on(KEYBOARD_SHORTCUTS_EVENTS.TOGGLE_HASHTAG_SUGGESTIONS, handleHashtagButtonClick)

    // Set link preview on the first render
    const selectedMessageForEdit = getSelectedMessageForEdit()
    const { urlPreview = null, linkSettings = [], attachments = [] } = selectedMessageForEdit || {}

    let lastScrapedUrl: string | null = null

    if (isEmpty(attachments)) {
      if (urlPreview?.originalUrl) {
        lastScrapedUrl = urlPreview.originalUrl
      } else if (!isEmpty(linkSettings)) {
        lastScrapedUrl = linkSettings[linkSettings.length - 1]?.url
      }
    }
    setLastScrapedUrl(lastScrapedUrl)

    return () => {
      over(unsubscribeObservers)()

      linkScraperCancelRequests()

      off(KEYBOARD_SHORTCUTS_EVENTS.TOGGLE_HASHTAG_SUGGESTIONS, handleHashtagButtonClick)
    }
  }, [handleHashtagButtonClick])

  useEffect(() => {
    if (isBulkComposer) {
      // Add schedule date errors to field validations on initial render
      updateBulkComposerFieldValidations()
    }
  }, [isBulkComposer])

  const previousAttachments = usePrevious(selectedMessageForEdit?.attachments)
  useEffect(() => {
    if (isFeatureEnabled('PUB_34046_GENERATE_LINK_PREVIEW_ON_ATTACHMENT_REMOVE')) {
      const hasAttachments = !isEmpty(selectedMessageForEdit?.attachments)
      const hadAttachments = !isEmpty(previousAttachments)

      if (!hasAttachments && !hadAttachments) return

      if (!hadAttachments && hasAttachments) {
        setLastScrapedUrl(null)
      } else if (hadAttachments && !hasAttachments) {
        setLastScrapedUrl(null)
        onScrapeLink(selectedMessageForEdit?.renderMessageText())
      }
    }
  }, [onScrapeLink, previousAttachments, selectedMessageForEdit?.attachments])

  useEffect(() => {
    if (isFeatureEnabled('PUB_34046_GENERATE_LINK_PREVIEW_ON_ATTACHMENT_REMOVE')) {
      if (prevSelectedNetworkGroup !== selectedNetworkGroup) {
        let lastScrapedUrl: string
        if (isEmpty(selectedMessageForEdit?.attachments)) {
          lastScrapedUrl = selectedMessageForEdit?.urlPreview?.originalUrl ?? null
        } else {
          lastScrapedUrl = null
        }

        setLastScrapedUrl(lastScrapedUrl)
        linkScraperCancelRequests()
      }
    }
  }, [
    prevSelectedNetworkGroup,
    selectedMessageForEdit?.attachments,
    selectedMessageForEdit?.urlPreview?.originalUrl,
    selectedNetworkGroup,
  ])

  useEffect(() => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    if (selectedMessageForEdit) {
      if (prevNumOfPinterestBoardsSelected === 0 && numOfPinterestBoardsSelected > 0) {
        composerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.FIELD_VALIDATIONS,
          {},
        )
      }

      if (prevSelectedNetworkTypes?.length !== selectedNetworkTypes?.length) {
        if (
          selectedMessageForEdit.hasLinkedInV2Targeting() &&
          !selectedMessageForEdit.isSocialProfileTypeSelected(SN_TYPES.LINKEDINCOMPANY)
        ) {
          onSetLinkedInTargeting(null)
        }

        if (
          selectedMessageForEdit.hasFacebookTargeting() &&
          !selectedMessageForEdit.isSocialProfileTypeSelected(SN_TYPES.FACEBOOKPAGE)
        ) {
          onSetFacebookTargeting(null)
        }
      }

      if (isFeatureDisabled('PUB_34046_GENERATE_LINK_PREVIEW_ON_ATTACHMENT_REMOVE')) {
        if (prevSelectedNetworkGroup !== selectedNetworkGroup) {
          const selectedMessageForEdit = getSelectedMessageForEdit()
          let lastScrapedUrl: string
          if (isEmpty(attachments)) {
            lastScrapedUrl = selectedMessageForEdit.urlPreview?.originalUrl ?? null
          } else {
            lastScrapedUrl = null
          }

          setLastScrapedUrl(lastScrapedUrl)
          linkScraperCancelRequests()
        }

        if (isEmpty(prevAttachments) && !isEmpty(attachments)) {
          setLastScrapedUrl(null)
        }

        if (!isEmpty(prevAttachments) && isEmpty(attachments)) {
          setLastScrapedUrl(null)
          onScrapeLink(selectedMessageForEdit.renderMessageText())
        }
      }
    }

    if (isSendingMessage != prevIsSendingMessage) {
      setIsLoading(isSendingMessage)
    }

    // Close the AI panel if the user clears out the caption, because there isn't a caption to start from.
    if ((!selectedNetworkGroup || !selectedMessageForEdit?.template) && isAIPanelOpen) {
      onToggleAIPanel()
    }
  }, [
    attachments, // Remove attachment dependency with PUB_34046_GENERATE_LINK_PREVIEW_ON_ATTACHMENT_REMOVE
    isAIPanelOpen,
    isSendingMessage,
    numOfPinterestBoardsSelected,
    onScrapeLink,
    onSetFacebookTargeting,
    onSetLinkedInTargeting,
    onToggleAIPanel,
    selectedNetworkGroup,
    selectedNetworkTypes?.length,
  ])

  const renderApproverTab = () => {
    const canRenderApproverTab =
      !isBulkComposer && selectedSocialNetworkIdsState.length > 0 && hasApprovalAccessEntitlement

    const createdByMember = SelectedMessageState.createdByMember()
    const isCreator = createdByMember && createdByMember.id === memberId

    return canRenderApproverTab ? (
      <>
        {isFeatureEnabledOrBeta('PUB_34607_BAT_APPROVAL_STATUS') ? (
          <ApprovalStatusPermissionsWrapper
            flux={flux}
            selectedOrganization={selectedOrganization}
            memberId={memberId}
          />
        ) : null}
        <ApproverArea
          memberId={memberId}
          socialProfileIds={selectedSocialNetworkIdsState}
          onApproversSelected={onApproversSelected}
          isEditMode={isEditMode}
          isCreator={isCreator}
          isDraft={
            isFeatureEnabledOrBeta('PUB_35738_ONE_TIME_APPROVER_DRAFT_FIX') &&
            ComposerUtils.isDraft(selectedMessageForEdit.messageType)
          }
        />
      </>
    ) : null
  }

  const onChangePublishingMode = publishingMode => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    if (selectedMessageForEdit) {
      composerMessageActions.updateFieldById(
        selectedMessageForEdit.id,
        Constants.FIELD_TO_UPDATE.PUBLISHING_MODE,
        publishingMode,
      )
    }

    // Reset instagram pairing errors if switching to Direct Publish mode
    if (publishingMode === Constants.INSTAGRAM_PUBLISHING_MODES.DIRECT_PUBLISH) {
      if (ComposerUtils.isMessageStoreEnabled()) {
        dispatch(validationActions.resetInstagramPairingErrors())
      } else {
        composerMessageActions.updateInstagramPairingErrors([])
      }
    }
    emit('composer:change:publishingMode', publishingMode)
  }

  const onSelectDirectPublish = () =>
    onChangePublishingMode(Constants.INSTAGRAM_PUBLISHING_MODES.DIRECT_PUBLISH)

  const onSelectPushPublish = () => onChangePublishingMode(Constants.INSTAGRAM_PUBLISHING_MODES.PUSH_PUBLISH)

  useEffect(() => {
    const selectedMessageForEdit = getSelectedMessageForEdit()
    if (selectedMessageForEdit) {
      const isInstagramNetworkSelected =
        ComposerUtils.hasInstagramNetwork(...selectedNetworkTypes) ||
        selectedNetworkGroup === SocialProfileConstants.SN_GROUP.INSTAGRAM

      /**
       * Identify a change in previous Instagram group selection for auto changing publishing mode based on the types of selected Instagram accounts.
       * A change is true if SN picker selection has changed:
       * 1. from IGB only to IGB + IGP, mobile publishing should be enabled;
       * 2. from IGP only to IGP + IGB, mobile publishing should be enabled;
       * 3. from IGB + IGP to IGB only, mobile publishing should be disabled;
       * 4. from IGB + IGP to IGP only, mobile publishing should be enabled.
       * Note: above selection can be in combination with other SN types.
       */
      const changedSelectedNetworkTypes = prevSelectedNetworkTypes
        ? selectedNetworkTypes
            .filter(type => !prevSelectedNetworkTypes.includes(type))
            .concat(
              prevSelectedNetworkTypes.filter(
                (type: SocialNetworkType) => !selectedNetworkTypes.includes(type),
              ),
            )
        : selectedNetworkTypes
      const hasSelectedInstagramTypesChanged = changedSelectedNetworkTypes?.some(type =>
        [
          SocialProfileConstants.SN_TYPES.INSTAGRAM,
          SocialProfileConstants.SN_TYPES.INSTAGRAMBUSINESS,
        ].includes(type),
      )

      /**
       * Auto update publishing mode when the IG PNE tab is not selected.
       * When the IG PNE tab is selected, publishing mode is updated by DualPublishToggle via user input
       */
      const shouldAutoUpdatePublishingMode =
        hasSelectedInstagramTypesChanged && selectedNetworkGroup !== SocialProfileConstants.SN_GROUP.INSTAGRAM

      if (!isInstagramNetworkSelected) {
        composerMessageActions.updateFieldById(
          selectedMessageForEdit.id,
          Constants.FIELD_TO_UPDATE.PUBLISHING_MODE,
          null,
        )
      } else if (!publishingMode || shouldAutoUpdatePublishingMode) {
        if (ComposerUtils.hasInstagramPersonalNetwork(selectedNetworkTypes)) {
          onSelectPushPublish()
        } else {
          onSelectDirectPublish()
        }
      }
    }
  }, [selectedNetworkTypes, selectedNetworkGroup, publishingMode])

  const isAllOwnerTypesPrivate: boolean =
    PredictiveComplianceUtils.getIsAllOwnerTypesPrivate(socialNetworksKeyedById)
  const checkPredictiveCompliance = () => {
    if (isFeatureEnabled('PUB_13776_PREDICTIVE_COMPLIANCE')) {
      if (isAllOwnerTypesPrivate === false) {
        const firstCommentText = !!selectedMessageForEdit?.firstComment
          ? selectedMessageForEdit.firstComment.text
          : ''
        const organizationId = selectedOrganization ? selectedOrganization.organizationId : undefined
        const { urlPreview } = selectedMessageForEdit || {}
        const text = [...MessageUtils.getAllMessageText(selectedMessageForEdit), firstCommentText].join(' ')
        const complianceObj = PredictiveComplianceUtils.parseInputs({ text, urlPreview, organizationId })
        if (complianceObj && organizationId && text) {
          checkContent(complianceObj)
        }
      }
    }
  }
  useEffect(() => {
    checkPredictiveCompliance()
  }, [selectedNetworkGroup])

  const { hasHashtagSuggestionsAccess, areHashtagSuggestionsDisabled } = useHashtagSuggestions(
    memberId,
    isBulkComposer,
    isLoadingQuota,
    isOrgBlocked,
  )

  const renderEdit = () => {
    if (isFeatureEnabled('PUB_34194_COMPOSER_CRASH_ORG_SWITCH')) {
      // Prevent crash when user posts, duplicates, and switches organizations, causing the message to become null.
      // This issue arose due to detecting every re-render.
      if (typeof getSelectedMessageForEdit()?.template !== 'string') {
        return null
      }
    }

    /**
     * Refetches social profiles and clears errors when a new device is paired
     */
    const onDevicePairDetected = () => {
      onFetchSocialProfiles()

      if (ComposerUtils.isMessageStoreEnabled()) {
        dispatch(validationActions.resetInstagramPairingErrors())
      } else {
        composerMessageActions.updateInstagramPairingErrors([])
      }
      track(
        Constants.DUAL_PUBLISH_SETUP_TRACKING.TRACKING_ORIGIN,
        Constants.DUAL_PUBLISH_SETUP_TRACKING.TRACKING_ACTIONS.PUSH_PUBLISH_SETUP.COMPLETE,
      )
    }

    const selectedMessageForEdit = getSelectedMessageForEdit()
    const isInstagramStory = isFeatureEnabledOrBeta('PUB_33635_FB_REELS')
      ? selectedMessageForEdit.isInstagramStory()
      : selectedMessageForEdit?.postType === SocialProfileConstants.INSTAGRAM_POST_TYPES.IG_STORY

    const isPinterest = ComposerUtils.isPinterestComposer(customContext)

    const hasInstagramPairingErrors = ComposerUtils.isMessageStoreEnabled()
      ? !isEmpty(unpairedInstagramProfileIds)
      : unpairedInstagramIds.length > 0

    const showUserEdProductTaggingBanner =
      !isPinterest &&
      !isInstagramStory &&
      !isBulkComposer &&
      isEligibleProductAccountSelected &&
      !selectedNetworkGroup

    const hasFieldValidations = !_.isEmpty(fieldValidations)
    const errors = (
      <ValidationBanner
        fieldValidations={fieldValidations}
        field={FIELD_VALIDATIONS.SOCIAL_NETWORK}
        type={FIELD_TYPES.SOCIAL_NETWORK}
        showOnSubmitErrors={showOnSubmitErrors}
        isBulkComposer={isBulkComposer}
        isBento={isFeatureEnabled('PUB_32657_VALIDATION_BANNER_WITH_BENTO')}
      />
    )

    const multiNetworkMentionSnTypes = getMultiNetworkMentionSnTypes()
    const snGroupsWithUnlinkedMention = getSnGroupsWithUnlinkedMention()

    const showTikTokEngagementArea = isTikTokEnabled()
      ? selectedNetworkGroup === SocialProfileConstants.SN_GROUP.TIKTOK
      : false

    const isDirectPublish = publishingMode === Constants.INSTAGRAM_PUBLISHING_MODES.DIRECT_PUBLISH
    const isIGFirstCommentVisible = !isInstagramStory && isDirectPublish

    const initialInstagramLocation = selectedMessageForEdit?.locations?.instagram
      ? [
          {
            id: selectedMessageForEdit.locations.instagram.placeId,
            name: selectedMessageForEdit.locations.instagram.placeName,
            location: {
              position: {
                latitude: selectedMessageForEdit.locations.instagram.latitude,
                longitude: selectedMessageForEdit.locations.instagram.longitude,
              },
            },
          },
        ]
      : []

    return (
      <EditContainer className="-editContainer">
        {renderHeader()}
        <EditContent className="-editContent" ref={node => (scrollContainer = node)}>
          {renderCampaignPicker()}
          {renderProfileSelectorMemoized}
          {hasFieldValidations && <ProfileSelectorErrorContainer>{errors}</ProfileSelectorErrorContainer>}
          {hasInstagramPairingErrors && (
            <ProfileSelectorErrorContainer>{renderUnpairedInstagramProfiles()}</ProfileSelectorErrorContainer>
          )}
          {isPinterest && renderExtendedInfoTextEntry()}
          {selectedMessageForEdit && (
            <MessageEditContent
              editorRef={editorRef}
              campaignId={campaignId}
              editorId={editorId}
              entitlements={entitlements}
              fetchPreviewData={fetchPreviewData}
              hasSingleNetworkAndMultipleUnlinkedMentions={hasSingleNetworkAndMultipleUnlinkedMentions(
                snGroupsWithUnlinkedMention,
              )}
              isBulkComposer={isBulkComposer}
              isHashtagAccessAllowed={
                isFeatureEnabled('PUB_34592_HIDE_HASHTAG_SUGGESTIONS_FOR_OWLY_WRITER_BLOCKED_ORGS')
                  ? hasHashtagSuggestionsAccess
                  : isHashtagAccessAllowed
              }
              isHashtagDisabled={
                isFeatureEnabled('PUB_34592_HIDE_HASHTAG_SUGGESTIONS_FOR_OWLY_WRITER_BLOCKED_ORGS')
                  ? areHashtagSuggestionsDisabled
                  : isHashtagDisabled
              }
              isInstagramStory={isInstagramStory}
              isPinterest={isPinterest}
              isPreviewChanged={isPreviewChanged && !isHashtagPanelOpen && !isAIPanelOpen}
              labelText={$i18n.MESSAGE_EDIT_TEXT_HEADER()}
              memberId={memberId}
              multiNetworkMentionSnTypes={multiNetworkMentionSnTypes}
              onApplyLinkSettings={onApplyLinkSettings}
              onChangePreset={onChangePreset}
              onChangeText={(
                newText: string,
                newMentions: Mentions,
                newTemplate?: string,
                selectedNetworkGroup?: string,
              ) => {
                // Reset lastScrapedUrl if it no longer exists in the text
                if (isEmpty(selectedMessageForEdit?.linkSettings)) {
                  setLastScrapedUrl(null)
                }
                onChangeText(newText, newMentions, newTemplate, selectedNetworkGroup)
              }}
              onClickAIButton={handleAIButtonClick}
              onClickContentTips={onClickContentTips}
              onClickHashtagButton={handleHashtagButtonClick}
              onMentionSearchProgressChange={onMentionSearchProgressChange}
              onScrapeLink={onScrapeLink}
              organizations={organizations}
              placeholder={getMessageEditTextPlaceHolder()}
              ref={node => (messageEditTextNode.current = node)}
              selectedOrganization={selectedOrganization}
              snGroupsWithUnlinkedMention={snGroupsWithUnlinkedMention}
              socialNetworksKeyedById={socialNetworksKeyedById}
              socialNetworkTypesForCounting={socialNetworkTypesForCounting}
              trackingContext={trackingContext}
              linkScrapeInProgress={linkScrapeInProgress}
              csrf={csrf}
              facadeApiUrl={facadeApiUrl}
              onLinkScrapeCancel={onLinkScrapeCancel}
              onPreviewCustomize={handlePreviewCustomize}
              isLoadingQuota={isLoadingQuota}
              isOrgBlocked={isOrgBlocked}
            >
              {showUserEdProductTaggingBanner && <ProductTaggingInfoBanner />}
              {renderMedia()}
              {isFeatureEnabledOrBeta('PUB_30601_IG_FIRST_COMMENT') &&
                !isBulkComposer &&
                selectedNetworkGroup === SocialProfileConstants.SN_GROUP.INSTAGRAM && (
                  <InstagramFirstCommentArea
                    additionalProps={additionalProps}
                    initialCommentText={selectedMessageForEdit?.firstComment?.text}
                    isHashtagAccessAllowed={
                      isFeatureEnabled('PUB_34592_HIDE_HASHTAG_SUGGESTIONS_FOR_OWLY_WRITER_BLOCKED_ORGS')
                        ? hasHashtagSuggestionsAccess
                        : isHashtagAccessAllowed
                    }
                    isHashtagDisabled={
                      isFeatureEnabled('PUB_34592_HIDE_HASHTAG_SUGGESTIONS_FOR_OWLY_WRITER_BLOCKED_ORGS')
                        ? areHashtagSuggestionsDisabled
                        : isHashtagDisabled
                    }
                    isIGFirstCommentVisible={isIGFirstCommentVisible}
                    onClickHashtagButton={onClickHashtagButton}
                    onBlur={checkPredictiveCompliance}
                    selectedMessageId={selectedMessageForEdit?.id}
                    selectedProfileIds={selectedProfileIds}
                  />
                )}
              {showTikTokEngagementArea && <TiktokEngagementArea isBulkComposer={isBulkComposer} />}
              {isFeatureEnabledOrBeta('PUB_32312_IG_LOCATION_TAGGING') && (
                <InstagramLocationTagging
                  socialNetworksKeyedById={socialNetworksKeyedById}
                  selectedNetworkGroup={selectedNetworkGroup}
                  selectedMessageId={selectedMessageForEdit?.id}
                  initialLocations={initialInstagramLocation}
                  isBulkComposer={isBulkComposer}
                  isInstagramStory={isInstagramStory}
                />
              )}
              {isFeatureEnabledOrBeta('PUB_32228_COMPOSER_UX_BLITZ_PHASE_3') &&
                !isBulkComposer &&
                selectedMessageId &&
                selectedNetworkGroup === SocialProfileConstants.SN_GROUP.INSTAGRAM && (
                  <DualPublishWrapperWithSocialProfiles
                    closeComposerConfirm={closeComposerConfirm}
                    entitlements={entitlements}
                    isOnboardingOpen={isOnboardingOpen}
                    onDevicePairDetected={onDevicePairDetected}
                    onSelectDirectPublish={onSelectDirectPublish}
                    onSelectPushPublish={onSelectPushPublish}
                    postType={selectedMessageForEdit.postType}
                    publishingMode={publishingMode}
                    selectedMessageId={selectedMessageId}
                    selectedProfileIds={selectedProfileIds}
                    shouldRender={!!selectedMessageCount}
                    dispatch={dispatch}
                  />
                )}
              {isFeatureEnabledOrBeta('PUB_32228_COMPOSER_UX_BLITZ_PHASE_3') && renderPublisherNotes()}
            </MessageEditContent>
          )}
          {renderMediaBanners()}
          <MessageSettingsContainer className="-messageSettingsContainer">
            {renderApproverTab()}
            {renderPromotionTab()}
            {isFeatureEnabled('PUB_34613_COMPOSER_FILE_SIZE_REDUCTION') ? (
              <ConnectedTagAreaWrapper
                flux={flux}
                memberId={memberId}
                customContext={customContext}
                isBulkComposer={isBulkComposer}
              />
            ) : (
              renderTags()
            )}
            {isFeatureDisabledAndNotBeta('PUB_32228_COMPOSER_UX_BLITZ_PHASE_3') && renderPublisherNotes()}
            <Locations
              selectedNetworkGroup={selectedNetworkGroup}
              twSpIds={twSpIds}
              isBulkComposer={isBulkComposer}
              showOnSubmitErrors={showOnSubmitErrors}
              onDoneApplyLocations={onDoneApplyLocations}
              onLocationReset={onLocationReset}
              fieldValidations={fieldValidations}
            />
            {renderAudienceTargeting()}
            {renderFacebookTargeting()}
          </MessageSettingsContainer>
        </EditContent>
      </EditContainer>
    )
  }

  const renderPreview = () => {
    return (
      <EditContainer className="-editContainer">
        {renderHeader()}
        <MessagePreviewArea
          ignoredPreviewValidationMessageCodes={ignoredPreviewValidationMessageCodes}
          isBulkComposer={isBulkComposer}
          onAddIgnoredPreviewValidationMessageCode={onAddIgnoredPreviewValidationMessageCode}
          previewMessages={previewMessages}
        />
      </EditContainer>
    )
  }

  /* To avoid unnecessary re-renders, we omit certain dependencies from the array. This approach, while not ideal,
    was introduced to address performance issues with the social profile picker. The dependencies in question are updated
    via "observeStore". This became a problem during the transition to functional components, as these dependencies would
    trigger updates based on their state. */
  const contentDependencies = [
    campaigns,
    mode,
    addProfile,
    csrf,
    customContext,
    dispatch,
    entitlements,
    excludedNetworkTypes,
    facadeApiUrl,
    fetchPreviewData,
    flux,
    ignoredPreviewValidationMessageCodes,
    isBulkComposer,
    isEditOnly,
    isEditMode,
    isSchedulerOpen,
    isSendingMessage,
    isSocialProfileSelectorDisabled,
    isUsingLATM,
    showOnSubmitErrors,
    hasEntitlement,
    language,
    memberId,
    onAddAttachment,
    onAddIgnoredPreviewValidationMessageCode,
    onChangePreset,
    onChangeText,
    onCreateBoardComplete,
    onFetchSocialProfiles,
    onAttachmentEdited,
    onLinkPreviewChange,
    onManageTags,
    onModeChange,
    onScheduleAll,
    onToggleMediaLibrary,
    onUploadQueueComplete,
    organizations,
    selectedOrganization,
    socialNetworks,
    suggestedTags,
    tags,
    trackingContext,
    hasAlbumTargetingWarning,
    showOnboarding,
    isSequentialPostingEnabled,
    selectedNetworkGroup,
    selectedMessageForEdit,
    selectedMessageForEdit?.template,
    timezoneName,
    onTrackMediaUploadError,
    isEligibleProductAccountSelected,
    onClickHashtagButton,
    isHashtagPanelOpen,
    isAIPanelOpen,
    onToggleAIPanel,
    onClickContentTips,
    closeComposerConfirm,

    // STATE
    lastScrapedUrl,
    linkScrapeInProgress,
    twSpIds,
    facebookPageProfiles,
    linkedInCompanyProfiles,
    previewMessages,
    fieldValidations,
    linkSettings,
    campaignId,
    albumName,
    publishingMode,
    // socialNetworksKeyedById,
    attachments,
    numOfPinterestBoardsSelected,
    selectedNetworkTypes,
    appliedTags,
    sendDate,
    appliedPublisherNotes,
    unpairedInstagramIds?.length,
    isLoading,
    socialNetworkTypesForCounting,
    boostCampaign,
    campaignObjectiveChanged,
    isBoosted,
    isMentionSearchInProgress,
    shouldShowInstagramStoriesInComposerInfoBanner,
    shouldShowOwlyWriterBanner,
    isPreviewChanged,
    selectedSocialNetworkIdsState,
    isHashtagAccessAllowed, // Remove with PUB_34592_HIDE_HASHTAG_SUGGESTIONS_FOR_OWLY_WRITER_BLOCKED_ORGS
    isHashtagDisabled, // Remove with PUB_34592_HIDE_HASHTAG_SUGGESTIONS_FOR_OWLY_WRITER_BLOCKED_ORGS
    isCanvaAccessAllowed,
    hasTagAccessEntitlement,
    hasApprovalAccessEntitlement,
    ...(isFeatureEnabled('PUB_34592_HIDE_HASHTAG_SUGGESTIONS_FOR_OWLY_WRITER_BLOCKED_ORGS')
      ? [hasHashtagSuggestionsAccess, areHashtagSuggestionsDisabled]
      : []),
  ]

  const contentRender = useMemo(() => {
    let content
    switch (mode) {
      case Constants.BULK_COMPOSER_EDIT_MODES.EDIT:
        content = renderEdit()
        break
      case Constants.BULK_COMPOSER_EDIT_MODES.PREVIEW:
        content = renderPreview()
        break
      case Constants.BULK_COMPOSER_EDIT_MODES.ERRORS:
        content = renderErrorState()
        break
      case Constants.BULK_COMPOSER_EDIT_MODES.QUICK_SCHEDULE:
        content = renderQuickSchedule()
        break
      case Constants.BULK_COMPOSER_EDIT_MODES.MULTIPLE:
        content = renderMultiple()
        break
      default:
        content = <div />
    }

    return content
  }, contentDependencies)

  return (
    <MessageEditAreaWrapper
      data-testid="MessageEditArea"
      className="rc-MessageEditArea"
      isBulkComposer={isBulkComposer}
    >
      {contentRender}
    </MessageEditAreaWrapper>
  )
}

MessageEditArea.displayName = 'Message Edit Area'

const ConnectedMessageEditArea = ReactTimeout(
  reduxConnect(({ campaigns, composer, linkSettings, validation }: RootState) => ({
    campaigns: campaigns.campaigns,
    isEligibleProductAccountSelected: composer.isEligibleProductAccountSelected,
    isSchedulerOpen: composer.isSchedulerOpen,
    isSendingMessage: composer.isSendingMessage,
    isSequentialPostingEnabled: composer.isSequentialPostingEnabled,
    presets: linkSettings.presets,
    selectedNetworkGroup: composer.selectedNetworkGroup,
    showOnSubmitErrors: validation.showOnSubmitErrors,
    instagramPairingErrors: validation.instagramPairingErrors,
  }))(MessageEditArea),
)
export default ConnectedMessageEditArea
