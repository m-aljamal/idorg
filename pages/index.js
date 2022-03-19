import Image from "next/image";
import AboutSection from "../src/components/AboutSection";
import HomeSection from "../src/components/HomeSection";
import MessageSection from "../src/components/MessageSection";
import Navbar from "../src/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <MessageSection />
    </div>
  );
}
