'use client'

import { useSession } from 'next-auth/react'
import { useAuth } from '@/hooks/use-auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { LogOut, User, Mail, Calendar } from 'lucide-react'

export default function ProfilePage() {
  const { session, status } = useAuth(true, '/')

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null // Will be redirected by useAuth hook
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white border border-gray-100 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>
              Profile
            </CardTitle>
            <CardDescription className="text-lg text-gray-500 font-['Suisse_Intl',sans-serif]">
              Your account information
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 font-['Suisse_Intl',sans-serif]">
                  {session.user?.name || 'User'}
                </h3>
                <p className="text-gray-600 font-['Suisse_Intl',sans-serif]">
                  {session.user?.email}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-700 font-['Suisse_Intl',sans-serif]">
                  {session.user?.email}
                </span>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-red-500" />
                <span className="text-gray-700 font-['Suisse_Intl',sans-serif]">
                  Member since {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-['Suisse_Intl',sans-serif] font-medium"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
