import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Peliculas from './Pages/Pelis/Peliculas';
import Principal from './Pages/Pelis/Principal';
import Footer from './components/Footer';
import Detalles from './components/Detalles';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Peliculas" element={<Peliculas />} />
        <Route path="/pelicula/:id" element={<Detalles />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
