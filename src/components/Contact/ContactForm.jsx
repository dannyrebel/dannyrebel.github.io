import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

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

  useEffect(() => {
    emailjs.init("elSORHa2gCMSJ6LeI");
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send("service_629m5cm", "template_ga7a4y7", templateParams)
      .then(
        () => {
          setSubmitStatus("success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email send failed:", error);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <h3 className="text-2xl md:text-3xl font-bold text-accent-950 mb-8">
        Прати ни съобщение
      </h3>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Благодарим! Съобщението ти беше изпратено успешно.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          Опа! Нещо се обърка. Моля, опитай отново.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Имена *"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Две имена"
          />
          <InputField
            label="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          <InputField
            label="Телефон *"
            name="phone"
            type="tel"
            value={formData.phone}
            required
            onChange={handleChange}
            placeholder="089 1234 567"
          />
        </div>

        <TextAreaField
          label="Съобщение *"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Разкажи ни за автомобила си..."
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-500 text-accent-950 px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Изпраща се..." : "Изпрати съобщение"}
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
