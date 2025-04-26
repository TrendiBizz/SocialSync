import { useRef, useState, useEffect } from "react";
import { CaptionSelectionProps } from "@/types";
import { ListContainer } from "./featureSelection.styles.ts";
import { SyncContainer, NoCaptionsTitle, NoCaptionsMessage } from "./Caption.styles";
import { FaSyncAlt } from "react-icons/fa";

export default function CaptionSelection({ selectedCaption, onSelect }: CaptionSelectionProps) {
  const [captions, setCaptions] = useState<string[]>([]);
  const captionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCaptions(["Caption 1", "Caption 2", "Caption 3"]);
  }, []);

  return (
    <ListContainer ref={captionsRef}>
      {captions.length > 0 ? (
        captions.map((caption, index) => (
          <div key={index} onClick={() => onSelect(caption)}>
            {caption}
          </div>
        ))
      ) : (
        <SyncContainer>
          <FaSyncAlt />
          <NoCaptionsTitle>No Captions</NoCaptionsTitle>
          <NoCaptionsMessage>Try syncing again later.</NoCaptionsMessage>
        </SyncContainer>
      )}
    </ListContainer>
  );
}
