// C:\SocialSync\src\components\streams\StreamsView.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaPlus, 
  FaCog, 
  FaRedo 
} from "react-icons/fa";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function StreamsView() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <FaChevronLeft />
          </Button>
          <Button variant="ghost" size="icon">
            <FaChevronRight />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={handleRefresh}>
            <FaRedo className={refreshing ? "animate-spin" : ""} />
          </Button>
          <Button variant="ghost" size="icon">
            <FaCog />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Streams</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>
        <TabsContent value='all' className='mt-4'>
          <div className='grid gap-4'>All streams content here</div>
        </TabsContent>
        <TabsContent value='scheduled' className='mt-4'>
          <div className='grid gap-4'>Scheduled content here</div>
        </TabsContent>
        <TabsContent value='drafts' className='mt-4'>
          <div className='grid gap-4'>Drafts content here</div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end mt-4">
        <Button>
          <FaPlus className="mr-2" /> Add Stream
        </Button>
      </div>
    </div>
  );
}
