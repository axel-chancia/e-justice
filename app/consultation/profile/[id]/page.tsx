import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Star, Phone, Mail, Briefcase, GraduationCap } from "lucide-react"

interface ProfilePageProps {
  params: {
    id: string
  }
}

export default function ProfessionalProfilePage({ params }: ProfilePageProps) {
  // In a real app, you would fetch this data from an API based on the ID
  const professional = {
    id: params.id,
    name: "Me. Sophie Laurent",
    title: "Avocate",
    specialization: "Droit de la famille",
    rating: 4.8,
    reviews: 124,
    location: "Libreville",
    availability: "Disponible cette semaine",
    image: "/lawyer1.png",
    phone: "+241 74 12 34 56",
    email: "sophie.laurent@example.com",
    bio: "Avocate spécialisée en droit de la famille avec plus de 15 ans d'expérience. Je me consacre à aider mes clients à naviguer dans les complexités des affaires familiales, y compris les divorces, la garde des enfants et les questions de pension alimentaire.",
    education: [
      {
        degree: "Doctorat en Droit",
        institution: "Université de Paris-Sorbonne",
        year: "2005",
      },
      {
        degree: "Master en Droit de la Famille",
        institution: "Université de Libreville",
        year: "2002",
      },
      {
        degree: "Licence en Droit",
        institution: "Université de Libreville",
        year: "2000",
      },
    ],
    experience: [
      {
        position: "Avocate associée",
        company: "Cabinet Laurent & Associés",
        period: "2010 - Présent",
      },
      {
        position: "Avocate",
        company: "Cabinet Juridique International",
        period: "2005 - 2010",
      },
      {
        position: "Stagiaire",
        company: "Tribunal de Grande Instance de Libreville",
        period: "2003 - 2005",
      },
    ],
    expertise: [
      "Divorce et séparation",
      "Garde d'enfants",
      "Pension alimentaire",
      "Adoption",
      "Médiation familiale",
      "Succession",
    ],
    languages: ["Français", "Anglais", "Espagnol"],
    testimonials: [
      {
        name: "Jean Moussavou",
        comment:
          "Me. Laurent a été d'une aide précieuse lors de mon divorce. Professionnelle et attentive, elle a su défendre mes intérêts tout en veillant au bien-être de mes enfants.",
        rating: 5,
      },
      {
        name: "Marie Obame",
        comment:
          "J'ai consulté Me. Laurent pour une question de garde d'enfants. Son expertise et ses conseils m'ont permis de trouver un arrangement équitable avec mon ex-conjoint.",
        rating: 5,
      },
      {
        name: "Pierre Ndong",
        comment:
          "Excellente avocate, très professionnelle et à l'écoute. Je recommande vivement ses services pour toute question de droit de la famille.",
        rating: 4,
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src={professional.image || "/placeholder.svg"}
                    alt={professional.name}
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold">{professional.name}</h1>
                <div className="flex items-center mt-1">
                  <Badge variant="outline" className="mr-2">
                    {professional.title}
                  </Badge>
                </div>
                <div className="flex items-center text-yellow-500 mt-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm">{professional.rating}</span>
                  <span className="ml-1 text-xs text-gray-500">({professional.reviews} avis)</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <Briefcase className="h-4 w-4 text-primary mr-2" />
                  <span>{professional.specialization}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  <span>{professional.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <span>{professional.availability}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-primary mr-2" />
                  <span>{professional.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-primary mr-2" />
                  <span>{professional.email}</span>
                </div>
              </div>

              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href={`/consultation/appointment/${professional.id}`}>
                    <Calendar className="h-4 w-4 mr-2" /> Prendre rendez-vous
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {professional.expertise.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Langues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {professional.languages.map((language, index) => (
                  <Badge key={index} variant="outline">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Tabs with Details */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="about">
                <TabsList className="mb-6">
                  <TabsTrigger value="about">À propos</TabsTrigger>
                  <TabsTrigger value="experience">Expérience</TabsTrigger>
                  <TabsTrigger value="education">Formation</TabsTrigger>
                  <TabsTrigger value="reviews">Avis</TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Biographie</h3>
                      <p className="text-gray-600">{professional.bio}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Domaines d'expertise</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {professional.expertise.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="experience">
                  <h3 className="text-xl font-semibold mb-4">Parcours professionnel</h3>
                  <div className="space-y-6">
                    {professional.experience.map((exp, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold">{exp.position}</h4>
                          <p className="text-gray-600">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="education">
                  <h3 className="text-xl font-semibold mb-4">Formation académique</h3>
                  <div className="space-y-6">
                    {professional.education.map((edu, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <p className="text-gray-600">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <h3 className="text-xl font-semibold mb-4">Avis clients</h3>
                  <div className="space-y-6">
                    {professional.testimonials.map((testimonial, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center mb-2">
                            <div className="flex items-center text-yellow-500">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? "fill-current" : ""}`} />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 italic mb-2">"{testimonial.comment}"</p>
                          <p className="text-sm font-medium">- {testimonial.name}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Disponibilités</CardTitle>
              <CardDescription>Sélectionnez une date et un créneau horaire pour prendre rendez-vous</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-6 rounded-md text-center">
                <p className="text-gray-500">Calendrier de disponibilité</p>
                <Button asChild className="mt-4">
                  <Link href={`/consultation/appointment/${professional.id}`}>Voir les disponibilités</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

