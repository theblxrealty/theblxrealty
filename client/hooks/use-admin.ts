"use client"

import { useState, useEffect } from 'react'

interface AdminUser {
  id: string
  email: string
  firstName?: string
  lastName?: string
  role: string
}

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        // First check localStorage (set by auth modal)
        const storedAdminUser = localStorage.getItem('adminUser')
        const storedAdminToken = localStorage.getItem('adminToken')
        
        if (storedAdminUser && storedAdminToken) {
          const user = JSON.parse(storedAdminUser)
          setIsAdmin(true)
          setAdminUser(user)
          setLoading(false)
          return
        }

        // Fallback: Check if admin token exists in cookies
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1]

        if (!token) {
          setIsAdmin(false)
          setAdminUser(null)
          setLoading(false)
          return
        }

        // Verify admin token with backend
        const response = await fetch('/api/auth/admin/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (response.ok) {
          const data = await response.json()
          setIsAdmin(true)
          setAdminUser(data.admin)
        } else {
          setIsAdmin(false)
          setAdminUser(null)
        }
      } catch (error) {
        console.error('Admin check error:', error)
        setIsAdmin(false)
        setAdminUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkAdminStatus()
  }, [])

  const logout = () => {
    // Clear admin data from both localStorage and cookies
    localStorage.removeItem('adminUser')
    localStorage.removeItem('adminToken')
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    setIsAdmin(false)
    setAdminUser(null)
  }

  return {
    isAdmin,
    adminUser,
    loading,
    logout
  }
}
