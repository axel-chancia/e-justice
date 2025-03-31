import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      title: "Accessibilité",
      description: "Nous rendons la justice accessible à tous les citoyens, où qu'ils soient.",
    },
    {
      title: "Transparence",
      description: "Nous croyons en des processus clairs et transparents pour tous nos services.",
    },
    {
      title: "Efficacité",
      description: "Nous optimisons les démarches administratives pour gagner du temps et des ressources.",
    },
    {
      title: "Sécurité",
      description: "La protection des données personnelles est au cœur de nos préoccupations.",
    },
    {
      title: "Innovation",
      description: "Nous utilisons les technologies modernes pour améliorer l'expérience utilisateur.",
    },
    {
      title: "Inclusion",
      description: "Nos services sont conçus pour être accessibles à tous, sans discrimination.",
    },
  ]

  const team = [
    {
      name: "Jean Dupont",
      role: "Directeur Général",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Marie Obame",
      role: "Directrice Juridique",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Pierre Ndong",
      role: "Responsable Technique",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sophie Laurent",
      role: "Responsable Relations Clients",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl font-bold mb-6">À propos de E-Justice GA</h1>
          <p className="text-lg mb-4">
            E-Justice GA est une plateforme innovante qui vise à simplifier l'accès aux services administratifs de la
            justice au Gabon.
          </p>
          <p className="text-lg mb-4">
            Notre mission est de moderniser les démarches administratives judiciaires en offrant une plateforme en ligne
            sécurisée, accessible et efficace pour tous les citoyens.
          </p>
          <p className="text-lg">
            Fondée en 2023, notre équipe est composée d'experts en droit, en technologie et en administration publique,
            tous dédiés à l'amélioration du service public.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/about-image.png"
            alt="À propos de E-Justice GA"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="text-primary h-6 w-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Notre Équipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 rounded-full overflow-hidden mx-auto w-40 h-40">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-xl">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Partners */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-10">Nos Partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 font-semibold">Ministère de la Justice</span>
          </div>
          <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 font-semibold">Barreau National</span>
          </div>
          <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 font-semibold">Chambre des Notaires</span>
          </div>
          <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 font-semibold">Agence Nationale du Numérique</span>
          </div>
        </div>
      </div>
    </div>
  )
}

