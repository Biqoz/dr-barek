import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import Pricing from "./sections/Pricing";
import Doctor from "./sections/Doctor";
import Testimonials from "./sections/Testimonials";
import Location from "./sections/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
      <Doctor />
      <Testimonials />
      <Location />
    </>
  );
}
