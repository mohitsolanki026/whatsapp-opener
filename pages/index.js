import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [number, setNumber] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [Username,setName] = useState("");
  useEffect(() => {
    const storedName = localStorage.getItem("Name");
    if (!storedName) {
      setShowPopUp(true);
    }
    else{
      setName(storedName);
    }
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    if (name) {
      localStorage.setItem("Name", name);
      setShowPopUp(false);
      setName(name)
    }
  };

  return (
    <div>
      {showPopUp && (
        <div className="grid place-content-center h-screen fixed w-full z-150">
          <div className="h-50 p-5 flex mx-auto bg-indigo-100 text-black font-bold text-2xl rounded-lg ">
            <form onSubmit={handleSubmit}>
              <label>
                <h2 className="mb-3"> Your Name</h2>
                <input className="bg-slate-400 font-normal " type="text" name="name" />
              </label>
              <button className="bg-green-600 text-white block w-full rounded-lg mt-3  " type="submit">Done</button>
            </form>
          </div>
        </div>
      )}
      <div>
          <h1 className=" absolute top-10 left-10 text-3xl ">Hello {Username}👋</h1>
        </div>
      <div className="grid place-content-center p-4 mx-auto bg-slate-900  h-screen">
        
        <div className="p-4 rounded-lg bg-black shadow-lg">
          <div className="p-4 flex justify-center max-h-min  min-h-min max-w-lg ">
            <img src="https://i.pinimg.com/originals/80/e3/02/80e302f3f90f0b7776f9bdb636388ef4.jpg" />
          </div>
          <div className="flex flex-col">
            <input
              className="m-1 text-black text-center text-xl font-extrabold"
              type="number"
              placeholder="Enter Number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <Link
              className="bg-green-600 m-1 rounded-md  font-medium text-lg text-center"
              href={`http://wa.me/91${number}`}
            >
              GO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
