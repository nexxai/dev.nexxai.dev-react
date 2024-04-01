import clsx from "clsx";
import { ScrollObserver } from "../UI/ScrollObserver";

export default function ColorText() {
  return (
    <div className="h-[150vh] flex flex-col justify-between">
      <ScrollObserver className="relative mx-auto max-w-4xl">
        <ScrollObserver.TriggerGroup className="max-w-4xl space-y-4 text-2xl md:text-3xl">
          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span
                  className={clsx(
                    { "opacity-0": !isActive },
                    "absolute inset-0 text-zinc-200 transition ",
                  )}
                >
                  According to&nbsp;
                  <span className="text-transparent transition bg-gradient-to-r from-red-300 to-rose-400 bg-clip-text">
                    my friends and family
                  </span>
                  ,
                </span>

                <span
                  className={clsx(
                    { "opacity-0": isActive },
                    "relative text-zinc-200/20 transition",
                  )}
                >
                  According to my friends and family,
                </span>
              </>
            )}
          </ScrollObserver.Trigger>
          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span
                  className={clsx(
                    { "opacity-0": !isActive },
                    "absolute inset-0 text-zinc-200 text-right transition ",
                  )}
                >
                  <span>I am </span>
                  <span className="text-transparent transition bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text">
                    allergic
                  </span>
                  <span> to free time</span>
                </span>

                <span
                  className={clsx(
                    { "opacity-0": isActive },
                    "absolute text-right right-0 text-zinc-200/20 text-right transition",
                  )}
                >
                  I am allergic to free time
                </span>
                <span className="relative opacity-0">
                  I am allergic to free time
                </span>
              </>
            )}
          </ScrollObserver.Trigger>
          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span
                  className={clsx(
                    { "opacity-0": !isActive },
                    "absolute inset-0 text-zinc-200 transition ",
                  )}
                >
                  <span>so on </span>
                  <span className="text-transparent transition bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text">
                    any given day
                  </span>
                  <span> you might find me</span>
                </span>

                <span
                  className={clsx(
                    { "opacity-0": isActive },
                    "relative text-zinc-200/20 transition",
                  )}
                >
                  so on any given day you might find me
                </span>
              </>
            )}
          </ScrollObserver.Trigger>
          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span
                  className={clsx(
                    { "opacity-0": !isActive },
                    "absolute inset-0 text-zinc-200 text-right transition ",
                  )}
                >
                  <span className="text-transparent transition bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text">
                    hacking on an idea
                  </span>
                  <span> for an app,</span>
                </span>

                <span
                  className={clsx(
                    { "opacity-0": isActive },
                    "absolute text-right right-0  text-zinc-200/20 transition",
                  )}
                >
                  hacking on an idea for an app,
                </span>
                <span className="relative transition opacity-0">
                  find me hacking on an idea for an app,
                </span>
              </>
            )}
          </ScrollObserver.Trigger>
          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span
                  className={clsx(
                    { "opacity-0": !isActive },
                    "absolute inset-0 text-zinc-200 transition ",
                  )}
                >
                  <span>writing a </span>
                  <span className="text-transparent transition bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text">
                    piece of music
                  </span>
                  <span>,</span>
                </span>

                <span
                  className={clsx(
                    { "opacity-0": isActive },
                    "relative text-zinc-200/20 transition",
                  )}
                >
                  writing a piece of music,
                </span>
              </>
            )}
          </ScrollObserver.Trigger>
          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span
                  className={clsx(
                    { "opacity-0": !isActive },
                    "absolute inset-0 text-zinc-200 text-right transition ",
                  )}
                >
                  <span className="text-transparent transition bg-gradient-to-r from-pink-400 to-fuchsia-600 bg-clip-text">
                    listening to
                  </span>
                  <span> a great audiobook,</span>
                </span>

                <span
                  className={clsx(
                    { "opacity-0": isActive },
                    "absolute text-right right-0 text-zinc-200/20 transition",
                  )}
                >
                  listening to a great audiobook,
                </span>
                <span className="relative opacity-0 text-right text-zinc-200/20 transition">
                  listening to a great audiobook,
                </span>
              </>
            )}
          </ScrollObserver.Trigger>
          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span
                  className={clsx(
                    { "opacity-0": !isActive },
                    "absolute inset-0 text-zinc-200 transition ",
                  )}
                >
                  <span>or finding my breath in </span>
                  <span className="text-transparent transition bg-gradient-to-r from-yellow-300 to-rose-500 bg-clip-text">
                    pigeon pose
                  </span>
                </span>

                <span
                  className={clsx(
                    { "opacity-0": isActive },
                    "relative text-zinc-200/20 transition",
                  )}
                >
                  or finding my breath in pigeon pose
                </span>
              </>
            )}
          </ScrollObserver.Trigger>
        </ScrollObserver.TriggerGroup>
      </ScrollObserver>
    </div>
  );
}
