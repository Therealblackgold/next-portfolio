import Link from "next/link";
/*This component renders the footer for the app and will be displayed on all pages through the layout component*/

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Thank you for your time, please download my resume{" "}
        <Link href="/img/gauta ncholo-resume.pdf" passHref>
          <a target="_blank">here</a>
        </Link>
      </p>

      <div className="copyright">GAUTA|NCHOLO &copy; | all rights reserved</div>
      <style jsx>{`
        .footer {
          display: flex;
          flex-direction: column !important;
          flex-wrap: wrap;
          align-items: center;
          height: fit-content;
          margin-top: auto;
          background: var(--darker--color);
          color: #fff;
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        p {
          margin-top: 20px;
        }

        a {
          color: #6448e3;
          cursor: pointer;
          text-decoration: underline;
        }

        .footer .copyright {
          font-size: 16px;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
