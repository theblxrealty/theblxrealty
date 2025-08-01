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