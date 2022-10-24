import Link from "next/link";
import Head from "next/head";
/*This page renders the contact page*/

const contact = () => {
  return (
    <>
      <Head>
        <title>Gauta Ncholo | Contact </title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <section className="contact" id="contact" style={{ marginTop: "50px" }}>
        <h1 className="section-heading">
          contact <span>details</span>
        </h1>
        <div className="container">
          <p>
            Feel free to contact me with any job opportunities and
            collaborations preferably contact me via email or inbox me on
            Linkedin so I dont miss your message.
          </p>
          <div className="list">
            <ul>
              <li>
                <Link href="tel:8882192787" passhref="true">
                  <a target="_blank" className="contact-wrapper">
                    <i className="bi bi-phone-fill" />
                    073 821 2456
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/gauta-ncholo/"
                  passhref="true"
                >
                  <a target="_blank" className="contact-wrapper">
                    <i className="bi bi-linkedin" />
                    Gauta Ncholo
                  </a>
                </Link>
              </li>
              <li>
                <Link href="mailto:gauta.nhcolo@gmail.com" passhref="true">
                  <a target="_blank" className="contact-wrapper">
                    <i className="bi bi-envelope-fill" />
                    gauta.ncholo@gmail.com
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Therealblackgold"
                  passhref="true"
                >
                  <a target="_blank" className="contact-wrapper">
                    <i className="bi bi-github" />
                    Therealblackgold
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" passhref="true">
                  <a target="_blank" className="contact-wrapper">
                    <i className="bi bi-geo-alt-fill" />
                    Johannesburg
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <style jsx>{`
          .contact .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 40px;
          }

          .contact .container .list {
            color: var(--primary-color);
            line-height: 51px;
            cursor: pointer;
          }

          .contact .container .list a i {
            color: var(--primary-color);
          }

          .contact p {
            padding: 10px;
            line-height: 30px;
            font-family: "Open Sans", sans-serif;
            font-size: 16px;
            font-weight: 500;
            max-width: 800px;
            text-align: center;
          }

          .contact-wrapper::before {
            content: "";
            display: inline-block;
            background-image: url(./img/dot.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 0.5em;
            height: 0.5em;
          }

          .contact-wrapper {
            font-size: 20px;
            color: #fff;
          }

          .contact-wrapper i {
            margin: 0 15px;
          }
        `}</style>
      </section>
    </>
  );
};

export default contact;
