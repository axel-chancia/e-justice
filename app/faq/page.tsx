"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const faqCategories = [
    {
      title: "Général",
      questions: [
        {
          question: "Qu'est-ce que E-Justice GA ?",
          answer:
            "E-Justice GA est une plateforme en ligne qui permet aux citoyens d'accéder aux services administratifs de la justice au Gabon. Elle offre des services tels que la demande de documents administratifs, la consultation juridique et le suivi des dossiers.",
        },
        {
          question: "Comment créer un compte sur E-Justice GA ?",
          answer:
            "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut à droite de la page d'accueil. Remplissez le formulaire avec vos informations personnelles, acceptez les conditions d'utilisation et validez votre inscription. Vous recevrez un email de confirmation pour activer votre compte.",
        },
        {
          question: "Les services de E-Justice GA sont-ils gratuits ?",
          answer:
            "Certains services de base sont gratuits, comme la création de compte et la consultation d'informations. Cependant, des frais peuvent s'appliquer pour certains services spécifiques comme la délivrance de documents officiels ou les consultations juridiques. Les tarifs sont clairement indiqués avant chaque demande.",
        },
      ],
    },
    {
      title: "Documents administratifs",
      questions: [
        {
          question: "Quels types de documents puis-je demander sur E-Justice GA ?",
          answer:
            "Vous pouvez demander divers documents administratifs tels que des extraits de casier judiciaire, des certificats de nationalité, des actes de naissance, des actes de mariage, des actes notariés et d'autres certificats officiels.",
        },
        {
          question: "Quel est le délai de traitement pour une demande de document ?",
          answer:
            "Le délai de traitement varie selon le type de document demandé. En général, les demandes sont traitées dans un délai de 3 à 10 jours ouvrables. Vous pouvez suivre l'état d'avancement de votre demande dans votre espace personnel.",
        },
        {
          question: "Comment recevoir mes documents une fois qu'ils sont prêts ?",
          answer:
            "Vous avez le choix entre plusieurs modes de livraison : par email (documents numériques certifiés), par courrier postal, ou en retrait sur place dans nos bureaux. Vous sélectionnez votre préférence lors de la soumission de votre demande.",
        },
      ],
    },
    {
      title: "Consultation juridique",
      questions: [
        {
          question: "Comment prendre rendez-vous avec un professionnel du droit ?",
          answer:
            "Dans la section 'Consultation' de votre espace personnel, vous pouvez parcourir la liste des professionnels disponibles, consulter leurs profils et leurs disponibilités, puis réserver un créneau qui vous convient. Vous recevrez une confirmation par email.",
        },
        {
          question: "Les consultations peuvent-elles se faire à distance ?",
          answer:
            "Oui, nous proposons des consultations à distance par visioconférence ou par téléphone. Vous pouvez également opter pour des consultations en personne si vous préférez. Le mode de consultation est à choisir lors de la prise de rendez-vous.",
        },
        {
          question: "Comment annuler ou reporter un rendez-vous ?",
          answer:
            "Vous pouvez annuler ou reporter un rendez-vous jusqu'à 24 heures avant l'heure prévue sans frais. Pour ce faire, accédez à la section 'Mes rendez-vous' dans votre espace personnel et utilisez les options d'annulation ou de report.",
        },
      ],
    },
    {
      title: "Suivi des dossiers",
      questions: [
        {
          question: "Comment suivre l'état d'avancement de ma demande ?",
          answer:
            "Connectez-vous à votre compte et accédez à la section 'Mes demandes' dans votre tableau de bord. Vous y trouverez la liste de toutes vos demandes avec leur statut actuel et l'historique des actions effectuées.",
        },
        {
          question: "Je n'ai pas reçu de mise à jour sur ma demande, que faire ?",
          answer:
            "Si vous n'avez pas reçu de mise à jour après le délai indiqué, vous pouvez contacter notre service client via la section 'Contact' ou en appelant notre numéro d'assistance. Assurez-vous de mentionner le numéro de référence de votre demande.",
        },
        {
          question: "Comment être notifié des mises à jour de mon dossier ?",
          answer:
            "Par défaut, vous recevez des notifications par email. Vous pouvez également activer les notifications SMS dans les paramètres de votre compte. Assurez-vous que vos coordonnées sont à jour pour recevoir toutes les notifications.",
        },
      ],
    },
    {
      title: "Sécurité et confidentialité",
      questions: [
        {
          question: "Comment mes données personnelles sont-elles protégées ?",
          answer:
            "Nous utilisons des protocoles de sécurité avancés pour protéger vos données personnelles. Toutes les informations sont chiffrées et stockées sur des serveurs sécurisés. Nous respectons strictement les réglementations en vigueur concernant la protection des données.",
        },
        {
          question: "Qui a accès à mes documents et informations ?",
          answer:
            "Seuls les administrateurs autorisés et les professionnels concernés par vos demandes ont accès à vos documents et informations. Nous ne partageons jamais vos données avec des tiers sans votre consentement explicite.",
        },
        {
          question: "Comment modifier ou supprimer mes informations personnelles ?",
          answer:
            "Vous pouvez modifier vos informations personnelles dans la section 'Paramètres' de votre compte. Pour demander la suppression de vos données, veuillez contacter notre service client ou utiliser l'option dédiée dans les paramètres de confidentialité.",
        },
      ],
    },
  ]

  // Filter questions based on search term
  const filteredFAQs = searchTerm
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Foire Aux Questions</h1>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        Trouvez des réponses aux questions les plus fréquemment posées sur nos services et notre plateforme.
      </p>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Rechercher une question..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setSearchTerm("")}
            >
              Effacer
            </Button>
          )}
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {faqCategories.map((category, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.questions.length} questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="link"
                className="p-0"
                onClick={() => document.getElementById(`faq-${index}`)?.scrollIntoView({ behavior: "smooth" })}
              >
                Voir les questions
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Accordions */}
      {filteredFAQs.length > 0 ? (
        filteredFAQs.map((category, categoryIndex) => (
          <div key={categoryIndex} id={`faq-${categoryIndex}`} className="mb-10">
            <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((faq, faqIndex) => (
                <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">Aucun résultat trouvé pour "{searchTerm}"</p>
          <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
            Réinitialiser la recherche
          </Button>
        </div>
      )}

      {/* Contact CTA */}
      <div className="bg-gray-50 rounded-lg p-8 text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h3>
        <p className="text-gray-600 mb-6">
          Notre équipe d'assistance est disponible pour répondre à toutes vos questions.
        </p>
        <Button asChild>
          <a href="/contact">Contactez-nous</a>
        </Button>
      </div>
    </div>
  )
}

