import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Loader from "./loader";
import Campaign from "./everyOngoingCampaigns";

const OnGoingCampaigns = ({ data, loading, handleClick }) => {
  const scrollRef = useRef();

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -325 : 325;
    }
  };

  return (
    <section id="Donate" className="container mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Ongoing Campaigns</h1>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button
            className="p-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
            onClick={() => handleScroll("left")}
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button
            className="p-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
            onClick={() => handleScroll("right")}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Loader */}
      {loading && <Loader />}

      {/* Campaigns List */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-scroll scroll-smooth p-4"
      >
        {data.map((d) => (
          <div
            key={d._id}
            className="min-w-[350px] bg-white shadow-lg rounded-lg p-4"
          >
            <Campaign
              id={d._id}
              handleClick={handleClick}
              title={d.title}
              description={d.description}
              image={d.imageUrl}
              requiredAmount={d.required}
              isActivated={d.isActivated}
            />
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-8">
        <Link to="/all-campaigns">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700 transition">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OnGoingCampaigns;
