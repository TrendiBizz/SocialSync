import { useWithI18n } from 'fe-lib-i18n'
import type { I18nObject } from 'fe-lib-i18n'
import { Constants as SocialProfileConstants } from 'fe-pnc-constants-social-profiles'

const { SN_GROUP } = SocialProfileConstants

export const AI_FEATURES = {
  GRAMMAR_CORRECTION: 'grammar_correction',
  LENGTH: 'length',
  TONE_OF_VOICE: 'tone',
  CALL_TO_ACTION: 'call_to_action',
}

export type AIFeatures = (typeof AI_FEATURES)[keyof typeof AI_FEATURES]

export const AI_FEATURE_TO_DISPLAY_NAME = {
  [AI_FEATURES.GRAMMAR_CORRECTION]: 'Fix spelling & grammar',
  [AI_FEATURES.LENGTH]: 'Optimize length',
  [AI_FEATURES.TONE_OF_VOICE]: 'Adjust tone',
  [AI_FEATURES.CALL_TO_ACTION]: 'Inspire engagement',
}

export const useI18nFeatureToDisplayName = () => {
  return useWithI18n<I18nObject<AIFeatures>>({
    [AI_FEATURES.GRAMMAR_CORRECTION]: AI_FEATURE_TO_DISPLAY_NAME[AI_FEATURES.GRAMMAR_CORRECTION],
    [AI_FEATURES.LENGTH]: AI_FEATURE_TO_DISPLAY_NAME[AI_FEATURES.LENGTH],
    [AI_FEATURES.TONE_OF_VOICE]: AI_FEATURE_TO_DISPLAY_NAME[AI_FEATURES.TONE_OF_VOICE],
    [AI_FEATURES.CALL_TO_ACTION]: AI_FEATURE_TO_DISPLAY_NAME[AI_FEATURES.CALL_TO_ACTION],
  })
}

export const SN_GROUP_TO_RECOMMENDED = {
  MIN_WORDS_RECOMMENDED: {
    [SN_GROUP.FACEBOOK]: 5,
    [SN_GROUP.INSTAGRAM]: 30,
    [SN_GROUP.LINKEDIN]: 20,
    [SN_GROUP.PINTEREST]: 25,
    [SN_GROUP.THREADS]: 15,
    [SN_GROUP.TIKTOK]: 10,
    [SN_GROUP.TWITTER]: 15,
  },
  MAX_WORDS_RECOMMENDED: {
    [SN_GROUP.FACEBOOK]: 19,
    [SN_GROUP.INSTAGRAM]: 35,
    [SN_GROUP.LINKEDIN]: 2000,
    [SN_GROUP.PINTEREST]: 50,
    [SN_GROUP.THREADS]: 20,
    [SN_GROUP.TIKTOK]: 20,
    [SN_GROUP.TWITTER]: 20,
  },
  MIN_HASHTAGS_RECOMMENDED: {
    [SN_GROUP.FACEBOOK]: 2,
    [SN_GROUP.INSTAGRAM]: 3,
    [SN_GROUP.LINKEDIN]: 1,
    [SN_GROUP.PINTEREST]: 2,
    [SN_GROUP.THREADS]: 0,
    [SN_GROUP.TIKTOK]: 1,
    [SN_GROUP.TWITTER]: 1,
  },
  MAX_HASHTAGS_RECOMMENDED: {
    [SN_GROUP.FACEBOOK]: 3,
    [SN_GROUP.INSTAGRAM]: 5,
    [SN_GROUP.LINKEDIN]: 5,
    [SN_GROUP.PINTEREST]: 5,
    [SN_GROUP.THREADS]: 1,
    [SN_GROUP.TIKTOK]: 5,
    [SN_GROUP.TWITTER]: 2,
  },
}

export const TONES = {
  FORMAL: 'formal',
  PROFESSIONAL: 'professional',
  CASUAL: 'casual',
  STRAIGHTFORWARD: 'straightforward',
  CONFIDENT: 'confident',
  FRIENDLY: 'friendly',
}
