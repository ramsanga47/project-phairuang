import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);

  };

  useEffect(() => {

    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);




  return (
    
    <>
    
    <header className="bg-transparent bg-opacity-30 px-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <a href="/" title="" className="flex">
                        <img className="w-auto h-8" src="https://firebasestorage.googleapis.com/v0/b/phairuang-c34f4.appspot.com/o/Group%207logo.svg?alt=media&token=658bfd66-1c01-4dc3-8c31-1e637d20e239" alt="" />
                    </a>
                </div>

                <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                   
                    <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                    </svg>

                    
                    <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                  <Link to="/">
                    <a href="#" title="" className="text-base  transition-all duration-200 hover:text-opacity-80"> Home </a>
                  </Link>

                   <Link to="/about">
                  
                   <a href="#" title="" className="text-base  transition-all duration-200 hover:text-opacity-80"> About </a>

                   </Link>
                   <Link to="/contacts">
                  
                  <a href="#" title="" className="text-base  transition-all duration-200 hover:text-opacity-80"> Contact </a>

                  </Link>

                    
                </div>
                <div className="hidden lg:flex items-center justify-center px-5 py-2.5 text-base transition-all gap-5">
                <Link to="/profile">
                  {currentUser?(<img src={currentUser.avatar} alt="avatar" className="rounded-full h-7 w-7 object-cover"/>):("Sign in")}
                </Link>
                <Link to="/sign-up">
                <a href="#" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-black font-semibold text-white bg-[#B42AAE] rounded-full" role="button"> Sign up </a>

                </Link>

                </div>

               
            </div>
        </div>
    </header>

    {/* <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">A social media for learners</p>
                    <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Connect & learn from the experts</h1>
                    <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p>

                    <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                        Join for free
                        <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>

                    <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p>
                </div>

                <div>
                    <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                </div>
            </div>
        </div>
    </section> */}


    </>
  );
};

export default Header;