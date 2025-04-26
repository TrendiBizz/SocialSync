"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { FaImage, FaHashtag, FaSmile, FaMagic } from "react-icons/fa";

const platforms = [
  { label: "Facebook", value: "facebook" },
  { label: "Instagram", value: "instagram" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "Twitter", value: "twitter" }
];

const PostComposer = () => {
  const [postText, setPostText] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>(platforms[0].value);

  const handleGenerateContent = () => {
    const generatedContent = "? Here's some AI-generated content for your post!";
    setPostText(generatedContent);
  };

  const handleAddHashtag = () => {
    setPostText((prev) => prev + " #NewHashtag");
  };

  const handleAddEmoji = () => {
    setPostText((prev) => prev + " ??");
  };

  const handleAddImage = () => {
    alert("Image upload feature coming soon!");
  };

  const handlePost = () => {
    alert(Posting to : );
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Compose Post</h2>
      <Textarea
        placeholder="What's on your mind?"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        className="mb-4"
      />
      <div className="flex gap-2 mb-4">
        <Button variant="outline" onClick={handleAddImage}>
          <FaImage className="mr-2" /> Add Image
        </Button>
        <Button variant="outline" onClick={handleAddHashtag}>
          <FaHashtag className="mr-2" /> Add Hashtag
        </Button>
        <Button variant="outline" onClick={handleAddEmoji}>
          <FaSmile className="mr-2" /> Add Emoji
        </Button>
        <Button variant="outline" onClick={handleGenerateContent}>
          <FaMagic className="mr-2" /> Generate Content
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Platform" />
          </SelectTrigger>
          <SelectContent>
            {platforms.map((platform) => (
              <SelectItem key={platform.value} value={platform.value}>
                {platform.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handlePost} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
          Post
        </Button>
      </div>
    </div>
  );
};

export default PostComposer;
