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
        <div className='container  md:px-0 mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:mt-10 mt-6 mb-16  ' data-aos ="fade-down">
            {
                foods.map(food =><AllFoodsCard key={foods._id}
                food={food}>

                </AllFoodsCard>)
            }
            
           
        </div>
    );
};

export default AllFoods;