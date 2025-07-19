"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/")
    }
  }, [status, router])

  if (status === "loading") {
    return <div className="p-10 text-center">Loading...</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={session.user} />

      <main className="flex-grow p-8 max-w-2xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">PDF Raporu Yükle</h1>

        <form action="/api/upload" method="POST" encType="multipart/form-data" className="space-y-4">
          <input
            type="file"
            name="pdf"
            accept="application/pdf"
            required
            className="block w-full file:border file:rounded file:px-4 file:py-2 file:bg-primary file:text-white"
          />
          <Button type="submit">Yükle</Button>
        </form>
      </main>

      <Footer />
    </div>
  )
}
