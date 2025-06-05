
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-golden-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-golden-600 hover:text-golden-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white">
              <CardTitle className="text-3xl font-bold text-center">
                Privacy Policy
              </CardTitle>
              <p className="text-center text-golden-100 mt-2">
                Effective Date: January 9, 2025 | Last Updated: January 9, 2025
              </p>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ayana Proptech LLP ("we," "our," or "us") is committed to protecting your privacy and personal data. 
                  This Privacy Policy explains how we collect, use, store, and protect your information when you visit 
                  our website at <strong>ayanaprop.tech</strong> or interact with our services related to Ayodhya Divine 
                  Studio Apartments. This policy complies with applicable data protection laws including the General Data 
                  Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and India's Personal Data Protection laws.
                </p>
              </section>

              {/* Data We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Personal Information</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Contact Information:</strong> Name, phone number, email address, and country code</li>
                      <li><strong>Communication Data:</strong> Messages sent through contact forms or WhatsApp</li>
                      <li><strong>Interest Data:</strong> Property preferences and investment inquiries</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Technical Information</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Device Information:</strong> IP address, browser type, device type, and operating system</li>
                      <li><strong>Usage Data:</strong> Pages visited, time spent on site, and interaction patterns</li>
                      <li><strong>Analytics Data:</strong> Website performance and user behavior (via Google Analytics)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Data */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Property Services:</strong> To provide information about Ayodhya studio apartments and investment opportunities</li>
                  <li><strong>Communication:</strong> To respond to inquiries, provide customer support, and send relevant property updates</li>
                  <li><strong>Marketing:</strong> To send promotional materials about our properties (with your consent)</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our legitimate interests</li>
                  <li><strong>Website Improvement:</strong> To analyze website usage and improve user experience</li>
                </ul>
              </section>

              {/* Data Storage and Security */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Storage</h3>
                    <p className="text-gray-700">
                      Your personal data is stored securely in Google Sheets with restricted access. We implement 
                      appropriate technical and organizational measures to protect your data against unauthorized 
                      access, alteration, disclosure, or destruction.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 Data Retention</h3>
                    <p className="text-gray-700">
                      We retain your personal data only for as long as necessary to fulfill the purposes outlined 
                      in this policy, typically for 3 years from last contact, unless a longer retention period 
                      is required by law.
                    </p>
                  </div>
                </div>
              </section>

              {/* Third-Party Integrations */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 Services We Use</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Google Sheets:</strong> For secure storage and management of lead data</li>
                      <li><strong>Google Analytics:</strong> For website traffic analysis and performance monitoring</li>
                      <li><strong>WhatsApp Business:</strong> For customer communication and support</li>
                      <li><strong>Google Ads:</strong> For advertising and remarketing (if applicable)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2 Data Sharing</h3>
                    <p className="text-gray-700">
                      We do not sell, trade, or rent your personal information to third parties. We may share 
                      data with trusted service providers who assist in our operations, subject to strict 
                      confidentiality agreements.
                    </p>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Under GDPR (EU Residents)</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Right to access your personal data</li>
                      <li>Right to rectification of inaccurate data</li>
                      <li>Right to erasure ("right to be forgotten")</li>
                      <li>Right to restrict processing</li>
                      <li>Right to data portability</li>
                      <li>Right to object to processing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">6.2 Under CCPA (California Residents)</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Right to know what personal information is collected</li>
                      <li>Right to delete personal information</li>
                      <li>Right to opt-out of sale of personal information</li>
                      <li>Right to non-discrimination for exercising privacy rights</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your website experience and analyze site usage:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Google Analytics for traffic analysis</li>
                  <li><strong>Marketing Cookies:</strong> For advertising and remarketing (if applicable)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p className="text-gray-700">
                  Your data may be processed in countries outside your jurisdiction. We ensure appropriate 
                  safeguards are in place, including standard contractual clauses and adequacy decisions, 
                  to protect your data during international transfers.
                </p>
              </section>

              {/* Updates */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Policy Updates</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy periodically. We will notify you of significant changes 
                  by posting the new policy on our website with an updated effective date. Continued use 
                  of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <div className="bg-golden-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    For any privacy-related questions, data requests, or to exercise your rights, please contact us:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-golden-600" />
                      <div>
                        <p className="font-semibold">Email:</p>
                        <p className="text-gray-700">hello@ayanaprop.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-golden-600" />
                      <div>
                        <p className="font-semibold">Phone:</p>
                        <p className="text-gray-700">+91-7570000985</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-golden-600" />
                      <div>
                        <p className="font-semibold">Address:</p>
                        <p className="text-gray-700">
                          Ayana Proptech LLP<br />
                          97, Kahlon Garden City, Sec 12, Vrindavan Yojna<br />
                          Lucknow - 226025, UP, India
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded border-l-4 border-golden-500">
                    <p className="text-sm text-gray-600">
                      <strong>Data Protection Officer:</strong> For specific data protection queries, 
                      please email us with "Data Protection" in the subject line.
                    </p>
                  </div>
                </div>
              </section>

              {/* Back to Home Button */}
              <div className="text-center pt-8 border-t border-gray-200">
                <Link to="/">
                  <Button className="bg-golden-500 hover:bg-golden-600 text-white px-8 py-3">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
