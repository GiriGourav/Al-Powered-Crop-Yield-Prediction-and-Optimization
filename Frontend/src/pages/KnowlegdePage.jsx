import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const KnowlegdePage = () => {
  const { id } = useParams(); // crop name from URL
  const [weekData, setWeekData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generalInfo, setGeneralInfo] = useState(null);

  // which week is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // toggle week open/close
  const toggleWeek = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // text to speech
  const handleListen = (en, hi) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // stop previous
      const utter1 = new SpeechSynthesisUtterance(en);
      utter1.lang = "en-IN";
      const utter2 = new SpeechSynthesisUtterance(hi);
      utter2.lang = "hi-IN";
      window.speechSynthesis.speak(utter1);
      // speak hindi after english finishes
      utter1.onend = () => window.speechSynthesis.speak(utter2);
    } else {
      alert("Your browser does not support speech synthesis");
    }
  };

  useEffect(() => {
     // const fetchCropData = async () => {
    //   try {
    //     const response = await axios.get(`/api/fetchresult/${id}`);
    //     setWeekData(response.data);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error fetching crop data:", error);
    //     setLoading(false);
    //   }
    // };
    // fetchCropData();

    const cropName = decodeURIComponent(id);

    if (cropName === "Potato") {
      setGeneralInfo({
        name: "Potato",
        description:
          "Potato is a cool-season vegetable grown widely for its edible tubers. It is rich in carbohydrates and an important staple food.",
        lifecycle: "90–120 days from planting to harvest",
        marketPrice: "₹25–35/kg (varies by region and season)",
        season:
          "Best suitable season: October to December (Rabi) or January to March (Spring)",
        types: "Kufri Jyoti, Kufri Chandramukhi, Kufri Bahar, Kufri Surya",
        fertiliser: {
          khaad: "Well-rotted farmyard manure (FYM) 20–25 tons per hectare",
          fertiliser:
            "NPK 120:60:100 kg/ha – Nitrogen split at planting and earthing up stage",
        },
      });

      setWeekData([
        {
          week: 1,
          title: "Soil Preparation",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg",
          descriptionEN:
            "Loosen the soil deeply and mix in compost or FYM at 20–25 tons per hectare. Ensure good drainage and a fine tilth.",
          descriptionHI:
            "मिट्टी को गहराई से खोदें और 20–25 टन प्रति हेक्टेयर गोबर की खाद मिलाएं। अच्छी जल निकासी और भुरभुरी मिट्टी सुनिश्चित करें।",
        },
        {
          week: 2,
          title: "Seed Selection and Treatment",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/50/Potato_planting.jpg",
          descriptionEN:
            "Use healthy, sprouted seed tubers (30–50g). Treat tubers with fungicide before planting to prevent diseases.",
          descriptionHI:
            "स्वस्थ, अंकुरित बीज कंद (30–50 ग्राम) चुनें। रोगों से बचाव के लिए रोपण से पहले कंदों को फफूंदनाशक से उपचारित करें।",
        },
        {
          week: 3,
          title: "Planting Tubers",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/50/Potato_planting.jpg",
          descriptionEN:
            "Plant tubers 5–7 cm deep with 45 cm row spacing and 20 cm plant-to-plant spacing.",
          descriptionHI:
            "कंदों को 5–7 सेमी गहराई पर 45 सेमी कतार दूरी और 20 सेमी पौधे की दूरी पर लगाएं।",
        },
        {
          week: 4,
          title: "Irrigation",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/1e/Irrigation.jpg",
          descriptionEN:
            "Provide light irrigation immediately after planting. Maintain moist but not waterlogged soil.",
          descriptionHI:
            "रोपण के तुरंत बाद हल्की सिंचाई करें। मिट्टी को नम रखें लेकिन जलभराव न होने दें।",
        },
        {
          week: 5,
          title: "Weeding and Earthing Up",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/Earthing_up.jpg",
          descriptionEN:
            "Remove weeds and perform earthing up to cover developing tubers and encourage stolon growth.",
          descriptionHI:
            "खरपतवार हटाएं और मिट्टी चढ़ाकर विकसित होते कंदों को ढकें व वृद्धि को प्रोत्साहित करें।",
        },
        {
          week: 6,
          title: "Top Dressing Fertilizer",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Fertilizer_spread.jpg",
          descriptionEN:
            "Apply remaining nitrogen as top dressing at this stage to boost plant growth.",
          descriptionHI:
            "इस अवस्था में पौधों की वृद्धि बढ़ाने के लिए शेष नाइट्रोजन उपरी खाद के रूप में डालें।",
        },
        {
          week: 7,
          title: "Pest and Disease Management",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/Pest_scouting.jpg",
          descriptionEN:
            "Monitor for late blight and aphids. Spray recommended fungicides/insecticides if needed.",
          descriptionHI:
            "लेट ब्लाइट और एफिड्स की निगरानी करें। आवश्यक होने पर अनुशंसित फफूंदनाशक/कीटनाशक का छिड़काव करें।",
        },
        {
          week: 8,
          title: "Harvesting",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/78/Potato_Harvest.jpg",
          descriptionEN:
            "Harvest when haulms dry and tuber skins harden. Cure tubers in shade before storage.",
          descriptionHI:
            "जब पत्तियां सूख जाएं और कंद की त्वचा सख्त हो जाए तो खुदाई करें। भंडारण से पहले कंदों को छाया में सुखाएं।",
        },
      ]);
      setLoading(false);
    } else {
      setGeneralInfo(null);
      setWeekData([]);
      setLoading(false);
    }
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

      {/* General crop info */}
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
                      handleListen(
                        weekItem.descriptionEN,
                        weekItem.descriptionHI
                      )
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

      {/* Extra fertiliser info */}
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
