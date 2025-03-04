import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <h1 className="text-3xl font-extrabold orange_gradient">
          Summarize Articles
        </h1>

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Error-Harry", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI</span>
      </h1>
      <h2 className="desc">
        Enhance your reading with Summize, a free, open-source tool that
        condenses long articles into easy-to-read summaries.
      </h2>
    </header>
  );
};

export default Hero;
