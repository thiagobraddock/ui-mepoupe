import React from 'react';
import Banner from './components/Banner';
import './App.css';
import bannerBg from './assets/banner1.png';

export default function App() {
  return (
    <div>
      <Banner
        texto="Simuladores"
        color="#561DBA"
        bannerBg={ bannerBg }
      />
    </div>
  );
}
