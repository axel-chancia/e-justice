"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Star, MapPin, Clock, CalendarIcon, CheckCircle } from "lucide-react"

interface AppointmentPageProps {
  params: {
    id: string
  }
}

export default function AppointmentPage({ params }: AppointmentPageProps) {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [appointmentType, setAppointmentType] = useState<string>("video")
  const [notes, setNotes] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  // In a real app, you would fetch this data from an API based on the ID
  const professional = {
    id: params.id,
    name: "Me. Sophie Laurent",
    title: "Avocate",
    specialization: "Droit de la famille",
    rating: 4.8,
    reviews: 124,
    location: "Libreville",
    image: "/lawyer1.png",
    consultationFee: "25 000 FCFA",
    consultationDuration: "45 minutes",
  }

  // Sample available time slots
  const timeSlots = [
    { time: "09:00", available: true },
    { time: "10:00", available: true },
    { time: "11:00", available: false },
    { time: "12:00", available: false },
    { time: "14:00", available: true },
    { time: "15:00", available: true },
    { time: "16:00", available: true },
    { time: "17:00", available: false },
  ]

  const handleSubmit = async () => {
    // Validate form
    if (!date) {
      setError("Veuillez sélectionner une date")
      return
    }

    if (!timeSlot) {
      setError("Veuillez sélectionner un créneau horaire")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would call your API here
      // const response = await fetch('/api/appointments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     professionalId: params.id,
      //     date,
      //     timeSlot,
      //     appointmentType,
      //     notes
      //   }),
      // });

      // if (!response.ok) throw new Error('Erreur lors de la prise de rendez-vous');

      setSuccess(true)

      // Redirect after a delay
      setTimeout(() => {
        router.push("/dashboard/appointments")
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Prendre rendez-vous</h1>

      {success ? (
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Rendez-vous confirmé !</h2>
            <p className="text-gray-600 mb-4">
              Votre rendez-vous avec {professional.name} a été programmé pour le{" "}
              {date?.toLocaleDateString("fr-FR", { dateStyle: "long" })} à {timeSlot}.
            </p>
            <p className="text-gray-600 mb-6">Vous recevrez un email de confirmation avec tous les détails.</p>
            <Button asChild>
              <a href="/dashboard/appointments">Voir mes rendez-vous</a>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Professional Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={professional.image || "/placeholder.svg"}
                      alt={professional.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold">{professional.name}</h2>
                  <div className="flex items-center mt-1">
                    <Badge variant="outline" className="mr-2">
                      {professional.title}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mt-1">{professional.specialization}</p>
                  <div className="flex items-center text-yellow-500 mt-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm">{professional.rating}</span>
                    <span className="ml-1 text-xs text-gray-500">({professional.reviews} avis)</span>
                  </div>
                </div>

                <div className="space-y-4 border-t pt-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-primary mr-2" />
                    <span>{professional.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-primary mr-2" />
                    <span>Durée: {professional.consultationDuration}</span>
                  </div>
                  <div className="flex items-center text-sm font-semibold">
                    <span>Tarif: {professional.consultationFee}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Appointment Booking */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Réserver un créneau</CardTitle>
                <CardDescription>Sélectionnez une date et un horaire pour votre rendez-vous</CardDescription>
              </CardHeader>
              <CardContent>
                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Tabs defaultValue="calendar" className="mb-6">
                  <TabsList className="mb-4">
                    <TabsTrigger value="calendar">Calendrier</TabsTrigger>
                    <TabsTrigger value="list">Liste des disponibilités</TabsTrigger>
                  </TabsList>

                  <TabsContent value="calendar">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                          disabled={(date) =>
                            date < new Date() ||
                            date > new Date(new Date().setMonth(new Date().getMonth() + 2)) ||
                            date.getDay() === 0 ||
                            date.getDay() === 6
                          }
                        />
                      </div>

                      <div className="md:w-1/2">
                        <h3 className="font-medium mb-3">
                          {date ? (
                            <>Créneaux disponibles pour le {date.toLocaleDateString("fr-FR", { dateStyle: "long" })}</>
                          ) : (
                            <>Sélectionnez une date pour voir les créneaux disponibles</>
                          )}
                        </h3>

                        {date && (
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((slot) => (
                              <Button
                                key={slot.time}
                                variant={timeSlot === slot.time ? "default" : "outline"}
                                disabled={!slot.available}
                                onClick={() => setTimeSlot(slot.time)}
                                className="justify-center"
                              >
                                {slot.time}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="list">
                    <div className="space-y-4">
                      <p className="text-gray-600">Consultez la liste des prochaines disponibilités:</p>

                      <div className="space-y-2">
                        <div
                          className="flex items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                          onClick={() => {
                            setDate(new Date(2023, 5, 15))
                            setTimeSlot("10:00")
                          }}
                        >
                          <CalendarIcon className="h-5 w-5 text-primary mr-3" />
                          <div>
                            <p className="font-medium">Mercredi 15 Juin 2023</p>
                            <p className="text-sm text-gray-500">10:00 - 10:45</p>
                          </div>
                        </div>

                        <div
                          className="flex items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                          onClick={() => {
                            setDate(new Date(2023, 5, 15))
                            setTimeSlot("14:00")
                          }}
                        >
                          <CalendarIcon className="h-5 w-5 text-primary mr-3" />
                          <div>
                            <p className="font-medium">Mercredi 15 Juin 2023</p>
                            <p className="text-sm text-gray-500">14:00 - 14:45</p>
                          </div>
                        </div>

                        <div
                          className="flex items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                          onClick={() => {
                            setDate(new Date(2023, 5, 16))
                            setTimeSlot("11:00")
                          }}
                        >
                          <CalendarIcon className="h-5 w-5 text-primary mr-3" />
                          <div>
                            <p className="font-medium">Jeudi 16 Juin 2023</p>
                            <p className="text-sm text-gray-500">11:00 - 11:45</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Type de consultation</h3>
                    <RadioGroup value={appointmentType} onValueChange={setAppointmentType}>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="video" id="video" />
                          <Label htmlFor="video">Visioconférence</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone" />
                          <Label htmlFor="phone">Téléphone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="inperson" id="inperson" />
                          <Label htmlFor="inperson">En personne</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="notes" className="font-medium mb-3 block">
                      Notes (facultatif)
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Décrivez brièvement l'objet de votre consultation..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => router.back()}>
                  Annuler
                </Button>
                <Button onClick={handleSubmit} disabled={isLoading || !date || !timeSlot}>
                  {isLoading ? "Confirmation en cours..." : "Confirmer le rendez-vous"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

