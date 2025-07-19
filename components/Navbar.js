'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function Navbar({ user }) {
  return (
    <header className="w-full px-6 py-4 border-b bg-background">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          📄 Rapor Yükleme
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback>{user.name?.[0]}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/api/auth/signout">Çıkış</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button asChild>
              <a href="/api/auth/signin">Google ile Giriş</a>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
