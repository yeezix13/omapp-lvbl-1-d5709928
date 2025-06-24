
import { GraduationCap, Home, User, BookOpen, Brain, Target, BarChart3, LogOut, Sun, Moon, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLogout: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const menuItems = [
  { id: "overview", label: "Vue d'ensemble", icon: Home },
  { id: "personal-info", label: "Informations personnelles", icon: User },
  { id: "grades", label: "Notes", icon: BookOpen },
  { id: "skills", label: "Compétences et aptitudes", icon: Brain },
  { id: "tests", label: "Tests", icon: TestTube },
  { id: "motivations", label: "Motivations et aspirations", icon: Target },
  { id: "analysis", label: "Analyse", icon: BarChart3 },
];

export const Sidebar = ({ activeSection, setActiveSection, onLogout, isDarkMode, toggleDarkMode }: SidebarProps) => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#2f57ef] rounded-xl flex items-center justify-center shadow-md">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">OrienteMoi</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                activeSection === item.id
                  ? "bg-[#2f57ef] text-white shadow-lg"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Icon className={`w-5 h-5 ${
                activeSection === item.id ? "text-white" : "text-gray-500 group-hover:text-[#2f57ef]"
              }`} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom controls */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
        <Button
          onClick={toggleDarkMode}
          variant="ghost"
          className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isDarkMode ? <Sun className="w-5 h-5 mr-3" /> : <Moon className="w-5 h-5 mr-3" />}
          {isDarkMode ? "Mode clair" : "Mode sombre"}
        </Button>
        
        <Button
          onClick={onLogout}
          variant="ghost"
          className="w-full justify-start text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Se déconnecter
        </Button>
      </div>
    </div>
  );
};
