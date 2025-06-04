
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Location from "@/components/Location";
import Amenities from "@/components/Amenities";
import PricingTable from "@/components/PricingTable";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PopupContact from "@/components/PopupContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Statistics />
      <Location />
      <Amenities />
      <PricingTable />
      <ContactForm />
      <Footer />
      <PopupContact />
    </div>
  );
};

export default Index;
