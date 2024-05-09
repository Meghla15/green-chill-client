import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://themewagon.github.io/restoran/img/bg-hero.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero min-h-screen  ">
  <div className="hero-content flex justify-around flex-col lg:flex-row-reverse ">
    <img src="https://themewagon.github.io/restoran/img/hero.png" className="w-full h-full max-w-sm rounded-lg  animate-rotate"  />
    <div className='px-10 lg:text-start text-center'>
      <h1 className="lg:text-6xl text-4xl text-white font-bold">Enjoy Our <br />Delicious Meal</h1>
      <p className="py-6 text-white lg:w-2/3 w-full">Experience culinary delight with our expertly crafted dishes, made from the freshest ingredients and infused with innovative flavors. Whether you're in the mood for a classic favorite or an adventurous new creation, our menu offers something for everyone.</p>
      <button className="rounded-2xl bg-orange-600 text-white font-semibold px-5 text-xl py-3"><Link to='/allFoods'>Explore Now</Link></button>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Banner;