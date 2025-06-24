
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Code, Users, Target, MessageSquare, Lightbulb, Plus } from "lucide-react";

export const Skills = () => {
  const hardSkills = [
    { name: "JavaScript", level: 85, category: "Programmation", tests: 3 },
    { name: "Python", level: 90, category: "Programmation", tests: 5 },
    { name: "React", level: 80, category: "Développement Web", tests: 4 },
    { name: "Base de données", level: 75, category: "Données", tests: 2 },
  ];

  const softSkills = [
    { name: "Communication", level: 85, category: "Relationnel", tests: 2 },
    { name: "Travail d'équipe", level: 78, category: "Collaboration", tests: 3 },
    { name: "Leadership", level: 65, category: "Management", tests: 1 },
    { name: "Créativité", level: 72, category: "Innovation", tests: 2 },
    { name: "Adaptabilité", level: 80, category: "Flexibilité", tests: 1 },
    { name: "Résolution de problèmes", level: 88, category: "Analytique", tests: 4 },
  ];

  const skillIcons = {
    "Programmation": Code,
    "Développement Web": Code,
    "Données": Brain,
    "Relationnel": MessageSquare,
    "Collaboration": Users,
    "Management": Target,
    "Innovation": Lightbulb,
    "Flexibilité": Brain,
    "Analytique": Brain,
  };

  const getSkillColor = (level: number) => {
    if (level >= 80) return "text-green-600 bg-green-100 dark:bg-green-900/20";
    if (level >= 60) return "text-blue-600 bg-blue-100 dark:bg-blue-900/20";
    return "text-orange-600 bg-orange-100 dark:bg-orange-900/20";
  };

  const getProgressColor = (level: number) => {
    if (level >= 80) return "bg-green-500";
    if (level >= 60) return "bg-blue-500";
    return "bg-orange-500";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Compétences et aptitudes</h1>
          <p className="text-gray-600 dark:text-gray-300">Développez vos compétences comportementales et relationnelles</p>
        </div>
        <Button className="bg-[#2f57ef] hover:bg-[#2347d4]">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Compétences évaluées</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <Brain className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Niveau moyen</p>
                <p className="text-3xl font-bold">76%</p>
              </div>
              <Target className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Tests complétés</p>
                <p className="text-3xl font-bold">22</p>
              </div>
              <Code className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="hard-skills" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800">
          <TabsTrigger 
            value="hard-skills"
            className="data-[state=active]:bg-[#2f57ef] data-[state=active]:text-white"
          >
            Hard Skills
          </TabsTrigger>
          <TabsTrigger 
            value="soft-skills"
            className="data-[state=active]:bg-[#2f57ef] data-[state=active]:text-white"
          >
            Soft Skills
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hard-skills" className="space-y-6">
          <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Mes compétences techniques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {hardSkills.map((skill, index) => {
                const IconComponent = skillIcons[skill.category as keyof typeof skillIcons] || Code;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${getProgressColor(skill.level)} rounded-lg flex items-center justify-center shadow-md`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="secondary" className={getSkillColor(skill.level)}>
                              {skill.category}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {skill.tests} test{skill.tests > 1 ? 's' : ''} effectué{skill.tests > 1 ? 's' : ''}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.level}%</span>
                        <div className="text-xs text-gray-500 mt-1">
                          {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Bon' : 'En cours'}
                        </div>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="soft-skills" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = skillIcons[skill.category as keyof typeof skillIcons] || Users;
              return (
                <Card key={index} className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 ${getProgressColor(skill.level)} rounded-xl flex items-center justify-center shadow-md`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className={getSkillColor(skill.level)}>
                            {skill.level}%
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {skill.tests} test{skill.tests > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                    <div className="mt-2 text-xs text-gray-500">
                      {skill.level >= 80 ? 'Excellent' : skill.level >= 60 ? 'Bon' : 'À développer'}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
