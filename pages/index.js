import AboutSection from "../src/components/AboutSection";
import FixedImg from "../src/components/FixedImg";
import HomeSection from "../src/components/HomeSection";
import Navbar from "../src/components/Navbar";
import OurServices from "../src/components/OurServices";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <FixedImg />
      <OurServices />
    </div>
  );
}
