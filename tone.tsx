import React from 'react'

import { ToneProps } from '@/types'
import { ListItem } from '../FeatureSelection/Feature.styles'
import { Title } from './Tone.styles'

const Tone: React.FC<ToneProps> = ({ title, onSelectTone }) => (
  <ListItem aria-label={title} onClick={onSelectTone}>
    <Title>{title}</Title>
  </ListItem>
)

export default Tone
