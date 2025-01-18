import React from "react";
import java from "../../public/java.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import { Link, useNavigate } from "react-router-dom";



function Portfolio() {
  

  const cardItem = [
    {
      id: 1,
      logo: mongodb,
      name: "Mongodb",
    },
    {
      id: 2,
      logo: express,
      name: "Express Js",
    },
    {
      id: 3,
      logo: reactjs,
      name: "React Js",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Node Js",
    },
    {
      id: 5,
      logo: java,
      name: "Java",
    },
  ];
 

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
         <Link to='/project' className="underline semibold"><p 
          className="text-blue-500 underline">Featured Projects --  Click here to view my projects.</p>
          </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className=" md:w-[300px] md:h-[300px] cursor-pointer border-[2px] rounded-lg shadow-lg p-1  hover:scale-110 duration-300  text-center"
            >
              <img
                src={logo}
                alt={name}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] flex justify-self-center"
              />
              <div>
                <div className="px-2 py-3 font-bold text-xl mb-2 ">{name}</div>
                <p className="px-2 text-gray-700">
                Innovative software projects focused on efficiency, scalability.
                </p>
              </div>
              <div className=" px-6 py-4 flex justify-between ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
