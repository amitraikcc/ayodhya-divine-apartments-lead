
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Location from "@/components/Location";
import Amenities from "@/components/Amenities";
import NewsSection from "@/components/NewsSection";
import GovernmentSection from "@/components/GovernmentSection";
import PricingTable from "@/components/PricingTable";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PopupContact from "@/components/PopupContact";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Statistics />
      <Location />
      <Amenities />
      <NewsSection />
      <GovernmentSection />
      <PricingTable />
      <ContactForm />
      <Footer />
      <PopupContact />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default Index;
