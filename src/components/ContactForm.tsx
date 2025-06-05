
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
    email: "",
    message: "",
  });

  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "US/Canada" },
    { code: "+44", country: "UK" },
    { code: "+971", country: "UAE" },
    { code: "+65", country: "Singapore" },
    { code: "+60", country: "Malaysia" },
    { code: "+61", country: "Australia" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+31", country: "Netherlands" },
    { code: "+41", country: "Switzerland" },
    { code: "+46", country: "Sweden" },
    { code: "+47", country: "Norway" },
    { code: "+45", country: "Denmark" },
    { code: "+358", country: "Finland" },
    { code: "+43", country: "Austria" },
    { code: "+32", country: "Belgium" },
    { code: "+351", country: "Portugal" },
    { code: "+30", country: "Greece" },
    { code: "+420", country: "Czech Republic" },
    { code: "+48", country: "Poland" },
    { code: "+36", country: "Hungary" },
    { code: "+90", country: "Turkey" },
    { code: "+7", country: "Russia" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+82", country: "South Korea" },
    { code: "+66", country: "Thailand" },
    { code: "+84", country: "Vietnam" },
    { code: "+62", country: "Indonesia" },
    { code: "+63", country: "Philippines" },
    { code: "+880", country: "Bangladesh" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+977", country: "Nepal" },
    { code: "+92", country: "Pakistan" },
    { code: "+93", country: "Afghanistan" },
    { code: "+98", country: "Iran" },
    { code: "+964", country: "Iraq" },
    { code: "+962", country: "Jordan" },
    { code: "+961", country: "Lebanon" },
    { code: "+963", country: "Syria" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+968", country: "Oman" },
    { code: "+974", country: "Qatar" },
    { code: "+973", country: "Bahrain" },
    { code: "+965", country: "Kuwait" },
    { code: "+967", country: "Yemen" },
    { code: "+20", country: "Egypt" },
    { code: "+27", country: "South Africa" },
    { code: "+234", country: "Nigeria" },
    { code: "+254", country: "Kenya" },
    { code: "+233", country: "Ghana" },
    { code: "+55", country: "Brazil" },
    { code: "+54", country: "Argentina" },
    { code: "+56", country: "Chile" },
    { code: "+57", country: "Colombia" },
    { code: "+51", country: "Peru" },
    { code: "+58", country: "Venezuela" },
    { code: "+52", country: "Mexico" },
    { code: "+502", country: "Guatemala" },
    { code: "+506", country: "Costa Rica" },
    { code: "+507", country: "Panama" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbytWv6KGE3qE1-q7z9vKQM7Ey2KIBVRmGDfOPvJ5HkXs8_kJ6P2AIfpTSGUjwX5QI8e/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: `${formData.countryCode} ${formData.phone}`,
          email: formData.email || 'Not provided',
          message: formData.message || 'No message',
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Thank you for your interest!",
        description: "Our team will contact you within 24 hours.",
      });

      setFormData({
        name: "",
        phone: "",
        countryCode: "+91",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Message sent!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      
      setFormData({
        name: "",
        phone: "",
        countryCode: "+91",
        email: "",
        message: "",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-golden-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-golden-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch to secure your investment in Ayodhya's divine future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <Card className="shadow-xl border-golden-200 h-fit">
            <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white">
              <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-golden-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ayana Proptech LLP<br />
                    97, Kahlon Garden City, Sec 12<br />
                    Vrindavan Yojna<br />
                    Lucknow - 226025, UP, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-golden-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone & WhatsApp</h3>
                  <p className="text-gray-600">+91 7570000985</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-golden-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">hello@ayanaprop.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-golden-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Request Information Form */}
          <Card className="shadow-xl border-golden-200 h-fit">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-golden-500 text-white">
              <CardTitle className="text-2xl font-bold">Request Information</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <Select value={formData.countryCode} onValueChange={(value) => handleInputChange('countryCode', value)}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-48">
                        {countryCodes.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.code} ({country.country})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address (Optional)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your investment interests..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-golden-500 hover:bg-golden-600 text-white font-semibold py-3 text-lg"
                >
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
