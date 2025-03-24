import ContactUs from "@/components/others/Contact";
import HeroSection from "@/components/others/HeroSection";
import NewsSection from "@/components/others/NewsSection";
import Programs from "@/components/others/Programs";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewsSection />
      <Programs />
      <ContactUs />
    </div>
  );
}
