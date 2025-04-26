"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaTimes, FaInstagram, FaCog } from "react-icons/fa";

export default function DMAutomation() {
  const [account, setAccount] = useState("trendi456");

  return (
    <div className="bg-white rounded-md shadow-sm p-5 w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">DM automation</h2>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500"
        >
          <FaTimes className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-x-12">
        {/* Left section - Steps */}
        <div className="w-1/2">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />

            <div className="relative flex items-center mb-8">
              <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <div className="ml-4 font-medium">Select a post</div>
            </div>

            <div className="relative flex items-center mb-8">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-gray-600" />
              </div>
              <div className="ml-4 font-medium text-gray-600">Comment replies</div>
            </div>

            <div className="relative flex items-center mb-8">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-gray-600" />
              </div>
              <div className="ml-4 font-medium text-gray-600">Direct message</div>
            </div>

            <div className="relative flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-gray-600" />
              </div>
              <div className="ml-4 font-medium text-gray-600">Review and save</div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-medium mb-4">Create a DM automation</h3>
            <p className="text-sm text-gray-600 mb-6">
              Invite people to use a specific keyword in the comments of an Instagram Post or
              Reel, and automatically reply to their comment and send them a direct message.
            </p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Social account</label>
              <Select value={account} onValueChange={setAccount}>
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md">
                  <SelectValue>{account}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trendi456">trendi456</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Right section - Preview */}
        <div className="w-1/2">
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="bg-rose-50 p-3 flex items-center gap-2">
              <FaInstagram className="text-rose-600 text-lg" />
              <span className="font-medium">Instagram post and keyword</span>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="/icons/socialsync-logo.svg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-medium">trendi456</div>
                <div className="ml-auto">
                  <Button variant="ghost" size="icon" className="text-gray-500 h-8 w-8">
                    <FaCog className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center py-20 bg-gray-100 rounded-md">
                <div className="w-16 h-16 opacity-25">
                  <img
                    src="/icons/socialsync-logo.svg"
                    alt="SocialSync Owl"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <Button className="bg-slate-800 text-white hover:bg-slate-700">
          Continue
        </Button>
      </div>
    </div>
  );
}
