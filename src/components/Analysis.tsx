
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Download, CreditCard, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";

export const Analysis = () => {
  const analysisStatus = {
    completed: 68,
    totalSections: 8,
    isReady: false
  };

  const recommendations = [
    {
      category: "Formations recommandées",
      items: ["Master en Intelligence Artificielle", "Certification Cloud Computing", "Formation Leadership"]
    },
    {
      category: "Secteurs adaptés",
      items: ["Développement logiciel", "Consulting tech", "Startup innovation"]
    },
    {
      category: "Compétences à développer",
      items: ["Communication interpersonnelle", "Gestion de projet", "Machine Learning"]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Analyse et recommandations</h1>
        <p className="text-gray-600 dark:text-gray-300">Découvrez votre analyse personnalisée et les recommandations d'orientation</p>
      </div>

      {/* Analysis Status */}
      <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
            <BarChart3 className="w-5 h-5 text-[#2f57ef]" />
            <span>État de votre profil</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Progression globale</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{analysisStatus.completed}%</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-300">Sections complétées</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {Math.floor(analysisStatus.completed / 100 * analysisStatus.totalSections)}/{analysisStatus.totalSections}
              </p>
            </div>
          </div>
          
          <Progress value={analysisStatus.completed} className="h-3" />
          
          <div className="flex items-center space-x-2">
            {analysisStatus.isReady ? (
              <>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-600 dark:text-green-400 font-medium">Analyse prête</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5 text-orange-500" />
                <span className="text-orange-600 dark:text-orange-400 font-medium">Complétez votre profil pour une analyse personnalisée</span>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Preliminary Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {recommendations.map((section, index) => (
          <Card key={index} className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 dark:text-white">{section.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-[#2f57ef]" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analysis Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Analyse complète</h3>
                <p className="text-blue-100 text-sm">Rapport détaillé de votre profil et recommandations personnalisées</p>
              </div>
              <BarChart3 className="w-12 h-12 text-blue-200" />
            </div>
            <Button 
              variant="outline" 
              className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
              disabled={!analysisStatus.isReady}
            >
              <Download className="w-4 h-4 mr-2" />
              {analysisStatus.isReady ? "Télécharger l'analyse" : "Compléter le profil"}
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Rapport premium</h3>
                <p className="text-green-100 text-sm">Analyse approfondie avec entretien personnalisé et plan d'action</p>
              </div>
              <CreditCard className="w-12 h-12 text-green-200" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold">49€</span>
              <Badge className="bg-white/20 text-white">Premium</Badge>
            </div>
            <Button 
              variant="outline" 
              className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Commander le rapport
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Prochaines étapes recommandées</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="w-8 h-8 bg-[#2f57ef] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Complétez vos tests d'évaluation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Passez les tests restants pour une analyse plus précise de vos compétences.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="w-8 h-8 bg-[#2f57ef] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Définissez vos motivations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Précisez vos objectifs professionnels et vos valeurs importantes.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="w-8 h-8 bg-[#2f57ef] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Recevez votre analyse</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Une fois votre profil complet, accédez à votre analyse personnalisée.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
