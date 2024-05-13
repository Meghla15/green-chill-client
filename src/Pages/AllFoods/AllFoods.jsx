import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AllFoodsCard from "./AllFoodsCard";
import Aos from "aos";


const AllFoods = () => {
    const foods = useLoaderData()
    // console.log(foods)
    useEffect (() =>{
        document.title ='Green Chilli | All Food',
        Aos.init();
    },[])
    return (
       <div>
        <div className="hero h-48 mb-6" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-88.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-green-500 font-bold">Green Chilli</h1>
      <p className="mb-5">Home | <span className="text-orange-600">All Food</span></p>
      
    </div>
  </div>
</div>
        <label className="input input-bordered flex items-center gap-2 w-1/3 mt-4 mx-auto">
  <input type="text" className="grow " placeholder="Search by food name" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
         <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-4 md:gap-2 gap-2 lg:mt-10 mt-6 mb-16 px-4 lg:px-0 md:px-2 ' data-aos ="fade-down">
            
            {
                foods.map(food =><AllFoodsCard key={foods._id}
                food={food}>

                </AllFoodsCard>)
            }
            
           
        </div>
       </div>
    );
};

export default AllFoods;