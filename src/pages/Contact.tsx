import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { appleEase } from "../config/animations";

const STORAGE_KEY = "contact_submitted_at";
const COOLDOWN_DAYS = 3;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const submittedAt = localStorage.getItem(STORAGE_KEY);
    if (submittedAt) {
      const submittedTime = parseInt(submittedAt, 10);
      const now = Date.now();
      const daysPassed = (now - submittedTime) / (1000 * 60 * 60 * 24);

      if (daysPassed < COOLDOWN_DAYS) {
        setAlreadySubmitted(true);
        setDaysRemaining(Math.ceil(COOLDOWN_DAYS - daysPassed));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const form = new FormData();
      form.append("access_key", "9bef23d3-7713-4230-9691-4d31ab9e1394");
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("subject", `New message from ${formData.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem(STORAGE_KEY, Date.now().toString());
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Already submitted within cooldown period
  if (alreadySubmitted) {
    return (
      <div className="flex-1 flex flex-col justify-center items-center gap-6 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="text-center"
        >
          <h1 className="text-[clamp(2rem,8vw,4rem)] font-black tracking-wider leading-none m-0 uppercase">
            I got your message!
          </h1>
          <p className="text-base opacity-70 mt-4">
            I'll get back to you soon.
          </p>
          <p className="text-sm opacity-50 mt-2">
            You can ping me again in {daysRemaining} day
            {daysRemaining !== 1 ? "s" : ""} patience, warrior.
          </p>
        </motion.div>
      </div>
    );
  }

  // Just submitted successfully
  if (submitted) {
    return (
      <div className="flex-1 flex flex-col justify-center items-center gap-6 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="text-center"
        >
          <h1 className="text-[clamp(2rem,8vw,4rem)] font-black tracking-wider leading-none m-0 uppercase">
            Got your message!
          </h1>
          <p className="text-base opacity-70 mt-4">
            Give me a moment I'll get back to you faster than a bug in
            production.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: appleEase }}
        className="text-center"
      >
        <h1 className="text-[clamp(2rem,8vw,4rem)] font-black tracking-wider leading-none m-0 uppercase">
          Let's Talk
        </h1>
        <p className="text-base opacity-70 mt-4 max-w-md">
          Have something in mind? Drop a message.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: appleEase }}
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm uppercase tracking-wide opacity-70"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-transparent border-2 border-current px-4 py-2 text-base outline-none focus:opacity-100 opacity-80 transition-opacity placeholder:text-current placeholder:opacity-50"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm uppercase tracking-wide opacity-70"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent border-2 border-current px-4 py-2 text-base outline-none focus:opacity-100 opacity-80 transition-opacity placeholder:text-current placeholder:opacity-50"
            placeholder="your@email.com"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm uppercase tracking-wide opacity-70"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="bg-transparent border-2 border-current px-4 py-2 text-base outline-none focus:opacity-100 opacity-80 transition-opacity resize-none placeholder:text-current placeholder:opacity-50"
            placeholder="What's on your mind?"
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="border-2 border-current px-6 py-3 text-base uppercase tracking-wide font-bold cursor-pointer bg-transparent hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
