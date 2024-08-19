"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import stateAbbrivitaions from "./utils/stateAbbrivitaions";
import numbersUtil from "./utils/numbersUtil";

export default function Home() {
  const [length, setLength] = React.useState("");
  const [age, setAge] = React.useState("");
  const [state, setState] = React.useState("");

  return (
    <main className="flex flex-col md:font-nunito bg-zinc-200 min-h-screen">
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
      <div className="flex justify-end flex-wrap text-align-center text-white text-2xl md:text-4xl tracking-wide z-10 m-28 md:m-36 mb-12">
        <h1>
          Vacation shouldn't be stressful. <br /> Leave your worries at home{" "}
          <br /> with <span className="text-amber-600">Serene</span> travel
          insurance
        </h1>
      </div>

      <div className="flex flex-col justify-center md:border-2 border-white rounded-lg p-4 ml-auto mr-auto md:mr-48 z-10">
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
              className="text-white ml-auto mr-auto pb-2 text-lg"
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
              className="text-white ml-auto mr-auto pb-2 text-lg"
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
              className="text-white ml-auto mr-auto pb-2 text-lg"
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

        <button className=" w-fit bg-amber-800 hover:bg-red-700 p-3 rounded-3xl text-white text-xl md:text-2xl tracking-wide ml-auto mr-auto z-10">
          Fast quote & peace of mind &#8594;
        </button>
      </div>
    </main>
  );
}
