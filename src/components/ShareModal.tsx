"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ShareModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Share Post</DialogTitle>
        <DialogDescription>Choose how you want to share this post.</DialogDescription>
        {/* Add more content or form inputs here */}
      </DialogContent>
    </Dialog>
  );
}
