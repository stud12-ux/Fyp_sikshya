import { twMerge } from "tailwind-merge";

export default function SecondaryButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      className={twMerge(
        "rounded-md border border-tertiary text-tertiary hover:bg-tertiary hover:text-primary transition duration-300 py-2 md:px-6 px-4  text-sm md:text-base font-medium",
        className
      )}
    >
      {text}
    </button>
  );
}
