import React, { useState } from "react";

const GovSchems = () => {
  const [lang, setLang] = useState("en");

  const headings = {
    en: {
      title: "Government Farmer Welfare Schemes",
      pmkisan: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      pmkmy: "Pradhan Mantri Kisan Maan Dhan Yojana (PM-KMY)",
      listenHindi: "🔊 Listen in Hindi",
    },
    hi: {
      title: "सरकारी किसान कल्याण योजनाएँ",
      pmkisan: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)",
      pmkmy: "प्रधानमंत्री किसान मान धन योजना (PM-KMY)",
      listenHindi: "🔊 हिंदी में सुनें",
    },
  };

  const speakHindi = (text) => {
    // Stop any current speech
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "hi-IN";
    window.speechSynthesis.speak(utter);
  };

  // actual Hindi content to speak:
  const pmkisanHindi = `
इस योजना का उद्देश्य सभी किसानों की आय बढ़ाना है जिनके पास कृषि योग्य भूमि है।
यह पात्र लाभार्थियों को ₹6000 प्रति वर्ष प्रत्यक्ष लाभ अंतरण से प्रदान करती है।
राज्य pmkisan.gov.in पर विवरण अपलोड करते हैं और राष्ट्रीय स्तर पर समिति निगरानी करती है।
`;

  const pmkmyHindi = `
पीएम-केएमवाई 18-40 वर्ष आयु के छोटे व सीमांत किसानों के लिए स्वैच्छिक अंशदायी पेंशन योजना है।
60 वर्ष के बाद ₹3000/माह की न्यूनतम पेंशन और जीवनसाथी को पारिवारिक पेंशन प्रदान की जाती है।
एलआईसी पेंशन फंड मैनेजर है। किसान सीएससी के माध्यम से नामांकन कर सकते हैं और सरकार 50% योगदान वहन करती है।
`;

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <section className="w-full bg-green-600 text-white py-10 px-6 text-center shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          {headings[lang].title}
        </h1>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-2 rounded-xl text-sm ${
              lang === "en" ? "bg-white text-green-700" : "bg-green-500 text-white"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang("hi")}
            className={`px-4 py-2 rounded-xl text-sm ${
              lang === "hi" ? "bg-white text-green-700" : "bg-green-500 text-white"
            }`}
          >
            हिन्दी
          </button>
        </div>
      </section>

      <div className="max-w-5xl w-full px-6 mt-10 space-y-12">
        {/* PM-KISAN Section */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6 border border-green-100">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
              🌱 {headings[lang].pmkisan}
            </h2>
            <button
              onClick={() => speakHindi(pmkisanHindi)}
              className="text-green-600 text-sm hover:underline"
            >
              {headings[lang].listenHindi}
            </button>
          </div>
          <div className="mt-4 text-gray-700 leading-relaxed space-y-3 text-sm md:text-base">
            {lang === "en" ? (
              <>
                <p>
                  The objective of the scheme is to augment the income of all
                  farmers who own cultivable landholding, subject to certain
                  exclusions. Launched on 24th February 2019, it supplements the
                  financial needs of Small and Marginal Farmers to cover
                  agriculture and household expenses.
                </p>
                <p>
                  Effective from 1st December 2018, the scheme provides Rs.6000
                  per year in three instalments of Rs.2000 every four months via
                  Direct Benefit Transfer (DBT) to eligible beneficiaries.
                </p>
                <p>
                  States/UTs upload farmer details on{" "}
                  <a
                    href="https://pmkisan.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 underline"
                  >
                    pmkisan.gov.in
                  </a>{" "}
                  for benefit transfer. A national level review committee
                  monitors implementation.
                </p>
              </>
            ) : (
              <>
                <p>
                  इस योजना का उद्देश्य सभी किसानों की आय बढ़ाना है जिनके पास
                  कृषि योग्य भूमि है (कुछ अपवादों को छोड़कर)। यह 24 फरवरी 2019
                  को शुरू की गई और इसका लक्ष्य छोटे और सीमांत किसानों को
                  कृषि-गृहस्थी व्यय हेतु वित्तीय सहायता देना है।
                </p>
                <p>
                  1 दिसम्बर 2018 से लागू, यह योजना पात्र लाभार्थियों को
                  ₹6000/वर्ष (₹2000 हर चार महीने) प्रत्यक्ष लाभ अंतरण के माध्यम
                  से प्रदान करती है।
                </p>
                <p>
                  राज्य{" "}
                  <a
                    href="https://pmkisan.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 underline"
                  >
                    pmkisan.gov.in
                  </a>{" "}
                  पर विवरण अपलोड करते हैं ताकि लाभ हस्तांतरित हो सके। राष्ट्रीय
                  स्तर पर एक समीक्षा समिति इसकी निगरानी करती है।
                </p>
              </>
            )}
          </div>
        </div>

        {/* PM-KMY Section */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6 border border-green-100">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
              💰 {headings[lang].pmkmy}
            </h2>
            <button
              onClick={() => speakHindi(pmkmyHindi)}
              className="text-green-600 text-sm hover:underline"
            >
              {headings[lang].listenHindi}
            </button>
          </div>
          <div className="mt-4 text-gray-700 leading-relaxed space-y-3 text-sm md:text-base">
            {lang === "en" ? (
              <>
                <p>
                  PM-KMY is a voluntary, contributory pension scheme for small
                  and marginal farmers aged 18-40 years. It provides a minimum
                  assured pension of Rs.3000/month after 60 years of age and
                  family pension to spouse.
                </p>
                <p>
                  LIC is the Pension Fund Manager. Farmers can enroll through
                  State Nodal Officers or Common Service Centres (CSC) at Rs.30
                  per enrolment. Government shares 50% of the contribution.
                </p>
                <p>
                  Farmers may allow their PM-KISAN benefit to directly fund this
                  pension. Full operational guidelines are issued by the
                  Ministry of Agriculture & Farmers’ Welfare.
                </p>
              </>
            ) : (
              <>
                <p>
                  पीएम-केएमवाई 18-40 वर्ष आयु के छोटे व सीमांत किसानों के लिए
                  स्वैच्छिक अंशदायी पेंशन योजना है। 60 वर्ष के बाद ₹3000/माह की
                  न्यूनतम पेंशन और जीवनसाथी को पारिवारिक पेंशन प्रदान की जाती है।
                </p>
                <p>
                  एलआईसी पेंशन फंड मैनेजर है। किसान राज्य नोडल अधिकारी या
                  कॉमन सर्विस सेंटर (सीएससी) के माध्यम से ₹30 में नामांकन कर
                  सकते हैं। सरकार 50% योगदान वहन करती है।
                </p>
                <p>
                  किसान अपनी पीएम-किसान लाभ राशि से सीधे इस पेंशन में योगदान
                  दे सकते हैं। कृषि एवं किसान कल्याण मंत्रालय द्वारा सभी
                  दिशानिर्देश जारी किए जाते हैं।
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 w-full bg-green-600 text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Farmers Portal — Empowering Agriculture
      </footer>
    </div>
  );
};

export default GovSchems;
