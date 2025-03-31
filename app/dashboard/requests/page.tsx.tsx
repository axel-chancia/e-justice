import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Eye, AlertCircle, Clock, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export default function RequestsPage() {
  // Sample requests data
  const requests = [
    {
      id: "req-001",
      title: "Extrait de casier judiciaire",
      type: "Casier judiciaire",
      date: "15/03/2023",
      status: "En traitement",
      statusColor: "yellow",
      reference: "CJ-2023-001",
      lastUpdate: "18/03/2023",
      estimatedCompletion: "22/03/2023",
    },
    {
      id: "req-002",
      title: "Certificat de nationalité",
      type: "Certificat",
      date: "02/03/2023",
      status: "Complété",
      statusColor: "green",
      reference: "CN-2023-045",
      lastUpdate: "10/03/2023",
      estimatedCompletion: "10/03/2023",
    },
    {
      id: "req-003",
      title: "Acte de naissance",
      type: "Acte d'état civil",
      date: "28/02/2023",
      status: "Complété",
      statusColor: "green",
      reference: "AN-2023-078",
      lastUpdate: "05/03/2023",
      estimatedCompletion: "07/03/2023",
    },
    {
      id: "req-004",
      title: "Acte de mariage",
      type: "Acte d'état civil",
      date: "15/01/2023",
      status: "Complété",
      statusColor: "green",
      reference: "AM-2023-023",
      lastUpdate: "25/01/2023",
      estimatedCompletion: "30/01/2023",
    },
    {
      id: "req-005",
      title: "Demande d'acte notarié",
      type: "Acte notarié",
      date: "05/01/2023",
      status: "Rejeté",
      statusColor: "red",
      reference: "AN-2023-007",
      lastUpdate: "15/01/2023",
      estimatedCompletion: "20/01/2023",
      rejectionReason: "Documents fournis incomplets. Veuillez soumettre à nouveau avec tous les documents requis.",
    },
    {
      id: "req-006",
      title: "Certificat de résidence",
      type: "Certificat",
      date: "20/03/2023",
      status: "En attente",
      statusColor: "orange",
      reference: "CR-2023-056",
      lastUpdate: "20/03/2023",
      estimatedCompletion: "27/03/2023",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "En attente":
        return <AlertCircle className="h-4 w-4 text-orange-500" />
      case "En traitement":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "Complété":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "Rejeté":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Suivi des demandes</h1>
          <p className="text-gray-500 mt-1">Suivez l'état d'avancement de vos demandes administratives</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/dashboard/documents/new">Nouvelle demande</Link>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input placeholder="Rechercher une demande..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Toutes</TabsTrigger>
          <TabsTrigger value="pending">En attente</TabsTrigger>
          <TabsTrigger value="processing">En traitement</TabsTrigger>
          <TabsTrigger value="completed">Complétées</TabsTrigger>
          <TabsTrigger value="rejected">Rejetées</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="space-y-6">
            {requests.map((request) => (
              <Card key={request.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-2" />
                      <div>
                        <CardTitle className="text-lg">{request.title}</CardTitle>
                        <CardDescription>{request.type}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      className={`bg-${request.statusColor}-100 text-${request.statusColor}-800 hover:bg-${request.statusColor}-100`}
                    >
                      <span className="flex items-center">
                        {getStatusIcon(request.status)}
                        <span className="ml-1">{request.status}</span>
                      </span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Référence</p>
                      <p className="font-medium">{request.reference}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Date de demande</p>
                      <p className="font-medium">{request.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Dernière mise à jour</p>
                      <p className="font-medium">{request.lastUpdate}</p>
                    </div>
                  </div>

                  {request.status === "En traitement" && (
                    <div className="mt-4 p-3 bg-yellow-50 rounded-md">
                      <p className="text-sm text-yellow-800">
                        <Clock className="h-4 w-4 inline mr-1" />
                        Date d'achèvement estimée: {request.estimatedCompletion}
                      </p>
                    </div>
                  )}

                  {request.status === "Rejeté" && request.rejectionReason && (
                    <div className="mt-4 p-3 bg-red-50 rounded-md">
                      <p className="text-sm text-red-800">
                        <AlertCircle className="h-4 w-4 inline mr-1" />
                        Motif du rejet: {request.rejectionReason}
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href={`/dashboard/requests/${request.id}`}>
                      <Eye className="h-4 w-4 mr-2" /> Voir les détails
                    </Link>
                  </Button>

                  {request.status === "Complété" && (
                    <Button asChild>
                      <Link href={`/dashboard/documents`}>Voir le document</Link>
                    </Button>
                  )}

                  {request.status === "Rejeté" && (
                    <Button asChild>
                      <Link href="/dashboard/documents/new">Nouvelle demande</Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="mt-6">
          <div className="space-y-6">
            {requests
              .filter((request) => request.status === "En attente")
              .map((request) => (
                <Card key={request.id}>
                  {/* Same card content as above */}
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <CardTitle className="text-lg">{request.title}</CardTitle>
                          <CardDescription>{request.type}</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                        <span className="flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {request.status}
                        </span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Référence</p>
                        <p className="font-medium">{request.reference}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Date de demande</p>
                        <p className="font-medium">{request.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Dernière mise à jour</p>
                        <p className="font-medium">{request.lastUpdate}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href={`/dashboard/requests/${request.id}`}>
                        <Eye className="h-4 w-4 mr-2" /> Voir les détails
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="processing" className="mt-6">
          <div className="space-y-6">
            {requests
              .filter((request) => request.status === "En traitement")
              .map((request) => (
                <Card key={request.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <CardTitle className="text-lg">{request.title}</CardTitle>
                          <CardDescription>{request.type}</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {request.status}
                        </span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Référence</p>
                        <p className="font-medium">{request.reference}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Date de demande</p>
                        <p className="font-medium">{request.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Dernière mise à jour</p>
                        <p className="font-medium">{request.lastUpdate}</p>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-yellow-50 rounded-md">
                      <p className="text-sm text-yellow-800">
                        <Clock className="h-4 w-4 inline mr-1" />
                        Date d'achèvement estimée: {request.estimatedCompletion}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href={`/dashboard/requests/${request.id}`}>
                        <Eye className="h-4 w-4 mr-2" /> Voir les détails
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="space-y-6">
            {requests
              .filter((request) => request.status === "Complété")
              .map((request) => (
                <Card key={request.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <CardTitle className="text-lg">{request.title}</CardTitle>
                          <CardDescription>{request.type}</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        <span className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          {request.status}
                        </span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Référence</p>
                        <p className="font-medium">{request.reference}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Date de demande</p>
                        <p className="font-medium">{request.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Dernière mise à jour</p>
                        <p className="font-medium">{request.lastUpdate}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href={`/dashboard/requests/${request.id}`}>
                        <Eye className="h-4 w-4 mr-2" /> Voir les détails
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href={`/dashboard/documents`}>Voir le document</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="rejected" className="mt-6">
          <div className="space-y-6">
            {requests
              .filter((request) => request.status === "Rejeté")
              .map((request) => (
                <Card key={request.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <CardTitle className="text-lg">{request.title}</CardTitle>
                          <CardDescription>{request.type}</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                        <span className="flex items-center">
                          <XCircle className="h-4 w-4 mr-1" />
                          {request.status}
                        </span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Référence</p>
                        <p className="font-medium">{request.reference}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Date de demande</p>
                        <p className="font-medium">{request.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Dernière mise à jour</p>
                        <p className="font-medium">{request.lastUpdate}</p>
                      </div>
                    </div>

                    {request.rejectionReason && (
                      <div className="mt-4 p-3 bg-red-50 rounded-md">
                        <p className="text-sm text-red-800">
                          <AlertCircle className="h-4 w-4 inline mr-1" />
                          Motif du rejet: {request.rejectionReason}
                        </p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href={`/dashboard/requests/${request.id}`}>
                        <Eye className="h-4 w-4 mr-2" /> Voir les détails
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="/dashboard/documents/new">Nouvelle demande</Link>
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

