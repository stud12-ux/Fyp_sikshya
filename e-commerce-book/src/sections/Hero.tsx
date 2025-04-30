"use client";
import heroBg from "@/assets/images/abc.png";
// import secondImg from "@/assets/images/b2.jpg";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

export default function Hero({ title }: { title: string }) {
  const sliderImages = [heroBg];
  const sliderText = [
    "From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.", // text for first image
    "From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.", // text for second image
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 10,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <>
      {/* for mobile */}
      <section className="lg:hidden font-jakarta relative">
        {/* Text centered on image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-20 flex items-center justify-center px-4 z-10 text-center">
          <h1 className="text-[2rem] leading-tight text-tertiary font-bold ">
            {sliderText[currentSlide]}
          </h1>
        </div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {sliderImages.map((image, index) => (
              <div key={index} className="keen-slider__slide">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] object-cover object-top"
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/60 text-white p-2 py-1 rounded-full"
            onClick={() => instanceRef.current?.prev()}
          >
            ◀
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/60 text-white p-2 py-1 rounded-full"
            onClick={() => instanceRef.current?.next()}
          >
            ▶
          </button>
        </div>
      </section>

      {/* desktop view */}
      <section className="w-full flex_center h-[90vh] relative lg:block hidden">
        <div className="relative h-full">
          <div ref={sliderRef} className="keen-slider h-full">
            {sliderImages.map((image, index) => (
              <div key={index} className="keen-slider__slide">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>

          <button
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800/60 text-white p-3 py-2 rounded-full"
            onClick={() => instanceRef.current?.prev()}
          >
            ◀
          </button>
          <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800/60 text-white p-3 py-2 rounded-full"
            onClick={() => instanceRef.current?.next()}
          >
            ▶
          </button>
        </div>

        {/* Dynamic text */}
        <div className="absolute w-2/3 flex flex-col justify-center gap-8 text-primary bottom-1/3 -trasnlate-y-1/2 left-1/2 transform -translate-x-1/2 ">
          <h1 className="flex_center flex-col text-center text-3xl ">
            <h4 className="font-bold pe-4 pb-6">{title}</h4>
            <span className="font-bold pe-4">{sliderText[currentSlide]}</span>
          </h1>
        </div>
      </section>
    </>
  );
}
