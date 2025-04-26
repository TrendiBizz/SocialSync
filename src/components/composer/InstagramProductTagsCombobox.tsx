import React, { useState, useEffect, useCallback } from 'react';

export interface InstagramProductTagsComboboxProps {
  onSelectTag: (tag: string) => void;
}

const InstagramProductTagsCombobox: React.FC<InstagramProductTagsComboboxProps> = ({ onSelectTag }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchTags = useCallback(async (search: string) => {
    // TODO: replace with your actual tag-fetching endpoint
    const res = await fetch(\/api/instagram-tags?q=\\);
    const data = await res.json();
    setSuggestions(data.tags || []);
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      fetchTags(query);
    } else {
      setSuggestions([]);
    }
  }, [query, fetchTags]);

  const handleSelect = (tag: string) => {
    onSelectTag(tag);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="instagram-tags-combobox">
      <input
        type="text"
        placeholder="Search Instagram tags..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
      {suggestions.length > 0 && (
        <ul className="border mt-1 rounded bg-white max-h-48 overflow-auto">
          {suggestions.map(tag => (
            <li
              key={tag}
              onClick={() => handleSelect(tag)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              #{tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InstagramProductTagsCombobox;
