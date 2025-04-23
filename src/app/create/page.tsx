import DashboardLayout from "@/components/layout/DashboardLayout";
import PostComposer from "@/components/composer/PostComposer";

export default function CreatePage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <PostComposer />
      </div>
    </DashboardLayout>
  );
}
