import React from 'react'

import { useWithI18n } from 'fe-lib-i18n'
import { CaptionSelectionProps } from '../../types'
import { ListContainer } from '../FeatureSelection/FeatureSelection.styles'
import Caption from './Caption'
import { SvgContainer, NoCaptionsTitle, NoCaptionsMessage } from './Caption.styles'
import { OwlySaffronWaveSpeak } from './svgs'

const CaptionSelection: React.FC<CaptionSelectionProps> = ({
  captions,
  trackingDetails,
  onCaptionSelected,
}) => {
  const $i18n = useWithI18n({
    noRecommendationTitle: 'Nice job!',
    noRecommendationMessage:
      "Your content is good to go! We don't have any suggestions to improve it right now.",
  })

  if (captions.length === 0) {
    return (
      <div>
        <SvgContainer>
          <OwlySaffronWaveSpeak />
        </SvgContainer>
        <NoCaptionsTitle>{$i18n.noRecommendationTitle()}</NoCaptionsTitle>
        <NoCaptionsMessage>{$i18n.noRecommendationMessage()}</NoCaptionsMessage>
      </div>
    )
  }

  return (
    <ListContainer role="list">
      {captions.map(caption => (
        <Caption
          key={caption.captionText}
          caption={caption}
          trackingDetails={trackingDetails}
          onCaptionSelected={onCaptionSelected}
        />
      ))}
    </ListContainer>
  )
}

export default CaptionSelection
