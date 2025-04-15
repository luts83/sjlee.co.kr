import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';


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
  const [contactEmail] = useState('lee.sanggean@gmail.com');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(contactEmail);
      toast.success('Email copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy email.');
    }
  };

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
    <>
      <Helmet>
        <title>Sangjin Lee | Contact</title>
        <meta name="description" content="Contact Sangjin Lee for inquiries or collaborations." />
        <meta property="og:title" content="Sangjin Lee | Contact" />
        <meta property="og:description" content="Contact Sangjin Lee for inquiries or collaborations." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="pt-20 px-6 pb-20 min-h-screen bg-white text-gray-600"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-light mb-12 tracking-tight"
          >
            Contact
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
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
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xl font-medium mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  Feel free to reach out for collaborations or just a friendly hello.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <button
                  onClick={handleEmailClick}
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {contactEmail}
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
