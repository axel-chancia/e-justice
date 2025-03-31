import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Clock, Calendar, Users, Bell, Settings } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Tableau de bord</h1>
          <p className="text-gray-500 mt-1">Bienvenue sur votre espace personnel E-Justice GA</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/dashboard/documents/new">Nouvelle demande</Link>
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Mes documents</CardTitle>
            <FileText className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">Accédez à tous vos documents administratifs</p>
            <Button variant="outline" asChild className="w-full">
              <Link href="/dashboard/documents">Voir mes documents</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Mes demandes</CardTitle>
            <Clock className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">Suivez l'état d'avancement de vos demandes</p>
            <Button variant="outline" asChild className="w-full">
              <Link href="/dashboard/requests">Voir mes demandes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Rendez-vous</CardTitle>
            <Calendar className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">Gérez vos rendez-vous avec les professionnels</p>
            <Button variant="outline" asChild className="w-full">
              <Link href="/dashboard/appointments">Voir mes rendez-vous</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <h2 classNameme="text-2xl font-bold mb-4">Activité récente</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Demandes récentes</CardTitle>
            <CardDescription>Vos dernières demandes de documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Extrait de casier judiciaire</p>
                  <p className="text-sm text-gray-500">Soumis le 15/03/2023</p>
                </div>
                <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">En traitement</div>
              </div>
              <div className="flex items-start justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Certificat de nationalité</p>
                  <p className="text-sm text-gray-500">Soumis le 02/03/2023</p>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Complété</div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">Acte de naissance</p>
                  <p className="text-sm text-gray-500">Soumis le 28/02/2023</p>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Complété</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rendez-vous à venir</CardTitle>
            <CardDescription>Vos prochains rendez-vous programmés</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Consultation avec Me. Dupont</p>
                  <p className="text-sm text-gray-500">20 Mars 2023, 14:00</p>
                </div>
                <Button variant="outline" size="sm">
                  Modifier
                </Button>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">Rendez-vous au tribunal</p>
                  <p className="text-sm text-gray-500">25 Mars 2023, 10:30</p>
                </div>
                <Button variant="outline" size="sm">
                  Modifier
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <h2 className="text-2xl font-bold mb-4">Accès rapides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
          <Users className="h-5 w-5" />
          <span>Consultation juridique</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
          <FileText className="h-5 w-5" />
          <span>Formulaires</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
          <Bell className="h-5 w-5" />
          <span>Notifications</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
          <Settings className="h-5 w-5" />
          <span>Paramètres</span>
        </Button>
      </div>
    </div>
  )
}

