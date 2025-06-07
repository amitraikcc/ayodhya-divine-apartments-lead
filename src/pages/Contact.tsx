
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Ayodhya Divine Studio Apartments | Get Investment Details</title>
        <meta name="description" content="Contact Ayana Proptech LLP for premium studio apartments in Ayodhya. Call +91-7570000985 or email hello@ayanaprop.tech for investment opportunities." />
        <meta property="og:title" content="Contact Us - Ayodhya Divine Studio Apartments" />
        <meta property="og:description" content="Contact us for premium studio apartment investment opportunities in Ayodhya." />
        <meta property="og:url" content="https://ayanaprop.tech/contact" />
        <link rel="canonical" href="https://ayanaprop.tech/contact" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us - Ayodhya Divine Studio Apartments",
            "description": "Contact Ayana Proptech LLP for investment opportunities in Ayodhya",
            "url": "https://ayanaprop.tech/contact"
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
                <BreadcrumbPage>Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-golden-600">Our Experts</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for premium investment opportunities in Ayodhya's divine studio apartments
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Phone className="h-8 w-8 text-golden-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91-7570000985</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Mail className="h-8 w-8 text-golden-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">hello@ayanaprop.tech</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <MapPin className="h-8 w-8 text-golden-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600 text-sm">Lucknow, UP</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Clock className="h-8 w-8 text-golden-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">9 AM - 7 PM</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
