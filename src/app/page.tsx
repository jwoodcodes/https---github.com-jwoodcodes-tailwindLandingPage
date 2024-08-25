"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import stateAbbrivitaions from "./utils/stateAbbrivitaions";
import numbersUtil from "./utils/numbersUtil";
import Services from "./components/Services";

export default function Home() {
  const [length, setLength] = React.useState("");
  const [age, setAge] = React.useState("");
  const [state, setState] = React.useState("");

  const [showStandardServices, setShowStandardServices] = React.useState(false);
  const [showDeluxeServices, setShowDeluxeServices] = React.useState(false);
  const [showJetSetterServices, setShowJetSetterServices] =
    React.useState(false);

  return (
    <main className="flex flex-col md:font-nunito bg-zinc-100 min-h-fit-content ">
      <nav className="flex w-full min-h-20 max-h-28 justify-space-between items-center text-lg tracking-wider bg-zinc-200 text-amber-600 z-10">
        <div className="flex text-xl md:text-4xl lg:text-6xl pl-6 ml-4  tracking-widest bg-zinc-200 text-amber-600 ">
          <Link href={"/"}>Serene</Link>
        </div>
        <nav className="flex justify-end items-center text-lg md:text-xl lg:text-3xl p-6 md:p-12  w-full md:mr-6  tracking-wider">
          <Link
            href={"/"}
            className="px-4 hover:text-teal-600 hover:-translate-y-2 transition delay-100 active:translate-y-0"
          >
            View Packages
          </Link>
          <Link
            href={"/"}
            className="px-4 hover:text-teal-600 hover:-translate-y-2 transition delay-100 active:translate-y-0"
          >
            Get a quote!
          </Link>
        </nav>
      </nav>
      <Image
        src="/oceanAndBeach.jpg"
        alt="ocean and beach"
        width={1000}
        height={300}
        className="border-b-4 border-t-4 border-slate-950 object-cover h-3/4 md:h-5/6 lg:h-8/10"
        style={{
          opacity: 0.95,
          width: "100%",
          // height: "80%",
          position: "absolute",
          top: "5dvw",
          // left: "2%",
        }}
        priority
      />
      <div className="flex justify-end flex-wrap text-center text-white text-lg sm:text-2xl xl:text-4xl tracking-wide z-10 w-1/2 mt-16 ml-auto mb-4 mr-[1dvh] sm:mr-4 md:mt-14 md:mb-12 md:mr-6 md:ml-auto lg:mr-9 xl:mr-24 lg:mb-8">
        <h1>
          Vacation shouldn&apos;t be stressful. <br /> Leave your worries at
          home <br /> with{" "}
          <span className="text-amber-600 text-xl md:text-5xl">Serene</span>{" "}
          travel insurance
        </h1>
      </div>

      <div className="flex flex-col justify-center md:border-2 border-white rounded-lg p-4 ml-auto mr-auto sm:mr-4 md:mr-8 lg:mr-12 xl:mr-28 z-10 mb-3/4">
        <form
          onSubmit={(event) => {
            event.preventDefault();

            // Do something with `name` here
          }}
          className="flex justify-center z-10 ml-auto mr-auto  border-slate-950 "
        >
          <div className="flex flex-col p-4">
            <label
              htmlFor="length-select"
              className="text-white ml-auto mr-auto pb-2 max-[400px]:text-sm text:base sm:text-lg"
            >
              Trip Length
            </label>

            <select
              id="length-select"
              value={length}
              onChange={(event) => {
                setLength(event.target.value);
              }}
            >
              {numbersUtil.map((number) => (
                <option key={number} value={number} className="text-center">
                  {number}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center flex-col p-4">
            <label
              htmlFor="age-select"
              className="text-white ml-auto mr-auto pb-2 max-[400px]:text-sm text:base sm:text-lg"
            >
              Age
            </label>

            <select
              id="age-select"
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
            >
              <option value="19-29" className="text-center">
                19 to 29
              </option>
              <option value="29-39" className="text-center">
                29 to 39
              </option>
              <option value="40-64" className="text-center">
                40 to 64
              </option>
              <option value="65-infinity" className="text-center">
                65 and over
              </option>
            </select>
          </div>
          <div className="flex flex-col p-4">
            <label
              htmlFor="state-select"
              className="text-white ml-auto mr-auto pb-2 max-[400px]:text-sm text:base sm:text-lg"
            >
              State
            </label>

            <select
              id="state-select"
              value={state}
              onChange={(event) => {
                setState(event.target.value);
              }}
            >
              {stateAbbrivitaions.map((state) => (
                <option key={state} value={state} className="text-center">
                  {state}
                </option>
              ))}
            </select>
          </div>
        </form>

        <button className=" w-fit bg-amber-800 hover:bg-red-700 p-3 rounded-3xl text-white text-base sm:text-xl md:text-2xl xl:text-3xl tracking-wide ml-auto mr-auto z-10">
          Fast quote & peace of mind &#8594;
        </button>
      </div>

      <div className="w-full text-center text-slate-950 text-3xl sm:text-5xl relative top-[17dvh] mt-12 min-[400px]:top-28 min-[400px]:mt-28 min-[493px]:top-[25dvw] min-[493px]:mt-[30dvw] sm:top-[22dvw] sm:mt-[25dvw] md:top-[20dvw] md:mt-[20dvw] lg:top-[17dvw] lg:mt-[17dvw] xl:top-[14dvw] xl:mt-[14dvw] 2xl:top-52 2xl:mt-52 min-[2000px]:top-72 min-[2000px]:mt-60 min-[2500px]:top-72 min-[2500px]:mt-72 min-[2750px]:top-80 min-[2750px]:mt-80 min-[3000px]:top-96 min-[3000px]:mt-96">
        Packages
      </div>

      <div className="flex flex-col flex-wrap md:flex-row w-full  md:justify-evenly mb-28 min-[400px]:mb-60 mt-[20dvh] min-[400px]:mt-36 min-[493px]:mt-[35dvw] md:mt-[30dvw] lg:mt-[25dvw] xl:mt-[22dvw] 2xl:mt-[18dvw]">
        <div
          className="peer text-white text-4xl text-center tracking-wide  p-4 ml-auto mr-auto h-[30rem] min-[400px]:h-[40rem] sm:h-1/2dvh border-slate-950 border-4 w-5/6 md:w-1/4 mt-8 md:mt-0 relative overflow-hidden group"
          onMouseEnter={() => setShowStandardServices(true)}
          onMouseLeave={() => setShowStandardServices(false)}
        >
          <Image
            src="/greekRuins.jpg"
            alt="Hiker on rocky terrain"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
          <div className="relative z-20 flex justify-center items-end h-[100%] pb-8">
            {showStandardServices ? (
              <Services />
            ) : (
              <div className="text-[4rem]">Standard</div>
            )}
          </div>
        </div>
        <div
          className="peer text-white text-4xl text-center tracking-wide p-4 ml-auto mr-auto h-[30rem] min-[400px]:h-[40rem] sm:h-1/2dvh border-slate-950 border-4 w-5/6 md:w-1/4  mt-8 md:mt-0 relative overflow-hidden group"
          onMouseEnter={() => setShowDeluxeServices(true)}
          onMouseLeave={() => setShowDeluxeServices(false)}
        >
          <Image
            src="/colorfulCoastalCity.jpg"
            alt="Colorful coastal city"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
          <div className="relative z-20 flex justify-center items-end h-[100%] pb-8">
            {showDeluxeServices ? (
              <Services />
            ) : (
              <div className="text-[4rem]">Deluxe</div>
            )}
          </div>
        </div>

        <div
          className="peer text-white text-4xl text-center tracking-wide p-4 ml-auto mr-auto h-[30rem] min-[400px]:h-[40rem] sm:h-1/2dvh border-slate-950 border-4 w-5/6 md:w-1/4  mt-8 md:mt-0 relative overflow-hidden group"
          onMouseEnter={() => setShowJetSetterServices(true)}
          onMouseLeave={() => setShowJetSetterServices(false)}
        >
          <Image
            src="/citySquareFromWindow.jpg"
            alt="City Square from Window"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
          <div className="relative z-20 flex justify-center items-end h-[100%] pb-8">
            {showJetSetterServices ? (
              <Services />
            ) : (
              <div className="text-[4rem]">Jet Setter</div>
            )}
          </div>
        </div>
      </div>
      <footer className="bg-zinc-200 text-amber-600 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Serene</h3>
              <p className="text-sm">Travel insurance for peace of mind</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="text-sm">
                <li>
                  <Link href="/" className="hover:text-teal-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-teal-600">
                    View Packages
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-teal-600">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <p className="text-sm">
                1234 Travel Lane, Adventure City, AC 56789
              </p>
              <p className="text-sm">Phone: (555) 123-4567</p>
              <p className="text-sm">Email: info@serene-insurance.com</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 Serene Travel Insurance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
