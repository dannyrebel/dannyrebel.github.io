import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactSocials from "./ContactSocials";

export default function Contact({ sectionRef }) {
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="font-main py-12 bg-linear-to-br from-neutral-50 to-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-accent-950 mb-6">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <p className="text-xl text-neutral-800 max-w-3xl mx-auto leading-relaxed">
            Ready to give your vehicle the premium treatment it deserves?
            Contact us today for a personalized detailing experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <ContactSocials />
          </div>
        </div>
      </div>
    </section>
  );
}
