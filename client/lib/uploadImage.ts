import { createClient } from '@supabase/supabase-js'

export interface UploadResult {
  success: boolean
  url?: string
  error?: string
}

export const uploadImage = async (file: File, folder: string = 'properties'): Promise<UploadResult> => {
  try {
    console.log(`Starting image upload for file: ${file.name}, Size: ${file.size}, Folder: ${folder}`)
    
    // Check if Supabase credentials are available
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Supabase credentials missing!')
      return {
        success: false,
        error: 'Supabase credentials not configured'
      }
    }

    // Create Supabase client with service role key for admin uploads (bypasses RLS)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    // Generate unique filename
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `${folder}/${fileName}`
    
    console.log('Uploading to path:', filePath)

    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from('images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error('Supabase upload error:', error)
      return {
        success: false,
        error: error.message
      }
    }

    console.log('Upload successful, data:', data)

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('images')
      .getPublicUrl(data.path)

    console.log('Generated public URL:', urlData.publicUrl)

    return {
      success: true,
      url: urlData.publicUrl
    }
  } catch (error) {
    console.error('Upload error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}

export const uploadMultipleImages = async (files: File[]): Promise<string[]> => {
  const uploadPromises = files.map(file => uploadImage(file))
  const results = await Promise.all(uploadPromises)
  
  // Return only successful uploads
  return results
    .filter(result => result.success && result.url)
    .map(result => result.url!)
}
