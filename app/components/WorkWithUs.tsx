'use client'
import React, { useState } from 'react';

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    store: '',
    additionalInfo: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    // Combine the form fields into the message
    const combinedMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Budget: ${formData.budget}
      Store: ${formData.store === 'new' ? 'New Store' : 'Existing Store'}
      Additional Information: ${formData.additionalInfo}
    `;

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, message: combinedMessage }),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', budget: '', store: '', additionalInfo: '', message: '' });
      } else {
        setStatus('Failed to send message. It was not received.');
      }
    } catch (error) {
      setStatus('Failed to send message. It did not try.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center my-24">
      <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row w-full max-w-7xl p-5 lg:p-10 relative">
        
        {/* Left Side: Video */}
        <div className="lg:w-1/2 flex items-center justify-center min-h-full">
          <video 
            src="/video.mov" // Replace with the path to your video in the public folder
            className="object-cover w-full h-64 lg:h-full rounded-lg shadow-lg"
            controls
            autoPlay
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
                
        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 min-h-full bg-white p-6 flex flex-col justify-between h-full">
          <div>
            <h2 className=" text-2xl md:text-4xl font-bold mb-6">Work with Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Name */}
              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg" 
                  placeholder="Enter your name" 
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-lg font-medium mb-2">Budget</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="budget" 
                      value="500-1500" 
                      checked={formData.budget === '500-1500'}
                      onChange={handleRadioChange}
                      className="mr-2" 
                    />
                    $500-$1500
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="budget" 
                      value="2000-4000" 
                      checked={formData.budget === '2000-4000'}
                      onChange={handleRadioChange}
                      className="mr-2" 
                    />
                    $2000-$4000
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="budget" 
                      value="4500-8000" 
                      checked={formData.budget === '4500-8000'}
                      onChange={handleRadioChange}
                      className="mr-2" 
                    />
                    $4500-$8000
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="budget" 
                      value="10000+" 
                      checked={formData.budget === '10000+'}
                      onChange={handleRadioChange}
                      className="mr-2" 
                    />
                    $10,000+
                  </label>
                </div>
              </div>

              {/* New or Existing Store */}
              <div>
                <label className="block text-lg font-medium mb-2">New or Existing Store</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="store" 
                      value="new" 
                      checked={formData.store === 'new'}
                      onChange={handleRadioChange}
                      className="mr-2" 
                    />
                    New
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="store" 
                      value="existing" 
                      checked={formData.store === 'existing'}
                      onChange={handleRadioChange}
                      className="mr-2" 
                    />
                    Existing
                  </label>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg" 
                  placeholder="Enter your email" 
                />
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="additionalInfo">Additional Information</label>
                <textarea 
                  id="additionalInfo" 
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg" 
                  placeholder="Additional Info..."
                  rows={4}
                ></textarea>
              </div>

              {/* Submit Button */} 
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                  Submit
                </button>
                {status && <p className="text-center text-lg mt-4">{status}</p>}
              </div>
            </form>
          </div>

          {/* Service Agreement Notice */}
          <div className="mt-8 text-sm text-gray-600">
            By submitting this form, you acknowledge that there is a service agreement that ensures our liability in fulfilling our offer, providing you with a sense of security.
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WorkWithUs;
