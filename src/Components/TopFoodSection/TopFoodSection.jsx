import TopFoodCards from './TopFoodCards';
import { Link, useLoaderData } from 'react-router-dom';

const TopFoodSection = () => {
    const foods = useLoaderData()
     console.log(foods)    
    return (
        <div className='container mx-auto'>
         <h1 className='font-sens font-bold lg:text-4xl text-2xl text-center text-orange-600'>Our Top Foods</h1>
         <p className='text-slate-700 lg:w-2/3 w-full px-2 lg:px-0 mx-auto text-center mt-3 mb-4'>Indulge in culinary excellence with our top-rated dishes! From mouthwatering pizzas to sizzling barbecue, our menu offers a delightful journey through global flavors. Explore authentic tastes expertly crafted by our talented chefs, guaranteed to satisfy every palate</p>
        <div className='container  mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2 gap-2 lg:mt-10 mt-6 mb-16 px-4 lg:px-0 md:px-2 ' >
            {
                foods.slice(0,6).map((food) =>( <TopFoodCards
                key={foods._id}
                food={food}></TopFoodCards>))
            }
        </div>
         
         <div className='mt-10 text-center'>
        <Link to='/allFoods'> <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-orange-600 border-2 border-orange-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">See All</span>
</button></Link>
         </div>
        </div>
    );
};

export default TopFoodSection;
