
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Download, FileText, Image, Info } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from '@/components/Footer';

const Downloads = () => {
  const downloadItems = [
    {
      title: "Ayodhya Studio Apartments Brochure",
      description: "Complete information about our premium studio apartments, floor plans, and amenities.",
      type: "PDF",
      size: "2.5 MB",
      icon: <FileText className="h-6 w-6" />,
      url: "/lovable-uploads/pdfs/AyodhyaBrochure.pdf"
    },
    {
      title: "Pricing Table 2025",
      description: "Detailed pricing information and payment plans for studio apartments.",
      type: "PDF", 
      size: "1.8 MB",
      icon: <FileText className="h-6 w-6" />,
      url: "/lovable-uploads/pdfs/Pricing Table - Ayodhya Studio Apartment_2025_06_05.pdf"
    },
    {
      title: "Ayodhya Development Report",
      description: "Comprehensive report on Ayodhya's infrastructure and development projects.",
      type: "PDF",
      size: "3.2 MB", 
      icon: <FileText className="h-6 w-6" />,
      url: "/lovable-uploads/pdfs/Ayodhya_Development_Report.pdf"
    },
    {
      title: "Ayodhya News Updates",
      description: "Latest news and updates about Ayodhya's growth and development.",
      type: "PDF",
      size: "2.1 MB",
      icon: <FileText className="h-6 w-6" />,
      url: "/lovable-uploads/pdfs/AyodhyaNews.pdf"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Downloads - Brochures & Documents | Ayodhya Divine Studio Apartments</title>
        <meta name="description" content="Download brochures, pricing tables, and development reports for Ayodhya Divine Studio Apartments. Get complete information about investment opportunities." />
        <meta property="og:title" content="Downloads - Ayodhya Divine Studio Apartments" />
        <meta property="og:description" content="Download comprehensive information about our premium studio apartments in Ayodhya." />
        <meta property="og:url" content="https://ayanaprop.tech/downloads" />
        <link rel="canonical" href="https://ayanaprop.tech/downloads" />
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
                <BreadcrumbPage>Downloads</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Download <span className="text-golden-600">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive information about our studio apartments, pricing, and Ayodhya's development
            </p>
          </div>

          {/* Downloads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {downloadItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-golden-100 rounded-lg p-3 text-golden-600">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="bg-gray-100 px-2 py-1 rounded">{item.type}</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-golden-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-golden-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download className="h-5 w-5" />
                  Download Now
                </a>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <Info className="h-8 w-8 text-golden-600 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Information</h2>
                <div className="space-y-3 text-gray-600">
                  <p>• All documents are in PDF format and can be viewed on any device</p>
                  <p>• For the latest pricing and availability, please contact our sales team</p>
                  <p>• Documents are regularly updated to reflect current information</p>
                  <p>• Having trouble downloading? Contact us at <a href="mailto:hello@ayanaprop.tech" className="text-golden-600 hover:text-golden-700">hello@ayanaprop.tech</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Downloads;
