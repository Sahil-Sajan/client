import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden flex flex-col items-center justify-center bg-[radial-gradient(circle,#3b82f6_0%,#1d4ed8_100%)]">
      {/* --- 1. Top Navigation Bar (Slimmer) --- */}

      {/* --- 2. Giant Typography ('WCARS1959') - GHOSTED --- */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <h1 className="text-[16vw] font-black text-white/22 leading-none uppercase tracking-tighter">
          WCARS1959
        </h1>
      </div>

      {/* --- 3. Centered Cars (Adjusted spacing) --- */}
      <div className="relative z-10 w-full max-w-5xl mt-60 px-4 flex justify-center items-center ">
        <div className="relative w-full aspect-[21/9]">
          <Image
            src="/heroimg.png"
            alt="Luxury Cars"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* --- 4. Bottom Taglines --- */}
      <div className="absolute bottom-10 w-full text-center text-white z-20">
        <h2 className="text-[10px] font-black mb-2 uppercase tracking-[0.5em] opacity-90">
          Make The Right Choice
        </h2>
        <p className="text-base md:text-lg font-light tracking-wide italic opacity-80">
          Find Your Dream Car, Which will Give You Wings
        </p>
      </div>

      {/* --- 5. Pagination Dots --- */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5 z-30">
        <div className="w-1 h-1 rounded-full bg-white/30" />
        <div className="relative flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border border-white/40" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-white" />
        </div>
        <div className="w-1 h-1 rounded-full bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
