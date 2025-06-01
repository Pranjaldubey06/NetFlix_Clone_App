const Hero = () => {
  return (
    <div
      className="w-full h-[90vh] relative bg-cover bg-center"
      style={{
        backgroundImage: `url("https://static.toiimg.com/photo/55067145.cms")`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 bg-opacity-60"></div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-10 text-white h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-xl sm:text-2xl mb-6">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="text-md sm:text-lg mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full max-w-xl">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 p-3 rounded-sm text-white text-sm outline-none border-1 border-amber-50 bg-transparent"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm font-semibold rounded-sm">
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
