import DashboardLayout from "@/components/layout/DashboardLayout";
import PostComposer from "@/components/composer/PostComposer";
import ShareModal from "@/components/ShareModal";

export default function CreatePage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <PostComposer />
        
        <div className="mt-6">
          <ShareModal />
        </div>
      </div>
    </DashboardLayout>
  );
}