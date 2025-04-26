import DashboardLayout from "@/components/layout/DashboardLayout";
import StreamsView from "@/components/streams/StreamsView";

export default function EngagePage() {
  return (
    <DashboardLayout>
      <StreamsView />
    </DashboardLayout>
  );
}
