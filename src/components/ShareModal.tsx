import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// In your component:
<DialogContent className="sm:max-w-[425px]">
  <DialogTitle>Share Post</DialogTitle>
  <DialogDescription>Choose how you want to share this post.</DialogDescription>
  
  {/* Your form elements */}
  <div className="grid gap-4 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="platform" className="text-right">Platform</Label>
      {/* Other form fields */}
    </div>
  </div>
  
  {/* Later in the component */}
  <DialogDescription>Successfully shared your post!</DialogDescription>
</DialogContent>