
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { User, BookOpen, Brain, Target, BarChart3, CheckCircle } from "lucide-react";

export const Overview = () => {
  const progressData = [
    { title: "Informations personnelles", progress: 85, icon: User, color: "bg-blue-500" },
    { title: "Notes et résultats", progress: 60, icon: BookOpen, color: "bg-green-500" },
    { title: "Compétences", progress: 40, icon: Brain, color: "bg-purple-500" },
    { title: "Tests d'évaluation", progress: 25, icon: BarChart3, color: "bg-orange-500" },
    { title: "Motivations", progress: 10, icon: Target, color: "bg-red-500" },
  ];

  const recentActivities = [
    { title: "Informations académiques", subtitle: "Profil mis à jour", time: "Il y a 1 jour", status: "completed" },
    { title: "Test de personnalité", subtitle: "En cours", time: "Il y a 2 heures", status: "in-progress" },
    { title: "Évaluation des compétences", subtitle: "Test complété", time: "Il y a 2 heures", status: "completed" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Vue d'ensemble</h1>
        <p className="text-gray-600 dark:text-gray-300">Suivez votre progression et vos performances</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Tests complétés</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <CheckCircle className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Progression</p>
                <p className="text-3xl font-bold">68%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Objectifs atteints</p>
                <p className="text-3xl font-bold">5/8</p>
              </div>
              <Target className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Temps passé</p>
                <p className="text-3xl font-bold">24h</p>
              </div>
              <Brain className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Section */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Progression par domaine</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {progressData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center shadow-md`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{item.title}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Activités récentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  activity.status === 'completed' ? 'bg-green-500' : 'bg-orange-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white">{activity.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{activity.subtitle}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
