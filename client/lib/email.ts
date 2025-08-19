import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export interface PropertyViewRequestEmail {
  propertyId: string
  propertyTitle: string
  propertyLocation?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  title?: string
  preferredDate?: string
  preferredTime?: string
  additionalInfo?: string
  heardFrom?: string
}

export interface ContactRequestEmail {
  name: string
  email: string
  phone: string
  message: string
}

export interface CareerApplicationEmail {
  firstName: string
  lastName: string
  email: string
  phone: string
  position: string
  experience: string
  message: string
  resume?: string
}

export const sendPropertyViewRequestEmail = async (data: PropertyViewRequestEmail) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'spreethamkumar5@gmail.com',
    subject: `Request property view of ${data.propertyId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Property View Request</h2>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        
        <h3 style="color: #666;">Property Details</h3>
        <p><strong>Property ID:</strong> ${data.propertyId}</p>
        <p><strong>Property Title:</strong> ${data.propertyTitle}</p>
        ${data.propertyLocation ? `<p><strong>Location:</strong> ${data.propertyLocation}</p>` : ''}
        
        <h3 style="color: #666;">Customer Details</h3>
        <p><strong>Name:</strong> ${data.title ? data.title + ' ' : ''}${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        
        ${data.preferredDate ? `<p><strong>Preferred Date:</strong> ${data.preferredDate}</p>` : ''}
        ${data.preferredTime ? `<p><strong>Preferred Time:</strong> ${data.preferredTime}</p>` : ''}
        ${data.additionalInfo ? `<p><strong>Additional Info:</strong> ${data.additionalInfo}</p>` : ''}
        ${data.heardFrom ? `<p><strong>Heard From:</strong> ${data.heardFrom}</p>` : ''}
        
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;">
          This request was submitted on ${new Date().toLocaleString()}
        </p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}

export const sendCareerApplicationEmail = async (data: CareerApplicationEmail) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'spreethamkumar5@gmail.com',
    subject: 'Career Application',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Career Application</h2>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        
        <h3 style="color: #666;">Applicant Details</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        
        <h3 style="color: #666;">Application Details</h3>
        <p><strong>Position:</strong> ${data.position}</p>
        <p><strong>Experience Level:</strong> ${data.experience}</p>
        ${data.resume ? `<p><strong>Resume:</strong> ${data.resume}</p>` : ''}
        
        <h3 style="color: #666;">Message</h3>
        <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
          ${data.message.replace(/\n/g, '<br>')}
        </p>
        
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;">
          This application was submitted on ${new Date().toLocaleString()}
        </p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}

export const sendContactRequestEmail = async (data: ContactRequestEmail) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'spreethamkumar5@gmail.com',
    subject: 'Contact Request',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Contact Request</h2>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        
        <h3 style="color: #666;">Customer Details</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        
        <h3 style="color: #666;">Message</h3>
        <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
          ${data.message.replace(/\n/g, '<br>')}
        </p>
        
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;">
          This request was submitted on ${new Date().toLocaleString()}
        </p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}

export interface NewsletterEmail {
  subscriberEmail: string
  blogTitle: string
  blogExcerpt: string
  blogUrl: string
  category: string
  publishedDate: string
}

export const sendNewsletterEmail = async (data: NewsletterEmail) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.subscriberEmail,
    subject: `New Blog Post: ${data.blogTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
        <div style="background-color: white; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #011337; margin: 0; font-size: 24px;">11Square Newsletter</h1>
            <p style="color: #666; margin: 10px 0 0 0;">Latest Property Insights & Market Updates</p>
          </div>
          
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          
          <!-- Blog Post -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #333; margin: 0 0 15px 0; font-size: 20px;">${data.blogTitle}</h2>
            <p style="color: #666; margin: 0 0 15px 0; line-height: 1.6;">${data.blogExcerpt}</p>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <span style="background-color: #e74c3c; color: white; padding: 5px 12px; border-radius: 15px; font-size: 12px; font-weight: bold;">
                ${data.category}
              </span>
              <span style="color: #999; font-size: 12px;">${data.publishedDate}</span>
            </div>
            
            <a href="${data.blogUrl}" style="display: inline-block; background-color: #e74c3c; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s;">
              Read Full Article →
            </a>
          </div>
          
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          
          <!-- Footer -->
          <div style="text-align: center; color: #999; font-size: 12px;">
            <p>You're receiving this email because you subscribed to our newsletter.</p>
            <p>© ${new Date().getFullYear()} 11Square. All rights reserved.</p>
            <p>Brigade Road, Bangalore, Karnataka 560001</p>
          </div>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Newsletter email sending failed:', error)
    return { success: false, error }
  }
}

export const sendBulkNewsletterEmail = async (subscriberEmails: string[], blogData: Omit<NewsletterEmail, 'subscriberEmail'>) => {
  const results = []
  
  for (const email of subscriberEmails) {
    const result = await sendNewsletterEmail({
      ...blogData,
      subscriberEmail: email
    })
    results.push({ email, success: result.success })
  }
  
  return results
} 