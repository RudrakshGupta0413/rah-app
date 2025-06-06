/* eslint-disable @next/next/no-img-element */
import About from "@/components/About";
import OrderNow from "@/components/OrderNow";
import Services from "@/components/Service";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* <div
        className="h-screen w-full bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/Bg-Img.png')" }}
      ></div> */}
      <img
        src="/Bg-Img.png"
        alt="Background"
        className="h-screen w-full object-cover"
      />
      <About />
      <Services />
      <Testimonials />
      <Stats />
      <OrderNow />
    </div>
  );
}
