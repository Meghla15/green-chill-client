import { useLoaderData } from 'react-router-dom';
import './Gallery.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Gallery = () => {
    const foods = useLoaderData()
    // console.log(foods)
    useEffect (() =>{
      Aos.init();

  })
    return (
        
        <div  className='' >
           <div className="hero h-48 mb-6" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-88.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-green-500 font-bold">Green Chilli</h1>
      <p className="mb-5">Home | <span className="text-orange-600">Gallery</span></p>
      
    </div>
  </div>
</div>
            <div className="mx-auto container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 " data-aos ="fade-right">
           {
            foods.map((item) =>( <div key={foods._id}  className="card">
            <img className="card-img" src={item.photo} alt="" />

            <div className="card-body">
               <div className=" card-title flex flex-col text-white">
              <h1 className='card-title'>{item.food_name}</h1>
              <p className='card-sub-title '>{item.description}</p>
               </div>
            </div>

        </div>))
           }
            </div>
           
          

        </div>
    );
};

export default Gallery;