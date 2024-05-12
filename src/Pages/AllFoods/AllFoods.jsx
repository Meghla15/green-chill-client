import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AllFoodsCard from "./AllFoodsCard";
import Aos from "aos";


const AllFoods = () => {
    const foods = useLoaderData()
    console.log(foods)
    useEffect (() =>{
        document.title ='Green Chilli | All Food',
        Aos.init();
    },[])
    return (
       <div>
        <h1 className="text-center font-bold text-3xl mt-5 ">All Foods</h1>
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