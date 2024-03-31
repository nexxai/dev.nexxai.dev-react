"use client";

import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { Navigation } from "../UI/Navigation";

Page.propTypes = {
  visible: PropTypes.string,
  setVisible: PropTypes.func,
};

export default function Page() {
  const items = [
    ["About", "/"],
    ["Projects", "/projects"],
    ["CV", "/cv"],
    ["Uses", "/uses"],
  ];

  function navigate() {
    //
  }

  return (
    <div className="flex w-screen items-center px-8  tracking-wide">
      <div className="mx-auto shrink-0 overflow-hidden rounded-full">
        <Navigation
          as="nav"
          className="relative rounded-full border border-white/10 bg-white/5 p-2"
        >
          {({ ready, size, position, duration }) => (
            <div
              style={{
                "--size": size,
                "--position": position,
                "--duration": duration,
              }}
            >
              <div
                className={clsx(
                  { hidden: !ready },
                  "absolute bottom-0 h-1/2 w-[var(--size)] translate-x-[var(--position)] bg-white/75 blur-xl transition-[width,transform] duration-[--duration]",
                )}
              ></div>

              <div className="absolute inset-0 rounded-full bg-zinc-800"></div>

              <div className="relative">
                <div
                  className={clsx(
                    { hidden: !ready },
                    "absolute inset-y-0 h-full w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white/10 transition-[width,transform] duration-[--duration]",
                  )}
                ></div>
                <div
                  className={clsx(
                    { hidden: !ready },
                    "absolute bottom-0 h-1/3 w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white opacity-20 blur-md transition-[width,transform] duration-[--duration]",
                  )}
                ></div>

                <Navigation.List
                  as="ul"
                  className="relative flex items-center gap-3"
                >
                  {items.map((item, index) => (
                    <Navigation.Item key={index} as="li" onActivated={navigate}>
                      {({ setActive, isActive }) => (
                        <Link
                          to={item[1]}
                          className={clsx(
                            [
                              isActive
                                ? "text-white/75 text-shadow-sm"
                                : "text-white/60 hover:text-white/75",
                            ],
                            "inline-block px-4 py-1.5 text-sm transition-[text-shadow,color] duration-300",
                          )}
                          onClick={setActive}
                        >
                          {item[0]}
                        </Link>
                      )}
                    </Navigation.Item>
                  ))}
                </Navigation.List>
              </div>
            </div>
          )}
        </Navigation>
      </div>
    </div>
  );
}
