import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Fire from "@/components/Fire";
import Cards from "@/components/Cards";
import Gallery from "@/components/Gallery";
import PrivateDining from "@/components/PrivateDining";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";

export default function Home() {
  return (
    <>
      <div className="preloader" aria-hidden="true">
        <span>CINDER</span>
        <i />
      </div>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Menu />
        <Fire />
        <Cards />
        <Gallery />
        <PrivateDining />
        <About />
        <Booking />
      </main>
      <Footer />
      <ScrollFx />
    </>
  );
}
