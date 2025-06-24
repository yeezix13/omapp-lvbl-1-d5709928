
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Save, X, User, Phone, MapPin, GraduationCap, Heart } from "lucide-react";

export const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Marie",
    lastName: "Dubois",
    birthDate: "1998-05-15",
    phone: "+33 6 12 34 56 78",
    address: "123 Rue de la Paix",
    city: "Paris",
    postalCode: "75001",
    currentLevel: "Master 1",
    school: "Université Paris-Sorbonne",
    specialization: "Informatique",
    interests: "Technologie, Lecture, Voyages",
    languages: "Français (natif), Anglais (avancé), Arabe (intermédiaire)"
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original values
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Informations personnelles</h1>
          <p className="text-gray-600 dark:text-gray-300">Gérez vos informations personnelles et académiques</p>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="bg-[#2f57ef] hover:bg-[#2347d4]">
            <Edit className="w-4 h-4 mr-2" />
            Modifier
          </Button>
        ) : (
          <div className="flex space-x-2">
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder
            </Button>
            <Button onClick={handleCancel} variant="outline">
              <X className="w-4 h-4 mr-2" />
              Annuler
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <User className="w-5 h-5 text-[#2f57ef]" />
              <span>Informations personnelles</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  disabled={!isEditing}
                  className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  disabled={!isEditing}
                  className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">Date de naissance</Label>
              <Input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                disabled={!isEditing}
                className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={!isEditing}
                  className="pl-10 border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address Information */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <MapPin className="w-5 h-5 text-[#2f57ef]" />
              <span>Adresse</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                disabled={!isEditing}
                className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">Ville</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  disabled={!isEditing}
                  className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Code postal</Label>
                <Input
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  disabled={!isEditing}
                  className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Background */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <GraduationCap className="w-5 h-5 text-[#2f57ef]" />
              <span>Parcours académique</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentLevel">Niveau actuel</Label>
              <Select disabled={!isEditing}>
                <SelectTrigger className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef]">
                  <SelectValue placeholder={formData.currentLevel} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bac">Terminale</SelectItem>
                  <SelectItem value="bac+1">Bac+1</SelectItem>
                  <SelectItem value="bac+2">Bac+2</SelectItem>
                  <SelectItem value="bac+3">Bac+3</SelectItem>
                  <SelectItem value="bac+4">Bac+4</SelectItem>
                  <SelectItem value="bac+5">Bac+5</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="school">Établissement</Label>
              <Input
                id="school"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                disabled={!isEditing}
                className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialization">Spécialité/Options</Label>
              <Input
                id="specialization"
                value={formData.specialization}
                onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                disabled={!isEditing}
                className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Interests and Languages */}
        <Card className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <Heart className="w-5 h-5 text-[#2f57ef]" />
              <span>Centres d'intérêts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="interests">Loisirs et passions</Label>
              <Textarea
                id="interests"
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                disabled={!isEditing}
                className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef] min-h-[80px]"
                placeholder="Décrivez vos loisirs et passions..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="languages">Langues parlées</Label>
              <Textarea
                id="languages"
                value={formData.languages}
                onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                disabled={!isEditing}
                className="border-gray-200 dark:border-gray-600 focus:border-[#2f57ef] focus:ring-[#2f57ef] min-h-[80px]"
                placeholder="Listez les langues que vous parlez avec votre niveau..."
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
