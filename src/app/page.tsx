import ContactUs from "@/components/others/Contact";
import College from "@/components/others/College";
import HeroSection from "@/components/others/HeroSection";
import NewsSection from "@/components/others/NewsSection";
import Programs from "@/components/others/Programs";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewsSection />
      <Programs />
      <College />
      <ContactUs />
      
    </div>
  );
}
