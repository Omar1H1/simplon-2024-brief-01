import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Offers from '../components/Offers';

export default function Home() {
  return (<>
    <Header />
    <Offers />
    <main>
      <Features />
    </main>
    <Footer />
  </>);
}
