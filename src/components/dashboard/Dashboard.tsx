"use client";

import { Button } from "@/components/ui/button";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInfoCircle,
  FaFileAlt,
  FaUser,
  FaCheck,
  FaPlus,
  FaArrowRight,
  FaPlusCircle,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle
} from "react-icons/fa";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex-1 p-8 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mr-3">
            TRIAL ENDS IN 21 DAYS
          </div>
          <h1 className="text-2xl font-medium">Welcome, Jo!</h1>
        </div>

        <Button
          className="bg-slate-800 text-white hover:bg-slate-700 flex items-center gap-2"
          asChild
        >
          <Link href="/create">Create a post</Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium mb-3">Post across networks</h2>
          <div className="border border-gray-200 rounded-md p-4 flex justify-center">
            <img src="/icons/socialsync-logo.svg" alt="Post across networks" className="h-12 opacity-50" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium mb-3">Post about a trend</h2>
          <div className="border border-gray-200 rounded-md p-4 flex justify-center">
            <img src="/icons/socialsync-logo.svg" alt="Post about a trend" className="h-12 opacity-50" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium mb-3">Start with AI</h2>
          <div className="border border-gray-200 rounded-md p-4 flex justify-center">
            <img src="/icons/socialsync-logo.svg" alt="Start with AI" className="h-12 opacity-50" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2">
          <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Social performance score</h2>
              <div className="text-gray-500">
                <FaInfoCircle />
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-3">For Feb 21, 2025</div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xl mr-4">
                70
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 h-2 rounded-full w-full">
                  <div className="bg-green-500 h-2 rounded-full w-[70%]" />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-lg font-medium mb-4">Your recommendations</h3>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="text-gray-400 mt-1">
                    <FaInfoCircle />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Boost reach with holiday content</h4>
                    <p className="text-sm text-gray-600 mb-1">
                      Seasonal holiday posts provide great opportunities for brands to reach like-minded people.
                    </p>
                    <Link href="/" className="text-sm text-blue-600">
                      Get ideas for major holidays coming up
                    </Link>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-gray-400 mt-1">
                    <FaInfoCircle />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Make the most of hashtags</h4>
                    <p className="text-sm text-gray-600 mb-1">
                      When used strategically, hashtags are still effective at getting your content in front of new people.
                    </p>
                    <Link href="/" className="text-sm text-blue-600">
                      Learn how to research and use the right hashtags on social
                    </Link>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-gray-400 mt-1">
                    <FaInfoCircle />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Get your post length right</h4>
                    <p className="text-sm text-gray-600 mb-1">
                      While short captions can work, being a bit more generous with your writing lets you tell your story and engage your audience.
                    </p>
                    <Link href="/" className="text-sm text-blue-600">
                      Read about optimal post lengths
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
            <div className="flex justify-between mb-3">
              <h2 className="text-lg font-medium">Get started - earn a reward!</h2>
              <Button variant="ghost" size="icon" className="text-gray-500 h-6 w-6">
                <span>×</span>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="min-w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <FaCheck className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm font-medium">Add another social account</p>
                  <Link href="/" className="text-xs text-blue-600">Connect to additional social account</Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <FaCheck className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm font-medium">Schedule 3 posts</p>
                  <Link href="/create" className="text-xs text-blue-600">Create and schedule</Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-6 h-6 flex items-center justify-center text-gray-400">
                  3
                </div>
                <div>
                  <p className="text-sm font-medium">Report on your data with Analytics</p>
                  <span className="text-xs text-gray-500">See how your posts are performing</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <FaPlusCircle className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm font-medium">Unlock your reward!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-medium">Recommended apps</h2>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">FREE for limited time</span>
            </div>

            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                  <FaCheckCircle className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">monday.com</p>
                  <p className="text-xs text-gray-500">Upload content direct from Content Plan</p>
                </div>
              </div>
              <Link href="/" className="text-xs text-blue-600 flex items-center">
                Learn more <FaArrowRight className="ml-1 h-2 w-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium mb-4">Listening</h2>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Trending topics</h3>
            <div className="text-xs text-gray-500 mb-4">Last 24 hours, worldwide</div>

            <div className="mb-4">
              <h4 className="text-sm font-medium mb-1">Interest</h4>
              <div className="rounded border border-gray-200 p-2 flex justify-between items-center">
                <span>Business and Finance</span>
                <span className="text-gray-400">•</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Tax Policy Changes Spark Debate</h4>
                <p className="text-xs text-gray-600 mb-2">Governments around the world are grappling with tax policy adjustments and their impact...</p>
                <Button variant="outline" size="sm" className="text-xs h-8 flex items-center gap-1">
                  <FaFileAlt className="h-3 w-3" /> Create draft post
                </Button>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-1">Argentina Lifts Dollar Ceilings</h4>
                <p className="text-xs text-gray-600 mb-2">The Argentine government has lifted the currency controls on the dollar, allowing...</p>
                <Button variant="outline" size="sm" className="text-xs h-8 flex items-center gap-1">
                  <FaFileAlt className="h-3 w-3" /> Create draft post
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              <Button variant="ghost" size="icon" className="text-gray-500 h-6 w-6">
                <FaChevronLeft className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 h-6 w-6">
                <FaChevronRight className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Quick search</h3>
            <p className="text-xs text-gray-600 mb-4">Deep dive into a topic, company, hashtag and so much more</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter a search term"
                className="flex-1 border border-gray-300 rounded-l-md p-2 text-sm"
              />
              <Button className="bg-slate-800 text-white hover:bg-slate-700 rounded-l-none">
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Scheduled posts</h2>
              <Link href="/plan" className="text-sm text-blue-600">View all scheduled</Link>
            </div>

            <div className="text-sm text-gray-500 mb-2">Created in SocialSync</div>

            <div className="flex items-center justify-center py-12 text-gray-400">
              <div className="text-center">
                <p className="mb-3">No scheduled posts</p>
                <Button variant="outline" className="mt-2" asChild>
                  <Link href="/create">Create a post</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Social accounts</h2>
              <Link href="/" className="text-sm text-blue-600">See all accounts</Link>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src="/icons/socialsync-logo.svg"
                    alt="trendi456"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">trendi456</p>
                </div>
              </div>

              <Button variant="outline" className="w-full">Connect more accounts</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 text-center mb-8">
        <p className="text-gray-600 mb-4">Start drafting content to edit and publish whenever you'd like.</p>
        <div className="flex justify-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/create?draft=true">Create a draft</Link>
          </Button>
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <Link href="/">
              <FaUser className="h-3 w-3" /> Draft post with AI
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
