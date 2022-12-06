import Image from "next/image";
import Link from "next/link";
import Circle from "./Circle";
/*This page renders the introduction about me which servers 
as the landing page when a user reaches the app */

function Intro() {
  return (
    <header className="header" id="header" style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="left">
          <Circle top="-350px" left="-370px" />
          <Image
            className="header-img"
            src="/img/gauta.png"
            alt="Gauta Ncholo"
            objectFit="cover"
            width="300px"
            height="300px"
          />
        </div>
        <div className="center" style={{ marginBottom: "50px" }}>
          <h1 className="main-heading">- IM GAUTA NCHOLO.</h1>
          <h2 className="subheading">FULLSTACK WEB DEVELOPER</h2>
          <p>
            Im Gauta meaning gold pronounced like Gauteng the city of gold. Im a
            professional fullstack web developer based in Johannesburg using my
            passion for coding as a tool to helping companies and individuals
            improve their workflow through dynamic softwares and web
            applications. Ive been programming for about 3 years plus, found my
            passion at a late stage in life and since then programming has been
            my life.
          </p>
          <Link href="/about" passHref>
            <div className="btn cta-btn">
              more about me
              <i className="bi bi-arrow-right-circle-fill" />
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .left {
          flex: 1 1 10rem;
        }
        .header .container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          position: relative;
          margin-bottom: 50px;
          margin-top: 80px;
        }

        .header .container .bg {
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          bottom: 0;
          margin-top: 5px;
        }

        .header .container .center {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          gap: 15px;
          flex: 1 1 40rem;
          align-items: flex-start;
        }

        .header .container p {
          font-family: "Open Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 35px;
          /* now */
          max-width: 600px;
        }

        .header .container ul {
          display: flex;
          flex-direction: column;
          gap: 30px;
          align-items: center;
          justify-content: center;
          margin-right: -180px;
        }

        .header .container .contact-links a {
          background: var(--primary-color);
          color: #fff;
          font-size: 18px;
          padding: 20px;
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </header>
  );
}

export default Intro;
