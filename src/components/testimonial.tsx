import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "James W.",
      role: "Audi Owner",
      text: "The 4D laser cut plates are incredible. They completely changed the look of my Audi. High quality and fast delivery!",
      stars: 5,
    },
    {
      id: 2,
      name: "Sarah L.",
      role: "Customization Fan",
      text: "Perfect fit for my short plates. The acrylic is crystal clear and looks very premium on my new car.",
      stars: 5,
    },
    {
      id: 3,
      name: "Mark T.",
      role: "SUV Buyer",
      text: "Buying my SUV here was a breeze. Professional service and the car was exactly as described. 10/10!",
      stars: 5,
    },
    {
      id: 4,
      name: "David H.",
      role: "Road Legal Specialist",
      text: "Standard UK legal plates arrived next day. Great value for money and solid build. Highly recommend.",
      stars: 5,
    },
    {
      id: 5,
      name: "Emma R.",
      role: "Tesla Driver",
      text: "Ordered the 3D gel plates for my Model 3. The texture and finish are top-notch. Best in the UK!",
      stars: 4,
    },
    {
      id: 6,
      name: "Liam G.",
      role: "Sports Car Enthusiast",
      text: "Found my dream Sport Coupe here. The transaction was smooth and the car is a beast! Great buying experience.",
      stars: 5,
    },
  ];

  return (
    <section className="w-full py-24 bg-white flex flex-col items-center px-6">
      {/* --- Section Heading --- */}
      <div className="max-w-7xl w-full text-center mb-16 flex flex-col items-center">
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          What People Say
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
          You can visit our office anytime but please don't stalk us or don't be
          creepy.
        </p>
      </div>

      {/* --- Testimonials Grid (3 columns, 2 rows) --- */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < review.stars ? "text-orange-400" : "text-slate-200"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 leading-relaxed mb-8">
                {review.text}
              </p>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                {/* Using a placeholder. In production, replace with review.avatarUrl */}
                <div className="absolute inset-0 flex items-center justify-center font-bold text-slate-400 uppercase">
                  {review.name[0]}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <p className="text-xs text-slate-500 font-medium">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
