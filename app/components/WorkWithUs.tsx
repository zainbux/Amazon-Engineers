import React from 'react';

type Props = {};

const WorkWithUs = (props: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
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
          
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
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
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default WorkWithUs;
