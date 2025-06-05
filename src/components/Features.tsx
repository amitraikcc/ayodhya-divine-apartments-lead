import { Check, Circle } from "lucide-react";

const Features = () => {
  const highlights = [
    "Fully Furnished Studio Apartments",
    "Pre-Leased Units with 5-Star Hotel Chain",
    "550 Sq. Ft. Premium Layout",
    "Prime Location - Surajkund Area",
    "High Rental Demand Zone",
    "Government Infrastructure Support"
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-golden-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Ayodhya Studio Apartment is the 
            <span className="text-golden-600"> Golden Opportunity?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Only 590 hotel rooms available vs. 10 Crore+ projected annual pilgrims. 
            The demand-supply gap creates unprecedented investment potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-golden-500 rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-medium text-gray-800">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/064400be-7b04-4d94-80b7-9d1fccf77281.png" 
              alt="Luxury Studio Apartment Interior" 
              className="rounded-2xl shadow-2xl animate-float"
            />
            <div className="absolute -top-6 -right-6 bg-golden-500 text-white rounded-full p-4 animate-float" style={{ animationDelay: '1s' }}>
              <Circle className="h-8 w-8 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
