
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
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
            <h1 className="text-2xl font-bold text-gray-900">Terms and Conditions</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white">
              <CardTitle className="text-3xl font-bold text-center">
                Terms and Conditions
              </CardTitle>
              <p className="text-center text-golden-100 mt-2">
                Effective Date: January 9, 2025 | Last Updated: January 9, 2025
              </p>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Ayana Proptech LLP's website at <strong>ayanaprop.tech</strong>. By accessing and using 
                  this website, you accept and agree to be bound by the terms and provision of this agreement. 
                  These Terms and Conditions govern your use of our website and services related to Ayodhya Divine 
                  Studio Apartments. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              {/* Use License */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Permission is granted to temporarily download one copy of the materials on Ayana Proptech LLP's 
                    website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                    not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                    <li>attempt to decompile or reverse engineer any software contained on our website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>
              </section>

              {/* Property Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Property Information and Investment</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    All property information, pricing, and investment details provided on this website are for 
                    informational purposes only and subject to change without notice. Ayana Proptech LLP:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Does not guarantee specific rental returns or capital appreciation</li>
                    <li>Reserves the right to modify pricing, specifications, and availability</li>
                    <li>Requires all investments to be subject to proper due diligence and legal documentation</li>
                    <li>Recommends consulting with financial and legal advisors before making investment decisions</li>
                  </ul>
                </div>
              </section>

              {/* User Responsibilities */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">When using our website and services, you agree to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Provide accurate, current, and complete information in all forms and communications</li>
                  <li>Not engage in spam, harassment, or fraudulent activities</li>
                  <li>Not attempt to gain unauthorized access to our systems or data</li>
                  <li>Respect intellectual property rights of all content on the website</li>
                  <li>Comply with all applicable local, state, and national laws and regulations</li>
                  <li>Not use the website for any unlawful or prohibited activities</li>
                </ul>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer</h2>
                <p className="text-gray-700">
                  The materials on Ayana Proptech LLP's website are provided on an 'as is' basis. Ayana Proptech LLP 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                  including without limitation, implied warranties or conditions of merchantability, fitness for a 
                  particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              {/* Limitations */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitations of Liability</h2>
                <p className="text-gray-700">
                  In no event shall Ayana Proptech LLP or its suppliers be liable for any damages (including, without 
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the 
                  use or inability to use the materials on our website, even if Ayana Proptech LLP or an authorized 
                  representative has been notified orally or in writing of the possibility of such damage. Because some 
                  jurisdictions do not allow limitations on implied warranties, or limitations of liability for 
                  consequential or incidental damages, these limitations may not apply to you.
                </p>
              </section>

              {/* Accuracy of Materials */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Accuracy of Materials</h2>
                <p className="text-gray-700">
                  The materials appearing on our website could include technical, typographical, or photographic errors. 
                  Ayana Proptech LLP does not warrant that any of the materials on its website are accurate, complete, 
                  or current. Ayana Proptech LLP may make changes to the materials contained on its website at any time 
                  without notice. However, Ayana Proptech LLP does not make any commitment to update the materials.
                </p>
              </section>

              {/* Links */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Links to Third-Party Websites</h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites that are not owned or controlled by Ayana 
                  Proptech LLP. We have no control over, and assume no responsibility for, the content, privacy policies, 
                  or practices of any third-party websites. You acknowledge and agree that we shall not be responsible 
                  or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in 
                  connection with use of or reliance on any such content, goods, or services available on or through 
                  any such websites or services.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law and Jurisdiction</h2>
                <p className="text-gray-700">
                  These terms and conditions are governed by and construed in accordance with the laws of India, 
                  specifically the state of Uttar Pradesh. Any disputes arising under these terms shall be subject 
                  to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh, India. You hereby consent 
                  to the personal jurisdiction of such courts for the purpose of litigating all such claims or disputes.
                </p>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy Policy</h2>
                <p className="text-gray-700">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of 
                  the website, to understand our practices. You can access our{' '}
                  <Link to="/privacy-policy" className="text-golden-600 hover:text-golden-700 underline">
                    Privacy Policy here
                  </Link>.
                </p>
              </section>

              {/* Modifications */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications</h2>
                <p className="text-gray-700">
                  Ayana Proptech LLP may revise these terms of service for its website at any time without notice. 
                  By using this website, you are agreeing to be bound by the then current version of these terms 
                  of service. We recommend that you periodically review these terms to stay informed of any updates.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                <div className="bg-golden-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Company:</strong> Ayana Proptech LLP</p>
                    <p><strong>Email:</strong> hello@ayanaprop.com</p>
                    <p><strong>Phone:</strong> +91-7570000985</p>
                    <p><strong>Address:</strong> 97, Kahlon Garden City, Sec 12, Vrindavan Yojna, Lucknow - 226025, UP, India</p>
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

export default TermsAndConditions;
