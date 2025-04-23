"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaImage, FaHashtag, FaSmile, FaMagic } from "react-icons/fa";

export default function PostComposer() {
  const [content, setContent] = useState("");
  const [accountSelected, setAccountSelected] = useState("");

  return (
    <div className="bg-white rounded-md shadow-sm p-5 w-full max-w-2xl mx-auto">
      <div className="mb-5">
        <h2 className="text-lg font-medium mb-4">Create a post</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Publish to</label>
            <Select value={accountSelected} onValueChange={setAccountSelected}>
              <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md">
                <SelectValue placeholder="Select a social account (required)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <span className="py-1 px-3 bg-blue-100 text-blue-800 text-xs font-medium rounded mr-2">Your post</span>
            </div>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your caption, then customize it for each social network"
              className="min-h-24 resize-none w-full border border-gray-300 rounded-md"
            />
            <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
              <div>{content.length} / 280</div>
              <div className="flex items-center">
                <span className="mr-1">💡</span>
                <span>Enhance with DesignPerfect AI</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-500">
                <FaImage />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <FaHashtag />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <FaSmile />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <FaMagic />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center space-x-2 mt-6">
        <div className="space-x-2">
          <Button variant="outline" className="bg-white">Save as draft</Button>
          <Button variant="outline" className="bg-white">Schedule for later</Button>
        </div>

        <div>
          <Button
            className="bg-slate-800 text-white hover:bg-slate-700"
            disabled={!accountSelected || !content.trim()}
          >
            Post now
          </Button>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-10">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-md">
                <svg className="text-gray-400 w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Your account<br />
              Today
            </p>
            <p className="text-gray-500 text-xs mt-2">Write your caption, then customize it for each social network</p>
          </div>
        </div>
      </div>
    </div>
  );
}
