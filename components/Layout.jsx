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
      <Footer />

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
          height: 100%;
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
          min-height: 100%;
          position: relative;
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
      `}</style>
    </>
  );
}

export default Layout;
