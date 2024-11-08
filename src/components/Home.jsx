import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import pic from "../../public/abhi.jpg";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home"
       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-24 space-y-2 order-2 md:order-1 ">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              <span className="text-red-700 font-bold">
                <ReactTyped
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </div>
            <p className="text-sm md:text-md text-justify">
            Abhijeet is a skilled professional with a passion for innovative solutions and creative problem-solving. With expertise in [computer Science, e.g., web development, UI/UX design, problem solving], he brings a unique blend of technical proficiency and artistic flair to every project. Abhijeet thrives in dynamic environments, constantly seeking new challenges to enhance his skill set.  Abhijeet is dedicated to continuous learning and staying at the forefront of industry trends.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex justify-between flex-col md:flex-row  items-center space-y-10 md:space-y-0 md:text-left text-center ">
              <div className="space-y-2">
                <h1 className="font-bold">Available On</h1>
                <div className="flex space-x-5">
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebookSquare className="text-2xl font-bold" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhijeet-sen-a080a9230/"
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedin className="text-2xl font-bold" />
                  </a>
                  <a href="https://www.youtube.com" target="_blank">
                    {" "}
                    <FaYoutube className="text-2xl font-bold" />
                  </a>
                  <a href="https://www.telegram.com" target="_blank">
                    {" "}
                    <FaTelegram className="text-2xl font-bold" />
                  </a>
                </div>
              </div>

              <div className=" space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-6">
                  <SiMongodb className="text-2xl font-bold" />
                  <SiExpress className="text-2xl font-bold" />
                  <FaReact className="text-2xl font-bold" />
                  <FaNodeJs className="text-2xl font-bold" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 md:order-2  mt-10 ">
            <img
              src={pic}
              alt="mai hoo"
              className="rounded-full md:h-[450px] md:w-[450px]"
            />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
}

export default Home;
