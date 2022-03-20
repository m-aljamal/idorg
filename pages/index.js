import AboutSection from "../src/components/AboutSection";
import HomeSection from "../src/components/HomeSection";
import MessageSection from "../src/components/MessageSection";
import Navbar from "../src/components/Navbar";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <MessageSection />
      <section className="bg-[url('/images/message.jpg')] bg-fixed  h-[500px] ">
        <p>text</p>
      </section>
      <section className="h-[1000px]">
        <p>text</p>
      </section>
    </div>
  );
}
