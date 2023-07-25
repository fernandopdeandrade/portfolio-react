import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import SpinnerLoading from '../components/SpinnerLoading';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const thousand = 1000;

    setTimeout(() => {
      setLoading(false);
    }, thousand);
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
}

export default Home;
