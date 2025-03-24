import ContactUs from "@/components/others/Contact";
import College from "@/components/others/College";
import HeroSection from "@/components/others/HeroSection";
import NewsSection from "@/components/others/NewsSection";
import Programs from "@/components/others/Programs";
import Achievement from "@/components/others/Achievement";
import About from "@/components/others/About";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewsSection />
      <Programs />
      <About />
      <College />
      <Achievement />
      <ContactUs />
    </div>
  );
}
