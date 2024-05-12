import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";

const OrderFood = () => {
  const {user} = UseAuth()
  const [orders, setOrders] = useState()
  

  useEffect(() => {
   getData()
  }, [user])

  const getData = async () => {
    const { data } = await axios ( `${import.meta.env.VITE_API_URL}/orderFood/${user?.email}`)
    setOrders(data)
  }
     
    console.log(orders)

    const handleDelete = async id =>{
      try{
        const {data} = await axios.delete (
          `${import.meta.env.VITE_API_URL}/food/${id}` )
          console.log(data)
          toast.success("Delete Successfully")
          getData()
      }
      catch(err){
         console.log(err)
         toast.error(err.massage)
      }
    }

    return (
      <div>
        <h1 className="text-center text-3xl font-semibold text-orange-600 mt-4 mb-5">Your Purchase List </h1>
        <p className="mx-auto container text-xl font-semibold mb-6">Total Purchase : <span className="text-green-600">{orders?.length}</span></p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto mb-10">
          
          {orders?.map((order) =>
            (<div key={order._id} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage : `url(${order.photo})`}}></div>
    
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <div className="flex justify-between px-2">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{order.food_name}</h3>
         <button onClick={() =>handleDelete(order._id)} className="text-red-700">   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg></button>
    
            </div>
    
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">${order.price}</span>
                <span className="font-bold text-gray-800 dark:text-gray-200">Quantity :{order.quantity}</span>
               
            </div>
        </div>
    </div>))}
            </div>
      </div>
    );
};

export default OrderFood;