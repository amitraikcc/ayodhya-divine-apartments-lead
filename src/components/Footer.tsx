
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-golden-300 mb-4">Ayodhya Studio Apartments</h3>
            <p className="text-gray-300 mb-4">
              Premium studio apartments in the heart of Ayodhya's spiritual and commercial development zone.
            </p>
            <div className="text-gray-300 space-y-2 mb-4">
              <p><strong className="text-golden-300">Ayana Proptech LLP</strong></p>
              <p>97, Kahlon Garden City, Sec 12, Vrindavan Yojna</p>
              <p>Lucknow - 226025, UP, India</p>
              <p>📞 Mobile & WhatsApp: +91 7570000985</p>
              <p>📧 Email: hello@ayanaprop.com</p>
            </div>
            <p className="text-golden-300 font-semibold">🙏 Jai Shree Ram! 🙏</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="hover:text-golden-300 transition-colors cursor-pointer"
                >
                  Investment Opportunity
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('location')} 
                  className="hover:text-golden-300 transition-colors cursor-pointer"
                >
                  Location Advantages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('amenities')} 
                  className="hover:text-golden-300 transition-colors cursor-pointer"
                >
                  Amenities & Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="hover:text-golden-300 transition-colors cursor-pointer"
                >
                  Pricing Information
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('news')} 
                  className="hover:text-golden-300 transition-colors cursor-pointer"
                >
                  Ayodhya in the News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('government')} 
                  className="hover:text-golden-300 transition-colors cursor-pointer"
                >
                  Development Authorities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-golden-300 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-300">
              <p><strong>Contact Person:</strong> Ajit Rai</p>
              <p><strong>Phone:</strong> +91-7570000985</p>
              <p><strong>Email:</strong> hello@ayanaprop.com</p>
              <p><strong>Location:</strong> Surajkund Area, Ayodhya</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ayodhya Studio Apartments. All rights reserved. | A Divine Investment Opportunity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
