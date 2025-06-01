import React from "react";

const reasons = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: "https://cdn-icons-png.flaticon.com/512/7916/7916039.png",
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favourites easily and always have something to watch.",
    icon: "https://www.shutterstock.com/image-vector/neon-arrow-down-sign-pink-260nw-2483166975.jpg",
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: "https://image.shutterstock.com/image-vector/glowing-neon-line-telescope-icon-260nw-2620759597.jpg",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: "data:image/png;base64,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",
  },
];

const ReasonsToJoin = () => {
  return (
    <div className="bg-black text-white px-6 py-12 md:px-16">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">
        More reasons to join
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-2xl p-6 flex flex-col justify-between min-h-[240px] relative overflow-hidden"
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-sm">{reason.description}</p>
            </div>
            <img
              src={reason.icon}
              alt={reason.title}
              className="w-12 h-12 mt-6 self-end"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsToJoin;
