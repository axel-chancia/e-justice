import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, FileText, Download, Eye, Plus } from "lucide-react"
import Link from "next/link"

export default function DocumentsPage() {
  // Sample document data
  const documents = [
    {
      id: "doc-001",
      title: "Extrait de casier judiciaire",
      type: "Casier judiciaire",
      date: "15/03/2023",
      status: "En traitement",
      statusColor: "yellow",
    },
    {
      id: "doc-002",
      title: "Certificat de nationalité",
      type: "Certificat",
      date: "02/03/2023",
      status: "Complété",
      statusColor: "green",
    },
    {
      id: "doc-003",
      title: "Acte de naissance",
      type: "Acte d'état civil",
      date: "28/02/2023",
      status: "Complété",
      statusColor: "green",
    },
    {
      id: "doc-004",
      title: "Acte de mariage",
      type: "Acte d'état civil",
      date: "15/01/2023",
      status: "Complété",
      statusColor: "green",
    },
    {
      id: "doc-005",
      title: "Demande d'acte notarié",
      type: "Acte notarié",
      date: "05/01/2023",
      status: "Rejeté",
      statusColor: "red",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Mes Documents</h1>
          <p className="text-gray-500 mt-1">Gérez vos documents administratifs</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/dashboard/documents/new">
              <Plus className="mr-2 h-4 w-4" /> Nouvelle demande
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Rechercher un document..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="completed">Complétés</TabsTrigger>
          <TabsTrigger value="processing">En traitement</TabsTrigger>
          <TabsTrigger value="rejected">Rejetés</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <Card key={doc.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-blue-600 mr-2" />
                      <CardTitle className="text-lg">{doc.title}</CardTitle>
                    </div>
                    <div         
                          className={`bg-${doc.statusColor}-100 text-${doc.statusColor}-800 text-xs px-2 py-1 rounded-full`}
                    >
                      {doc.status}
                    </div>
                  </div>
                  <CardDescription>{doc.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Demandé le: {doc.date}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" /> Voir
                  </Button>
                  {doc.status === "Complété" && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> Télécharger
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents
              .filter((doc) => doc.status === "Complété")
              .map((doc) => (
                <Card key={doc.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-blue-600 mr-2" />
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{doc.status}</div>
                    </div>
                    <CardDescription>{doc.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Demandé le: {doc.date}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" /> Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> Télécharger
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="processing" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents
              .filter((doc) => doc.status === "En traitement")
              .map((doc) => (
                <Card key={doc.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-blue-600 mr-2" />
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">{doc.status}</div>
                    </div>
                    <CardDescription>{doc.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Demandé le: {doc.date}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" /> Voir les détails
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="rejected" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents
              .filter((doc) => doc.status === "Rejeté")
              .map((doc) => (
                <Card key={doc.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-blue-600 mr-2" />
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                      </div>
                      <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">{doc.status}</div>
                    </div>
                    <CardDescription>{doc.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Demandé le: {doc.date}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" /> Voir les détails
                    </Button>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" /> Nouvelle demande
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

