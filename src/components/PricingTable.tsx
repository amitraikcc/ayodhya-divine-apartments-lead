
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

const PricingTable = () => {
  const downloadBrochure = () => {
    // Create a sample brochure download
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
    <section id="pricing" className="py-20 bg-gradient-to-br from-golden-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Investment <span className="text-golden-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing with assured returns
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-golden-200">
            <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white rounded-t-lg">
              <CardTitle className="text-3xl font-bold text-center">
                Studio Apartment Investment Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-golden-600 mb-2">₹20 Cr</div>
                  <div className="text-gray-600">Annual Tourists by 2031</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">4X - 10X</div>
                  <div className="text-gray-600">Growth from 2021-24</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">12X - 20X</div>
                  <div className="text-gray-600">Expected Growth 2025-35</div>
                </div>
              </div>

              <div className="bg-golden-50 p-6 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Ayodhya?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b border-golden-200">
                    <span>Tourist Growth</span>
                    <span className="font-semibold">Exponential</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-golden-200">
                    <span>Infrastructure Boom</span>
                    <span className="font-semibold">₹85,000 Cr+</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-golden-200">
                    <span>High Demand of Hotels</span>
                    <span className="font-semibold">Critical Gap</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-golden-200">
                    <span>Low Supply of Hotels</span>
                    <span className="font-semibold">Only 590 Rooms</span>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Button 
                    onClick={downloadBrochure}
                    className="bg-golden-500 hover:bg-golden-600 text-white px-8 py-4 text-lg font-semibold flex items-center justify-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Ayodhya Brochure</span>
                  </Button>
                  <Button 
                    onClick={downloadPricingTable}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold flex items-center justify-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Pricing Table 2025</span>
                  </Button>
                </div>
                <div className="text-gray-600 mt-4">
                  <strong>Contact:</strong> Ajit Rai | +91-7570000985 | ayanaproptechllp@gmail.com
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
