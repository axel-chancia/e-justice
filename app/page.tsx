import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Accès aux services administratifs de la justice en ligne
              </h1>
              <p className="text-xl mb-8">
                Effectuez vos démarches administratives judiciaires et consultez des professionnels du secteur
                judiciaire en toute simplicité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link href="/auth/register">Créer un compte</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-primary/20">
                  <Link href="/auth/login">Se connecter</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/hero-image.png"
                alt="E-Justice GA Hero"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Image src="/document-icon.png" alt="Documents" width={40} height={40} />
                </div>
                <CardTitle>Documents Administratifs</CardTitle>
                <CardDescription>Demandez vos documents judiciaires en ligne</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Casier judiciaire, actes notariés, certificats et plus encore.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between">
                  En savoir plus <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-secondary">
              <CardHeader>
                <div className="w-16 h-16 mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Image src="/consultation-icon.png" alt="Consultation" width={40} height={40} />
                </div>
                <CardTitle>Consultation Juridique</CardTitle>
                <CardDescription>Consultez des professionnels du droit</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Prenez rendez-vous avec des avocats, magistrats et notaires.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between">
                  En savoir plus <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-accent">
              <CardHeader>
                <div className="w-16 h-16 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Image src="/tracking-icon.png" alt="Suivi" width={40} height={40} />
                </div>
                <CardTitle>Suivi des Dossiers</CardTitle>
                <CardDescription>Suivez l'état d'avancement de vos demandes</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Consultez en temps réel le statut de vos démarches administratives.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between">
                  En savoir plus <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Sécurité Garantie</CardTitle>
                <CardDescription>Protection de vos données personnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Vos informations sont chiffrées et sécurisées selon les normes en vigueur.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between">
                  En savoir plus <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Créez votre compte</h3>
              <p className="text-gray-600">
                Inscrivez-vous en quelques étapes simples pour accéder à tous nos services.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Effectuez votre demande</h3>
              <p className="text-gray-600">
                Remplissez les formulaires en ligne et téléchargez les documents nécessaires.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Suivez votre dossier</h3>
              <p className="text-gray-600">
                Recevez des notifications et consultez l'état d'avancement de votre demande.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos utilisateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
                  <h3 className="font-semibold">Jean Moussavou</h3>
                  <p className="text-sm text-gray-500">Libreville</p>
                </div>
                <p className="text-center italic">
                  "J'ai pu obtenir mon extrait de casier judiciaire en seulement 3 jours, sans avoir à me déplacer. Un
                  gain de temps considérable !"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
                  <h3 className="font-semibold">Marie Obame</h3>
                  <p className="text-sm text-gray-500">Port-Gentil</p>
                </div>
                <p className="text-center italic">
                  "La consultation en ligne avec un avocat m'a permis de résoudre rapidement mon problème juridique.
                  Service très professionnel."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
                  <h3 className="font-semibold">Pierre Ndong</h3>
                  <p className="text-sm text-gray-500">Franceville</p>
                </div>
                <p className="text-center italic">
                  "Le suivi en temps réel de ma demande m'a permis d'être informé à chaque étape. Je recommande vivement
                  ce service !"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de citoyens qui simplifient leurs démarches administratives judiciaires.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/auth/register">Créer un compte gratuitement</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

