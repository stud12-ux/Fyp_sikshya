import { twMerge } from "tailwind-merge";

export default function PrimaryButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      className={twMerge(
        "rounded-md bg-secondary hover:bg-[#0091d5] transition duration-300 py-2 md:px-6 px-4 text-sm md:text-base font-medium text-primary",
        className
      )}
    >
      {text}
    </button>
  );
}
