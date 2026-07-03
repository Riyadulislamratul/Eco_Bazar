import React, { useState } from "react";
import tags from "../../data/tags";

const TagFilter = ({ onTagsChange }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (slug) => {
    let updatedTags;

    if (selectedTags.includes(slug)) {
      updatedTags = selectedTags.filter((tag) => tag !== slug);
    } else {
      updatedTags = [...selectedTags, slug];
    }

    setSelectedTags(updatedTags);

    if (onTagsChange) {
      onTagsChange(updatedTags);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => {
        const active = selectedTags.includes(tag.slug);

        return (
          <button
            key={tag.id}
            onClick={() => toggleTag(tag.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300
              ${
                active
                  ? "border-green-600 bg-green-600 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-green-600 hover:text-green-600"
              }`}
          >
            {tag.name}
          </button>
        );
      })}
    </div>
  );
};

export default TagFilter;