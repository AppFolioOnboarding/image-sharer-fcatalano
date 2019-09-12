import React from 'react';
import Header from './Header';
import Feedback from './Feedback';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Header title="Tell us what you think" />
      <Feedback />
      <Footer />
    </div>
  );
}

/* TODO: Add Prop Types check*/
