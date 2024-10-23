// "use client"
// import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

// interface FormData {
//   email: string;
//   phone: string;
//   first: string;
//   last: string;
//   message: string;
// }

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     email: '',
//     phone: '',
//     first: '',
//     last: '',
//     message: '',
//   });

//   useEffect(() => {
//     // Only access localStorage in the client
//     const savedData = localStorage.getItem('formData');
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     }
//   }, []);

//   useEffect(() => {
//     // Update localStorage whenever formData changes
//     localStorage.setItem('formData', JSON.stringify(formData));
//   }, [formData]);

//   const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     alert('Form submitted');

//     localStorage.removeItem('formData');
//     setFormData({
//       email: '',
//       phone: '',
//       first: '',
//       last: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <form className="w-full max-w-lg p-5 text-gray-200 rounded-lg shadow-lg lg:h-[140vh] lg:w-[300vw]" onSubmit={handleSubmit}>
//         <h1 className='text-2xl md:text-4xl font-bold text-center mt-4 mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text'>
//           Get In Touch With Us
//         </h1>
//         <div className="flex flex-col mb-4">
//           <label htmlFor="frm-email" className="mb-2">Email</label>
//           <input
//             id="frm-email"
//             type="email"
//             name="email"
//             autoComplete="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="py-2 px-3 border border-gray-600 rounded-md bg-blue-50 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>
//         <div className="flex flex-col mb-4">
//           <label htmlFor="frm-phone" className="mb-0">Phone</label>
//           <input
//             id="frm-phone"
//             type="text"
//             name="phone"
//             autoComplete="tel"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="py-2 px-3 border border-gray-600 rounded-md bg-blue-50 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>
//         <div className="flex flex-row justify-between mb-1">
//           <div className="flex flex-col w-1/2 pr-2">
//             <label htmlFor="frm-first" className="mb-2">First Name</label>
//             <input
//               id="frm-first"
//               type="text"
//               name="first"
//               autoComplete="given-name"
//               value={formData.first}
//               onChange={handleChange}
//               required
//               className="py-2 px-3 border border-gray-600 rounded-md bg-blue-50 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div className="flex flex-col w-1/2 pl-2">
//             <label htmlFor="frm-last" className="mb-2">Last Name</label>
//             <input
//               id="frm-last"
//               type="text"
//               name="last"
//               autoComplete="family-name"
//               value={formData.last}
//               onChange={handleChange}
//               required
//               className="py-2 px-3 border border-gray-600 rounded-md bg-blue-50 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col mb-4">
//           <label htmlFor="frm-message" className="mb-2">Message</label>
//           <textarea
//             id="frm-message"
//             rows={4}
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="py-2 px-3 border border-gray-600 rounded-md bg-blue-50 text-gray-800 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="px-4 py-2 text-lg font-semibold border border-black rounded-md bg-gray-900 text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white font-serif ">
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We are here to help you. Reach out to us via any of the following methods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl text-black font-bold">Call Us</h3>
            <p className="text-gray-700 mt-2">+1 123 456 7890</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold text-black">Email Us</h3>
            <p className="text-gray-700 mt-2">contact@wisedoctors.com</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold text-black">Visit Us</h3>
            <p className="text-gray-700 mt-2">123 Health St, Wellness City</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
        <form className="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label htmlFor="name" className="block text-gray-300 font-bold">Name</label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 font-bold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 font-bold">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-100">
            <h3 className="text-xl font-bold">What are your operating hours?</h3>
            <p className="mt-2 text-gray-300">We operate from 9 AM to 5 PM, Monday to Friday.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-100 mt-4">
            <h3 className="text-xl font-bold">How can I book an appointment?</h3>
            <p className="mt-2 text-gray-300">You can book an appointment through our website or by calling our office.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-100 mt-4">
            <h3 className="text-xl font-bold">Do you offer telemedicine services?</h3>
            <p className="mt-2 text-gray-300">Yes, we offer telemedicine consultations.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
