import React from 'react'

import AltText from '@fp-icons/emblem-alt-text'
import Wand from '@fp-icons/emblem-wand'
import SymbolFlame from '@fp-icons/symbol-flame'
import SparklesIcon from '@fp-icons/symbol-sparkles'
import { useWithI18n } from 'fe-lib-i18n'

import { AI_FEATURES, useI18nFeatureToDisplayName } from '../../constants'
import { FeatureSelectionProps } from '@/types'
import Feature from './Feature'
import { ListContainer } from './FeatureSelection.styles'

const FeatureSelection: React.FC<FeatureSelectionProps> = ({ onSelectFeature, onSelectToneFeature }) => {
  const $i18n = useWithI18n({
    [`${AI_FEATURES.GRAMMAR_CORRECTION}_desc`]: 'Ensure your writing is clear and error-free',
    [`${AI_FEATURES.TONE_OF_VOICE}_desc`]: 'Choose a tone that matches your brand',
    [`${AI_FEATURES.CALL_TO_ACTION}_desc`]: 'Add a question or a call to action to drive engagement',
    [`${AI_FEATURES.LENGTH}_desc`]: 'Use the right caption length to engage your audience',
  })
  const $i18nFeatureToDisplayName = useI18nFeatureToDisplayName()

  const getIcon = (feature: string) => {
    switch (feature) {
      case AI_FEATURES.GRAMMAR_CORRECTION:
        return Wand
      case AI_FEATURES.TONE_OF_VOICE:
        return AltText
      case AI_FEATURES.CALL_TO_ACTION:
        return SymbolFlame
      case AI_FEATURES.LENGTH:
      default:
        return SparklesIcon
    }
  }

  const getEventHandler = (feature: string) => {
    return feature === AI_FEATURES.TONE_OF_VOICE ? onSelectToneFeature : () => onSelectFeature(feature)
  }

  return (
    <ListContainer>
      {Object.values(AI_FEATURES).map((feature: string) => (
        <Feature
          key={feature}
          title={$i18nFeatureToDisplayName[feature]()}
          description={$i18n[`${feature}_desc`]()}
          iconGlyph={getIcon(feature)}
          onSelectFeature={getEventHandler(feature)}
        />
      ))}
    </ListContainer>
  )
}

export default React.memo(FeatureSelection)
