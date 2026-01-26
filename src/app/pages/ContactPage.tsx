'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', orderId: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-[#D94436] mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-serif text-[#D94436] mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFF8F0] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#D94436]" />
                </div>
                <div>
                  <h3 className="mb-1">Email</h3>
                  <p className="text-gray-600">support@tarapithstore.com</p>
                  <p className="text-gray-600">orders@tarapithstore.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FFF8F0] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#D94436]" />
                </div>
                <div>
                  <h3 className="mb-1">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 98765 43211</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Mon-Sat: 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FFF8F0] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#D94436]" />
                </div>
                <div>
                  <h3 className="mb-1">Address</h3>
                  <p className="text-gray-600">
                    Near Tarapith Temple<br />
                    Birbhum District<br />
                    West Bengal, India - 731123
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#FFF8F0] rounded-lg">
              <h3 className="text-sm mb-2 text-[#D94436]">
                Store Hours
              </h3>
              <p className="text-sm text-gray-600">
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-serif text-[#D94436] mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D94436]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D94436]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="orderId" className="block text-sm mb-2">
                  Order ID (Optional)
                </label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  value={formData.orderId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D94436]"
                  placeholder="ORD123456"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D94436]"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D94436] text-white py-3 rounded-md hover:bg-[#B8860B] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
