import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e?.target?.value));
  };

  return (
    <div className="absolute top-0 w-full px-6 sm:px-8 py-3 bg-gradient-to-b from-black to-transparent z-20 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
      <img
        className="w-36 sm:w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="Netflix logo"
      />

      {user && (
        <div className="flex flex-wrap items-center justify-center space-x-3 sm:space-x-4">
          {showGptSearch && (
            <select
              className="bg-black text-white border border-gray-800 rounded px-4 py-2 text-sm appearance-none cursor-pointer hover:border-white focus:outline-none focus:ring-2 focus:ring-white"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-black text-white"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 text-white bg-purple-700 rounded-lg hover:bg-purple-600 transition-colors duration-200"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          <img
            alt="user-icon"
            src={user?.photoURL}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
          />

          <button
            className="text-white font-bold hover:underline text-sm sm:text-base"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
