import React from 'react'

import { BouncingBars } from 'fe-comp-loader'
import { useWithI18n } from 'fe-lib-i18n'

import { AI_FEATURES } from '../../constants'
import { AIPanelContentProps } from '../../types'
import CaptionSelection from '../CaptionSelection'
import FeatureSelection from '../FeatureSelection'
import ToneSelection from '../ToneSelection'
import { AriaLiveRegion } from './AIPanel.styles'
import { LoadingState } from './Content.styles'

export const Content: React.FC<AIPanelContentProps> = ({
  isLoading,
  captions,
  selectedFeature,
  selectedTone,
  onSelectFeature,
  onSelectToneFeature,
  onSelectTone,
  trackingDetails,
  onCaptionSelected,
}) => {
  const $i18n = useWithI18n({
    loading: 'Preparing some suggestions. Just a moment.',
    recommendationsLoaded: 'Here are {numRecs} suggestions for you.',
    recommendationsLoadedSingle: 'Here is 1 suggestion for you.',
    noResults: "Your content is good to go. We don't have any suggestions to improve it right now.",
  })

  const renderContent = () => {
    if (isLoading) {
      return (
        <LoadingState>
          <BouncingBars />
        </LoadingState>
      )
    }

    if (captions) {
      return (
        <CaptionSelection
          captions={captions}
          trackingDetails={trackingDetails}
          onCaptionSelected={onCaptionSelected}
        />
      )
    }

    const shouldShowTones = selectedFeature === AI_FEATURES.TONE_OF_VOICE && !selectedTone
    if (shouldShowTones) {
      return <ToneSelection onSelectTone={onSelectTone} />
    }

    return <FeatureSelection onSelectFeature={onSelectFeature} onSelectToneFeature={onSelectToneFeature} />
  }

  const getLiveText = () => {
    if (isLoading) {
      return $i18n.loading()
    }

    if (captions) {
      if (captions.length === 0) {
        return $i18n.noResults()
      } else if (captions.length === 1) {
        return $i18n.recommendationsLoadedSingle()
      } else {
        return $i18n.recommendationsLoaded({
          numRecs: captions.length,
        })
      }
    }

    return ''
  }

  return (
    <div>
      <AriaLiveRegion aria-live="polite" role="status">
        {getLiveText()}
      </AriaLiveRegion>
      {renderContent()}
    </div>
  )
}

export default Content
