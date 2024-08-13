'use client'
import React, { useState } from 'react';

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
        const res = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (res.ok) {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('Failed to send message. was not received');
        }
      } catch (error) {
        setStatus('Failed to send message. did not try');
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center sm:p-32 sm:pt-60 md:py-32">
      <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row w-full max-w-5xl p-5 lg:p-10">
        
        {/* Left Side: Image */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img 
            src="/city.jpg" // Replace with your image path
            alt="Work with Us"
            className="object-cover rounded-lg w-full h-64 lg:h-full"
          />
        </div>
        
        {/* Right Side: Form */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-10 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">Work with Us</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                required
              />
            </div>
            
            <div className="text-center lg:text-left">
              <button 
                type="submit" 
                className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition">
                Submit
              </button>
            </div>

            {status && <p className="text-center text-lg mt-4">{status}</p>}
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default WorkWithUs;
