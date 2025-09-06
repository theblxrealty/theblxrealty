"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { X, Upload, Plus, Edit, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  featuredImage?: string
  redirectUrl?: string
  category?: string
  tags: string[]
  isPublished: boolean
  publishedAt?: string
  createdAt: string
  author: {
    id: string
    firstName?: string
    lastName?: string
    email: string
  }
}

interface BlogFormData {
  title: string
  excerpt: string
  content: string
  redirectUrl: string
  category: string
  tags: string
}

export default function AdminBlogsPage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(false)
  const [showAddBlog, setShowAddBlog] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  
  // Image handling
  const [featuredImageFile, setFeaturedImageFile] = useState<File | null>(null)
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string>("")

  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    excerpt: "",
    content: "",
    redirectUrl: "",
    category: "",
    tags: ""
  })

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken')
    if (savedToken) {
      setToken(savedToken)
      setIsLoggedIn(true)
      fetchBlogPosts(savedToken)
    } else {
      router.push('/admin')
    }
  }, [router])

  const fetchBlogPosts = async (authToken: string) => {
    try {
      const response = await fetch('/api/admin/blogs', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        setBlogPosts(data.posts)
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error)
    }
  }

  const handleInputChange = (field: keyof BlogFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (featuredImagePreview) {
        URL.revokeObjectURL(featuredImagePreview)
      }
      setFeaturedImageFile(file)
      setFeaturedImagePreview(URL.createObjectURL(file))
    }
  }

  const removeImage = () => {
    if (featuredImagePreview) {
      URL.revokeObjectURL(featuredImagePreview)
    }
    setFeaturedImageFile(null)
    setFeaturedImagePreview("")
  }

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.content) {
      toast.error('Title and content are required')
      return
    }

    setLoading(true)
    
    try {
      let featuredImageBase64 = null
      if (featuredImageFile) {
        setUploadingImage(true)
        featuredImageBase64 = await convertFileToBase64(featuredImageFile)
        setUploadingImage(false)
      }

      const blogData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        featuredImageFile: featuredImageBase64
      }

      const response = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(blogData)
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Blog post created successfully!')
        setShowAddBlog(false)
        setFormData({
          title: "",
          excerpt: "",
          content: "",
          redirectUrl: "",
          category: "",
          tags: ""
        })
        removeImage()
        fetchBlogPosts(token!)
      } else {
        toast.error(result.error || 'Failed to create blog post')
      }
    } catch (error) {
      console.error('Submit error:', error)
      toast.error('Failed to create blog post')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setToken(null)
    setIsLoggedIn(false)
    setBlogPosts([])
    router.push('/admin')
  }

  // Clean up preview URLs on unmount
  useEffect(() => {
    return () => {
      if (featuredImagePreview) URL.revokeObjectURL(featuredImagePreview)
    }
  }, [])

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">Please login as admin to access this page.</p>
          <Button onClick={() => router.push('/admin')}>
            Go to Admin Login
          </Button>
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
            <h1 className="text-3xl font-bold">Blog Management</h1>
            <p className="text-gray-600">
              Create and manage blog posts
            </p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => router.push('/admin')} variant="outline">
              Back to Admin
            </Button>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
        </div>

        {/* Add Blog Button */}
        <div className="mb-6">
          <Dialog open={showAddBlog} onOpenChange={setShowAddBlog}>
            <DialogTrigger asChild>
              <Button className="bg-red-500 hover:bg-red-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Blog Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Blog Post</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="Enter blog post title"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Buying Guide">Buying Guide</SelectItem>
                        <SelectItem value="Selling Tips">Selling Tips</SelectItem>
                        <SelectItem value="Investment">Investment</SelectItem>
                        <SelectItem value="Market Analysis">Market Analysis</SelectItem>
                        <SelectItem value="Legal">Legal</SelectItem>
                        <SelectItem value="News">News</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    placeholder="Brief description of the blog post"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => handleInputChange('content', e.target.value)}
                    placeholder="Write your blog post content here..."
                    rows={8}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="redirectUrl">Redirect URL</Label>
                  <Input
                    id="redirectUrl"
                    value={formData.redirectUrl}
                    onChange={(e) => handleInputChange('redirectUrl', e.target.value)}
                    placeholder="https://example.com/blog-post"
                    type="url"
                  />
                </div>

                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => handleInputChange('tags', e.target.value)}
                    placeholder="property, investment, bangalore"
                  />
                </div>

                {/* Featured Image Upload */}
                <div>
                  <Label htmlFor="featuredImage">Featured Image</Label>
                  <div className="mt-2">
                    <input
                      id="featuredImage"
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('featuredImage')?.click()}
                      className="w-full h-32 border-dashed border-2 border-gray-300 hover:border-gray-400"
                    >
                      <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                        <span className="text-gray-600">
                          {featuredImageFile ? 'Change Image' : 'Upload Featured Image'}
                        </span>
                      </div>
                    </Button>
                  </div>
                  {featuredImagePreview && (
                    <div className="mt-4 relative group">
                      <div className="aspect-video relative overflow-hidden rounded-lg border border-gray-200 bg-gray-200">
                        <Image
                          src={featuredImagePreview}
                          alt="Featured Image Preview"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={removeImage}
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </div>

                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddBlog(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading || uploadingImage}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    {loading ? 'Creating...' : uploadingImage ? 'Uploading Image...' : 'Create Blog Post'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Blog Posts List */}
        <div className="space-y-6">
          {blogPosts.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500">No blog posts found. Create your first blog post!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  {post.featuredImage && (
                    <div className="aspect-video relative bg-gray-200">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {post.category && (
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {post.category}
                        </span>
                      )}
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-xs text-gray-500">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>
                          {post.author.firstName} {post.author.lastName}
                        </span>
                        <span>
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      {post.redirectUrl && (
                        <div className="text-xs text-blue-600 truncate">
                          <a href={post.redirectUrl} target="_blank" rel="noopener noreferrer">
                            {post.redirectUrl}
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
