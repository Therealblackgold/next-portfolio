import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
/*This component returns the layout that will be consistent through 
the entire application the css also includes a few media queries to 
make the website a bit responsive */
function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        ></link>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Navbar />
      {children}

      <style global jsx>{`
        :root {
          --primary-color: #ffb400;
          --black-color: #111111;
          --darker--color: #030303;
          --grey-color: #656565;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-decoration: none;
          border: none;
          list-style-type: none;
        }

        *::selection {
          background: var(--primary-color);
          color: #fff;
        }

        html {
          scroll-padding-top: 90px;
          scroll-behavior: smooth;
        }

        html::-webkit-scrollbar {
          width: 9px;
        }

        html::-webkit-scrollbar-track {
          background: transparent;
        }

        html::-webkit-scrollbar-thumb {
          background: var(--primary-color) !important;
          border-radius: 5rem;
        }

        body {
          background: var(--black-color);
          color: #fff;
          font-family: "Poppins", sans-serif;
          display: flex;
          flex-direction: column;
        }

        section {
          padding: 20px 5%;
        }

        .section-heading {
          text-align: center;
          text-transform: uppercase;
          color: #fff;
          font-weight: 700;
          font-size: 51px;
          line-height: 62px;
          margin: 5px;
        }

        .section-heading span {
          color: var(--primary-color);
        }

        .btn {
          display: flex;
          align-items: center;
          width: fit-content;
          padding: 8px;
          text-transform: uppercase;
          background: transparent;
          color: #fff;
          border-radius: 25px;
          border: 2px solid var(--primary-color);
          font-weight: 600;
          font-size: 20px;
          line-height: 21px;
          outline: none;
          /* hover effect */
          transition: ease-out 0.3s;
          position: relative;
          z-index: 1;
          overflow: hidden;
          cursor: pointer;
        }

        .btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          /* opacity: 0; */
          z-index: -1;
          background: var(--primary-color);
          transition: transform 300ms ease-in-out;
          transform: scaleX(0);
          transform-origin: left;
        }

        .btn:hover::before,
        .btn:focus::before {
          transform: scaleX(1);
        }

        .btn i {
          color: var(--primary-color);
          font-size: 30px;
          font-weight: 600;
          padding-left: 10px;
        }

        h1 {
          color: var(--primary-color);
          font-weight: 700;
          font-size: 51px;
          line-height: 62px;
        }
        h2 {
          font-weight: 700;
          font-size: 45px;
          line-height: 62px;
          text-transform: uppercase;
        }

        h3 {
          text-transform: uppercase;
        }

        .circle {
          width: 100vh;
          height: 100vh;
          border-radius: 50%;
          opacity: 1;
          position: absolute;
          z-index: -1;
          background-color: var(--primary-color);
          margin: auto;
        }

        @media screen and (max-width: 480px) {
          p {
            padding: 0 20px;
          }

          .header .container {
            margin-top: 30px !important;
            padding-top: 0 !important;
          }
          .circle {
            display: none;
          }
        }

        @media (max-width: 1400px) {
          h1 {
            font-size: 42px;
          }

          h2 {
            font-size: 35px;
          }
          .circle {
            display: none;
          }
          .header .container {
            text-align: center;
            height: fit-content;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 20px;
            justify-content: center;
            position: relative;
            margin-bottom: 100px;
            padding: 80px 0;
          }

          .header .container .center {
            align-items: center !important;
            justify-content: center !important;
          }

          .header .container .header-img {
            margin-left: 0px;
            width: 250px;
            height: 250px;
            object-fit: contain;
            border-radius: 50%;
            border: 1px solid var(--primary-color);
          }

          .header .container .bg {
            display: none;
          }

          .header .btn {
            display: inline-block;
            align-self: center;
          }
        }

        @media (max-width: 758px) {
          .section-heading {
            font-size: 30px;
            line-height: 40px;
            margin: 20px;
          }

          .header .container {
            margin-bottom: 40px;
            padding-bottom: 60px !important;
          }

          footer {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }

          footer p {
            padding: 10px;
          }
        }
        @media screen and (max-width: 1920px) {
          .header .container .header-img {
            width: 250px;
            height: 260px;
            object-fit: cover;
            border-radius: 50%;
            background: #000;
            border: 5px solid var(--primary-color) !important;
          }
        }
      `}</style>
    </>
  );
}

export default Layout;
