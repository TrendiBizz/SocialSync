"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format, addDays, startOfWeek, endOfWeek } from "date-fns";
import {
  FaCog,
  FaChevronLeft,
  FaChevronRight,
  FaShareAlt,
  FaList,
  FaTable,
  FaCalendarAlt,
  FaFilter,
  FaRegWindowClose,
  FaChevronDown
} from "react-icons/fa";

export default function PlannerView() {
  const [date, setDate] = useState(new Date());
  const [showRecommendation, setShowRecommendation] = useState(true);

  const startDate = startOfWeek(date, { weekStartsOn: 0 });
  const endDate = endOfWeek(date, { weekStartsOn: 0 });

  // Generate weekdays
  const weekdays = [];
  for (let i = 0; i < 7; i++) {
    weekdays.push(addDays(startDate, i));
  }

  return (
    <div className="flex flex-col h-full">
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <Tabs defaultValue="calendar" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-medium">Calendar</h1>
                <TabsList className="border border-gray-200 rounded-md">
                  <TabsTrigger value="calendar" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
                    Calendar
                  </TabsTrigger>
                  <TabsTrigger value="drafts" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
                    Drafts
                  </TabsTrigger>
                  <TabsTrigger value="content" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
                    Content
                  </TabsTrigger>
                  <TabsTrigger value="dm-automation" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white">
                    DM automation
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <FaCog className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <FaShareAlt className="h-4 w-4" />
                </Button>
                <div className="border-l border-gray-300 h-6 mx-2" />
                <Button
                  className="bg-slate-800 text-white hover:bg-slate-700 flex items-center gap-2"
                >
                  Create a post
                </Button>
              </div>
            </div>

            <TabsContent value="calendar" className="m-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-gray-600 h-8 w-8">
                    <FaChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">Today</span>
                  <Button variant="ghost" size="icon" className="text-gray-600 h-8 w-8">
                    <FaChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="text-sm flex items-center gap-1 h-8">
                    Apr 20 - 26, 2025 <FaChevronDown className="h-3 w-3" />
                  </Button>
                </div>

                <div className="flex items-center border border-gray-200 rounded-md">
                  <Button variant="ghost" size="sm" className="text-xs h-8 w-8 p-0">
                    <FaList className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs h-8 w-8 p-0 bg-gray-100">
                    <FaTable className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs h-8 w-8 p-0">
                    <FaCalendarAlt className="h-4 w-4" />
                  </Button>
                </div>

                <Button variant="outline" size="sm" className="text-sm flex items-center gap-1 h-8">
                  Filters <FaFilter className="h-3 w-3" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </header>

      <div className="flex-1 overflow-auto relative">
        <div className="grid grid-cols-7 border-b border-gray-200">
          <div className="p-2 border-r border-gray-200 text-center bg-gray-50">
            <div className="text-xs text-gray-500">GMT</div>
            <div className="text-xs text-gray-500">-05:00</div>
          </div>

          {weekdays.map((day) => (
            <div
              key={format(day, 'yyyy-MM-dd')}
              className="p-2 border-r border-gray-200 text-center"
            >
              <div className="text-sm">{format(day, 'EEE')}</div>
              <div className="text-xl font-medium">{format(day, 'd')}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          <div className="border-r border-gray-200 p-2">
            {/* Time column */}
          </div>

          {weekdays.map((day, index) => (
            <div
              key={format(day, 'yyyy-MM-dd')}
              className="border-r border-gray-200 min-h-[600px] relative"
            >
              {index === 2 && (
                <div className="absolute top-8 left-4 right-4 bg-blue-100 p-2 rounded text-xs text-blue-800">
                  <div>Recommended time</div>
                  <div>7:00 AM</div>
                </div>
              )}

              {index === 1 && (
                <div className="absolute top-4 left-4 right-4 bg-teal-700 text-white p-2 rounded text-xs">
                  World Immunization Week
                </div>
              )}

              {index === 2 && (
                <div className="absolute top-4 left-4 right-4 bg-teal-700 text-white p-2 rounded text-xs">
                  Earth Day
                </div>
              )}

              {index === 6 && (
                <div className="absolute top-4 left-4 right-4 bg-teal-700 text-white p-2 rounded text-xs">
                  World Veterinary Day
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showRecommendation && (
        <div className="absolute top-1/3 left-1/3 w-96 bg-white border border-purple-200 rounded-md shadow-lg">
          <div className="p-6 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-gray-400"
              onClick={() => setShowRecommendation(false)}
            >
              <FaRegWindowClose className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                <FaCalendarAlt className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium">Schedule when your audience is most active</h3>
            </div>

            <p className="text-gray-600 mb-4">
              Your Planner will highlight the best times to post each week, based on
              when your audience is online and most engaged.
            </p>

            <p className="text-gray-600 mb-6">
              The more you schedule, the smarter the recommendations.
            </p>

            <div className="flex justify-center">
              <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                Schedule a post
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
