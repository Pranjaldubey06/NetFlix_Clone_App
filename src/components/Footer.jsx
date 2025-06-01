import React from "react";
// import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 p-8 text-sm">
      <div className="max-w-6xl mx-auto">
        <p className="mb-6">
          Questions? Call{" "}
          <a
            href="tel:000-800-919-1743"
            className="underline text-white hover:text-gray-300"
          >
            000-800-919-1743
          </a>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {[
            "FAQ",
            "Help Centre",
            "Account",
            "Media Centre",
            "Investor Relations",
            "Jobs",
            "Ways to Watch",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
            "Contact Us",
            "Speed Test",
            "Legal Notices",
            "Only on Netflix",
          ].map((item, index) => (
            <a href="#" key={index} className="hover:underline">
              {item}
            </a>
          ))}
        </div>

        {/* <div className="mb-6">
          <button className="border border-gray-500 px-4 py-2 rounded flex items-center gap-2">
            <GlobeAltIcon className="w-5 h-5" />
            English
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div> */}

        <p className="mb-2">Netflix India</p>
        <p className="text-xs text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-500 underline">
            Learn more.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
