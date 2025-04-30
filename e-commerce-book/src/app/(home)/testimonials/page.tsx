import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="flex_center flex-col w-full py-24 font-jakarta  gap-12 bg-[#F5FBFF]">
      <SectionHeader
        smallTitle="Client Testimonials"
        
      />
      <div className="testimonials w-full flex_center gap-8 lg:px-0 px-4">
        <TestimonialCard />
      </div>
    </section>
  );
}
