import React, { useEffect, useState } from "react";
import url from "./../public/next.svg";
import url2 from "./../public/vercel.svg";
import Image from "next/image";
import bgimg from "./../public/bg2.jpg";

function home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePoition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePoition);
    updatePoition();
    return () => window.removeEventListener("scroll", updatePoition);
  }, []);
  console.log(scrollPosition);

  return (
    <div className="bg-white min-h-screen text-black overflow-hidden ">
      <header
        className={`fixed top-0 left-0 right-0 flex items-center justify-between p-2 text-2xl m-2  px-14 rounded-xl ${
          scrollPosition > 1
            ? " bg-white backdrop-filter backdrop-blur-md bg-opacity-50 shadow-lg "
            : " text-white"
        }`}
      >
        <h1>Logo</h1>
        <ul className="hidden sm:flex ">
          <li className="px-4 text-lg font-bold font-serif hover:bg-fuchsia-50  ">
            <a href="">Home</a>
          </li>
          <a href="">
            <li className="px-4 text-lg font-bold font-serif">Pricing</li>
          </a>
          <li className="px-4 text-lg font-bold font-serif">Contact</li>
        </ul>
        <h2 className="hidden sm:block bg-indigo-500 p-3 rounded-md text-base text-white">
          Login / SignUp
        </h2>
        <h1 className="sm:hidden">ICON</h1>
      </header>
      <div className=" w-screen">
        <img src={bgimg} alt="" />
        <Image src={bgimg} className=" object-cover w-[100%] h-screen" alt="" />
      </div>
      <main className="bg-white flex justify-evenly flex-col md:flex-row items-center h-screen">
        <div>
          <Image src={url} height={300} width={300} />
        </div>
        <div className="px-6">
          <h1 className="font-serif font-bold text-xl md:text-3xl">
            <span className="text-fuchsia-600 text-5xl">N</span>ext{" "}
            <span className="text-fuchsia-600 text-5xl">L</span>evel{" "}
            <span className="text-fuchsia-600 text-5xl">L</span>anguage
          </h1>
          <h1 className="text-slate-600 font-mono">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
        </div>
      </main>
      <div>
        <div className=" text-center text-4xl font-bold font-serif ">
          <h1>Our Customers</h1>
        </div>
        <div className="flex m-10 md:m-20">
          <div className=" shadow-xl p-5 rounded-md border md:flex">
            <div>
              <img src="" alt="image" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                quod eos tenetur laboriosam repudiandae suscipit inventore
                reiciendis error dignissimos quaerat!
              </p>
            </div>
          </div>
          <div className=" shadow-xl p-5 rounded-md border md:flex">
            <div>
              <img src="" alt="image" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                quod eos tenetur laboriosam repudiandae suscipit inventore
                reiciendis error dignissimos quaerat!
              </p>
            </div>
          </div>
          <div className=" shadow-xl p-5 rounded-md border md:flex">
            <div>
              <img src="" alt="image" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                quod eos tenetur laboriosam repudiandae suscipit inventore
                reiciendis error dignissimos quaerat!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" m-7 md:m-16">
        <div className=" rounded-2xl p-3  shadow-2xl">
          <div className=" text-center text-3xl p-4 font-bold font-serif ">
            <h1>Accelerating Your Digital Transformation</h1>
          </div>
          <div className="sm:flex   ">
            <div className="m-5 pt-3">
              <img src="" alt="Image" />
              <div>
                <h2>Boost efficiency with quality</h2>
                <p>
                  Consolidate the industrial data for analysis to use it for
                  better insights. This all possibile using revolutionizing IoT
                  hardware developed by Bidaal
                </p>
              </div>
            </div>
            <div className="m-5 pt-3">
              <img src="" alt="Image" />
              <div>
                <h2>Enhance Safety & Productivity</h2>
                <p>
                  Provide the safe environment for your workforce who are the
                  pillar and fuel for your business. Increase productivity via
                  digital connectivity.
                </p>
              </div>
            </div>
            <div className="m-5 pt-3">
              <img src="" alt="Image" />
              <div>
                <h2>AI driven decision making</h2>
                <p>
                  Visual and sensor data driven decision making reduce your
                  industrial downtime and maximize workforce efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-7">
        <div className="md:flex items-center justify-center ">
          <div className="p-3 m-3 lg:m-5 w-1/3 lg:w-1/4 border border-black rounded-md hover:shadow-2xl bg-green-100">
            <img src="" alt="" />
            <h1 className=" text-2xl p-2 pl-0 ">W.I.S.E</h1>
            <ul className="">
              <li>Digital Illumination Survey</li>
              <li>Automated Mapping System</li>
              <li>Insights from your data</li>
              <li>Customized Analytic Report</li>
            </ul>
            <div className="pt-5 pl-0">
              <a className=" underline " href="">
                Read more...
              </a>
            </div>
          </div>
          <div className="p-3 m-3 lg:m-5 w-1/3 lg:w-1/4 border border-black rounded-md hover:shadow-2xl bg-fuchsia-100 ">
            <img src="" alt="" />
            <h1 className=" text-2xl p-2 pl-0 ">S.M.I.L.E</h1>
            <ul className="">
              <li>Audio-Visual Alarm</li>
              <li>Record of Near-Misses</li>
              <li>Traffic Safety Management</li>
              <li>Useful at Junctions/Crossings</li>
            </ul>
            <div className="pt-5 pl-0">
              <a className="p-5 pl-0 underline " href="">
                Read more...
              </a>
            </div>
          </div>
          <div className="p-3 m-3 lg:m-5 w-1/3 lg:w-1/4 border border-black rounded-md  hover:shadow-2xl bg-blue-100 ">
            <img src="" alt="" />
            <h1 className=" text-2xl p-2 pl-0 ">Bidaal-Lens</h1>
            <ul className="">
              <li>Digital Illumination Survey</li>
              <li>Automated Mapping System</li>
              <li>Insights from your data</li>
              <li>Customized Analytic Report</li>
            </ul>
            <div className="pt-5 pl-0">
              <a className=" p-5 pl-0 underline " href="">
                Read more...
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-950 text-white h-96 flex items-center justify-evenly">
        <div className="">
          <Image src={url2} height={200} width={200} />
        </div>
        <div className="md:flex text-xl">
          <div className="p-10">
            <h1 className="mb-4 pb-2 text-3xl border-b-2">Pricing</h1>
            <ul>
              <li>Product1</li>
              <li>Product2</li>
              <li>Product3</li>
              <li>Product4</li>
            </ul>
          </div>
          <div className="p-10">
            <h1 className="mb-4 pb-2 text-3xl border-b-2">Contact</h1>
            <ul>
              <li>Product1</li>
              <li>Product2</li>
              <li>Product3</li>
              <li>Product4</li>
            </ul>
          </div>
          <div className="p-10">
            <h1 className="mb-4 pb-2 text-3xl border-b-2">About</h1>
            <ul>
              <li>Product1</li>
              <li>Product2</li>
              <li>Product3</li>
              <li>Product4</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default home;
