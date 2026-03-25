import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LatestSingleSection from "@/components/LatestSingleSection";
import ProductionSection from "@/components/ProductionSection";
import LessonsSection from "@/components/LessonsSection";
import TourSection from "@/components/TourSection";
import ReleasesSection from "@/components/ReleasesSection";
import VideosSection from "@/components/VideosSection";
import GallerySection from "@/components/GallerySection";
import DiscographySection from "@/components/DiscographySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LatestSingleSection />
      <ProductionSection />
      <LessonsSection />
      <TourSection />
      <ReleasesSection />
      <VideosSection />
      <GallerySection />
      <DiscographySection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
