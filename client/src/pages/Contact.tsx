import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'initial' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>('initial');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleEmailClick = () => {
  //   navigator.clipboard.writeText("lee.sanggean@gmail.com");
  //   toast.success("📋 Email copied to clipboard!"); // ← 여기가 이모지 들어간 부분
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
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
        setStatus('success');
      } else {
        toast.error("❌ Failed to send. Please try again.");
        setStatus('error');
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong.");
      setStatus('error');
    }
  };

  return (
    <div className="pt-20 px-6 pb-20 min-h-screen bg-white text-gray-600">
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
                disabled={status === 'loading'}
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
                disabled={status === 'loading'}
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
                disabled={status === 'loading'}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                status === 'loading' 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-black hover:bg-gray-800'
              }`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Feel free to reach out to me for any questions or opportunities.
              </p>
            </div>

            <div>
  <h3 className="text-lg font-medium mb-2">Email</h3>
  <button
  onClick={() => {
    const email = "lee.sanggean@gmail.com";

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email)
        .then(() => alert("📋 Email copied to clipboard!"))
        .catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }

    function fallbackCopy(text: string) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // avoid scrolling to bottom
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        alert("📋 Email copied to clipboard!");
      } catch (err) {
        prompt("Copy email:", email);
      }

      document.body.removeChild(textArea);
    }
  }}
  className="text-gray-400 hover:text-black transition-colors text-sm underline"
>
  lee.sanggean@gmail.com
</button>
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
