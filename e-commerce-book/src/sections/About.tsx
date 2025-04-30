import contactImage from "@/assets/images/about1.png";
import contactImage2 from "@/assets/images/about2.png";
import contactImage3 from "@/assets/images/about3.png";
import contactImage4 from "@/assets/images/about-final.png";
import Image from "next/image";


export default function About() {
  return (
    <>
      <section className=" font-jakarta  gap-8 w-full xl:px-24 lg:px-10 py-10 px-5 bg-[#F3f1ff]">
        <div className="flex_center lg:flex-row flex-col gap-10 container w-full rounded-md">
          <div className="lg:w-[45%] w-[90%] flex_center flex-col  overflow-hidden">
            <Image
              src={contactImage}
              alt="contact-image"
              className="w-full max-h-[800px] p-10 object-cover"
            />
          </div>
          <div className="lg:w-[55%] w-[90%] flex_center flex-col gap-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col font-bold text-justify text-gray-600 gap-3">
                <h1 className=" text-base w-full text-left font-bold">
                  Description
                </h1>
                <h1 className=" mb-10 text-gray-500 text-2xl w-full text-left font-bold">
                  ABOUT US
                </h1>
                <h4>
                  Welcome to SIKSHYA, a platform built by students, for
                  students! We’re here to make studying simpler, smarter, and
                  more collaborative. Our mission is to empower every learner by
                  creating a space where knowledge is shared freely and
                  effortlessly. Whether you’re a student looking to upload your
                  notes, access study materials, or grab some offline books as a
                  reward for your contributions, we’ve got you covered.
                </h4>
                <h4>
                  At SIKSHYA, we believe that education thrives when we help
                  each other. That’s why we’ve created a community-driven system
                  where you can upload your notes, old question papers, and
                  study materials to support your peers in need. In return,
                  you’ll get access to a treasure trove of resources—read books
                  and papers online, or even score offline books as a token of
                  appreciation for your generosity. From textbooks to
                  handwritten notes, we’re building a hub where every student
                  can find what they need and give back in their own way.
                </h4>
                <h4>
                  Our journey started with a simple idea: no student should
                  struggle to find quality study resources. Today, we’re proud
                  to offer a seamless experience that combines online access
                  with real-world rewards. Join us in revolutionizing how
                  students learn, share, and grow—because together, we can make
                  education unstoppable.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-b-2 border-gray-500 my-14 container"></div>
      <section className=" font-jakarta  gap-8 w-full xl:px-24 lg:px-10 py-10 px-5 bg-[#cbd0dc]">
        <div className="flex_center lg:flex-row flex-col gap-10 container w-full rounded-md">
          <div className="lg:w-[55%] w-[90%] flex_center flex-col gap-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col font-bold text-justify text-gray-600 gap-3">
                <h1 className="mb-4 text-gray-500 text-2xl w-full text-left font-bold">
                  WHAT WE DO
                </h1>
                <h4>
                  At SIKSHYA, we’re all about making studying easier and more
                  rewarding for students like you. Our platform is designed to
                  bring the power of sharing and learning into one simple,
                  student-friendly space. Here’s how it works: Upload your
                  notes, old question papers, or any study material you’ve
                  got—it could be a game-changer for a peer in need. In return,
                  dive into a growing library of resources shared by other
                  students, from handwritten notes to textbooks, all available
                  to read online whenever you want.
                </h4>
                <h4>
                  {" "}
                  Need something more tangible? Earn offline books as a
                  heartfelt thank-you for your contributions. Whether you’re
                  sharing knowledge or grabbing resources for your next exam,
                  we’ve built a system that keeps the student community
                  thriving.
                </h4>
              </div>
            </div>
          </div>
          <div className="lg:w-[45%] w-[90%] flex_center flex-col  overflow-hidden">
            <Image
              src={contactImage2}
              alt="contact-image"
              className="w-full max-h-[800px] p-10 object-cover"
            />
          </div>
        </div>
      </section>
      <div className="border-b-2 border-gray-500 my-14 container"></div>
      <section className=" font-jakarta  gap-8 w-full xl:px-24 lg:px-10 py-10 px-5 bg-[#e1cdcd]">
        <div className="flex_center lg:flex-row flex-col gap-10 container w-full rounded-md">
          <div className="lg:w-[45%] w-[90%] flex_center flex-col  overflow-hidden">
            <Image
              src={contactImage3}
              alt="contact-image"
              className="w-full max-h-[800px] p-10 object-cover"
            />
          </div>
          <div className="lg:w-[55%] w-[90%] flex_center flex-col gap-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col font-bold text-justify text-gray-600 gap-3">
                <h1 className=" mb-4 text-gray-500 text-2xl w-full text-left font-bold">
                  WHY WE STARTED
                </h1>
                <h4>
                  At Sikshya, we know the student struggle all too well—missing
                  notes right before an exam, scrambling for updated resources,
                  or realizing the textbook you need is nowhere to be found. As
                  students ourselves, we’ve lived those frustrations firsthand.
                  That’s what sparked the idea for Sikshya: a platform to turn
                  those challenges into a solution. We wanted to create a space
                  where every student could find what they need and share what
                  they have, making education less stressful and more connected.
                  Sikshya isn’t just a website—it’s our way of saying, “We’ve
                  got your back.”
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-28 max-w-full  !w-full">
        <div className=" w-full ">
          <Image
            src={contactImage4}
            alt="contact-image"
            className="w-full max-h-[400px] object-cover"
          />
        </div>
      </section>
    </>
  );
}
