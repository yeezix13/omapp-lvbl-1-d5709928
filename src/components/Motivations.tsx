
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Briefcase, Users, Edit } from "lucide-react";

export const Motivations = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Motivations et aspirations</h1>
          <p className="text-gray-600 dark:text-gray-300">Définissez vos objectifs et vos valeurs professionnelles</p>
        </div>
        <Button className="bg-[#2f57ef] hover:bg-[#2347d4]">
          <Edit className="w-4 h-4 mr-2" />
          Modifier
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Professional Objectives */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <Target className="w-5 h-5 text-[#2f57ef]" />
              <span>Objectifs professionnels</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Court terme (1-2 ans)</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Obtenir un stage dans une entreprise tech innovante et développer mes compétences en développement full-stack.
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Moyen terme (3-5 ans)</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Devenir développeur senior et prendre des responsabilités de lead technique dans des projets d'envergure.
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Long terme (5+ ans)</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Créer ma propre startup tech ou devenir CTO dans une scale-up à fort potentiel.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Work Values */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <Heart className="w-5 h-5 text-[#2f57ef]" />
              <span>Valeurs importantes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "Innovation", "Équilibre vie-travail", "Apprentissage continu", 
                "Impact social", "Autonomie", "Collaboration", "Excellence", 
                "Créativité", "Flexibilité", "Reconnaissance"
              ].map((value, index) => (
                <Badge key={index} variant="outline" className="border-[#2f57ef] text-[#2f57ef] hover:bg-[#2f57ef] hover:text-white transition-colors">
                  {value}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sectors of Interest */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <Briefcase className="w-5 h-5 text-[#2f57ef]" />
              <span>Secteurs d'intérêt</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { sector: "Technologies & Innovation", interest: 95, description: "IA, IoT, Blockchain, Développement web" },
              { sector: "Santé & E-santé", interest: 80, description: "Applications médicales, télémédecine" },
              { sector: "Finance & Fintech", interest: 70, description: "Banque digitale, paiements, investissement" },
              { sector: "Éducation & EdTech", interest: 85, description: "Plateformes d'apprentissage, MOOCs" },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">{item.sector}</h4>
                  <Badge className="bg-[#2f57ef] text-white">{item.interest}%</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Motivations and Inspirations */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <Users className="w-5 h-5 text-[#2f57ef]" />
              <span>Sources d'inspiration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Personnalités inspirantes</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Elon Musk pour sa vision innovante, Tim Cook pour son leadership, et Ada Lovelace pour son héritage en informatique.
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Entreprises modèles</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Google pour sa culture d'innovation, Spotify pour son agilité, et Microsoft pour sa transformation.
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Projets qui m'inspirent</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Les projets open-source, les applications qui facilitent l'éducation, et les solutions tech pour l'environnement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
