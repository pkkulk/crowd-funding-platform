import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />

      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg border-4 border-teal-500"
            src={aboutUsIIITM}
            alt="IIITM Block View"
          />
        </div>

        {/* Content */}
        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero consequatur ea quia inventore excepturi
          officiis deserunt sequi, esse nobis laudantium tempora aut, animi
          praesentium id! Necessitatibus laborum vitae vero at!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero consequatur ea quia inventore excepturi
          officiis deserunt sequi, esse nobis laudantium tempora aut, animi
          praesentium id! Necessitatibus laborum vitae vero at!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero consequatur ea quia inventore excepturi
          officiis deserunt sequi, esse nobis laudantium tempora aut, animi
          praesentium id! Necessitatibus laborum vitae vero at!
        </p>
      </div>
    </>
  );
};

export default AboutUs;
