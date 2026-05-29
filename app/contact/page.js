"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#e8f5e9] to-[#f1f8e9] border-b border-green-100 px-4 py-12 md:py-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-900 mb-3 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-green-600 text-sm md:text-lg">
          We'd love to hear from you, whether it's a question, feedback, or a car enquiry.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 md:gap-12 items-start">

        {/* Left — Contact Info */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-6">Contact Information</h2>

          {[
            { icon: "📍", label: "Address", value: "341 AutoHub Drive, Kilifi, Kenya" },
            { icon: "📞", label: "Phone", value: "+254 791696253" },
            { icon: "✉️", label: "Email", value: "support@autohub.co.ke" },
            { icon: "🕐", label: "Business Hours", value: "Mon–Sat: 8:00 AM – 8:00 PM" },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 items-start mb-5">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-green-50 flex items-center justify-center text-lg flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-0.5">
                  {item.label}
                </div>
                <div className="text-sm md:text-base text-gray-700">{item.value}</div>
              </div>
            </div>
          ))}

          {/* Social Links */}
          {/* ===== EDIT YOUR LINKS BELOW ===== */}
          <div className="mt-8">
            <div className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">
              Follow Us
            </div>
            <div className="flex flex-wrap gap-2">

              {/* 👉 EDIT 1: Replace YOUR_FACEBOOK_PAGE */}
              <a
                href="https://www.facebook.com/profile.php?id=100020882745109"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full border-2 border-green-600 text-green-700 text-xs md:text-sm font-semibold hover:bg-green-600 hover:text-white transition"
              >
                Facebook
              </a>

              {/* 👉 EDIT 2: Replace YOUR_INSTAGRAM_HANDLE */}
              <a
                href="https://www.instagram.com/kar.tel.254?igsh=MXI0dHo2Yndla2Vpbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full border-2 border-green-600 text-green-700 text-xs md:text-sm font-semibold hover:bg-green-600 hover:text-white transition"
              >
                Instagram
              </a>

              {/* 👉 EDIT 3: Replace number if different */}
              <a
                href="https://wa.me/254791696253"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full border-2 border-green-600 text-green-700 text-xs md:text-sm font-semibold hover:bg-green-600 hover:text-white transition"
              >
                WhatsApp
              </a>

            </div>
          </div>
          {/* ===== END SOCIAL LINKS ===== */}
        </div>

        {/* Right — Contact Form */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-9 shadow-sm">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
              <p className="text-gray-500 text-sm mb-6">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                }}
                className="bg-green-700 text-white px-7 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-800 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-lg md:text-xl font-bold text-green-900 mb-6">Send Us a Message</h2>

              {error && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm border border-red-100">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-400"
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 700 000 000"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-400"
                    >
                      <option value="">Select a subject</option>
                      <option value="car-inquiry">Car Inquiry</option>
                      <option value="test-drive">Schedule Test Drive</option>
                      <option value="financing">Financing Options</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-400 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-bold text-white text-sm md:text-base tracking-wide transition ${
                    loading ? "bg-green-400 cursor-not-allowed" : "bg-green-700 hover:bg-green-800 cursor-pointer"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="bg-green-50 border-t border-green-100 px-4 py-10 md:py-12 text-center">
        <h3 className="text-lg md:text-xl font-bold text-green-900 mb-4">Find Our Showroom</h3>
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-green-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127420.71797030956!2d39.73509529603406!3d-3.6109357921927634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183fdd32a5c6e23d%3A0x56833d42176236ae!2sKilifi%20Township!5e0!3m2!1sen!2ske!4v1779773297326!5m2!1sen!2ske"
            width="100%"
            height="280"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}