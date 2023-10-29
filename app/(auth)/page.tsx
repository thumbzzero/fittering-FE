import Footer from '@/components/LandingPage/Footer';
import FunctionIntroduction from '@/components/LandingPage/FunctionIntroduction';
import Header from '@/components/LandingPage/Header';
import MainIntroduction from '@/components/LandingPage/MainIntroduction';
import React from 'react';

type Props = {};

function LandingPage(props: Props) {
  return (
    <div className="mx-auto">
      <Header />
      <MainIntroduction />
      <FunctionIntroduction />
      <Footer />
    </div>
  );
}

export default LandingPage;
