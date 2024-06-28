"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillGoogleCircle
} from "react-icons/ai";
import { useState } from "react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  FaNode,
  FaJava,
  FaHtml5,
  FaCss3,
  FaPython,
  FaReact,
  FaGit,
  FaLinux,
  FaFigma
} from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiJunit5,
  SiIntellijidea,
  SiEclipseide,
  SiPostman,
  SiGradle,
  SiJirasoftware,
  SiApachemaven
} from "react-icons/si";
import { TbBrandCpp, TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="bg-black bg-[radial-gradient(#e5e7eb_0px,transparent_1px)] [background-size:50px_50px] min-h-screen">
      <div
        className={`flex items-center justify-center ${darkMode ? "dark" : ""}`}
      >
        <main>
          <section>
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl dark:text-white">K. Y.</h1>
              <ul className="flex items-center">
                <li>
                  <a
                    className="bg-gradient-to-r from-purple-400 to-purple-400 text-white px-4 py-2 rounded-md ml-8"
                    href="/Resume (Kevin Yang).pdf"
                    target="blank"
                  >
                    Resume
                  </a>
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

              <div className="flex justify-left gap-4">
                <a
                  href="https://www.linkedin.com/in/kevin-yang-23102a222/"
                  target="blank"
                >
                  <button className="text-2xl py-6 gap-5 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 dark:text-white">
                    <div className="flex gap-2 bg-gray-700 rounded-3xl px-5 py-3">
                      <AiFillLinkedin></AiFillLinkedin>
                      <h1 className="text-sm">LinkedIn</h1>
                    </div>
                  </button>
                </a>

                <a href="https://github.com/kevyang267" target="blank">
                  <button className="text-2xl py-6 flex justify-left gap-5 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 dark:text-white">
                    <div className="flex justify-normal gap-2 bg-gray-700 rounded-3xl px-5 py-3">
                      <AiFillGithub></AiFillGithub>
                      <h1 className="text-sm">Github</h1>
                    </div>
                  </button>
                </a>
                <button className="text-2xl py-6 flex justify-left gap-5 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 dark:text-white rounded-full">
                  <div className="flex justify-normal gap-2 bg-gray-700 rounded-3xl px-5 py-3">
                    <AiFillGoogleCircle></AiFillGoogleCircle>
                    <h1 className="text-sm">Gmail</h1>
                  </div>
                </button>
              </div>
              <p className="text-left pt-3 leading-8 text-gray-800 max-w-xl dark:text-white">
                Hi I am Kevin, an aspiring software developer and photographer
                from Canada. I have almost 2 years of experience in Java
                automation, Serenity, and Selenium for REST microservice, UI,
                and SQL testing. Let's work together!
              </p>
              <p className="text-left pt-3 leading-8 text-gray-800 max-w-xl dark:text-white font-bold">
                Please note this website is being revamped with modern
                technologies that I am still actively learning. In the meantime,
                please take a look at my Git repository for some of my projects!
                Thank you for your patience!
              </p>
            </div>
          </section>

          <section>
            <div className="px-10">
              <hr className="h-px bg-white border-0 dark:bg-gray-600"></hr>
              <h1 className="text-white font-medium text-3xl py-6">Ed/Exp</h1>

              <ul>
                <li>
                  <h2 className="bg-gradient-to-r from-purple-600 to-white bg-clip-text text-transparent text-3xl text-medium">
                    University of Western Ontario
                  </h2>
                  <p className="text-white pt-2">
                    - Honors Specialization in Computer Science + Minor in
                    Software Engineering
                  </p>
                  <p className="text-white pt-2">
                    - 3.7 GPA and Dean's Honors List{" "}
                  </p>
                </li>

                <li>
                  <h2 className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent text-3xl text-medium pt-6">
                    Automation Analyst Engineer @ J.D. Power
                  </h2>
                  <p className="text-white pt-2">
                    - Automated over 35 REST microservices, 5 REST pages, 2
                    MySQL databases
                  </p>
                  <p className="text-white pt-2">
                    - Awarded Star QA Intern for outstanding contributions
                  </p>
                  <p className="text-white pt-2">
                    - Java, Serenity, Cucumber, JacksonXML, Gradle, TypeScript,
                    PlayWright
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="px-10 pt-10">
              <hr className="h-px bg-white border-0 dark:bg-gray-600"></hr>
              <h1 className="text-white font-medium text-3xl py-6">Tech</h1>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1">
              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <RiNextjsFill className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Next.js
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <FaNode className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Node.js
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiTypescript className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    TypeScript
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <FaJava className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Java
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <TbBrandCpp className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    C++
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiMysql className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    MySQL
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <RiTailwindCssFill className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    TailWind
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiPostgresql className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Postgres
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <FaHtml5 className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    HTML
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <FaCss3 className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    CSS
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <FaPython className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Python
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <TbApi className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    API
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <FaReact className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    REACT
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiExpress className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Express
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiJunit5 className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    JUNIT5
                  </span>
                </span>
              </div>
            </div>
          </section>

          <section>
            <div className="px-10 pt-10">
              <hr className="h-px bg-white border-0 dark:bg-gray-600"></hr>
              <h1 className="text-white font-medium text-3xl py-6">Tools</h1>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1">
              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <FaGit className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    GIT
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <FaLinux className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    LINUX
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <VscVscode className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    VSCode
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiIntellijidea className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    IntelliJ
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiEclipseide className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Eclipse
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiPostman className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Postman
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <FaFigma className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Figma
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiGradle className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Gradle
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiJirasoftware className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Jira
                  </span>
                </span>
              </div>

              <div
                tabIndex="0"
                className="col-span-1 row-span-1 bg-zinc-900 p-3 rounded-lg shadow-lg text-white flex justify-center items-center flex-col gap-1.5 overflow-hidden"
              >
                <span className="slide-in-right mb-2">
                  <span className="slide-in-right mb-2">
                    <SiApachemaven className="h-6 w-8" />
                  </span>
                  <span className="slide-in-right font-semibold text-xs">
                    Maven
                  </span>
                </span>
              </div>
            </div>
          </section>

          <section>
            <div className="px-10 pt-10">
              <hr className="h-px bg-white border-0 dark:bg-gray-600"></hr>
              <h1 className="text-white font-medium text-3xl py-6">Projects</h1>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
