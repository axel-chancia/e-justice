import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LayoutDashboard, FileText, Users, Calendar, Settings, Shield, Database, BarChart, LogOut } from "lucide-react"

export const metadata: Metadata = {
  title: "Administration | E-Justice GA",
  description: "Panneau d'administration E-Justice GA",
}

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const navItems = [
    { name: "Tableau de bord", href: "/admin", icon: LayoutDashboard },
    { name: "Demandes", href: "/admin/requests", icon: FileText },
    { name: "Utilisateurs", href: "/admin/users", icon: Users },
    { name: "Professionnels", href: "/admin/professionals", icon: Users },
    { name: "Rendez-vous", href: "/admin/appointments", icon: Calendar },
    { name: "Statistiques", href: "/admin/statistics", icon: BarChart },
    { name: "Base de données", href: "/admin/database", icon: Database },
    { name: "Sécurité", href: "/admin/security", icon: Shield },
    { name: "Paramètres", href: "/admin/settings", icon: Settings },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white">
        <div className="p-4 border-b border-gray-800">
          <Link href="/admin" className="flex items-center">
            <span className="text-xl font-bold">E-Justice GA</span>
            <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">Admin</span>
          </Link>
        </div>
        <div className="flex flex-col justify-between h-full">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white"
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
          <div className="p-4 border-t border-gray-800">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
              asChild
            >
              <Link href="/auth/logout">
                <LogOut className="h-5 w-5 mr-3" />
                Déconnexion
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <LayoutDashboard className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Admin</p>
                  <p className="text-xs text-gray-500">admin@e-justice.ga</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

