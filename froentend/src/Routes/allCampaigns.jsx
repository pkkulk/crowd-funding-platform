import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/navbar_notLanding";
import Campaign from "../Components/everyOngoingCampaigns";
import Pagination from "../Components/pagination";
import Loader from "../Components/loaderFullPage";
import ScrollToTop from "../Components/scrollToTop";
import { paginate } from "../utills/paginate";
import { getAllCampaigns } from "../services/campaign";
import { compare } from "../utills/math";

const AllCampaigns = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const { data, err } = await getAllCampaigns();
      if (!err) {
        setLoading(false);
        setData(data.sort(compare));
      } else {
        toast.error(err.response?.data?.message || "Something went wrong");
      }
    }
    getData();
  }, []);

  const handleClick = (id) => {
    navigate(`/campaign/${id}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageSize = 6;
  const allCampaigns = paginate(data, currentPage, pageSize);

  return (
    <div>
      <NavBar />
      <ScrollToTop />
      {loading && <Loader />}

      {/* Page Header */}
      <div className="text-center py-6 bg-green-600 text-white text-3xl font-semibold">
        All Campaigns
      </div>

      {/* Campaigns Grid */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCampaigns.map((d) => (
          <div key={d._id} className="bg-white shadow-lg rounded-lg p-4">
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

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination
          itemsCount={data.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllCampaigns;
