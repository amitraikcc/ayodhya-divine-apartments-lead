
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Download, MapPin } from "lucide-react";
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
    { code: '+1', country: 'United States' },
    { code: '+1', country: 'Canada' },
    { code: '+7', country: 'Russia' },
    { code: '+20', country: 'Egypt' },
    { code: '+27', country: 'South Africa' },
    { code: '+30', country: 'Greece' },
    { code: '+31', country: 'Netherlands' },
    { code: '+32', country: 'Belgium' },
    { code: '+33', country: 'France' },
    { code: '+34', country: 'Spain' },
    { code: '+36', country: 'Hungary' },
    { code: '+39', country: 'Italy' },
    { code: '+40', country: 'Romania' },
    { code: '+41', country: 'Switzerland' },
    { code: '+43', country: 'Austria' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+45', country: 'Denmark' },
    { code: '+46', country: 'Sweden' },
    { code: '+47', country: 'Norway' },
    { code: '+48', country: 'Poland' },
    { code: '+49', country: 'Germany' },
    { code: '+51', country: 'Peru' },
    { code: '+52', country: 'Mexico' },
    { code: '+53', country: 'Cuba' },
    { code: '+54', country: 'Argentina' },
    { code: '+55', country: 'Brazil' },
    { code: '+56', country: 'Chile' },
    { code: '+57', country: 'Colombia' },
    { code: '+58', country: 'Venezuela' },
    { code: '+60', country: 'Malaysia' },
    { code: '+61', country: 'Australia' },
    { code: '+62', country: 'Indonesia' },
    { code: '+63', country: 'Philippines' },
    { code: '+64', country: 'New Zealand' },
    { code: '+65', country: 'Singapore' },
    { code: '+66', country: 'Thailand' },
    { code: '+81', country: 'Japan' },
    { code: '+82', country: 'South Korea' },
    { code: '+84', country: 'Vietnam' },
    { code: '+86', country: 'China' },
    { code: '+90', country: 'Turkey' },
    { code: '+91', country: 'India' },
    { code: '+92', country: 'Pakistan' },
    { code: '+93', country: 'Afghanistan' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+95', country: 'Myanmar' },
    { code: '+98', country: 'Iran' },
    { code: '+212', country: 'Morocco' },
    { code: '+213', country: 'Algeria' },
    { code: '+216', country: 'Tunisia' },
    { code: '+218', country: 'Libya' },
    { code: '+220', country: 'Gambia' },
    { code: '+221', country: 'Senegal' },
    { code: '+222', country: 'Mauritania' },
    { code: '+223', country: 'Mali' },
    { code: '+224', country: 'Guinea' },
    { code: '+225', country: 'Ivory Coast' },
    { code: '+226', country: 'Burkina Faso' },
    { code: '+227', country: 'Niger' },
    { code: '+228', country: 'Togo' },
    { code: '+229', country: 'Benin' },
    { code: '+230', country: 'Mauritius' },
    { code: '+231', country: 'Liberia' },
    { code: '+232', country: 'Sierra Leone' },
    { code: '+233', country: 'Ghana' },
    { code: '+234', country: 'Nigeria' },
    { code: '+235', country: 'Chad' },
    { code: '+236', country: 'Central African Republic' },
    { code: '+237', country: 'Cameroon' },
    { code: '+238', country: 'Cape Verde' },
    { code: '+239', country: 'Sao Tome and Principe' },
    { code: '+240', country: 'Equatorial Guinea' },
    { code: '+241', country: 'Gabon' },
    { code: '+242', country: 'Republic of the Congo' },
    { code: '+243', country: 'Democratic Republic of the Congo' },
    { code: '+244', country: 'Angola' },
    { code: '+245', country: 'Guinea-Bissau' },
    { code: '+246', country: 'British Indian Ocean Territory' },
    { code: '+248', country: 'Seychelles' },
    { code: '+249', country: 'Sudan' },
    { code: '+250', country: 'Rwanda' },
    { code: '+251', country: 'Ethiopia' },
    { code: '+252', country: 'Somalia' },
    { code: '+253', country: 'Djibouti' },
    { code: '+254', country: 'Kenya' },
    { code: '+255', country: 'Tanzania' },
    { code: '+256', country: 'Uganda' },
    { code: '+257', country: 'Burundi' },
    { code: '+258', country: 'Mozambique' },
    { code: '+260', country: 'Zambia' },
    { code: '+261', country: 'Madagascar' },
    { code: '+262', country: 'Reunion' },
    { code: '+263', country: 'Zimbabwe' },
    { code: '+264', country: 'Namibia' },
    { code: '+265', country: 'Malawi' },
    { code: '+266', country: 'Lesotho' },
    { code: '+267', country: 'Botswana' },
    { code: '+268', country: 'Swaziland' },
    { code: '+269', country: 'Comoros' },
    { code: '+290', country: 'Saint Helena' },
    { code: '+291', country: 'Eritrea' },
    { code: '+297', country: 'Aruba' },
    { code: '+298', country: 'Faroe Islands' },
    { code: '+299', country: 'Greenland' },
    { code: '+350', country: 'Gibraltar' },
    { code: '+351', country: 'Portugal' },
    { code: '+352', country: 'Luxembourg' },
    { code: '+353', country: 'Ireland' },
    { code: '+354', country: 'Iceland' },
    { code: '+355', country: 'Albania' },
    { code: '+356', country: 'Malta' },
    { code: '+357', country: 'Cyprus' },
    { code: '+358', country: 'Finland' },
    { code: '+359', country: 'Bulgaria' },
    { code: '+370', country: 'Lithuania' },
    { code: '+371', country: 'Latvia' },
    { code: '+372', country: 'Estonia' },
    { code: '+373', country: 'Moldova' },
    { code: '+374', country: 'Armenia' },
    { code: '+375', country: 'Belarus' },
    { code: '+376', country: 'Andorra' },
    { code: '+377', country: 'Monaco' },
    { code: '+378', country: 'San Marino' },
    { code: '+380', country: 'Ukraine' },
    { code: '+381', country: 'Serbia' },
    { code: '+382', country: 'Montenegro' },
    { code: '+383', country: 'Kosovo' },
    { code: '+385', country: 'Croatia' },
    { code: '+386', country: 'Slovenia' },
    { code: '+387', country: 'Bosnia and Herzegovina' },
    { code: '+389', country: 'North Macedonia' },
    { code: '+420', country: 'Czech Republic' },
    { code: '+421', country: 'Slovakia' },
    { code: '+423', country: 'Liechtenstein' },
    { code: '+500', country: 'Falkland Islands' },
    { code: '+501', country: 'Belize' },
    { code: '+502', country: 'Guatemala' },
    { code: '+503', country: 'El Salvador' },
    { code: '+504', country: 'Honduras' },
    { code: '+505', country: 'Nicaragua' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+507', country: 'Panama' },
    { code: '+508', country: 'Saint Pierre and Miquelon' },
    { code: '+509', country: 'Haiti' },
    { code: '+590', country: 'Guadeloupe' },
    { code: '+591', country: 'Bolivia' },
    { code: '+592', country: 'Guyana' },
    { code: '+593', country: 'Ecuador' },
    { code: '+594', country: 'French Guiana' },
    { code: '+595', country: 'Paraguay' },
    { code: '+596', country: 'Martinique' },
    { code: '+597', country: 'Suriname' },
    { code: '+598', country: 'Uruguay' },
    { code: '+599', country: 'Netherlands Antilles' },
    { code: '+670', country: 'East Timor' },
    { code: '+672', country: 'Australian External Territories' },
    { code: '+673', country: 'Brunei' },
    { code: '+674', country: 'Nauru' },
    { code: '+675', country: 'Papua New Guinea' },
    { code: '+676', country: 'Tonga' },
    { code: '+677', country: 'Solomon Islands' },
    { code: '+678', country: 'Vanuatu' },
    { code: '+679', country: 'Fiji' },
    { code: '+680', country: 'Palau' },
    { code: '+681', country: 'Wallis and Futuna' },
    { code: '+682', country: 'Cook Islands' },
    { code: '+683', country: 'Niue' },
    { code: '+684', country: 'American Samoa' },
    { code: '+685', country: 'Samoa' },
    { code: '+686', country: 'Kiribati' },
    { code: '+687', country: 'New Caledonia' },
    { code: '+688', country: 'Tuvalu' },
    { code: '+689', country: 'French Polynesia' },
    { code: '+690', country: 'Tokelau' },
    { code: '+691', country: 'Micronesia' },
    { code: '+692', country: 'Marshall Islands' },
    { code: '+850', country: 'North Korea' },
    { code: '+852', country: 'Hong Kong' },
    { code: '+853', country: 'Macau' },
    { code: '+855', country: 'Cambodia' },
    { code: '+856', country: 'Laos' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+886', country: 'Taiwan' },
    { code: '+960', country: 'Maldives' },
    { code: '+961', country: 'Lebanon' },
    { code: '+962', country: 'Jordan' },
    { code: '+963', country: 'Syria' },
    { code: '+964', country: 'Iraq' },
    { code: '+965', country: 'Kuwait' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+967', country: 'Yemen' },
    { code: '+968', country: 'Oman' },
    { code: '+970', country: 'Palestine' },
    { code: '+971', country: 'United Arab Emirates' },
    { code: '+972', country: 'Israel' },
    { code: '+973', country: 'Bahrain' },
    { code: '+974', country: 'Qatar' },
    { code: '+975', country: 'Bhutan' },
    { code: '+976', country: 'Mongolia' },
    { code: '+977', country: 'Nepal' },
    { code: '+992', country: 'Tajikistan' },
    { code: '+993', country: 'Turkmenistan' },
    { code: '+994', country: 'Azerbaijan' },
    { code: '+995', country: 'Georgia' },
    { code: '+996', country: 'Kyrgyzstan' },
    { code: '+998', country: 'Uzbekistan' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required to submit the form",
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
        email: formData.email || '',
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
    const link = document.createElement('a');
    link.href = '/AyodhyaBrochure.pdf';
    link.download = 'AyodhyaBrochure.pdf';
    link.target = '_blank';
    link.click();
  };

  const downloadPricingTable = () => {
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
              <Card className="border-golden-200 shadow-lg h-full">
                <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white">
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-golden-500 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        Ayana Proptech LLP<br />
                        97, Kahlon Garden City, Sec 12, Vrindavan Yojna<br />
                        Lucknow - 226025, UP, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-golden-500 rounded-full p-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Mobile & WhatsApp</h3>
                      <p className="text-gray-600">+91 7570000985</p>
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
            </div>

            {/* Contact Form */}
            <Card className="border-golden-200 shadow-xl h-full">
              <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white">
                <CardTitle className="text-2xl">Request Information</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium text-lg">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-3 border-golden-200 focus:border-golden-500 h-12 text-lg"
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Label className="text-gray-700 font-medium text-lg">Phone Number *</Label>
                    <div className="flex space-x-2 mt-3">
                      <Select 
                        value={formData.countryCode} 
                        onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="w-40 border-golden-200 focus:border-golden-500 h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
                          {countryCodes.map((country, index) => (
                            <SelectItem key={`${country.code}-${index}`} value={country.code}>
                              {country.code} ({country.country})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 border-golden-200 focus:border-golden-500 h-12 text-lg"
                        placeholder="Phone number"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium text-lg">Email Address (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-3 border-golden-200 focus:border-golden-500 h-12 text-lg"
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-golden-500 hover:bg-golden-600 text-white font-semibold py-4 text-xl h-14"
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
