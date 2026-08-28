import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Have questions, feedback, or need assistance? We're here to help!
        Please fill out the form below or reach out to us using the contact information provided.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Details</h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Email:</strong> farhanhaider8678491@gmail.com
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Phone:</strong> 0️⃣3️⃣4️⃣5️⃣8️⃣6️⃣7️⃣8️⃣4️⃣9️⃣1️⃣
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Address:</strong> Old Bank Road  Ahmad Nagar,Lalian District Chiniot
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Business Hours</h3>
            <p className="text-lg text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-lg text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-lg text-gray-700">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;