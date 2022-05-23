import AboutSection from "../src/components/AboutSection";
import ContactUS from "../src/components/ContactUS";
import HomeSection from "../src/components/HomeSection";
import Navbar from "../src/components/Navbar";
import OurServices from "../src/components/OurServices";

export default function Home() {
  return (
    <div style={{ direction: "rtl" }}>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <OurServices />
      <ContactUS />
    </div>
  );
}
