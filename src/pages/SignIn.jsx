import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute w-full h-full object-cover"
        src="https://static.toiimg.com/photo/55067145.cms"
        alt="Background"
      />
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
          <h1 className="text-red-600 text-5xl font-bold font-stretch-50">NETFLIX</h1>
        </div>

        <div className="flex justify-center items-center h-screen">
          <div className="bg-black/75 p-12 rounded-md w-[90%] max-w-md text-white z-10">
            <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Email or mobile number"
                className="p-3 bg-[#333] rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 bg-[#333] rounded"
              />
              <button className="bg-red-600 py-3 rounded hover:bg-red-700 transition">
                Sign In
              </button>
              <div className="text-center text-gray-400">OR</div>
              <button className="bg-[#333] py-3 rounded hover:bg-[#444] transition">
                Use a sign-in code
              </button>
              <Link
                to="/forgot"
                className="text-sm text-blue-500 hover:underline text-center"
              >
                Forgot password?
              </Link>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="text-sm">
                  Remember me
                </label>
              </div>
              <p className="text-sm text-gray-400">
                New to Netflix?{" "}
                <Link to="/" className="text-white hover:underline">
                  Sign up now.
                </Link>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                This page is protected by Google reCAPTCHA to ensure you’re not
                a bot. <Link className="text-blue-500">Learn more.</Link>
              </p>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
