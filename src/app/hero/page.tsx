import CarCards from "@/components/car";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NamePlateCards from "@/components/nameplate";
import Testimonials from "@/components/testimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <CarCards />
      <NamePlateCards />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default page;
