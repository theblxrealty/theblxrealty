"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { formatPropertyType } from '@/lib/utils'

interface Property {
  id: string
  title: string
  description?: string
  price?: number
  location?: string
  propertyType?: string
  bedrooms?: number
  bathrooms?: number
  area?: number
  images: string[]
  isActive: boolean
  createdAt: string
}

interface Admin {
  id: string
  email: string
  firstName?: string
  lastName?: string
  role: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [admin, setAdmin] = useState<Admin | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(false)
  const [showAddProperty, setShowAddProperty] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  // Debug: Log modal state changes
  useEffect(() => {
    console.log('Modal state changed:', showRegisterModal)
  }, [showRegisterModal])

  // Debug: Log component render
  console.log('AdminDashboard render - showRegisterModal:', showRegisterModal)

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  // Registration form state
  const [registerForm, setRegisterForm] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    role: 'admin'
  })

  // Property form state
  const [propertyForm, setPropertyForm] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    latitude: '',
    longitude: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    images: [] as string[]
  })

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken')
    if (savedToken) {
      setToken(savedToken)
      setIsLoggedIn(true)
      fetchAdminData(savedToken)
      fetchProperties(savedToken)
    }
  }, [])

  const fetchAdminData = async (authToken: string) => {
    try {
      const response = await fetch('/api/auth/admin/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        setAdmin(data.admin)
      }
    } catch (error) {
      console.error('Error fetching admin data:', error)
    }
  }

  const fetchProperties = async (authToken: string) => {
    try {
      const response = await fetch('/api/admin/properties', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        setProperties(data)
      }
    } catch (error) {
      console.error('Error fetching properties:', error)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/auth/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginForm)
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('adminToken', data.token)
        setToken(data.token)
        setAdmin(data.admin)
        setIsLoggedIn(true)
        fetchProperties(data.token)
        toast.success('Login successful!')
      } else {
        toast.error(data.error || 'Login failed')
      }
    } catch (error) {
      toast.error('Login failed')
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Validate password confirmation
    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error('Passwords do not match')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: registerForm.email,
          phone: registerForm.phone,
          password: registerForm.password,
          firstName: registerForm.firstName,
          lastName: registerForm.lastName,
          role: registerForm.role
        })
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Admin registered successfully! Please login.')
        setShowRegisterModal(false)
        setRegisterForm({
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          role: 'admin'
        })
      } else {
        toast.error(data.error || 'Registration failed')
      }
    } catch (error) {
      toast.error('Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setToken(null)
    setAdmin(null)
    setIsLoggedIn(false)
    setProperties([])
    toast.success('Logged out successfully')
  }

  const handleAddProperty = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/admin/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(propertyForm)
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Property added successfully!')
        setShowAddProperty(false)
        setPropertyForm({
          title: '',
          description: '',
          price: '',
          location: '',
          latitude: '',
          longitude: '',
          propertyType: '',
          bedrooms: '',
          bathrooms: '',
          area: '',
          images: []
        })
        fetchProperties(token!)
      } else {
        toast.error(data.error || 'Failed to add property')
      }
    } catch (error) {
      toast.error('Failed to add property')
    } finally {
      setLoading(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <div className="flex gap-2">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('Register button clicked - event:', e)
                    console.log('Current modal state:', showRegisterModal)
                    setShowRegisterModal(true)
                    console.log('Modal state set to true')
                  }}
                  type="button"
                >
                  Register Admin Account
                </button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    console.log('Test button clicked')
                    alert('Test button works!')
                  }}
                  type="button"
                >
                  Test Button
                </Button>
              </div>
              
              {/* Registration Modal */}
              {showRegisterModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Register Admin Account</h2>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowRegisterModal(false)}
                      >
                        ✕
                      </Button>
                    </div>
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={registerForm.firstName}
                            onChange={(e) => setRegisterForm(prev => ({ ...prev, firstName: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={registerForm.lastName}
                            onChange={(e) => setRegisterForm(prev => ({ ...prev, lastName: e.target.value }))}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="registerEmail">Email *</Label>
                        <Input
                          id="registerEmail"
                          type="email"
                          value={registerForm.email}
                          onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={registerForm.phone}
                          onChange={(e) => setRegisterForm(prev => ({ ...prev, phone: e.target.value }))}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="registerPassword">Password *</Label>
                        <Input
                          id="registerPassword"
                          type="password"
                          value={registerForm.password}
                          onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="confirmPassword">Confirm Password *</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={registerForm.confirmPassword}
                          onChange={(e) => setRegisterForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="role">Role</Label>
                        <Select
                          value={registerForm.role}
                          onValueChange={(value) => setRegisterForm(prev => ({ ...prev, role: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="super_admin">Super Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex justify-end space-x-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowRegisterModal(false)}
                        >
                          Cancel
                        </Button>
                        <Button type="submit" disabled={loading}>
                          {loading ? 'Registering...' : 'Register'}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">Admin Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an admin account? Click "Register Admin Account" in the header above.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, {admin?.firstName || admin?.email}
            </p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="properties" className="space-y-6">
          <TabsList>
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="requests">View Requests</TabsTrigger>
            <TabsTrigger value="contacts">Contact Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="properties" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Properties</h2>
              <Dialog open={showAddProperty} onOpenChange={setShowAddProperty}>
                <DialogTrigger asChild>
                  <Button>Add Property</Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Property</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddProperty} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={propertyForm.title}
                          onChange={(e) => setPropertyForm(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="propertyType">Property Type</Label>
                        <Select
                          value={propertyForm.propertyType}
                          onValueChange={(value) => setPropertyForm(prev => ({ ...prev, propertyType: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="flat">Flat</SelectItem>
                            <SelectItem value="farm">Farm</SelectItem>
                            <SelectItem value="farmhouse">Farmhouse</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={propertyForm.description}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, description: e.target.value }))}
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          type="number"
                          value={propertyForm.price}
                          onChange={(e) => setPropertyForm(prev => ({ ...prev, price: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="bedrooms">Bedrooms</Label>
                        <Input
                          id="bedrooms"
                          type="number"
                          value={propertyForm.bedrooms}
                          onChange={(e) => setPropertyForm(prev => ({ ...prev, bedrooms: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="bathrooms">Bathrooms</Label>
                        <Input
                          id="bathrooms"
                          type="number"
                          value={propertyForm.bathrooms}
                          onChange={(e) => setPropertyForm(prev => ({ ...prev, bathrooms: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={propertyForm.location}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, location: e.target.value }))}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="latitude">Latitude</Label>
                        <Input
                          id="latitude"
                          type="number"
                          step="any"
                          value={propertyForm.latitude}
                          onChange={(e) => setPropertyForm(prev => ({ ...prev, latitude: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="longitude">Longitude</Label>
                        <Input
                          id="longitude"
                          type="number"
                          step="any"
                          value={propertyForm.longitude}
                          onChange={(e) => setPropertyForm(prev => ({ ...prev, longitude: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowAddProperty(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" disabled={loading}>
                        {loading ? 'Adding...' : 'Add Property'}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Card key={property.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{property.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {property.price && (
                        <p className="text-lg font-semibold">£{property.price.toLocaleString()}</p>
                      )}
                      {property.location && (
                        <p className="text-gray-600">{property.location}</p>
                      )}
                      {property.propertyType && (
                        <p className="text-sm text-gray-500">{formatPropertyType(property.propertyType)}</p>
                      )}
                      <div className="flex space-x-4 text-sm text-gray-500">
                        {property.bedrooms && <span>{property.bedrooms} beds</span>}
                        {property.bathrooms && <span>{property.bathrooms} baths</span>}
                        {property.area && <span>{property.area} sq ft</span>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requests">
            <h2 className="text-2xl font-semibold mb-4">Property View Requests</h2>
            <p className="text-gray-600">View and manage property viewing requests.</p>
            {/* TODO: Implement property view requests table */}
          </TabsContent>

          <TabsContent value="blog">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Blog Posts</h2>
              <Button disabled>Add Blog Post</Button>
            </div>
            <p className="text-gray-600">Blog post management coming soon.</p>
          </TabsContent>

          <TabsContent value="contacts">
            <h2 className="text-2xl font-semibold mb-4">Contact Requests</h2>
            <p className="text-gray-600">View and manage contact form submissions.</p>
            {/* TODO: Implement contact requests table */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 