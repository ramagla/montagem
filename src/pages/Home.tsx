import Header from "../components/Header";
import Hero from "../components/Hero";
import Sectors from "../components/Sectors";
import Services from "../components/Services";
import Differentials from "../components/Differentials";
import Process from "../components/Process";
import Quality from "../components/Quality";
import Portfolio from "../components/Portfolio";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Sectors />
      <Differentials />
      <Process />
      <Quality />
      <Portfolio />
      <ContactCTA />
      <Footer />
    </>
  );
}
