import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="background h-screen ">
          <p className="font-[GreatVibes] md:text-4xl lg:text-7xl text-1xl font-semibold mb-4 text-black
           ">
            Wrap your world with new personalities
          </p>
        
          
          <div className="flex justify-center items-center"> 
          <div className=" flex justify-between items-center">
            <p>
              {" "}
              <a
                href="#"
                className=" font-[GreatVibes] mt-3  flex justify-center items-center lg:text-5xl text-2xl font-medium text-gray-900 dark:text-white pr-2 pl-4 mb-4"
              >
                <svg
                  className="mr-2 h-8"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.2696 13.126C25.1955 13.6364 24.8589 14.3299 24.4728 14.9328C23.9856 15.6936 23.2125 16.2264 22.3276 16.4114L18.43 17.2265C17.8035 17.3575 17.2355 17.6853 16.8089 18.1621L14.2533 21.0188C13.773 21.5556 13.4373 21.4276 13.4373 20.7075C13.4315 20.7342 12.1689 23.9903 15.5149 25.9202C16.8005 26.6618 18.6511 26.3953 19.9367 25.6538L26.7486 21.7247C29.2961 20.2553 31.0948 17.7695 31.6926 14.892C31.7163 14.7781 31.7345 14.6639 31.7542 14.5498L25.2696 13.126Z"
                    fill="url(#paint0_linear_11430_22515)"
                  />
                  <path
                    d="M23.5028 9.20133C24.7884 9.94288 25.3137 11.0469 25.3137 12.53C25.3137 12.7313 25.2979 12.9302 25.2694 13.1261L28.0141 14.3051L31.754 14.5499C32.2329 11.7784 31.2944 8.92561 29.612 6.65804C28.3459 4.9516 26.7167 3.47073 24.7581 2.34097C23.167 1.42325 21.5136 0.818599 19.8525 0.486816L17.9861 2.90382L17.3965 5.67918L23.5028 9.20133Z"
                    fill="url(#paint1_linear_11430_22515)"
                  />
                  <path
                    d="M1.5336 11.2352C1.5329 11.2373 1.53483 11.238 1.53556 11.2358C1.67958 10.8038 1.86018 10.3219 2.08564 9.80704C3.26334 7.11765 5.53286 5.32397 8.32492 4.40943C11.117 3.49491 14.1655 3.81547 16.7101 5.28323L17.3965 5.67913L19.8525 0.486761C12.041 -1.07341 4.05728 3.51588 1.54353 11.2051C1.54233 11.2087 1.53796 11.2216 1.5336 11.2352Z"
                    fill="url(#paint2_linear_11430_22515)"
                  />

                  <defs>
                    <linearGradient
                      id="paint0_linear_11430_22515"
                      x1="20.8102"
                      y1="23.9532"
                      x2="23.9577"
                      y2="12.9901"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1724C9" />
                      <stop offset={1} stopColor="#1C64F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_11430_22515"
                      x1="28.0593"
                      y1="10.5837"
                      x2="19.7797"
                      y2="2.33321"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1C64F2" />
                      <stop offset={1} stopColor="#0092FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_11430_22515"
                      x1="16.9145"
                      y1="5.2045"
                      x2="4.42432"
                      y2="5.99375"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0092FF" />
                      <stop offset={1} stopColor="#45B2FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_11430_22515"
                      x1="16.0698"
                      y1="28.846"
                      x2="27.2866"
                      y2="25.8192"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1C64F2" />
                      <stop offset={1} stopColor="#0092FF" />
                    </linearGradient>
                  </defs>
                </svg>
                Case Craze
              </a>
            </p>
          </div></div>
          
          <div className="font-[GreatVibes] text-md flex flex-col justify-center items-center pb-44 pl-4">
            <Link to="/image">
              <button className=" text-black text-3xl font-semibold bg-transparent rounded-lg px-3 py-2 border border-gray-600 mt-2">
                Shop Now{" "}
              </button>
            </Link>
          </div>
          </div>
          </div>
    </>
  );
}

export default App;
