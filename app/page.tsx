import AboutUs from "@/components/AboutUs";
import Camp from "@/components/Camp";
import Carousel from "@/components/Carousel";
import Carousel2 from "@/components/Carousel2";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import Reservation from "@/components/Reservation";
import Reservation_02 from "@/components/Reservation2";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      {/* <Reservation /> */}
      <Reservation_02 />
      <Marquee />
    </>
  );
}
