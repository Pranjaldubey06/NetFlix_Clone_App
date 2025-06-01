import React from "react";

const EmailForm = () => {
  return (
    <div className="bg-black text-white text-center py-10">
      <h3 className="text-md">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="mt-4 flex justify-center gap-2 flex-col md:flex-row items-center">
        <input
          type="email"
          placeholder="Email address"
          className="flex w-[500px] p-3 rounded-sm text-white text-sm outline-none border-1 border-amber-50 bg-transparent"
        />
        <button className="bg-red-600 px-6 py-2 rounded hover:bg-red-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
