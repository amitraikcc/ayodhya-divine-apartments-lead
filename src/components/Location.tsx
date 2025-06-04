
import { MapPin, Plane, Home } from "lucide-react";

const Location = () => {
  const locationFeatures = [
    {
      icon: Home,
      title: "7 KM from Ram Mandir",
      description: "Prime proximity to the most sacred site"
    },
    {
      icon: Plane,
      title: "7 KM from Ayodhya Airport",
      description: "Easy connectivity for pilgrims and tourists"
    },
    {
      icon: MapPin,
      title: "Surajkund Area",
      description: "Heart of Future Ayodhya development"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-golden-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prime <span className="text-golden-600">Location</span> Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically positioned in the heart of Ayodhya's transformation zone
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/d5a837c0-c82a-4b40-b6e0-2b34207a7180.png" 
              alt="Ayodhya Temple View" 
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-8">
            {locationFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-golden-500 rounded-full p-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-golden-500 to-orange-500 p-6 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-2">Government Backed Development</h3>
              <ul className="space-y-2 text-golden-100">
                <li>• 4-Lane & 6-Lane National Highways</li>
                <li>• New Railway Station Development</li>
                <li>• NTPC Solar Power Plant Expansion</li>
                <li>• World-Class Tourism Infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
