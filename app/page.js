"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillGoogleCircle
} from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 flex justify-center dark:bg-black bg-[radial-gradient(#e5e7eb_0px,transparent_1px)] [background-size:50px_50px]">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">K. Y.</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                ></BsFillMoonStarsFill>
              </li>
              <li>
                <button
                  className="bg-gradient-to-r from-purple-400 to-purple-200 text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250"
                  href="#"
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-6xl text-left py-2 font-medium dark:text-white">
              Hey, I'm Kevin
            </h2>
            <h3 className="text-4xl pt-1 pb-6 text-left bg-gradient-to-r from-purple-600 to-purple-200 bg-clip-text text-transparent font-medium">
              Developer and photographer.
            </h3>

            <div className="flex justify-left gap-5">
              <button className="text-2xl py-6 flex justify-left gap-5 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 dark:text-white">
                <div className="flex justify-normal gap-2 bg-gray-700 rounded-3xl px-5 py-3">
                  <AiFillLinkedin></AiFillLinkedin>
                  <h1 className="text-sm">LinkedIn</h1>
                </div>
              </button>
              <button className="text-2xl py-6 flex justify-left gap-5 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 dark:text-white">
                <div className="flex justify-normal gap-2 bg-gray-700 rounded-3xl px-5 py-3">
                  <AiFillGithub></AiFillGithub>
                  <h1 className="text-sm">Github</h1>
                </div>
              </button>
              <button className="text-2xl py-6 flex justify-left gap-5 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 dark:text-white rounded-full">
                <div className="flex justify-normal gap-2 bg-gray-700 rounded-3xl px-5 py-3">
                  <AiFillGoogleCircle></AiFillGoogleCircle>
                  <h1 className="text-sm">Gmail</h1>
                </div>
              </button>
            </div>
            <p className="text-left py-3 leading-8 text-gray-800 max-w-xl dark:text-white">
              Hi I am Kevin, a software developer from Canada. I have 2 years of
              experience in Java automation, Serenity, and Selenium for
              microservice, UI, and SQL testing. Let's work together!
            </p>
          </div>
        </section>

        <section className="min-h-screen">
          <div>
            <hr className="h-px my-8 bg-white border-0 dark:bg-white"></hr>
          </div>
        </section>
      </main>
    </div>
  );
}
