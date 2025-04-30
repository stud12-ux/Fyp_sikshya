import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ServiceCard({ image, title, miniDescription,link }: { image: StaticImageData; title: string; miniDescription: string; link:string; }) {
    return (
     <Link href={link}>  <div className="flex flex-col gap-4 col-span-1">
            <div className="flex_center w-full h-60 rounded-md overflow-hidden">
                <Image
                    src={image}
                    alt="blog-image"
                    className="size-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-semibold">
                    {title}
                </h1>
                <p className="text-base text-text">
                    {miniDescription}
                </p>
            </div>
            <div className="flex items-center gap-2 text-base cursor-pointer w-max">
                <Link href={link} className="pb-1 border-b border-secondary text-secondary cursor-pointer">
                    Learn More
                </Link>
                <IoIosArrowRoundForward />
            </div>
        </div>
        </Link> 
    )
}