import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LatestSingleSection from "@/components/LatestSingleSection";
import ReleasesSection from "@/components/ReleasesSection";
import TourSection from "@/components/TourSection";
import VideosSection from "@/components/VideosSection";
import DiscographySection from "@/components/DiscographySection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LatestSingleSection />
      <ReleasesSection />
      <TourSection />
      <VideosSection />
      <DiscographySection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
