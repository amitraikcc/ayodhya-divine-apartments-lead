
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/0893d1cf-499b-4378-90a8-6687e08b301c.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <span className="text-golden-300 text-lg font-semibold">🙏 Jai Shree Ram! 🙏</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-golden-300">AYODHYA</span><br />
          <span className="text-2xl md:text-4xl font-normal">Studio Apartments</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Welcome to the Golden Age of Ayodhya
        </p>
        
        <p className="text-lg mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Premium Studio Apartments | Assured Rental | Prime Religious Location
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="bg-golden-500 hover:bg-golden-600 text-black font-semibold px-8 py-4 text-lg"
            onClick={scrollToContact}
          >
            Book Now - Auspicious Returns
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            +91-7570000985
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold text-golden-300">₹60,000+</h3>
            <p className="text-sm">Monthly Rental Potential</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold text-golden-300">7 KM</h3>
            <p className="text-sm">From Ram Mandir</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold text-golden-300">5x</h3>
            <p className="text-sm">Capital Growth Potential</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
