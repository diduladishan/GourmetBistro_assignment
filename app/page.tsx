import AboutUs from "@/components/AboutUs";

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
