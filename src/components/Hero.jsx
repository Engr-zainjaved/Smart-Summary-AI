import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Engr-zainjaved", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        <span className='orange_gradient '> Smart Summary AI:</span> for Advanced Article Summarization
      </h1>

      <h2 className='desc'>
        Transforms lengthy articles into clear and concise summaries
        Save Time, Enhance Focus, and Maximize Efficiency
        the Ultimate Solution for Clear and Concise Article Summaries
      </h2>
    </header>
  );
};

export default Hero;
