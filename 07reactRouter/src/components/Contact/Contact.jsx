import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-[700px] bg-gray-50 sm:pt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information Section */}
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold tracking-tight">
                Get in touch:
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Fill in the form to start a conversation
              </p>

              <div className="space-y-6 mt-8 text-gray-600">
                {/* Address */}
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-orange-500"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="ml-4 text-md font-semibold">
                    Acme Inc, Street, State, Postal Code
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-orange-500"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="ml-4 text-md font-semibold">
                    +44 1234567890
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-orange-500"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-4 text-md font-semibold">
                    info@acme.org
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="p-6 bg-white shadow-lg rounded-xl">
              <div className="space-y-4">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                {/* Telephone Input */}
                <div>
                  <label htmlFor="tel" className="sr-only">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-full py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
