import React, { FC } from 'react';

interface CaptionProps {
  text: string;
}

const Caption: FC<CaptionProps> = ({ text }) => <p>{text}</p>;

export default Caption;
