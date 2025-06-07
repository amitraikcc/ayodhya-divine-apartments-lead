
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, MapPin, Target } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Ayodhya Divine Studio Apartments | Ayana Proptech LLP</title>
        <meta name="description" content="Learn about Ayana Proptech LLP and our premium studio apartment project in Ayodhya. Discover our mission to provide divine investment opportunities in the holy city." />
        <meta property="og:title" content="About Us - Ayodhya Divine Studio Apartments" />
        <meta property="og:description" content="Learn about Ayana Proptech LLP and our premium studio apartment project in Ayodhya." />
        <meta property="og:url" content="https://ayanaprop.tech/about" />
        <link rel="canonical" href="https://ayanaprop.tech/about" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ayana Proptech LLP",
            "url": "https://ayanaprop.tech",
            "logo": "https://ayanaprop.tech/lovable-uploads/efd14b6f-c4dc-4d8a-a455-1549c8bd9fc2.png",
            "description": "Premium studio apartments in Ayodhya's spiritual and commercial development zone",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "97, Kahlon Garden City, Sec 12, Vrindavan Yojna",
              "addressLocality": "Lucknow",
              "postalCode": "226025",
              "addressRegion": "UP",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7570000985",
              "contactType": "sales",
              "email": "hello@ayanaprop.tech"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-golden-50">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-golden-600">Ayana Proptech LLP</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating divine investment opportunities in the holy city of Ayodhya through premium studio apartments
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Target className="h-12 w-12 text-golden-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide premium, affordable studio apartments in Ayodhya's rapidly developing spiritual and commercial hub, 
                offering investors a unique opportunity to be part of India's most significant religious and cultural renaissance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Award className="h-12 w-12 text-golden-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the leading real estate developer in Ayodhya, contributing to the city's transformation while 
                preserving its spiritual essence and providing world-class living experiences for residents and pilgrims.
              </p>
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-white rounded-2xl p-12 shadow-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Ayana Proptech?</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-golden-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Strategic Location</h3>
                      <p className="text-gray-600">Located in Surajkund Area, near the Ram Mandir and major development projects.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-golden-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                      <p className="text-gray-600">Led by experienced professionals with deep knowledge of Ayodhya's real estate market.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-golden-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                      <p className="text-gray-600">Committed to delivering premium quality construction and modern amenities.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-golden-100 to-orange-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Company:</strong> Ayana Proptech LLP</p>
                  <p><strong>Contact Person:</strong> Ajit Rai</p>
                  <p><strong>Phone:</strong> +91-7570000985</p>
                  <p><strong>Email:</strong> hello@ayanaprop.tech</p>
                  <p><strong>Address:</strong> 97, Kahlon Garden City, Sec 12, Vrindavan Yojna, Lucknow - 226025, UP, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Invest in Ayodhya's Future?
            </h3>
            <p className="text-gray-600 mb-6">
              Get expert guidance on the best investment opportunities in Ayodhya's booming real estate market.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-golden-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-golden-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Our Experts
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
