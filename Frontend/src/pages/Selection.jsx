import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const navigate = useNavigate();
  const [searchArea, setSearchArea] = useState(false);
  const [cropName, setCropName] = useState("");

  const openUI = () => {
    setSearchArea(true);
    document.body.style.overflow = "hidden"; // prevent scroll when modal open
  };

  const closeUI = () => {
    setSearchArea(false);
    setCropName("");
    document.body.style.overflow = "auto"; // restore scroll
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (cropName.trim() !== "") {
      navigate(`/search-crops?crop=${cropName}`);
      closeUI();
    }
  };

  return (
    <div
      className={`relative bg-gradient-to-b from-green-50 via-white to-green-50 min-h-screen flex flex-col items-center`}
    >
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-8 px-4 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
          Empowering Farmers 🌾
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Access government schemes, crop information, and modern farming
          methods — all in one place.
        </p>
      </section>

      {/* Main Content */}
      <div
        className={`w-full transition ${
          searchArea ? "blur-sm pointer-events-none" : ""
        } max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        {/* Action Buttons */}
        <section className="max-w-5xl w-full mt-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              onClick={() => navigate("/gov-schemes")}
              className="cursor-pointer bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition transform flex flex-col items-center border border-green-100"
            >
              <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                📝
              </div>
              <h3 className="text-lg font-bold text-gray-800">Gov Schemes</h3>
              <p className="text-gray-500 text-sm mt-2 text-center">
                Discover the latest government programs for farmers.
              </p>
            </div>

            <div
              onClick={openUI}
              className="cursor-pointer bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition transform flex flex-col items-center border border-blue-100"
            >
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🌱
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                Search for Crops
              </h3>
              <p className="text-gray-500 text-sm mt-2 text-center">
                Explore information about a your current crops.
              </p>
            </div>

            <div
              onClick={() => navigate("/form")}
              className="cursor-pointer bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition transform flex flex-col items-center border border-purple-100"
            >
              <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🌾
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                Methods for next Crop
              </h3>
              <p className="text-gray-500 text-sm mt-2 text-center">
                Learn best practices and modern techniques for your next crops.
              </p>
            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className="max-w-4xl w-full mt-12 mx-auto mb-8">
          <div
            onClick={() => navigate("/chatbot")}
            className="cursor-pointer bg-white rounded-3xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition p-6 flex items-center gap-6 border border-gray-100"
          >
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl">
              🤖
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">
                Chatbot Assistant
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Click to chat and get personalized help for your farming needs.
              </p>
            </div>
            <div className="text-green-600 font-bold text-xl">→</div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {searchArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-11/12 max-w-md text-center relative flex flex-col items-center">
            <button
              onClick={closeUI}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              🌱 Search for a Crop
            </h2>
            <p className="text-gray-600 mb-6">
              Enter the crop you want to know more about:
            </p>
            <form
              onSubmit={handleSearch}
              className="w-full flex flex-col items-center gap-4"
            >
              <input
                type="text"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                placeholder="e.g. Wheat, Rice, Cotton..."
                className="w-full border border-green-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selection;
