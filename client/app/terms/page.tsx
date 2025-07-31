import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-gold-300 hover:text-gold-100 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">
              Terms of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Service</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-navy-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-navy-900">
            <p>
              Welcome to 11Square. These Terms of Service ("Terms") govern your use of our website, services, and luxury
              property platform. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the 11Square website and services, you acknowledge that you have read, understood,
              and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              11Square provides information about premium properties, luxury real estate services, and related
              consultation services. Our website offers property listings, market insights, and resources related to
              high-end real estate in Bangalore.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              Some features of our services may require you to create an account. You are responsible for maintaining
              the confidentiality of your account information and password. You agree to notify us immediately of any
              unauthorized use of your account or any other breach of security.
            </p>

            <h2>4. User Conduct</h2>
            <p>When using our services, you agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Submit false or misleading information</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for any illegal or unauthorized purpose</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All content on the 11Square website, including text, graphics, logos, images, and software, is the
              property of 11Square or its content suppliers and is protected by copyright and intellectual property
              laws. You may not reproduce, distribute, modify, or create derivative works from any content without our
              express written consent.
            </p>

            <h2>6. Property Listings</h2>
            <p>
              Property listings on our website are for informational purposes only. While we strive to provide accurate
              and up-to-date information, we do not guarantee the accuracy, completeness, or availability of any
              property listing. All property details should be independently verified.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              11Square shall not be liable for any direct, indirect, incidental, special, consequential, or punitive
              damages resulting from your use or inability to use our services, or for any other claim related to our
              services. This includes, but is not limited to, loss of revenue, profits, or data.
            </p>

            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless 11Square, its officers, directors, employees, and agents from any
              claims, liabilities, damages, losses, costs, or expenses arising from your use of our services or
              violation of these Terms.
            </p>

            <h2>9. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon
              posting on our website. Your continued use of our services after any modifications indicates your
              acceptance of the updated Terms.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its
              conflict of law provisions.
            </p>

            <h2>11. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at legal@11square.com.</p>

            <p className="text-slate-500">Last updated: April 1, 2023</p>
          </div>
        </div>
      </section>
    </div>
  )
}
