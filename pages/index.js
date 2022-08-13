import AboutSection from "../src/components/AboutSection";
import ContactUS from "../src/components/ContactUS";
import HomeSection from "../src/components/HomeSection";
import Navbar from "../src/components/Navbar";
import OurServices from "../src/components/OurServices";
import Head from "next/head";
export default function Home() {
  return (
    <div style={{ direction: "rtl" }}>
      <Head>
        <title>idorg</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="keywords" content="منظمة مجتمع مدني غير حكومية ولا ربحية" />
        <meta property="og:title" content="idorg" />
        <meta property="og:type" content="منظمة مجتمع مدني" />
        <meta property="og:url" content="https://www.idorg.org/" />
        <meta property="og:image" content="/images/logo.png" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <OurServices />
      <ContactUS />
    </div>
  );
}
