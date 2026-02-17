import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpCircle } from "lucide-react";

const CarCards = () => {
  const cars = [
    {
      id: 1,
      name: "Premium Sedan - V6 Edition",
      description:
        "Experience unparalleled comfort with our signature executive sedan featuring a refined V6 powertrain.",
      img: "/car1.svg",
      price: "45,000.00",
      rating: "4.8",
    },
    {
      id: 2,
      name: "Luxury SUV - Offroad Pack",
      description:
        "Conquer any terrain with advanced all-wheel drive and a spacious, hand-crafted leather interior.",
      img: "/car2.svg",
      price: "65,000.00",
      rating: "4.9",
    },
    {
      id: 3,
      name: "Electric GT - Long Range",
      description:
        "Master the road with a precision-tuned chassis and a high-performance twin-turbocharged engine.",
      img: "/car4.svg",
      price: "55,000.00",
      rating: "4.7",
    },
  ];

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center px-6">
      {/* --- Section Heading --- */}
      <div className="max-w-7xl w-full flex justify-between items-end mb-16">
        <div className="text-left">
          <h2 className="text-2xl md:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">
            Available Inventory
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </div>

        <Link
          href="/listing"
          className="text-blue-600 font-bold uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-8 transition-all"
        >
          See Listing
        </Link>
      </div>

      {/* --- Centered Cards Grid --- */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group bg-white rounded-[2.5rem] p-6 border border-slate-200 flex flex-col w-full transition-colors hover:border-blue-200"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 bg-slate-50 rounded-[2rem] overflow-hidden flex items-center justify-center mb-6">
                <Image
                  src={car.img}
                  alt={car.name}
                  width={350}
                  height={180}
                  className="object-contain group-hover:scale-105 transition-transform duration-700 px-4"
                />
              </div>

              {/* Text Content */}
              <div className="px-2 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-800 leading-tight hover:underline cursor-pointer">
                    {car.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg shrink-0">
                    <span className="text-sm font-bold text-slate-700">
                      {car.rating}
                    </span>
                    <span className="text-orange-400 text-sm">★</span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mb-6 line-clamp-1 font-light italic">
                  {car.description}
                </p>

                <div className="mt-auto">
                  <p className="text-3xl font-black text-slate-900 mb-6">
                    £{car.price}
                  </p>

                  {/* Primary Action Button */}
                  <button className="w-full bg-blue-600 text-white py-5 px-8 rounded-2xl flex justify-between items-center hover:bg-blue-700 transition-all">
                    <span className="text-sm font-bold uppercase tracking-[0.2em]">
                      See Details
                    </span>
                    <ArrowUpCircle size={26} className="text-white/90" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCards;
