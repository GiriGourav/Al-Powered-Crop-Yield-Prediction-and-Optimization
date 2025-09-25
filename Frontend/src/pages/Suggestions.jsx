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
        image: "https://m.media-amazon.com/images/I/714xCG6CxKL._SX679_.jpg"
      },
      {
        name: "Rice",
        profit: "₹40,000/acre",
        image: "https://sourcetrace.com/wp-content/uploads/2020/12/4.jpg"
      },
      {
        name: "Sugarcane",
        profit: "₹35,000/acre",
        image: "https://www.agrifarming.in/wp-content/uploads/Guide-to-Sugarcane-Farming2.jpg"
      },
      {
        name: "Pulses",
        profit: "₹30,000/acre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZV1_A0fREaXETMUQnO1AfE2fGvcoJEvUKA&s"
      },
      {
        name: "Millets",
        profit: "₹25,000/acre",
        image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3uOWWp_WlKvacGGVhox89R8JjxCGgdrjJA&s"
      },
      {
        name: "Potato",
        profit: "₹45,000/acre",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnHt4sZPVFDsWHwDTUWj5lfY3_no9dUz0Fw&s"
      }
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
