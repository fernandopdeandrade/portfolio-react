import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import SpinnerLoading from "../components/SpinnerLoading";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
