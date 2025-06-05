
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Download } from "lucide-react";
import { submitToGoogleSheets } from "@/services/googleSheets";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const countryCodes = [
    { code: '+1', country: 'US/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+971', country: 'UAE' },
    { code: '+65', country: 'Singapore' },
    { code: '+60', country: 'Malaysia' },
    { code: '+61', country: 'Australia' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit the form",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const leadData = {
        name: formData.name,
        countryCode: formData.countryCode,
        phone: formData.phone,
        email: formData.email,
        timestamp: new Date().toISOString(),
        source: 'Contact Form'
      };

      const success = await submitToGoogleSheets(leadData);
      
      if (success) {
        toast({
          title: "Thank you for your interest!",
          description: "Our team will contact you shortly with detailed information about the Ayodhya Studio Apartments.",
        });

        // Reset form
        setFormData({
          name: '',
          countryCode: '+91',
          phone: '',
          email: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your form. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadBrochure = () => {
    // Create a link to download the brochure
    const link = document.createElement('a');
    link.href = '/AyodhyaBrochure.pdf';
    link.download = 'AyodhyaBrochure.pdf';
    link.target = '_blank';
    link.click();
  };

  const downloadPricingTable = () => {
    // Create a link to download the pricing table
    const link = document.createElement('a');
    link.href = '/Pricing Table - Ayodhya Studio Apartment_2025_06_05.pdf';
    link.download = 'Pricing Table - Ayodhya Studio Apartment_2025_06_05.pdf';
    link.target = '_blank';
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-golden-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Take the first step towards your divine investment opportunity
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-golden-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white">
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-golden-500 rounded-full p-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91-7570000985</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-golden-500 rounded-full p-3">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">hello@ayanaprop.com</p>
                    </div>
                  </div>

                  <div className="bg-golden-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Person</h3>
                    <p className="text-gray-600">Ajit Rai</p>
                  </div>

                  {/* Download Buttons */}
                  <div className="space-y-3 pt-4 border-t border-golden-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Download Resources</h3>
                    <Button 
                      onClick={downloadBrochure}
                      className="w-full bg-golden-500 hover:bg-golden-600 text-white flex items-center justify-center space-x-2"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download Ayodhya Brochure</span>
                    </Button>
                    <Button 
                      onClick={downloadPricingTable}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center space-x-2"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download Pricing Table 2025</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="relative">
                <img 
                  src="/lovable-uploads/0893d1cf-499b-4378-90a8-6687e08b301c.png" 
                  alt="Ayodhya Development" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-golden-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white">
                <CardTitle className="text-2xl">Request Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 border-golden-200 focus:border-golden-500"
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Label className="text-gray-700 font-medium">Phone Number *</Label>
                    <div className="flex space-x-2 mt-2">
                      <Select 
                        value={formData.countryCode} 
                        onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="w-32 border-golden-200 focus:border-golden-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.code} ({country.country})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 border-golden-200 focus:border-golden-500"
                        placeholder="Phone number"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 border-golden-200 focus:border-golden-500"
                      placeholder="Enter your email address"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-golden-500 hover:bg-golden-600 text-white font-semibold py-3 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
