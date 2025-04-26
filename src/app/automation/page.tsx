import DashboardLayout from "@/components/layout/DashboardLayout";
import DMAutomation from "@/components/dm-automation/DMAutomation";

export default function AutomationPage() {
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 h-full">
        <DMAutomation />
      </div>
    </DashboardLayout>
  );
}
