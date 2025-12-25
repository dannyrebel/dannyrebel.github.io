import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactSocials from "./ContactSocials";
import { motion } from "framer-motion";

export default function Contact({ sectionRef }) {
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="font-main py-12 bg-linear-to-br from-neutral-50 to-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-accent-950 mb-6">
            Свържи се <span className="text-primary-500">с нас</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-800 max-w-3xl mx-auto leading-relaxed">
            Готов ли си да върнеш аурата на автомобила си с премиум отношението
            което заслужава? <br /> Свържи се с нас за детайлна информация
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info & Socials - Right side */}
          <div className="space-y-8 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ContactSocials />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
