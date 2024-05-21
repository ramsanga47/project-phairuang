import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import Header from "../components/Header";

const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [fromData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...fromData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fromData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success == false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <section class="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div class="absolute inset-0">
          <img
            class="object-cover w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/2/woman-working-laptop.jpg"
            alt=""
          />
        </div>
        <div class="absolute inset-0 bg-gray-900/20 text-white">
          <Header />
        </div>

        <div class="relative max-w-lg px-4 mx-auto sm:px-0">
          <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-4 py-6 sm:px-8 sm:py-7">
              <div class="text-center">
                <h2 class="text-3xl font-bold text-gray-900">
                  Create an account
                </h2>
                <p class="mt-2 text-base text-gray-600">
                  Already joined?{" "}
                  <Link to="/sign-in">
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                  >
                    Sign in now
                  </a>
                  </Link>
                </p>
              </div>

              <form  class="mt-8" onSubmit={handleSubmit}>
                <div class="space-y-5">
                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      First & Last name{" "}
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        name=""
                        id="username"
                        placeholder="Enter your full name"
                        onChange={handleChange}
                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="email"
                        onChange={handleChange}

                        name=""
                        id="email"
                        placeholder="Enter email to get started"
                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="password"
                        name=""
                        id="password"
                        onChange={handleChange}
                        placeholder="Enter your password"
                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Sign up
                    </button>
                  </div>

                  <div>
                   <OAuth/>
                  </div>
                </div>
              </form>

              <p class="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
                This site is protected by Google{" "}
                <a
                  href="#"
                  title=""
                  class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Privacy Policy
                </a>{" "}
                &
                <a
                  href="#"
                  title=""
                  class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Terms of Service
                </a>
              </p>
              {error && <p className="text-red-500 m">{error}</p>}
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default SignUp;
