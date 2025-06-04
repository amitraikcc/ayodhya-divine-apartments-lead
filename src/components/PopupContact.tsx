
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PopupContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    email: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // Show popup after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const countryCodes = [
    { code: '+1', country: 'US/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+971', country: 'UAE' },
    { code: '+65', country: 'Singapore' },
    { code: '+60', country: 'Malaysia' },
    { code: '+61', country: 'Australia' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit the form",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Thank you for your interest!",
      description: "Our team will contact you within 24 hours with exclusive investment details.",
    });

    console.log('Popup form submitted:', formData);
    setIsVisible(false);
    
    setFormData({
      name: '',
      countryCode: '+91',
      phone: '',
      email: ''
    });
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <Card className="w-full max-w-md border-golden-200 shadow-2xl animate-fade-in">
        <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute right-2 top-2 text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl">🙏 Exclusive Investment Opportunity!</CardTitle>
          <p className="text-golden-100 text-sm">Limited units available - Don't miss out!</p>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="popup-name" className="text-gray-700 font-medium">Full Name *</Label>
              <Input
                id="popup-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 border-golden-200 focus:border-golden-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Phone Number *</Label>
              <div className="flex space-x-2 mt-1">
                <Select 
                  value={formData.countryCode} 
                  onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                >
                  <SelectTrigger className="w-24 border-golden-200 focus:border-golden-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.code}
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
                />
              </div>
            </div>

            <div>
              <Label htmlFor="popup-email" className="text-gray-700 font-medium">Email Address *</Label>
              <Input
                id="popup-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 border-golden-200 focus:border-golden-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-golden-500 hover:bg-golden-600 text-white font-semibold py-2"
            >
              Get Exclusive Details Now!
            </Button>
          </form>
          
          <div className="text-center mt-4 text-sm text-gray-600">
            <p>Get instant callback from our investment expert</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PopupContact;
