export interface Props {
  children: React.ReactNode;
}

export interface PropsForFeatures {
  featureFlags: Record<string, boolean>;
}

export type EnsureArray<T> = T extends any[] ? T : T[];

export interface URLPreview {
  url: string;
  title: string;
  description: string;
  image: string;
}

export type SocialNetworkType = "facebook" | "twitter" | "instagram" | "linkedin";

export interface ApproverMember {
  id: string;
  name: string;
}

export interface ApproverTeam {
  id: string;
  name: string;
}

export interface OneTimeReviewers {
  id: string;
  name: string;
}

export interface ApproverAreaProps {
  approvers: {
    members: ApproverMember[];
    teams: ApproverTeam[];
    oneTimeReviewers: OneTimeReviewers[];
  };
  selectedApprovers: string[];
  onChange: (selected: string[]) => void;
}

export interface ComboboxProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}
