import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation"; // not needed since you're not using Navigation

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jonathan Carter",
      role: "Startup Founder",
      text:
        "AllSpark transformed our business with its AI-powered solutions. Their team built a scalable, efficient system that automated our operations. Highly recommend!",
      image: "/images/testimonials/avatar.png",
      rating: 5,
    },
    {
      id: 2,
      name: "David Thompson",
      role: "CTO, FinTech Company",
      text:
        "Their cloud-based software development helped us migrate to a high-performance, secure setup. Exceptional technical expertise!",
      image: "/images/testimonials/avatar.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Roberts",
      role: "AI Researcher",
      text:
        "The AI automation tools AllSpark delivered saved our team countless hours. Their machine learning knowledge is unmatched.",
      image: "/images/testimonials/avatar-2.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Lee",
      role: "SaaS Product Manager",
      text:
        "Seamless collaboration with AllSpark. Their innovative development improved our app’s performance and security.",
      image: "/images/testimonials/avatar.png",
      rating: 5,
    },
    {
      id: 5,
      name: "Rachel Green ",
      role: "Healthcare IT Specialist",
      text:
        "AllSpark developed a secure telehealth platform with complex integrations. Their enterprise software development firm experience really stood out.",
      image: "/images/testimonials/avatar-2.png",
      rating: 5,
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Logistics Operations Manager",
      text:
        "The custom ERP they built streamlined our supply chain. Fast delivery and excellent responsiveness from a skilled software development agency.",
      image: "/images/testimonials/avatar.png",
      rating: 5,
    },
    {
      id: 7,
      name: "Natalie Cooper",
      role: "Digital Marketing Consultant",
      text:
        "Their automation features supercharged our ad campaigns. Truly a tech-enabled software development company worth partnering with.",
      image: "/images/testimonials/avatar-2.png",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto mt-8 max-w-7xl px-6 text-center">
        {/* Section header */}
        <div className="flex items-center justify-center space-x-4 text-sm font-semibold uppercase text-blue-700">
          <ArrowLeft className="h-4 w-4" />
          <span>Testimonials</span>
          <ArrowRight className="h-4 w-4" />
        </div>

        <h2 className="mb-20 mt-5 text-4xl font-bold text-gray-900">
          Our Latest Client Feedback
        </h2>

        {/* Swiper carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSlideChange={(s) => setActive(s.realIndex)}
          className="!pb-8"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={t.id}>
              <div
                className={`flex h-[250px] flex-col justify-between rounded-xl p-4 shadow-lg transition-colors duration-300 ${
                  active === idx
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                {/* Stars */}
                <div className="mb-6 mt-3 flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-6 w-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#ffbb00"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed">{t.text}</p>

                {/* Author block */}
                <div className="mt-auto flex items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                  />

                  <div className="flex flex-col items-start">
                    <h3 className="ml-0 font-semibold">{t.name}</h3>
                    <p
                      className={`ml-0 text-sm ${
                        active === idx ? "text-blue-200" : "text-gray-500"
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>

                  <Quote
                    className={`ml-auto h-7 w-7 ${
                      active === idx ? "text-blue-200" : "text-gray-300"
                    }`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
