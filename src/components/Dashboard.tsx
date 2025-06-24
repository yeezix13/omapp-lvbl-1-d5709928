
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Overview } from "./Overview";
import { PersonalInfo } from "./PersonalInfo";
import { Grades } from "./Grades";
import { Skills } from "./Skills";
import { Tests } from "./Tests";
import { Motivations } from "./Motivations";
import { Analysis } from "./Analysis";

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard = ({ onLogout }: DashboardProps) => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "personal-info":
        return <PersonalInfo />;
      case "grades":
        return <Grades />;
      case "skills":
        return <Skills />;
      case "tests":
        return <Tests />;
      case "motivations":
        return <Motivations />;
      case "analysis":
        return <Analysis />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex">
        <Sidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onLogout={onLogout}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};
