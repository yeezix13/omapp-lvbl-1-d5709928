
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, TrendingUp } from "lucide-react";
import { useGrades } from "../hooks/useGrades";

export const Grades = () => {
  const { grades, loading, error } = useGrades();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2f57ef]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-8">
        <p>Erreur lors du chargement des notes : {error}</p>
      </div>
    );
  }

  // Group grades by semester and year
  const groupedGrades = grades.reduce((acc, grade) => {
    const key = `${grade.year}-${grade.semester}`;
    if (!acc[key]) {
      acc[key] = {
        year: grade.year,
        semester: grade.semester,
        subjects: []
      };
    }
    acc[key].subjects.push(grade);
    return acc;
  }, {} as Record<string, { year: number; semester: string; subjects: typeof grades }>);

  const semesters = Object.values(groupedGrades).sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return a.semester.localeCompare(b.semester);
  });

  // Calculate statistics
  const totalGrades = grades.length;
  const averageGrade = totalGrades > 0 ? (grades.reduce((sum, grade) => sum + grade.grade, 0) / totalGrades).toFixed(1) : "0";
  const validatedSubjects = grades.filter(grade => grade.grade >= 10).length;

  const stats = [
    { label: "Moyenne générale", value: `${averageGrade}/20`, icon: TrendingUp, color: "text-blue-600" },
    { label: "Matières validées", value: `${validatedSubjects}/${totalGrades}`, icon: BookOpen, color: "text-green-600" },
    { label: "Notes enregistrées", value: totalGrades.toString(), icon: Badge, color: "text-purple-600" },
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
        
        {semesters.length === 0 ? (
          <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">Aucune note enregistrée pour le moment.</p>
              <Button className="mt-4 bg-[#2f57ef] hover:bg-[#2347d4]">
                <Plus className="w-4 h-4 mr-2" />
                Ajouter votre première note
              </Button>
            </CardContent>
          </Card>
        ) : (
          semesters.map((semester, index) => {
            const semesterAverage = semester.subjects.length > 0 
              ? (semester.subjects.reduce((sum, subject) => sum + subject.grade, 0) / semester.subjects.length).toFixed(1)
              : "0";
            
            return (
              <Card key={index} className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-gray-900 dark:text-white">
                      {semester.semester} - {semester.year}
                    </CardTitle>
                    <Badge className="bg-[#2f57ef] text-white">
                      Moyenne: {semesterAverage}/20
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
                          <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {semester.subjects.map((subject) => (
                          <tr key={subject.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <td className="py-3 px-4 text-gray-900 dark:text-white">{subject.subject}</td>
                            <td className="py-3 px-4 text-center">
                              <Badge 
                                variant="outline" 
                                className={`${
                                  subject.grade >= 16 ? 'text-green-600 border-green-600' :
                                  subject.grade >= 12 ? 'text-orange-600 border-orange-600' :
                                  subject.grade >= 10 ? 'text-yellow-600 border-yellow-600' :
                                  'text-red-600 border-red-600'
                                }`}
                              >
                                {subject.grade}/20
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-300">
                              {new Date(subject.created_at).toLocaleDateString('fr-FR')}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};
