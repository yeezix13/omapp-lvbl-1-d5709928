
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TestTube, Clock, Users, Star, Play, CheckCircle, Clock3 } from "lucide-react";

export const Tests = () => {
  const availableTests = [
    {
      title: "Test de Communication Interpersonnelle",
      description: "Évaluez vos compétences en communication verbale et non-verbale",
      duration: "20 min",
      questions: 25,
      category: "Communication",
      level: "Intermédiaire",
      rating: 5
    },
    {
      title: "Évaluation du Leadership",
      description: "Mesurez votre capacité à diriger et motiver une équipe",
      duration: "30 min",
      questions: 35,
      category: "Leadership",
      level: "Avancé",
      rating: 5
    },
    {
      title: "Python Data Science",
      description: "Évaluation des compétences en analyse de données avec Python",
      duration: "50 min",
      questions: 40,
      category: "Hard Skills",
      level: "Avancé",
      rating: 4
    },
    {
      title: "Gestion du Stress",
      description: "Test d'évaluation de votre capacité à gérer le stress et la pression",
      duration: "20 min",
      questions: 25,
      category: "Soft Skills",
      level: "Intermédiaire",
      rating: 4
    }
  ];

  const completedTests = [
    {
      title: "Évaluation des compétences techniques",
      category: "Hard Skills",
      score: "85%",
      completedDate: "Il y a 2 heures",
      status: "completed"
    },
    {
      title: "Test de personnalité",
      category: "Soft Skills",
      score: "En cours",
      completedDate: "Il y a 1 jour",
      status: "in-progress"
    },
    {
      title: "Analyse des soft skills",
      category: "Soft Skills",
      score: "92%",
      completedDate: "Il y a 3 jours",
      status: "completed"
    }
  ];

  const stats = [
    { label: "Tests complétés", value: "3", icon: CheckCircle, color: "text-green-600" },
    { label: "Score moyen", value: "85%", icon: Star, color: "text-blue-600" },
    { label: "En cours", value: "1", icon: Clock3, color: "text-orange-600" },
    { label: "Disponibles", value: "4", icon: TestTube, color: "text-purple-600" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Communication": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300";
      case "Leadership": return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300";
      case "Hard Skills": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
      case "Soft Skills": return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
      case "Intermédiaire": return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300";
      case "Avancé": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tests et évaluations</h1>
        <p className="text-gray-600 dark:text-gray-300">Évaluez vos compétences et suivez votre progression</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800">
          <TabsTrigger 
            value="available"
            className="data-[state=active]:bg-[#2f57ef] data-[state=active]:text-white"
          >
            Tests disponibles
          </TabsTrigger>
          <TabsTrigger 
            value="history"
            className="data-[state=active]:bg-[#2f57ef] data-[state=active]:text-white"
          >
            Historique
          </TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {availableTests.map((test, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-gray-900 dark:text-white mb-2">{test.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className={getCategoryColor(test.category)}>
                          {test.category}
                        </Badge>
                        <Badge variant="outline" className={getLevelColor(test.level)}>
                          {test.level}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{test.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Durée: {test.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TestTube className="w-4 h-4" />
                        <span>Questions: {test.questions}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-[#2f57ef] hover:bg-[#2347d4] text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Commencer le test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Historique des tests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {completedTests.map((test, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      test.status === 'completed' ? 'bg-green-500' : 'bg-orange-500'
                    }`}>
                      {test.status === 'completed' ? 
                        <CheckCircle className="w-6 h-6 text-white" /> :
                        <Clock3 className="w-6 h-6 text-white" />
                      }
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{test.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getCategoryColor(test.category)} variant="secondary">
                          {test.category}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{test.completedDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-semibold ${
                      test.status === 'completed' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      {test.score}
                    </p>
                    {test.status === 'completed' && (
                      <p className="text-xs text-gray-500">Score estimé: 70-80%</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
