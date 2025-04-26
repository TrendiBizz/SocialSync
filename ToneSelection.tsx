import React from 'react'

import { useWithI18n } from 'fe-lib-i18n'

import { capitalizeFirstLetter } from '@/components/message-edit/message-tab-bar/helpers'
import { TONES } from '../../constants'
import { ToneSelectionProps } from '@/types'
import { ListContainer } from '../FeatureSelection/FeatureSelection.styles'
import Tone from './Tone'
import { Description } from './ToneSelection.styles'

const ToneSelection: React.FC<ToneSelectionProps> = ({ onSelectTone }) => {
  const $i18n = useWithI18n({
    description: 'What tone of voice do you prefer?',
  })

  return (
    <>
      <Description>{$i18n.description()}</Description>
      <ListContainer>
        {Object.values(TONES).map(tone => (
          <Tone key={tone} title={capitalizeFirstLetter(tone)} onSelectTone={() => onSelectTone(tone)} />
        ))}
      </ListContainer>
    </>
  )
}

export default React.memo(ToneSelection)
