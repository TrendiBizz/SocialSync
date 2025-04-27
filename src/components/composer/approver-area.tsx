import React, { useState, FC } from 'react';
import { ApproverAreaProps } from '../../types';

export const ApproverArea: FC<ApproverAreaProps> = ({
  approvers,
  selectedApprovers,
  onChange
}) => {
  const [localSelected, setLocalSelected] = useState<string[]>(selectedApprovers);

  const handleSelect = (id: string) => {
    const updated = localSelected.includes(id)
      ? localSelected.filter((item) => item !== id)
      : [...localSelected, id];
    setLocalSelected(updated);
    onChange(updated);
  };

  return (
    <div>
      <h3>Members</h3>
      {approvers.members.map((member) => (
        <label key={member.id}>
          <input
            type="checkbox"
            checked={localSelected.includes(member.id)}
            onChange={() => handleSelect(member.id)}
          />
          {member.name}
        </label>
      ))}
      <h3>Teams</h3>
      {approvers.teams.map((team) => (
        <label key={team.id}>
          <input
            type="checkbox"
            checked={localSelected.includes(team.id)}
            onChange={() => handleSelect(team.id)}
          />
          {team.name}
        </label>
      ))}
      <h3>One-Time Reviewers</h3>
      {approvers.oneTimeReviewers.map((reviewer) => (
        <label key={reviewer.id}>
          <input
            type="checkbox"
            checked={localSelected.includes(reviewer.id)}
            onChange={() => handleSelect(reviewer.id)}
          />
          {reviewer.name}
        </label>
      ))}
    </div>
  );
};
