'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Loader2, Eye, EyeOff, X, Mail } from 'lucide-react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onLoginSuccess: (user: any, isAdmin: boolean) => void
}

interface AuthFormData {
  email: string
  password: string
  firstName?: string
  lastName?: string
  phone?: string
  title?: string
}

export default function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    title: ''
  })

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setError('')
      setSuccess('')
      setIsLogin(true)
      setFormData({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        title: ''
      })
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      setError('')
      
      const result = await signIn('google', { 
        callbackUrl: '/',
        redirect: false 
      })

      if (result?.error) {
        if (result.error === 'OAuthAccountNotLinked') {
          setError('This email is already associated with a password-based account. Please sign in with your password instead.')
        } else {
          setError('Google sign-in failed. Please try again.')
        }
      } else if (result?.ok) {
        setSuccess('Google sign-in successful!')
        setTimeout(() => {
          onClose()
          router.push('/')
        }, 1000)
      }
    } catch (error) {
      setError('An error occurred during Google sign-in.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register'
      const payload = isLogin 
        ? { email: formData.email, password: formData.password }
        : formData

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      if (isLogin) {
        // Store token and user data
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        
        // If admin, store admin flag
        if (data.isAdmin) {
          localStorage.setItem('isAdmin', 'true')
          setSuccess('Admin login successful!')
          onLoginSuccess(data.user, true)
          setTimeout(() => {
            onClose()
            router.push('/admin')
          }, 1000)
        } else {
          setSuccess('Login successful!')
          onLoginSuccess(data.user, false)
          setTimeout(() => {
            onClose()
          }, 1000)
        }
      } else {
        setSuccess('Registration successful! Please login.')
        setIsLogin(true)
        setFormData({
          email: formData.email,
          password: '',
          firstName: '',
          lastName: '',
          phone: '',
          title: ''
        })
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setError('')
    setSuccess('')
    if (!isLogin) {
      // Clear form when switching to login
      setFormData({
        email: formData.email,
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        title: ''
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border border-gray-100 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-black" style={{fontFamily: 'Tiempos Headline, serif', fontWeight: '400'}}>
            {isLogin ? 'Welcome Back' : 'Register'}
          </DialogTitle>
          <p className="text-center text-lg text-gray-500 font-['Suisse_Intl',sans-serif]">
            {isLogin 
              ? 'Sign in to your account to continue'
              : 'Create your account to access exclusive features'
            }
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Google OAuth Button */}
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full border border-gray-300 hover:border-gray-400 hover:shadow-md bg-white text-gray-700 font-['Suisse_Intl',sans-serif] font-medium relative overflow-hidden group transition-all duration-200"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <div className="flex items-center justify-center w-full">
                {/* Google Logo */}
                <svg className="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </div>
            )}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 font-['Suisse_Intl',sans-serif]">Or continue with</span>
            </div>
          </div>

          {!isLogin && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-black font-['Suisse_Intl',sans-serif] font-medium">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500 font-['Suisse_Intl',sans-serif]"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-black font-['Suisse_Intl',sans-serif] font-medium">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500 font-['Suisse_Intl',sans-serif]"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone" className="text-black font-['Suisse_Intl',sans-serif] font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500 font-['Suisse_Intl',sans-serif]"
                />
              </div>
              <div>
                <Label htmlFor="title" className="text-black font-['Suisse_Intl',sans-serif] font-medium">Title (Optional)</Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Mr., Mrs., Dr., etc."
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500 font-['Suisse_Intl',sans-serif]"
                />
              </div>
            </>
          )}
          
          <div>
            <Label htmlFor="email" className="text-black font-['Suisse_Intl',sans-serif] font-medium">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border-gray-300 focus:border-red-500 focus:ring-red-500 font-['Suisse_Intl',sans-serif]"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-black font-['Suisse_Intl',sans-serif] font-medium">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                required
                className="border-gray-300 focus:border-red-500 focus:ring-red-500 font-['Suisse_Intl',sans-serif]"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {error && (
            <Alert variant="destructive" className="border-red-200 bg-red-50">
              <AlertDescription className="text-red-800 font-['Suisse_Intl',sans-serif]">{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-200 bg-green-50">
              <AlertDescription className="text-green-800 font-['Suisse_Intl',sans-serif]">{success}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-['Suisse_Intl',sans-serif] font-medium"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isLogin ? 'Signing in...' : 'Creating account...'}
              </>
            ) : (
              isLogin ? 'Sign In' : 'Register'
            )}
          </Button>
        </form>

        <div className="text-center pt-4">
          <Button
            variant="link"
            onClick={toggleMode}
            className="text-sm text-gray-500 hover:text-red-500 font-['Suisse_Intl',sans-serif] relative group"
          >
            <span className="relative">
              {isLogin 
                ? "Don't have an account? Register"
                : "Already have an account? Sign in"
              }
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 