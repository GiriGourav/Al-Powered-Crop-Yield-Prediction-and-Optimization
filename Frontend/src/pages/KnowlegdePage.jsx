import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const KnowlegdePage = () => {
  const { id } = useParams(); // crop name from URL
  const [weekData, setWeekData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generalInfo, setGeneralInfo] = useState(null);

  const [expandedIndex, setExpandedIndex] = useState(null); // toggle open/close

  const toggleWeek = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // text-to-speech
  const handleListen = (en, hi) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter1 = new SpeechSynthesisUtterance(en);
      utter1.lang = "en-IN";
      const utter2 = new SpeechSynthesisUtterance(hi);
      utter2.lang = "hi-IN";
      window.speechSynthesis.speak(utter1);
      utter1.onend = () => window.speechSynthesis.speak(utter2);
    } else {
      alert("Your browser does not support speech synthesis");
    }
  };

  useEffect(() => {
    const fetchCropData = async () => {
      try {
        const response = await fetch("/datacrops/data.json"); // ✅ fetch from JSON
        const data = await response.json();

        // decode crop name from URL
        const cropName = decodeURIComponent(id);

        // find the crop data by matching its name
        const crop = data.find(
          (item) => item.generalInfo.name.toLowerCase() === cropName.toLowerCase()
        );

         console.log(crop)
        // console.log(response)
        if (crop) {
          setGeneralInfo(crop.generalInfo);
          setWeekData(crop.weekData);
        } else {
          setGeneralInfo(null);
          setWeekData([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching crop data:", error);
        setLoading(false);
      }
    };

    fetchCropData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-green-50">
        <p className="text-green-700 text-lg font-semibold">
          Loading crop details...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        {decodeURIComponent(id)} Farmer’s Guide
      </h1>

      {/* General Info Section */}
      {generalInfo && (
        <div className="max-w-3xl mx-auto mb-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">
            {generalInfo.name}
          </h2>
          <p className="text-lg text-gray-700 mb-2">{generalInfo.description}</p>
          <p className="text-gray-700">
            <strong>Lifecycle:</strong> {generalInfo.lifecycle}
          </p>
          <p className="text-gray-700">
            <strong>Market Price:</strong> {generalInfo.marketPrice}
          </p>
          <p className="text-gray-700">
            <strong>{generalInfo.season}</strong>
          </p>
          <p className="text-gray-700">
            <strong>Types:</strong> {generalInfo.types}
          </p>
        </div>
      )}

      {/* Weekly Guide Section */}
      <div className="max-w-3xl mx-auto space-y-4">
        {weekData.map((weekItem, index) => {
          const isOpen = expandedIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow border border-green-100"
            >
              <button
                onClick={() => toggleWeek(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-green-800 font-semibold text-xl"
              >
                Week {weekItem.week}: {weekItem.title}
                <span>{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6">
                  {weekItem.image && (
                    <img
                      src={weekItem.image}
                      alt={`Week ${weekItem.week}`}
                      className="w-full rounded-lg mb-4 object-cover"
                    />
                  )}
                  <p className="text-gray-700 mb-2">
                    <strong>English:</strong> {weekItem.descriptionEN}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>हिंदी:</strong> {weekItem.descriptionHI}
                  </p>
                  <button
                    onClick={() =>
                      handleListen(weekItem.descriptionEN, weekItem.descriptionHI)
                    }
                    className="px-4 py-2 bg-green-600 text-white rounded-lg"
                  >
                    🔊 Listen
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fertilizer Info Section */}
      {generalInfo && (
        <div className="max-w-3xl mx-auto mt-8 bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold text-green-800 mb-2">
            Fertiliser & Khaad Recommendations
          </h3>
          <p className="text-gray-700 mb-1">
            <strong>Khaad:</strong> {generalInfo.fertiliser.khaad}
          </p>
          <p className="text-gray-700">
            <strong>Fertiliser:</strong> {generalInfo.fertiliser.fertiliser}
          </p>
        </div>
      )}
    </div>
  );
};

export default KnowlegdePage;
