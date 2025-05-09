import { StaticImageData } from "next/image";
import Link from "next/link";

export default function CaseCard({
  image,
  title,
}: {
  image: StaticImageData;
  title: string;
}) {
  const formatSlug = (name: string): string => {
    return name.split(/[:–]/)[0].trim().toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="relative max-w-[600px] h-[380px] min-h-[300px] rounded-sm cursor-pointer overflow-hidden shadow-md group">
      {/* Background image container with scale */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105 z-0"
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      ></div>
      <Link
        href={`/case-studies/${formatSlug(title)}`}
        className="text-secondary cursor-pointer"
      >
        {/* Overlay & text content */}
        <div className="relative z-10 bg-black/40 group hover:bg-black/10 transition-all duration-5000 h-full w-full p-4 flex flex-col justify-end">
          <div className="absolute bottom-10 left-0 right-4 group-hover:bottom-0 group-hover:right-0 group-hover:bg-secondary transition-all duration-500 bg-tertiary">
            <h2 className="text-lg md:text-2xl p-4 text-white  font-[600]">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
