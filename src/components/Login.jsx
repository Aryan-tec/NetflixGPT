import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
          alt="Netflix logo"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <form className="w-11/12 max-w-md space-y-4 rounded bg-black/60 p-8 backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded bg-[#333] p-3 text-white placeholder-gray-300 outline-none"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full rounded bg-[#333] p-3 text-white placeholder-gray-300 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded bg-[#333] p-3 text-white placeholder-gray-300 outline-none"
          />
          <button className="w-full rounded bg-red-600 p-3 font-semibold text-white hover:bg-red-700">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>
          </div>
          <p
            className="text-sm text-gray-300 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up now."
              : "Already Registered? Sign In now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
