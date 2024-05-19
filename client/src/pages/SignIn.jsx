import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFaliure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import Header from "../components/Header";

const SignIn = () => {
  const [fromData, setFormData] = useState({});

  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...fromData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fromData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        dispatch(signInFaliure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFaliure(error.message));
    }
  };

  return (
    <>
      <section class="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div class="absolute inset-0">
          <img
            class="object-cover w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/2/man-eating-noodles.jpg"
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
                <h2 class="text-3xl font-bold text-gray-900">Welcome back</h2>
                <p class="mt-2 text-base text-gray-600">
                  Don’t have one?{" "}
                  <Link to={"/sign-up"}>
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                  >
                    Create a free account
                  </a>
                  </Link>
                </p>
              </div>

              <form action="#"  class="mt-8" onSubmit={handleSubmit}>
                <div class="space-y-5">
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
                    <div class="flex items-center justify-between">
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Password{" "}
                      </label>

                      <a
                        href="#"
                        title=""
                        class="text-sm font-medium transition-all duration-200 text-rose-500 hover:text-rose-600 focus:text-rose-600 hover:underline"
                      >
                        {" "}
                        Forgot password?{" "}
                      </a>
                    </div>
                    <div class="mt-2.5">
                      <input
                        
                        type="password"
                        name=""
                        onChange={handleChange}
                        id="password"
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
                      Log in
                    </button>
                  </div>

                  <div>
                    <OAuth />
                  </div>
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
                  {error && <p className="text-red-500 m">*{error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <div classNameName="p-3 max-w-lg mx-auto">
      <h1 classNameName="text-3xl text-center font-semibold my-7">Welcome back</h1>
      <form classNameName="flex flex-col gap-4" onSubmit={handleSubmit}>
        
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg "
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg "
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? "loading...":"Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to={"/sign-up"}>
        <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 m">{error}</p>}
    </div> */}
    </>
  );
};

export default SignIn;
