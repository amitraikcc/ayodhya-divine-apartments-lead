
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-golden-300 mb-4">Ayodhya Studio Apartments</h3>
            <p className="text-gray-300 mb-4">
              Premium studio apartments in the heart of Ayodhya's spiritual and commercial development zone.
            </p>
            <p className="text-golden-300 font-semibold">🙏 Jai Shree Ram! 🙏</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Investment Opportunity</li>
              <li>Location Advantages</li>
              <li>Amenities & Features</li>
              <li>Pricing Information</li>
              <li>Contact Us</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-300">
              <p><strong>Contact Person:</strong> Ajit Rai</p>
              <p><strong>Phone:</strong> +91-7570000985</p>
              <p><strong>Email:</strong> ayanaproptechllp@gmail.com</p>
              <p><strong>Location:</strong> Surajkund Area, Ayodhya</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ayodhya Studio Apartments. All rights reserved. | A Divine Investment Opportunity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
