import { Link } from "react-router-dom";


const AllFoodsCard = ({food}) => {
    const {_id, photo, category,food_name,price,quantity } = food || {}
    // console.log(food)
   
    return (
        <div>
       <Link to={`/food/${_id}`}>  
          <div className="max-w-xs overflow-hidden bg-orange-100 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{food_name}</h1>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">Category : {category}</p>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">Quantity : {quantity}</p>
    </div>

     <img className="object-cover bg-slate-100 w-full h-48 mt-2" src={photo} alt="Loading....." />

    <div className="flex items-center justify-between px-4 py-2 bg-orange-500">
        <h1 className="text-lg font-bold text-white">${price}</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Details</button>
    </div>
</div></Link>
            
        </div>
    );
};

export default AllFoodsCard;