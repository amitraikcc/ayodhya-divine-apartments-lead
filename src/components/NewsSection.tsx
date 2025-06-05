
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Users, Building2, MapPin } from "lucide-react";

const NewsSection = () => {
  const downloadNewsPDF = () => {
    const link = document.createElement('a');
    link.href = '/AyodhyaNews.pdf';
    link.download = 'AyodhyaNews.pdf';
    link.target = '_blank';
    link.click();
  };

  const newsHighlights = [
    {
      icon: <TrendingUp className="h-8 w-8 text-golden-500" />,
      title: "Tourism Growth Surge",
      description: "Ayodhya tourism shows remarkable 16.6% CAGR growth, with tourist footfall projected to reach 10.95 crores by 2031.",
      stats: "Expected: 10.95 Cr visitors by 2031"
    },
    {
      icon: <Building2 className="h-8 w-8 text-orange-500" />,
      title: "Hotel Demand Increase",
      description: "Government projections show hotel inventory requirements rising to 10,490-12,358 rooms by 2031.",
      stats: "Required: 10,490+ hotel rooms"
    },
    {
      icon: <Users className="h-8 w-8 text-golden-500" />,
      title: "Daily Visitor Capacity",
      description: "Government estimates show daily visitor capacity needs to expand to accommodate 6,818-8,032 daily visitors.",
      stats: "Daily capacity: 6,818-8,032 visitors"
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      title: "Branded Accommodation Demand",
      description: "5% of visitors require branded accommodation, creating strong demand for quality hospitality infrastructure.",
      stats: "Market share: 5% branded hotels"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-golden-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ayodhya in the <span className="text-golden-600">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest developments and growth projections that make Ayodhya a prime investment destination
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tourism Growth Chart */}
          <Card className="border-golden-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-golden-500 to-orange-500 text-white">
              <CardTitle className="text-2xl">Tourism Growth Projections</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/e2eb24c2-11fa-497a-bd99-adf80b8b96ed.png" 
                alt="Tourism Growth Chart showing 16.6% CAGR" 
                className="w-full h-auto"
              />
            </CardContent>
          </Card>

          {/* Hotel Demand Projections */}
          <Card className="border-golden-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-golden-500 text-white">
              <CardTitle className="text-2xl">Government Projections</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/df4e6a0e-7393-41ed-8593-b2e5c87ee31a.png" 
                alt="Government projections for hotel demand and visitor capacity" 
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* News Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsHighlights.map((highlight, index) => (
            <Card key={index} className="border-golden-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {highlight.description}
                </p>
                <div className="bg-golden-100 text-golden-800 px-3 py-2 rounded-lg text-sm font-medium">
                  {highlight.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ayodhya Illuminated Image */}
        <div className="mb-12">
          <Card className="border-golden-200 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/c7b5d9eb-cc92-490c-aa0a-e8703edfe3b4.png" 
                alt="Ayodhya Ram Mandir illuminated during special celebration" 
                className="w-full h-auto"
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Divine Ayodhya: A Spectacular Celebration
                </h3>
                <p className="text-gray-600">
                  Witness the magnificent Ram Mandir and surrounding areas during grand celebrations, 
                  showcasing the spiritual and cultural significance that draws millions of devotees annually.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <Button 
            onClick={downloadNewsPDF}
            className="bg-golden-500 hover:bg-golden-600 text-white px-8 py-4 text-lg flex items-center justify-center space-x-3 mx-auto"
          >
            <Download className="h-6 w-6" />
            <span>Download Full News Report PDF</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
