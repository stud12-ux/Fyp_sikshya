import { twMerge } from "tailwind-merge";

export default function SectionHeader({
  title,
  smallTitle,
  className,
}: {
  title?: string;
  smallTitle?: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "section-header flex_center flex-col w-full bg-secondary text-white",
        className
      )}
    >
      <p className="text-xl font-bold lg:text-start text-center py-3">
        {smallTitle}
      </p>
    </div>
  );
}
