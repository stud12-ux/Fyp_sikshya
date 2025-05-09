"use client";
import { GoStarFill } from "react-icons/go";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Sita Sharma",
    position: "Student",
    text: "This app has been a lifesaver for my exam prep. I found exactly the notes I needed, and the ability to read PDFs directly made everything so easy!",
  },
  {
    name: "Ram Bahadur Thapa",
    position: "Student",
    text: "Uploading my class notes to help juniors felt amazing. The platform is clean, simple, and super useful for every Nepali student.",
  },
  {
    name: "Anita K.C.",
    position: "Student",
    text: "I used to carry so many books around, but now I just read everything from here. Notes, PDFs, and even past papers — it has it all!",
  },
  {
    name: "Bikash Gurung",
    position: "Student",
    text: "The free resources on this app helped me pass my board exams. I even found notes from my own college shared by seniors!",
  },
];


export default function TestimonialCard() {
  return (
    <div className="flex flex-col items-center container  2xl:px-20 w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full custom-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-xl mx-auto bg-gradient-to-br from-secondary to-[#6a1518] p-[6px] rounded-2xl">
              <div className="bg-white p-6 rounded-xl relative">
                {/* Thumbs Up Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <ThumbsUp className="text-white " color="white" size={24} />
                  </div>
                </div>

                {/* Quotation Mark */}
                <div className="absolute top-4 right-6 text-secondary text-5xl leading-none select-none">
                  <ImQuotesLeft className="size-12" />
                </div>

                {/* Content */}
                <div className="pt-16">
                  <p className="text-gray-800 mb-6">{testimonial.text}</p>

                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination below slider */}
      <div className="mt-4">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
