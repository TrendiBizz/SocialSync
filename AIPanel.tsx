import React, { useCallback, useEffect, useRef, useState } from 'react';
import { compose } from '@/stubs/fe-hoc-compose';
import { useWithI18n } from '@/stubs/fe-lib-i18n';
import { Constants as SocialProfileConstants } from '@/stubs/fe-pnc-constants-social-profiles';
import { getSelectedMessage, getState as getComposerMessageState } from '@/stubs/fe-pnc-data-composer-message';
import { isFeatureEnabled } from '@/stubs/fe-pnc-lib-darklaunch';
import { FocusManager } from '@/stubs/fe-pnc-lib-focus-manager';
import { capitalizeFirstLetter } from '@/components/message-edit/message-tab-bar/helpers';
import TrackingConstants from '@/constants/tracking';
import { RootState } from '@/redux/store';
import { track } from '@/utils/tracking';
import { fetchPostRecommendations, RetryLaterError } from '../../api';
import { AI_FEATURES } from '../../constants';
import { AIPanelProps } from '../../types';
import {
  CenterColumn,
  Sidebar,
  SidebarHeader,
  LoadingIndicator,
} from './StyledComponents';

const AIPanel: React.FC<AIPanelProps> = ({ selectedProfile }) => {
  const { t } = useWithI18n();
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);

  const fetchRecommendations = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchPostRecommendations(selectedProfile);
      if (isMounted.current) {
        setRecommendations(response);
      }
    } catch (error) {
      if (error instanceof RetryLaterError) {
        console.error('Please retry later');
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, [selectedProfile]);

  useEffect(() => {
    fetchRecommendations();
    return () => {
      isMounted.current = false;
    };
  }, [fetchRecommendations]);

  const isFeatureActive = isFeatureEnabled(AI_FEATURES.RECOMMENDATIONS);

  return (
    <Sidebar>
      <SidebarHeader>{t('AI Recommendations')}</SidebarHeader>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <CenterColumn>
          {recommendations.map((rec, index) => (
            <div key={index}>{capitalizeFirstLetter(rec)}</div>
          ))}
        </CenterColumn>
      )}
    </Sidebar>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedProfile: getComposerMessageState(state).selectedMessage?.profile || SocialProfileConstants.FACEBOOK,
});

export default compose()(AIPanel);
