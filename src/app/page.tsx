import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Menu from "@/components/Menu";
import PrivateDining from "@/components/PrivateDining";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Menu />
        <PrivateDining />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
