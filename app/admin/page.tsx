import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, FileText, Users, Clock, Calendar, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Tableau de bord administrateur</h1>
          <p className="text-gray-500 mt-1">Gérez les demandes et les utilisateurs</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button>Exporter les données</Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Demandes totales</CardTitle>
            <FileText className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,248</div>
            <p className="text-xs text-gray-500 mt-1">+12% par rapport au mois dernier</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Utilisateurs</CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3,427</div>
            <p className="text-xs text-gray-500 mt-1">+8% par rapport au mois dernier</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">En attente</CardTitle>
            <Clock className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">64</div>
            <p className="text-xs text-gray-500 mt-1">-3% par rapport au mois dernier</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Rendez-vous</CardTitle>
            <Calendar className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">156</div>
            <p className="text-xs text-gray-500 mt-1">+24% par rapport au mois dernier</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Demandes par type</CardTitle>
            <CardDescription>Répartition des demandes par catégorie</CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <BarChart className="h-16 w-16 text-gray-300" />
            <p className="text-gray-500 ml-4">Graphique des demandes par type</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activité mensuelle</CardTitle>
            <CardDescription>Nombre de demandes traitées par mois</CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <BarChart className="h-16 w-16 text-gray-300" />
            <p className="text-gray-500 ml-4">Graphique d'activité mensuelle</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Requests */}
      <h2 className="text-2xl font-bold mb-4">Demandes récentes</h2>
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Toutes</TabsTrigger>
          <TabsTrigger value="pending">En attente</TabsTrigger>
          <TabsTrigger value="processing">En traitement</TabsTrigger>
          <TabsTrigger value="completed">Complétées</TabsTrigger>
          <TabsTrigger value="rejected">Rejetées</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">ID</th>
                      <th className="text-left p-4">Utilisateur</th>
                      <th className="text-left p-4">Type de document</th>
                      <th className="text-left p-4">Date de demande</th>
                      <th className="text-left p-4">Statut</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">#REQ-001</td>
                      <td className="p-4">Jean Dupont</td>
                      <td className="p-4">Extrait de casier judiciaire</td>
                      <td className="p-4">15/03/2023</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                          <span>En traitement</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Voir
                          </Button>
                          <Button size="sm">Traiter</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">#REQ-002</td>
                      <td className="p-4">Marie Martin</td>
                      <td className="p-4">Certificat de nationalité</td>
                      <td className="p-4">14/03/2023</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <AlertCircle className="h-4 w-4 text-orange-600 mr-1" />
                          <span>En attente</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Voir
                          </Button>
                          <Button size="sm">Traiter</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">#REQ-003</td>
                      <td className="p-4">Pierre Dubois</td>
                      <td className="p-4">Acte de naissance</td>
                      <td className="p-4">12/03/2023</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                          <span>Complété</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Voir
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">#REQ-004</td>
                      <td className="p-4">Sophie Leroy</td>
                      <td className="p-4">Acte de mariage</td>
                      <td className="p-4">10/03/2023</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <XCircle className="h-4 w-4 text-red-600 mr-1" />
                          <span>Rejeté</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Voir
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">#REQ-005</td>
                      <td className="p-4">Lucas Bernard</td>
                      <td className="p-4">Acte notarié</td>
                      <td className="p-4">08/03/2023</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                          <span>Complété</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Voir
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">ID</th>
                      <th className="text-left p-4">Utilisateur</th>
                      <th className="text-left p-4">Type de document</th>
                      <th className="text-left p-4">Date de demande</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4">#REQ-002</td>
                      <td className="p-4">Marie Martin</td>
                      <td className="p-4">Certificat de nationalité</td>
                      <td className="p-4">14/03/2023</td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Voir
                          </Button>
                          <Button size="sm">Traiter</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

