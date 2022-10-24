import Head from "next/head";
import Image from "next/image";
import React from "react";
/*This page renders the skills page*/

const Skills = () => {
  return (
    <>
      <Head>
        <title>Gauta Ncholo | Skills </title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <section className="skills" id="skills">
        <h1 className="section-heading">
          <span>My</span> Skills
        </h1>
        <div className="container">
          <p>
            Ive worked as a freelance web developer since 2020, and I have a
            dream of my own startup one day that will focus on helping local
            businesses and public institution improve their efficiency through
            programming. Im hard working passionate and ready to take on new
            challenges. you can find a list of my skills below.
          </p>
          <div className="skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>Python</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <Image
                src="/img/html.png"
                alt="HTML"
                width="50px"
                height="50px"
                objectFit="cover"
              />
              <h3>HTML</h3>
            </div>
            <div className="card">
              <Image
                src="/img/css.png"
                alt="CSS"
                width="150px"
                height="150px"
                objectFit="cover"
              />
              <h3>CSS</h3>
            </div>
            <div className="card">
              <Image
                src="/img/js.png"
                alt="JavaScript"
                width="50px"
                height="50px"
                objectFit="cover"
              />
              <h3>JavaScript</h3>
            </div>
            <div className="card">
              <Image
                src="/img/python.png"
                alt="Python"
                width="50px"
                height="50px"
                objectFit="cover"
              />
              <h3>Python</h3>
            </div>
            <div className="card">
              <Image
                src="/img/django.png"
                alt="Django"
                width="50px"
                height="50px"
                objectFit="cover"
              />
              <h3>Django</h3>
            </div>
          </div>
        </div>

        <style jsx>{`
          .skills {
            margin-top: -20px;
          }
          .skills ul {
            margin-top: -30px;
          }
          .skills .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 40px;
            /* text-align: center; */
          }

          .skills .container .card-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin: -30px 0;
          }

          .skills .container .card-wrapper div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--grey-color);
            padding: 15px;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            margin: 10px 0;
          }

          .skills .container p {
            padding: 10px;
            line-height: 25px;
            font-family: "Open Sans", sans-serif;
            font-size: 16px;
            font-weight: 500;
            max-width: 800px;
            text-align: center;
          }

          .skills .container ul {
            line-height: 30px;
          }

          section li::before {
            content: "";
            display: inline-block;
            background-image: url(./img/dot.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 0.5em;
            height: 0.5em;
            margin-right: 0.3rem;
          }
        `}</style>
      </section>
    </>
  );
};

export default Skills;