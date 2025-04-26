import React, { FC, ReactNode } from 'react';

export const SvgContainer: FC<{ children?: ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const NoCaptionsTitle: FC = () => <h2>No Captions Available</h2>;

export const NoCaptionsMessage: FC = () => <p>There are no captions to display.</p>;
