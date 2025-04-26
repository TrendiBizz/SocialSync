import React, { FC, ReactNode } from 'react';

export const ListContainer: FC<{ children?: ReactNode }> = ({ children }) => (
  <div>{children}</div>
);
