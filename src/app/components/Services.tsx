import React, { useState } from "react";

export default function Services() {
  const [hoveredService, setHoveredService] = useState("");

  const insuranceServices = [
    {
      name: "Trip Cancellation/Interruption",
      summary:
        "Reimburses non-refundable costs if you cancel or cut short your trip due to covered reasons",
    },
    {
      name: "Emergency Medical",
      summary:
        "Covers unexpected medical expenses and hospital costs while traveling",
    },
    {
      name: "Medical Evacuation",
      summary:
        "Arranges and pays for transportation to adequate medical facilities or back home if necessary",
    },
    {
      name: "Baggage Protection",
      summary: "Compensates for lost, stolen, or delayed luggage",
    },
    {
      name: "Travel Delay",
      summary:
        "Provides reimbursement for additional expenses due to significant flight delays",
    },
    {
      name: "24/7 Assistance",
      summary:
        "Provides round-the-clock support for emergencies and travel issues",
    },
    {
      name: "Rental Car Coverage",
      summary: "Protects against damage to your rental vehicle",
    },
    {
      name: "Adventure Sports",
      summary:
        "Covers injuries from high-risk activities not included in standard policies",
    },
    {
      name: "Natural Disaster Protection",
      summary:
        "Assists with expenses caused by severe weather or natural events",
    },
  ];

  return (
    <main className="flex flex-col md:font-nunito  min-h-fit-content">
      {/* ... existing code ... */}

      {/* <div className="w-full text-center text-slate-950 text-3xl ">
        Our Services
      </div> */}

      <div className="flex flex-wrap justify-center gap-4 mt-8 px-4 text-2xl ">
        {insuranceServices.map((service) => (
          <div
            key={service.name}
            className="relative"
            onMouseEnter={() => setHoveredService(service.name)}
            onMouseLeave={() => setHoveredService("")}
          >
            <p className=" text-white px-4 py-2 rounded cursor-pointer">
              {service.name}
            </p>
            {hoveredService === service.name && (
              <div className="absolute z-10 bg-white text-slate-950 p-2 rounded shadow-lg mt-1 w-64">
                {service.summary}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ... rest of your existing code ... */}
    </main>
  );
}

// "w-full text-center text-slate-950 text-3xl sm:text-5xl relative top-[17dvh] mt-12 min-[400px]:top-28 min-[400px]:mt-28 min-[493px]:top-[25dvw] min-[493px]:mt-[30dvw] sm:top-[22dvw] sm:mt-[25dvw] md:top-[20dvw] md:mt-[20dvw] lg:top-[17dvw] lg:mt-[17dvw] xl:top-[14dvw] xl:mt-[14dvw] 2xl:top-52 2xl:mt-52 min-[2000px]:top-72 min-[2000px]:mt-60 min-[2500px]:top-72 min-[2500px]:mt-72 min-[2750px]:top-80 min-[2750px]:mt-80 min-[3000px]:top-96 min-[3000px]:mt-96"
