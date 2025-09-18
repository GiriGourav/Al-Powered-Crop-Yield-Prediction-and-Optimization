import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const KnowledgePage = () => {
  const { id } = useParams(); // crop name from URL
  const [weekData, setWeekData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCropData = async () => {
      try {
        const response = await axios.get(`/api/fetchresult/${id}`);
        // Expected backend response:
        // [
        //   { week: 1, title: "Practices", description: "Do this...", image: "http://..." },
        //   { week: 2, title: "Things to Do", description: "Do that...", image: "http://..." },
        //   ...
        // ]
        setWeekData(response.data);
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
        <p className="text-green-700 text-lg font-semibold">Loading crop details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        {decodeURIComponent(id)} – Weekly Guide
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {weekData.map((weekItem, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-green-100 p-6 hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Image section */}
              {weekItem.image && (
                <img
                  src={weekItem.image}
                  alt={`Week ${weekItem.week} illustration`}
                  className="w-full md:w-1/3 rounded-xl object-cover"
                />
              )}

              {/* Text section */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-green-800 mb-2">
                  Week {weekItem.week}: {weekItem.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {weekItem.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgePage;
