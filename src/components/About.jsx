import React from 'react'

function About() {
  return (
    <>
    <div name="About"  className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <h1 className='text-3xl font-semibold mb-5'>About</h1>
      <p>
          Hello, I'm Abhijeet, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p><br />
        {/* 1 */}
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
        [B.Tech/CSE], [Bansal Group of Institutes], [2021-2025] [Hr. sec./ PCM],
          [SVM], [2021] [Computer Science Engineering], [High School/SVM],
          [2019]
        </span><br /><br />
       {/* 2 */}
        <h1 className="text-green-600 font-semibold text-xl">
        Skills & Expertise        </h1>
        <span>
        Proficient in [Java,C++,DSA] Experienced with [JDBC,POSTMAN,git and github/MERN stack] Strong grasp of [Reactjs, SDLC/DBMS]
          Excellent problem-solving skills Effective communicator and
          collaborator.
        </span><br /><br />
        {/* 3 */}
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Full Stack developer], [Celebal Technologies pvt. ltd.], [may - july 2024] [Reactjs Developer] [Worked on various Projects],
           [Freelancer/Intern]    
        </span>
        <br />
        <br />
        {/* 4 */}
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [sql,java,problem solving/hackerrank], [Mern stack / Udemy academy], [leetcode 150+ ques solved] [DSA],
          [leetcode,hackerrank,coding ninjas,gfg badges for solving questions on their Platform]
        </span>
        <br />
        <br />
        {/* 5 */}
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Software/Web development] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
    </div>
    </>
  )
}

export default About
