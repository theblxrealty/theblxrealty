import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Policy</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-navy-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-navy-900">
            <p>
              At 11Square, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, and safeguard your information when you
              visit our website or use our luxury real estate services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you
                provide when filling out forms on our website or contacting us directly.
              </li>
              <li>
                <strong>Property Preferences:</strong> Information about your property interests, budget, location
                preferences, and other requirements related to luxury real estate.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including pages visited, time
                spent on pages, and other browsing data.
              </li>
              <li>
                <strong>Device Information:</strong> Information about the device you use to access our website,
                including IP address, browser type, and operating system.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing and improving our luxury real estate services</li>
              <li>Communicating with you about properties, services, and market updates</li>
              <li>Personalizing your experience on our website</li>
              <li>Analyzing website usage to improve our content and functionality</li>
              <li>Complying with legal obligations and protecting our rights</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties except in the
              following circumstances:
            </p>
            <ul>
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or to protect our rights and the rights of others</li>
              <li>With your explicit consent or at your direction</li>
            </ul>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We have no control over and assume no
              responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for use by children under the age of 18. We do not knowingly collect
              personal information from children under 18. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@11square.com or +91
              98765 43210.
            </p>

            <p className="text-slate-500">Last updated: April 1, 2023</p>
          </div>
        </div>
      </section>
    </div>
  )
}
