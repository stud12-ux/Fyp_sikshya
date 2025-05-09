import Image from "next/image";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import pageHeaderImage from "@/assets/images/pageHeaderImage.jpeg";

export default function PageHeader({ title }: { title: string }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #173f5f 0%, #2b5876 40%, #1c1c1c 100%)",
      }}
      className="w-full h-64 flex_center flex-col text-primary relative"
    >
      {/* <Image
        src={pageHeaderImage}
        alt="page header image"
        className="w-full h-full object-cover"
      /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary"></div> */}
      <div className="flex_center flex-col gap-8 absolute">
        <h1 className="md:text-[40px] text-3xl text-center font-semibold">
          {title}
        </h1>
      </div>
    </div>
  );
}
