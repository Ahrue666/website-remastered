import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ReleasesSection from "@/components/ReleasesSection";
import AboutSection from "@/components/AboutSection";
import VideosSection from "@/components/VideosSection";
import DiscographySection from "@/components/DiscographySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ReleasesSection />
      <AboutSection />
      <VideosSection />
      <DiscographySection />
      <ContactSection />
    </div>
  );
};

export default Index;
