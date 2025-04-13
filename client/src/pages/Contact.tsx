import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText("lee.sanggean@gmail.com");
    toast.success("Email copied!");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xanevoke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("✅ Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 px-6 min-h-screen bg-white text-gray-600">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-light mb-12 tracking-tight">Contact</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-black text-white font-semibold py-3 rounded-md transition-colors ${
                loading ? "bg-gray-600 cursor-not-allowed" : "hover:bg-gray-800"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-12 text-sm leading-relaxed">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-4">
                Contact Information
              </h2>
              <ul className="space-y-2">
                <li>
                  📧 <span
  onClick={handleEmailClick}
  className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
>
  lee.sanggean@gmail.com
</span>
                </li>
                <li>
                  📍 Seoul, South Korea / Woking, United Kingdom
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-4">
                Follow Me
              </h2>
              <div className="flex gap-5 text-2xl text-gray-600">
                <a href="https://github.com/luts83" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/nirone7" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/braveonion777" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
