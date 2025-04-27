import React, { useRef } from "react";
import { ListContainer } from "./featureSelection.styles";
import {
  NoCaptionsTitle,
  NoCaptionsMessage
} from "../dm-automation/Caption.styles";

interface CaptionSelectionProps {
  captions: string[];
  onCaptionSelected: (caption: string) => void;
}

export default function CaptionSelection({
  captions,
  onCaptionSelected,
}: CaptionSelectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  if (!captions || captions.length === 0) {
    return (
      <ListContainer ref={ref}>
        <NoCaptionsTitle />
        <NoCaptionsMessage />
      </ListContainer>
    );
  }

  return (
    <ListContainer ref={ref}>
      {captions.map((c) => (
        <p
          key={c}
          className="cursor-pointer hover:underline"
          onClick={() => onCaptionSelected(c)}
        >
          {c}
        </p>
      ))}
    </ListContainer>
  );
}
