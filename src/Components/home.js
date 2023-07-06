import React from 'react';
import logo from '../assets/Logo.png';
import DownloadButton from './sub components/downloadbtn';

const Home = () => {
  return (
    <section id="home">
      <div className="container flex flex-col lg:flex-row mx-auto items-center justify-center lg:justify-between space-y-8 lg:space-y-0">
        <div className="lg:w-1/2">
          <img src={logo} alt="Logo" className="w-full" />
        </div>
        <div className="lg:w-1/2 text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Hi, I'm Ihsan</h1>
          <p className="text-white text-lg mb-4">
          I'm thrilled to have you here. This portfolio serves as a showcase of my skills,
           experiences, and accomplishments. It's a glimpse into my journey as a web developer
           and highlights the projects and work that I'm passionate about.
          </p>
          <DownloadButton />
        </div>
      </div>
    </section>
  );
};

export default Home;