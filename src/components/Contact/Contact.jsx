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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-accent-950 mb-6">
            Свържи се <span className="text-primary-500">с нас</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-800 max-w-3xl mx-auto leading-relaxed">
            Готов ли си да върнеш аурата на автомобила си с премиум отношението
            което заслужава? <br /> Свържи се с нас за детайлна информация
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="min-w-0">
            {" "}
            {/* This prevents overflow */}
            <ContactForm />
          </div>
          <div className="space-y-8 min-w-0">
            <ContactInfo />
            <ContactSocials />
          </div>
        </div>
      </div>
    </section>
  );
}
