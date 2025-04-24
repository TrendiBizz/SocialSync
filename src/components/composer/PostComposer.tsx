"use client";

import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// Use Lucide icons
import { Image as ImageIcon, Hash, Smile, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils"; // Import cn for potential future use

export default function PostComposer() {
  const [accountSelected, setAccountSelected] = useState<string>("");
  const [caption, setCaption] = useState<string>("");

  const handleCaptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(e.target.value);
  };

  return (
    // Use card styling for the composer background, referencing config colors/radius/border
    <div className={cn(
        "bg-card text-card-foreground rounded-lg border border-border shadow-sm p-5 w-full max-w-2xl mx-auto"
      )}
    >
      <Select value={accountSelected} onValueChange={setAccountSelected}>
         {/* Trigger uses styles from select.tsx */}
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a social account (required)" />
        </SelectTrigger>
         {/* Content uses styles from select.tsx */}
        <SelectContent>
          <SelectItem value="facebook">Facebook</SelectItem>
          <SelectItem value="twitter">Twitter</SelectItem>
          <SelectItem value="linkedin">LinkedIn</SelectItem>
          <SelectItem value="instagram">Instagram</SelectItem>
        </SelectContent>
      </Select>

       {/* Textarea uses styles from textarea.tsx */}
      <Textarea
        className="mt-4 w-full"
        placeholder="Write your caption here..."
        value={caption}
        onChange={handleCaptionChange}
      />

      <div className="mt-4 flex flex-wrap gap-2"> {/* Use gap for better spacing */}
        {/* Use Button with variant="outline" and size="sm" */}
        <Button type="button" variant="outline" size="sm">
          <ImageIcon className="mr-2 h-4 w-4" /> Add Image
        </Button>
        <Button type="button" variant="outline" size="sm">
          <Hash className="mr-2 h-4 w-4" /> Add Hashtags
        </Button>
        <Button type="button" variant="outline" size="sm">
          <Smile className="mr-2 h-4 w-4" /> Add Emoji
        </Button>
        <Button type="button" variant="outline" size="sm">
          <Sparkles className="mr-2 h-4 w-4" /> AI Assist
        </Button>
      </div>

      <div className="mt-4">
         {/* Use default Button */}
        <Button type="submit" className="w-full">
          Post
        </Button>
      </div>
    </div>
  );
}