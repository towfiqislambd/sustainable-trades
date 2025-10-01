import { FormData } from "@/app/dashboard/basic/create-listing/page";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

interface MetaTagsProps {
  metaTags: string[];
  setMetaTags: React.Dispatch<React.SetStateAction<string[]>>;
  setValue: UseFormSetValue<FormData>;
}

const MetaTags = ({ metaTags, setMetaTags, setValue }: MetaTagsProps) => {
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim() !== "") {
      const updatedTags = [...metaTags, newTag.trim()];
      setMetaTags(updatedTags);
      setValue("tags", updatedTags); // ✅ backend expects "tags"
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    const updatedTags = metaTags.filter(t => t !== tag);
    setMetaTags(updatedTags);
    setValue("tags", updatedTags); // ✅ backend expects "tags"
  };

  return (
    <div>
      <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
        Meta Tags
      </h3>

      {/* Tag List */}
      <div className="flex flex-wrap gap-2 mt-2">
        {metaTags.map((tag, idx) => (
          <span
            key={idx}
            className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleRemoveTag(tag)}
              className="ml-1 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Input for new tags */}
      <div className="flex gap-2 mt-2 relative">
        <input
          type="text"
          value={newTag}
          onChange={e => setNewTag(e.target.value)}
          className="flex-1 border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg py-4 pl-10"
          placeholder="Enter a tag"
        />
        <button
          type="button"
          onClick={handleAddTag}
          className="absolute top-1/2 -translate-y-1/2 left-5 cursor-pointer text-xl font-bold text-[#13141D]"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default MetaTags;
