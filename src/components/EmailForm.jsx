import React from "react";

const EmailForm = () => {
  return (
    <div className="bg-black text-white text-center px-4 py-10">
      <h3 className="text-lg md:text-xl max-w-2xl mx-auto">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>

      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Email address"
          className="w-full sm:w-2/3 p-3 rounded-sm text-white text-sm outline-none border border-gray-400"
        />
        <button className="bg-red-600 w-full sm:w-auto px-6 py-3 rounded text-white font-semibold hover:bg-red-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
