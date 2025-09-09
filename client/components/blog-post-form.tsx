"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"

interface BlogPostFormProps {
  onSuccess: () => void
  post?: any
}

export default function BlogPostForm({ onSuccess, post }: BlogPostFormProps) {
  const [formState, setFormState] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    featuredImage: post?.featuredImage || "",
    category: post?.category || "",
    tags: post?.tags?.join(", ") || "",
    isPublished: post?.isPublished || false,
    loading: false
  })

  const categories = [
    { value: "real-estate", label: "Real Estate" },
    { value: "market-updates", label: "Market Updates" },
    { value: "tips", label: "Tips & Advice" },
    { value: "news", label: "News" }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setFormState((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, loading: true }))

    try {
      const token = localStorage.getItem('adminToken')
      const tags = formState.tags.split(',').map(tag => tag.trim()).filter(tag => tag)

      const response = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: formState.title,
          slug: formState.slug,
          excerpt: formState.excerpt,
          content: formState.content,
          featuredImage: formState.featuredImage,
          category: formState.category,
          tags,
          isPublished: formState.isPublished
        })
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Blog post created successfully!')
        onSuccess()
        setFormState({
          title: "",
          slug: "",
          excerpt: "",
          content: "",
          featuredImage: "",
          category: "",
          tags: "",
          isPublished: false,
          loading: false
        })
      } else {
        toast.error(data.error || 'Failed to create blog post')
      }
    } catch (error) {
      toast.error('Failed to create blog post')
    } finally {
      setFormState((prev) => ({ ...prev, loading: false }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            name="title"
            value={formState.title}
            onChange={handleTitleChange}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="slug">Slug *</Label>
          <Input
            id="slug"
            name="slug"
            value={formState.slug}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          name="excerpt"
          value={formState.excerpt}
          onChange={handleChange}
          rows={3}
          className="mt-1"
          placeholder="Brief summary of the blog post..."
        />
      </div>

      <div>
        <Label htmlFor="content">Content *</Label>
        <Textarea
          id="content"
          name="content"
          value={formState.content}
          onChange={handleChange}
          rows={15}
          required
          className="mt-1"
          placeholder="Write your blog post content here. You can use HTML tags for formatting..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="featuredImage">Featured Image URL</Label>
          <Input
            id="featuredImage"
            name="featuredImage"
            value={formState.featuredImage}
            onChange={handleChange}
            className="mt-1"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            value={formState.category}
            onValueChange={(value) => handleSelectChange('category', value)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="tags">Tags (comma-separated)</Label>
        <Input
          id="tags"
          name="tags"
          value={formState.tags}
          onChange={handleChange}
          className="mt-1"
          placeholder="real-estate, market-trends, investment"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="isPublished"
          checked={formState.isPublished}
          onCheckedChange={(checked) => setFormState(prev => ({ ...prev, isPublished: checked }))}
        />
        <Label htmlFor="isPublished">Publish immediately</Label>
      </div>

      <div className="flex justify-end space-x-2">
        <Button
          type="submit"
          disabled={formState.loading}
        >
          {formState.loading ? 'Creating...' : 'Create Blog Post'}
        </Button>
      </div>
    </form>
  )
} 