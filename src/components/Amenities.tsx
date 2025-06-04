
import { Check } from "lucide-react";

const Amenities = () => {
  const amenities = [
    "Fully Furnished Studio Apartments",
    "Modern Furniture & Appliances",
    "Rooftop Swimming Pool",
    "2 Floor Commercial Space",
    "High Rental Returns Guaranteed",
    "Premium Interior Design",
    "24/7 Security & Maintenance",
    "Retail Shops in Complex"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key <span className="text-golden-600">Features</span> & Amenities
          </h2>
          <p className="text-xl text-gray-600">
            Designed for maximum comfort and investment returns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-golden-50 rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-golden-500 rounded-full p-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">{amenity}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-golden-500 to-orange-500 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Investment Highlights</h3>
              <div className="space-y-4">
                <div className="border-b border-golden-300 pb-4">
                  <div className="text-4xl font-bold">₹60,000+</div>
                  <div className="text-golden-100">Monthly Rental Potential</div>
                </div>
                <div className="border-b border-golden-300 pb-4">
                  <div className="text-4xl font-bold">550 Sq. Ft.</div>
                  <div className="text-golden-100">Premium Layout</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">5x Growth</div>
                  <div className="text-golden-100">Capital Appreciation in 10 Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
