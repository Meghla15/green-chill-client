import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import AllFoodsCard from "./AllFoodsCard";
import Aos from "aos";
import axios from "axios";


const AllFoods = () => {
  // const foods = useLoaderData()
  // console.log(foods)
  const [search, setSearch] = useState('')
  const [foods,setFoods]=useState([])
  // useEffect (() =>{
  //   document.title ='Green Chilli | All Food',
  //   Aos.init();
  //   // const getData = async () =>{
  //   //   const {data} = await axios(`${import.meta.env.VITE_API_URL}/foods?search=${SearchText}`)
  //   //   console.log(data)
      
  //   // }
  //   // getData()
  // },[])
  
  useEffect(()=>{
    document.title ='Green Chilli | All Food',
    Aos.init();
    const getData =async () =>{
        const  {data} = await axios(`${import.meta.env.VITE_API_URL}/foods`)
        setFoods(data)
    }
    getData()
},[])

  // const handleSearch = e =>{
  //     e.preventDefault()
  //     const text = e.target.search.value
  //     const getData = async () =>{
  //       const {data} = await axios (`${import.meta.env.VITE_API_URL}/search?search=${text}`)
  //       console.log(data)
  //     }
  //     getData()
  //     setSearch(text)
  //     console.log(text)
  // }
  const handleSearch= e =>{
    e.preventDefault()
    const text = e.target.search.value
    const getData =async () =>{
                  const  {data} = await axios(`${import.meta.env.VITE_API_URL}/search?search=${text}`)
                  setFoods(data)
              }
              getData()
    setSearch(text)
}
console.log(search)

   
    
    return (
       <div>
        <div className="hero h-48 mb-6" style={{backgroundImage:('url(https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-88.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph)') }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-green-500 font-bold">Green Chilli</h1>
      <p className="mb-5">Home | <span className="text-orange-600">All Food</span></p>
      
    </div>
  </div>
</div>
       <form className="flex item-center justify-center" onSubmit={handleSearch}> 
        <input type="text" placeholder="Search Here by Food Name" name="search" className="border p-2 rounded-xl"/>
        <input type="submit" value='Search' className="btn bg-orange-600 text-white rounded-xl"/>
       </form>
         <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-4 md:gap-2 gap-2 lg:mt-10 mt-6 mb-16 px-4 lg:px-0 md:px-2 ' data-aos ="fade-right">
            
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