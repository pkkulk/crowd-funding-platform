import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />

      {/* Container */}
      <div className="container mx-auto px-6 py-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          CONTACT US
        </h1>

        {/* Content */}
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at!
        </p>

        {/* Map Section */}
        <div className="flex justify-center mt-8">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.376170291284!2d78.17195011486825!3d26.249452083417705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sIndian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1608394606599!5m2!1sen!2sin"
            className="w-full md:w-3/4 h-96 rounded-lg shadow-lg border-2 border-teal-500"
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Left Section - Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Feel free to contact us in case of any queries.
            </p>
            <Form />
          </div>

          {/* Right Section - Contact Details */}
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Office
            </h2>
            <p className="text-gray-700">
              <b>ROTARACT IIITM</b>
              <br />
              IIITM Campus,
              <br />
              Morena Link Rd,
              <br /> Gwalior, Madhya Pradesh 474015
              <br /> <br />
              <b>Email:</b> rotaract@iiitm.ac.in
              <br />
              <b>Phone:</b> +91-9876543210
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
