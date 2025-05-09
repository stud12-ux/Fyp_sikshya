import PageHeader from "@/components/PageHeader";
import Contact from "@/sections/Contact";

export default function ContactUs() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader title="Contact Us"  />

      <Contact className="pt-0 py-16" />
      <div className="w-full flex_center h-max">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8142628906353!2d144.9651226!3d-37.81781929999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b475a94fe3%3A0x6b50ae0db6d526d!2slevel%207%2F276%20Flinders%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2snp!4v1742456847479!5m2!1sen!2snp"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg w-full"
        ></iframe>
      </div>
    </main>
  );
}
