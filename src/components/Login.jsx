import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { HOME_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    const msg = checkValidData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrorMessage(msg);

    if (msg) return;
    //Sign In/ Sign UP Logic
    if (!isSignInForm) {
      //Sign Up Form
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Form
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          src={HOME_BG}
          alt="Netflix logo"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 max-w-md space-y-4 rounded bg-black/60 p-8 backdrop-blur-sm"
        >
          <h1 className="text-3xl font-bold text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full rounded bg-[#333] p-3 text-white placeholder-gray-300 outline-none"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full rounded bg-[#333] p-3 text-white placeholder-gray-300 outline-none"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full rounded bg-[#333] p-3 text-white placeholder-gray-300 outline-none"
          />
          <p className="text-red-500 font-bold text-base py-2">
            {errorMessage}
          </p>
          <button
            className="w-full rounded bg-red-600 p-3 font-semibold text-white hover:bg-red-700"
            onClick={handleButtonClick}
          >
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
