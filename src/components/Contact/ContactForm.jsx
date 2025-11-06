import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated API call
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <h3 className="text-3xl font-bold text-accent-950 mb-8">
        Send us a Message
      </h3>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Full Name *"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
          <InputField
            label="Email Address *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
          />
          <SelectField
            label="Service Interested In"
            name="service"
            value={formData.service}
            onChange={handleChange}
            options={[
              { value: "", text: "Select a service" },
              { value: "exterior", text: "Exterior Detailing" },
              { value: "interior", text: "Interior Deep Clean" },
              { value: "paint-correction", text: "Paint Correction" },
              { value: "ceramic-coating", text: "Ceramic Coating" },
              { value: "engine-bay", text: "Engine Bay Cleaning" },
              { value: "wheel-tire", text: "Wheel & Tire Care" },
              { value: "full-detail", text: "Full Detail Package" },
            ]}
          />
        </div>

        <TextAreaField
          label="Message *"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tell us about your vehicle..."
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-500 text-accent-950 px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

/* 🧩 Reusable small input components */
function InputField({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-accent-950 mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
      />
    </div>
  );
}

function SelectField({ label, options, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-accent-950 mb-2">
        {label}
      </label>
      <select
        {...props}
        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-accent-950 mb-2">
        {label}
      </label>
      <textarea
        {...props}
        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
      />
    </div>
  );
}
