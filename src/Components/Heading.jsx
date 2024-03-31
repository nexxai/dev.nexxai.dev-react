"use client";

import PropTypes from "prop-types";

Heading.propTypes = {
  title: PropTypes.string,
};

export default function Heading({ title }) {
  return (
    <div className="mx-auto mt-16">
      <div className="relative w-screen py-24 text-center">
        <div className="absolute left-0 flex justify-center w-screen top-24">
          <div className="blur-3xl text-white rounded-full w-[25rem] h-[12rem] bg-white/20 opacity-60"></div>
        </div>
        <h1 className="mt-16 text-5xl font-bold text-transparent md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-b from-white/50 to-white font-heading">
          {title}
        </h1>
      </div>
    </div>
  );
}
