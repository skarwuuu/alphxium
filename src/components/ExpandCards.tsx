"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { div } from "framer-motion/client";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleCopy = (title: string) => {
    navigator.clipboard.writeText(title);
  };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] select-none">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] px-12 py-14 h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div className="flex flex-col gap-10">
                <div className="flex justify-between items-start">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-space text-xl font-bold text-dark dark:text-light text-center md:text-left"
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                </div>
                <div className="relative">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-light text-justify font-space text-xs md:text-lg lg:text-lg h-40 md:h-fit flex flex-col items-start gap-4 overflow-auto dark:text-light-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
                <div className="flex flex-row gap-10 justify-center items-center">
                  <button className="px-4 py-3 text-md rounded-lg font-space font-bold bg-green-600 text-white hover:text-green-600 hover:bg-white duration-200">Accept<span className="[word-spacing:0.1rem]"> <FontAwesomeIcon icon={faCheckCircle} /></span></button>
                  <button className="px-4 py-3 text-md rounded-lg font-space font-bold bg-red-500 text-white hover:text-red-600 hover:bg-white duration-200">Reject<span className="[word-spacing:0.1rem]"> <FontAwesomeIcon icon={faCircleXmark} /></span></button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-5">
        {cards.map((card) => (
          <div className="flex flex-row justify-between items-center">
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="select-none px-4 py-6 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-space text-xl text-dark dark:text-light text-center md:text-left break-words"
                >
                  {card.title}
                </motion.h3>
              </div>
            </motion.div>
            <span className="font-space text-2xl font-bold text-dark dark:text-light cursor-pointer hover:-translate-y-1 duration-200" onClick={() => handleCopy(card.title)}>
              <FontAwesomeIcon icon={faCopy} />
            </span>
          </div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "mjUACBPTAjS5iefvXP2GJCkAowPbcU3WJf",
    content: () => {
      return (
        <p>
          Requested 10 BTC
        </p>
      );
    },
  },
  {
    title: "mgqeWgXNDEVr3hVjgAjuVtvNjVwEz8TULJ",
    content: () => {
      return (
        <p>
          Requested 10 BTC
        </p>
      );
    },
  },

  {
    title: "mgwb95N5SFZ8p7c8it1kwC8kHnrq3gxyQS",
    content: () => {
      return (
        <p>
          Requested 10 BTC
        </p>
      );
    },
  },
  {
    title: "muj3ZofFkZPGPg8gyRQeNrFwS1gTgsQTj5",
    content: () => {
      return (
        <p>
          Requested 10 BTC
        </p>
      );
    },
  },
  {
    title: "mo2AsiSjuEoqvzMcZwUZDyWCzSUrCiqWHr",
    content: () => {
      return (
        <p>
          Requested 10 BTC
        </p>
      );
    },
  },
];