import React from "react";
// import { Nav } from "react-bootstrap";
import devsnestLogo from "./Components/Images/devsnestLogo.jpg";
import SideImage from "./Components/Images/sideimg.jpg";
import "./index.css";

function App_25Tailwind() {
  return (
    <div class="flex flex-col font-body ">
      <nav class="flex justify-between py-2.5 px-8 z-100 h-5.75 w-full sticky top-0 bg-white shadow-navbar">
        <img
          class="object-contain w-4.5 h-4.5 .r-4 "
          src={devsnestLogo}
          alt=""
        />
        <div class="flex justify-evenly w-49.194375 text-xl py-2 ml-5 text-nav-color">
          <button class="p-2 font-semibold cursor-pointer">Vision</button>
          <button class="p-2 font-semibold cursor-pointer">Curriculum</button>
          <button class="p-2 font-semibold cursor-pointer">Pricing</button>
          <button class="p-2 font-semibold cursor-pointer">About</button>
          <button class="p-2 font-semibold cursor-pointer">Join Now</button>
          <button class="p-2 font-semibold cursor-pointer">FAQs</button>
          <button class="p-2 font-semibold cursor-pointer">Login</button>
        </div>
      </nav>
      <div class="flex">
        <img
          class="object-scale-down h-52.189375 w-37.5"
          src={SideImage}
          alt=""
        />
        <div class="flex justify-center items-center w-full tracking-wider	">
          <div class="flex flex-col self-center pt-7.8125 w-43.75 h-24.020625">
            <p class="text-2.625 mb-5 font-black">
              Education which makes you financially{" "}
              <span class="text-independent">independent.</span>
            </p>
            <p class="text-xl	pr-44 font-semibold leading-7">
              A mentorship program designed to help you get your dream job. It
              evolves as per your needs to mould you into a kickass developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App_25Tailwind;
//Devsnest's landing page using Tailwind.
