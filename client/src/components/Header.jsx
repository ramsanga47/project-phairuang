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
                        <img className="w-auto h-8" src="/images/logo.png" alt="" />
                    </a>
                </div>

                <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                   
                    <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                    </svg>

                    
                    <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                  <Link to="/">
                    <div href="#" title="" className="text-base  transition-all duration-200 hover:text-opacity-80"> Home </div>
                  </Link>

                   <Link to="/about">
                  
                   <div href="#" title="" className="text-base  transition-all duration-200 hover:text-opacity-80"> About </div>

                   </Link>
                   <Link to="/contacts">
                  
                  <div href="#" title="" className="text-base  transition-all duration-200 hover:text-opacity-80"> Contact </div>

                  </Link>

                    
                </div>
                <div className="hidden lg:flex items-center justify-center px-5 py-2.5 text-base transition-all gap-5">
                <Link to="/profile">
                  {currentUser?(<img src={currentUser.avatar} alt="avatar" className="rounded-full h-7 w-7 object-cover"/>):("Sign in")}
                </Link>
                <Link to="/sign-up">
                <div href="#" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-black font-semibold text-white bg-[#B42AAE] rounded-full" role="button"> Sign up </div>

                </Link>

                </div>

               
            </div>
        </div>
    </header>

    


    </>
  );
};

export default Header;