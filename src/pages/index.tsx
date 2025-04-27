import React, { useState } from "react";
import Link from "next/link";

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <div>This is the dashboard content.</div>;
      case "analytics":
        return <div>This is the analytics content.</div>;
      case "planner":
        return <div>This is the planner content.</div>;
      case "settings":
        return <div>This is the settings content.</div>;
      default:
        return <div>Select a tab to view content.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to SocialSync</h1>

        {/* Tab Navigation */}
        <div className="mb-4">
          <button
            className={`px-4 py-2 mr-4 rounded-lg ${
              activeTab === "dashboard" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`px-4 py-2 mr-4 rounded-lg ${
              activeTab === "analytics" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("analytics")}
          >
            Analytics
          </button>
          <button
            className={`px-4 py-2 mr-4 rounded-lg ${
              activeTab === "planner" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("planner")}
          >
            Planner
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === "settings" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </div>

        {/* Content for each tab */}
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default IndexPage;
