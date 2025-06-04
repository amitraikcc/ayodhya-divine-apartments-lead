
const Statistics = () => {
  const stats = [
    {
      number: "₹85,000 Cr+",
      label: "Infrastructure Investment by Government",
      color: "text-golden-600"
    },
    {
      number: "10 Crore+",
      label: "Projected Annual Pilgrims",
      color: "text-orange-600"
    },
    {
      number: "590",
      label: "Available Hotel Rooms Only",
      color: "text-red-600"
    },
    {
      number: "1,200 Acre",
      label: "Mega Township Development",
      color: "text-golden-600"
    },
    {
      number: "4X-10X",
      label: "Growth from 2021-24",
      color: "text-green-600"
    },
    {
      number: "12X-20X",
      label: "Expected Growth 2025-35",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/lovable-uploads/6509d8fd-6eb7-4828-8ed0-5e3e5358e712.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Current Market <span className="text-golden-600">Statistics</span>
          </h2>
          <p className="text-xl text-gray-600">
            Data-driven insights showcasing Ayodhya's unprecedented growth potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border border-golden-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-4 ${stat.color}`}>
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
