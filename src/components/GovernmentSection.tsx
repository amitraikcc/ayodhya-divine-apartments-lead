
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, Building, Users, TrendingUp, MapPin } from "lucide-react";

const GovernmentSection = () => {
  const downloadDevelopmentReport = () => {
    const link = document.createElement('a');
    link.href = '/Ayodhya_Development_Report.pdf';
    link.download = 'Ayodhya_Development_Report.pdf';
    link.target = '_blank';
    link.click();
  };

  const governmentActions = [
    {
      icon: <Building className="h-8 w-8 text-golden-500" />,
      title: "Infrastructure Development",
      description: "Massive infrastructure projects including new airport, railway connectivity, and road networks to support growing tourism.",
      authority: "Ministry of Civil Aviation & Railways"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Tourism Infrastructure Plan",
      description: "Government-backed initiatives to develop world-class tourism facilities and accommodation infrastructure.",
      authority: "Ministry of Tourism"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-golden-500" />,
      title: "Economic Development Zones",
      description: "Special economic zones and business-friendly policies to attract investment and create employment opportunities.",
      authority: "UP State Government"
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      title: "Urban Planning & Development",
      description: "Comprehensive master planning and development of Ayodhya as a global spiritual and tourist destination.",
      authority: "Ayodhya Development Authority"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-golden-500" />,
      title: "Policy Support & Incentives",
      description: "Special incentives and policy support for hospitality and real estate investments in the Ayodhya region.",
      authority: "UP Investment & Industrial Promotion"
    }
  ];

  return (
    <section id="government" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ayodhya Development <span className="text-golden-600">Authorities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Government backing and support that ensures sustainable growth and development in Ayodhya
          </p>
        </div>

        {/* Government Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {governmentActions.map((action, index) => (
            <Card key={index} className="border-golden-200 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-golden-100 rounded-lg p-3 group-hover:bg-golden-200 transition-colors">
                    {action.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {action.description}
                    </p>
                    <div className="text-xs text-golden-600 font-medium bg-golden-50 px-2 py-1 rounded">
                      {action.authority}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Development Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-golden-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white">
              <CardTitle className="text-2xl">Key Development Metrics</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tourism Growth Rate</span>
                  <span className="font-bold text-golden-600">16.6% CAGR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Expected Visitors (2031)</span>
                  <span className="font-bold text-orange-600">10.95 Crores</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Hotel Room Requirement</span>
                  <span className="font-bold text-golden-600">10,490+ Rooms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Daily Visitor Capacity</span>
                  <span className="font-bold text-orange-600">6,818-8,032</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Market Occupancy Rate</span>
                  <span className="font-bold text-golden-600">65%+</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-golden-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-golden-500 text-white">
              <CardTitle className="text-2xl">Government Support Highlights</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">New international airport development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced railway connectivity projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Special economic zone establishment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Tourism infrastructure investment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Business-friendly policy framework</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Investment incentives and subsidies</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <Button 
            onClick={downloadDevelopmentReport}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg flex items-center justify-center space-x-3 mx-auto"
          >
            <Download className="h-6 w-6" />
            <span>Download Full Development Report</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;
