import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 👈 import

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); // 👈 hook

  useEffect(() => {
    // fetch suggestions from API
    // const fetchSuggestions = async () => {
      // try {
      //   const response = await axios.get("/api/getsuggestions");
      //   // expected: [{ name: "Wheat", profit: "₹50,000/acre" }, ...]
      //   setSuggestions(response.data);
      // } catch (error) {
      //   console.error("Error fetching suggestions:", error);
      // }

    // };
    // fetchSuggestions();
    
    // 👇 instead of API call, just fill with dummy data
    const dummyData = [
      { 
        name: "Wheat", 
        profit: "₹50,000/acre",
        image: "https://images.unsplash.com/photo-1587049352844-6ec38d3e9427?auto=format&fit=crop&w=400&q=60" 
      },
      { 
        name: "Rice", 
        profit: "₹40,000/acre",
        image: "https://images.unsplash.com/photo-1591736468294-bb15aeaaec7f?auto=format&fit=crop&w=400&q=60"
      },
      { 
        name: "Corn", 
        profit: "₹35,000/acre",
        image: "https://images.unsplash.com/photo-1592928306064-3d3fa029b5bb?auto=format&fit=crop&w=400&q=60"
      },
      { 
        name: "Soybean", 
        profit: "₹30,000/acre",
        image: "https://images.unsplash.com/photo-1600718374071-71f0a5cb9185?auto=format&fit=crop&w=400&q=60"
      },
      { 
        name: "Barley", 
        profit: "₹25,000/acre",
        image: "https://images.unsplash.com/photo-1601481097046-6fd7e4b49847?auto=format&fit=crop&w=400&q=60"
      },
      { 
        name: "Potato", 
        profit: "₹45,000/acre",
        image: "https://images.unsplash.com/photo-1591375276554-d5ae35d3e4bb?auto=format&fit=crop&w=400&q=60"
      },
    ];
    setSuggestions(dummyData);
  }, []);

  // click handler to navigate to knowledge page
  const handleCardClick = (item) => {
    // crop name in URL — encode to handle spaces
    const cropName = encodeURIComponent(item.name);
    navigate(`/knowledge/${cropName}`);
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Recommended Crops for You
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {suggestions.slice(0, 6).map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item)}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-green-100"
          >
            {/* 👇 New image element */}
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              {item.name}
            </h2>
            <p className="text-gray-600">
              Expected Profit:{" "}
              <span className="font-bold text-green-700">
                {item.profit}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
