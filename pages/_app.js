import Script from "next/script";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-W1PS600MJ9"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-W1PS600MJ9');
      
      `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
