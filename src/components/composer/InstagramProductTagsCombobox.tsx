import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export interface InstagramProductTagsComboboxProps {
  onTagSelect: (tag: string) => void;
}

const InstagramProductTagsCombobox: React.FC<InstagramProductTagsComboboxProps> = ({ onTagSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTags = async () => {
      if (query.length < 3) { setSuggestions([]); return; }
      try {
        const url = `https://www.instagram.com/web/search/topsearch/?query=${encodeURIComponent(query)}`;
        const response = await axios.get(url);
        const tags = response.data.hashtags.map((item: any) => item.hashtag.name);
        setSuggestions(tags);
      } catch {
        console.error("Error fetching Instagram tags");
      }
    };
    fetchTags();
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={e => { setQuery(e.target.value); setIsOpen(true); }}
        placeholder="Search Instagram Tags"
        className="border rounded p-2 w-full"
      />
      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded w-full max-h-60 overflow-y-auto">
          {suggestions.map(tag => (
            <li
              key={tag}
              onClick={() => { setQuery(tag); setIsOpen(false); onTagSelect(tag); }}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >{`#${tag}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InstagramProductTagsCombobox;
