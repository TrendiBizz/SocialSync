import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Alert } from '@ds/comp-alert'

import { connect as reduxConnect } from 'react-redux'
import { compose } from 'fe-hoc-compose'
import { useWithI18n } from 'fe-lib-i18n'
import { Constants as SocialProfileConstants } from 'fe-pnc-constants-social-profiles'
import { getSelectedMessage, getState as getComposerMessageState } from 'fe-pnc-data-composer-message'
import { isFeatureEnabled } from 'fe-pnc-lib-darklaunch'

import { FocusManager } from 'fe-pnc-lib-focus-manager'
import { capitalizeFirstLetter } from '@/components/message-edit/message-tab-bar/helpers'
import TrackingConstants from '@/constants/tracking'
import { RootState } from '@/redux/store'
import { track } from '@/utils/tracking'
import { fetchPostRecommendations, RetryLaterError } from '../../api'
import { AI_FEATURES } from '../../constants'
import { AIPanelProps } from '../../types'
import {
  CenterColumn,
  Container,
  Description,
  FadeIn,
  ScrollContainer,
  Subtitle,
  TextContainer,
  InputBannerWrapper,
} from './AIPanel.styles'
import Content from './Content'
import Header from './Header'
import Navigation from './Navigation'

export const AIPanel: React.FC<AIPanelProps> = ({ selectedNetworkGroup, onClose, onCaptionSelected }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const abortController = useRef(new AbortController())

  const [isLoading, setIsLoading] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [captions, setCaptions] = useState(null)
  const [selectedTone, setSelectedTone] = useState(null)
  const [trackingDetails, setTrackingDetails] = useState({})
  const [errorBanner, setErrorBanner] = useState(null)
  const [errorBannerTitle, setErrorBannerTitle] = useState(null)

  const getSelectedMessageForEdit = () => getSelectedMessage(getComposerMessageState())

  useEffect(() => {
    abortController.current.abort('Switching PNE tab')
    setIsLoading(false)
    setSelectedFeature(null)
    setSelectedTone(null)
    setCaptions(null)
    setErrorBanner(null)
  }, [selectedNetworkGroup])

  useEffect(() => {
    if (containerRef?.current) {
      const focusRoot = containerRef.current
      FocusManager.addElement(focusRoot)
      FocusManager.safeFocus(FocusManager.getFocusableElements()[0])

      return () => {
        FocusManager.remove(focusRoot)
      }
    }
  }, [containerRef])

  useEffect(() => {
    FocusManager.safeFocus(FocusManager.getFocusableElements()[0])
  }, [captions, selectedFeature, selectedTone])

  useEffect(() => {
    return () => {
      abortController.current.abort('Component unmounted')
    }
  }, [abortController])

  const $i18n = useWithI18n({
    // L10N: Do not translate keywords <highlight> and </highlight>; {socialNetworkGroup} is a string, for example, 'Twitter', 'LinkedIn'.
    subtitle: 'Recommendations on your <highlight>{socialNetworkGroup}</highlight> post',
    description: 'Here are some suggestions',
    tryAgain: 'Try again in a bit',
    problemLoading: 'There was a problem loading OwlyWriter AI. Please try again later.',
  })

  const getPostRecommendations = useCallback(
    async (feature: string, tone?: string) => {
      setIsLoading(true)

      const selectedMessageForEdit = getSelectedMessageForEdit()
      if (selectedMessageForEdit) {
        const messageText = selectedMessageForEdit.template
        const mentions = selectedMessageForEdit.mentions
        const links = isFeatureEnabled('PUB_32436_AI_RECOMMENDATION_LINKS')
          ? selectedMessageForEdit.linkSettings
          : []

        abortController.current.abort('Cleanup before intialization')
        abortController.current = new AbortController()

        try {
          const recommendedCaptions = await fetchPostRecommendations({
            messageText,
            selectedNetworkGroup: selectedMessageForEdit.selectedNetworkGroup,
            feature,
            tone: tone ? tone : selectedTone,
            signal: abortController.current.signal,
            mentions,
            links,
          })
          setIsLoading(false)
          setCaptions(recommendedCaptions)
        } catch (e) {
          if (e instanceof RetryLaterError) {
            setErrorBannerTitle($i18n.tryAgain())
            setErrorBanner($i18n.problemLoading())
          }
        }
      }
      setIsLoading(false)
    },
    [$i18n],
  )

  const getTrackingDetails = (feature: string, tone?: string) => {
    const selectedMessageForEdit = getSelectedMessageForEdit()

    if (selectedMessageForEdit) {
      const selectedNetworkTypes = selectedMessageForEdit.getSocialNetworkTypes()
      const selectedSnTypesPNE = selectedNetworkTypes.filter(type =>
        SocialProfileConstants.SN_GROUP_TO_SN_TYPES[selectedMessageForEdit.selectedNetworkGroup].includes(
          type,
        ),
      )
      const details = { socialNetworkType: selectedSnTypesPNE, optionClicked: feature, toneType: tone }
      setTrackingDetails(details)
      return details
    }
    return {}
  }

  const onSelectFeature = useCallback((feature: string) => {
    setSelectedFeature(feature)
    getPostRecommendations(feature)

    const details = getTrackingDetails(feature)
    track(
      TrackingConstants.TRACKING_ORIGINS.AI_PANEL,
      TrackingConstants.TRACKING_ACTIONS.AI.FEATURE_SELECTED,
      { details },
    )
  }, [])

  const onSelectToneFeature = useCallback(() => {
    setSelectedFeature(AI_FEATURES.TONE_OF_VOICE)
  }, [])

  const onSelectTone = useCallback((tone: string) => {
    setSelectedTone(tone)
    getPostRecommendations(AI_FEATURES.TONE_OF_VOICE, tone)

    const details = getTrackingDetails('tone', tone)
    track(
      TrackingConstants.TRACKING_ORIGINS.AI_PANEL,
      TrackingConstants.TRACKING_ACTIONS.AI.FEATURE_SELECTED,
      { details },
    )
  }, [])

  const onClickBack = useCallback(() => {
    if (selectedFeature === AI_FEATURES.TONE_OF_VOICE) {
      if (!selectedTone) {
        setSelectedFeature(null)
      }
    } else {
      setSelectedFeature(null)
    }
    setSelectedTone(null)
    setCaptions(null)
  }, [selectedFeature, selectedTone])

  const renderErrorBanner = () => {
    if (!errorBanner) {
      return null
    }

    return (
      <InputBannerWrapper>
        <Alert type="negative" title={errorBannerTitle ? errorBannerTitle : null} message={errorBanner} />
      </InputBannerWrapper>
    )
  }
  return (
    <Container ref={containerRef}>
      <Header onClose={onClose} />
      {renderErrorBanner()}
      {!errorBanner && (
        <ScrollContainer>
          <FadeIn>
            <CenterColumn>
              {selectedFeature && (
                <Navigation feature={selectedFeature} isLoading={isLoading} onClickBack={onClickBack} />
              )}
              <TextContainer>
                {((selectedFeature && captions?.length > 0) || !selectedFeature) && (
                  <Subtitle>
                    {$i18n.subtitle({
                      socialNetworkGroup: capitalizeFirstLetter(selectedNetworkGroup ?? ''),
                      highlight: (content: any) => <b key="noRecommendation">{content}</b>,
                    })}
                  </Subtitle>
                )}
                {selectedFeature && captions?.length > 0 && <Description>{$i18n.description()}</Description>}
              </TextContainer>
              <Content
                isLoading={isLoading}
                captions={captions}
                selectedFeature={selectedFeature}
                selectedTone={selectedTone}
                onSelectFeature={onSelectFeature}
                onSelectToneFeature={onSelectToneFeature}
                onSelectTone={onSelectTone}
                trackingDetails={trackingDetails}
                onCaptionSelected={onCaptionSelected}
              />
            </CenterColumn>
          </FadeIn>
        </ScrollContainer>
      )}
    </Container>
  )
}

export default compose(
  reduxConnect(({ composer }: RootState) => ({
    selectedNetworkGroup: composer.selectedNetworkGroup,
  })),
)(AIPanel)
