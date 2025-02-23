import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";

const WhyUs = () => {
  return (
    <section className="container mx-auto mt-10 px-4">
      <div className="flex flex-col md:flex-row-reverse items-center">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={ChildImage}
            alt="Happy Kids"
            className="w-full md:w-auto rounded-lg shadow-lg border-4 border-teal-500"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold font-mono mb-4">Why us?</h1>
          <p className="text-lg font-sans leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            aut perspiciatis laborum repellat esse hic nihil a placeat accusamus
            fugit. Iusto earum ea esse beatae quae soluta vero cupiditate
            commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati aut perspiciatis laborum repellat esse hic nihil a placeat
            accusamus fugit. Iusto earum ea esse beatae quae soluta vero
            cupiditate commodi.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
