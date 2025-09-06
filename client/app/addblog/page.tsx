"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Upload, FileText, Image as ImageIcon } from "lucide-react"
// Removed direct uploadImage import - using API route instead
import { toast } from "sonner"

interface BlogFormData {
  title: string
  excerpt: string
  content: string
  redirectUrl: string
  category: string
  tags: string
  featuredImage: string
}

export default function AddBlogPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  
  // Featured image
  const [featuredImageFile, setFeaturedImageFile] = useState<File | null>(null)
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string>("")

  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    excerpt: "",
    content: "",
    redirectUrl: "",
    category: "",
    tags: "",
    featuredImage: ""
  })

  // Handle form input changes
  const handleInputChange = (field: keyof BlogFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Handle featured image selection
  const handleFeaturedImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (featuredImagePreview) {
        URL.revokeObjectURL(featuredImagePreview)
      }
      setFeaturedImageFile(file)
      setFeaturedImagePreview(URL.createObjectURL(file))
    }
  }

  // Remove featured image
  const removeFeaturedImage = () => {
    if (featuredImagePreview) {
      URL.revokeObjectURL(featuredImagePreview)
    }
    setFeaturedImageFile(null)
    setFeaturedImagePreview("")
  }

  // Upload featured image via API using service role key
  const uploadFeaturedImage = async () => {
    if (!featuredImageFile) return null

    setUploadingImage(true)
    try {
      // Get admin token
      const adminToken = localStorage.getItem('adminToken')
      if (!adminToken) {
        throw new Error('Admin authentication required')
      }

      // Create FormData
      const formData = new FormData()
      formData.append('file', featuredImageFile)

      // Upload via API
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${adminToken}`
        },
        body: formData
      })

      const result = await response.json()

      if (response.ok && result.success) {
        return result.url
      } else {
        throw new Error(result.error || 'Upload failed')
      }
    } catch (error) {
      console.error('Image upload error:', error)
      throw error
    } finally {
      setUploadingImage(false)
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title.trim() || !formData.content.trim()) {
      toast.error("Title and content are required")
      return
    }

    setLoading(true)
    
    try {
      // Upload featured image if selected
      let featuredImageUrl = ""
      if (featuredImageFile) {
        featuredImageUrl = await uploadFeaturedImage() || ""
      }

      // Prepare form data for API
      const submitData = {
        ...formData,
        featuredImage: featuredImageUrl
      }

      // Get admin token for authentication
      const adminToken = localStorage.getItem('adminToken')
      if (!adminToken) {
        toast.error('Admin authentication required. Please log in again.')
        return
      }

      // Submit to API
      const response = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify(submitData)
      })

      const result = await response.json()

      if (response.ok) {
        toast.success("Blog post created successfully!")
        router.push('/blog')
      } else {
        toast.error(result.error || "Failed to create blog post")
      }
    } catch (error) {
      console.error('Submit error:', error)
      toast.error("Failed to create blog post")
    } finally {
      setLoading(false)
    }
  }

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      if (featuredImagePreview) {
        URL.revokeObjectURL(featuredImagePreview)
      }
    }
  }, [featuredImagePreview])

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Blog Post</h1>
          <p className="text-gray-600">Create and publish a new blog article</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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
                  rows={10}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* SEO & Settings */}
          <Card>
            <CardHeader>
              <CardTitle>SEO & Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="redirectUrl">Redirect URL</Label>
                <Input
                  id="redirectUrl"
                  type="url"
                  value={formData.redirectUrl}
                  onChange={(e) => handleInputChange('redirectUrl', e.target.value)}
                  placeholder="https://example.com/external-article"
                />
                <p className="text-sm text-gray-500 mt-1">
                  If provided, visitors will be redirected to this external URL
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleInputChange('category', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Legal">Legal</SelectItem>
                      <SelectItem value="Investment">Investment</SelectItem>
                      <SelectItem value="Market">Market</SelectItem>
                      <SelectItem value="Guide">Guide</SelectItem>
                      <SelectItem value="News">News</SelectItem>
                      <SelectItem value="Tips">Tips</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => handleInputChange('tags', e.target.value)}
                    placeholder="property, real estate, investment"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Separate tags with commas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Featured Image
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!featuredImagePreview ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Upload a featured image for your blog post</p>
                  <input
                    type="file"
                    id="featuredImage"
                    accept="image/*"
                    onChange={handleFeaturedImageSelect}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('featuredImage')?.click()}
                  >
                    Choose Image
                  </Button>
                </div>
              ) : (
                <div className="relative">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image
                      src={featuredImagePreview}
                      alt="Featured image preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={removeFeaturedImage}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading || uploadingImage}
            >
              {loading ? "Creating..." : uploadingImage ? "Uploading..." : "Create Blog Post"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
