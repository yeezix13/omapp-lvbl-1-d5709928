
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, TrendingUp } from "lucide-react";

export const Grades = () => {
  const semesters = [
    {
      id: 1,
      name: "S1 - Première année",
      subjects: [
        { name: "Mathématiques", grade: "16/20", coefficient: 3 },
        { name: "Informatique", grade: "18/20", coefficient: 4 },
        { name: "Physique", grade: "14/20", coefficient: 2 },
        { name: "Anglais", grade: "15/20", coefficient: 2 },
      ],
      average: "16.2"
    },
    {
      id: 2,
      name: "S2 - Première année",
      subjects: [
        { name: "Base de données", grade: "17/20", coefficient: 3 },
        { name: "Algorithmique", grade: "19/20", coefficient: 4 },
        { name: "Statistiques", grade: "15/20", coefficient: 2 },
        { name: "Communication", grade: "16/20", coefficient: 1 },
      ],
      average: "17.1"
    }
  ];

  const stats = [
    { label: "Moyenne générale", value: "16.2", icon: TrendingUp, color: "text-blue-600" },
    { label: "Matières validées", value: "18/20", icon: BookOpen, color: "text-green-600" },
    { label: "Crédits ECTS", value: "54/60", icon: Badge, color: "text-purple-600" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Notes et résultats</h1>
          <p className="text-gray-600 dark:text-gray-300">Consultez vos résultats académiques et votre parcours</p>
        </div>
        <Button className="bg-[#2f57ef] hover:bg-[#2347d4]">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter une note
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

      {/* Grades by Semester */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Détail des notes</h2>
        
        {semesters.map((semester) => (
          <Card key={semester.id} className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-gray-900 dark:text-white">{semester.name}</CardTitle>
                <Badge className="bg-[#2f57ef] text-white">
                  Moyenne: {semester.average}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Matière</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Note</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Coefficient</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Semestre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semester.subjects.map((subject, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="py-3 px-4 text-gray-900 dark:text-white">{subject.name}</td>
                        <td className="py-3 px-4 text-center">
                          <Badge 
                            variant="outline" 
                            className={`${
                              parseInt(subject.grade) >= 16 ? 'text-green-600 border-green-600' :
                              parseInt(subject.grade) >= 12 ? 'text-orange-600 border-orange-600' :
                              'text-red-600 border-red-600'
                            }`}
                          >
                            {subject.grade}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">{subject.coefficient}</td>
                        <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">S{semester.id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
