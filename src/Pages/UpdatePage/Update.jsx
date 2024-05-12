// import { useParams } from "react-router-dom";

import { useLoaderData, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";


const Update = () => {
//    const {id} = useParams();
 const {user} = UseAuth()
  const food = useLoaderData()
  const navigate = useNavigate()
 const {_id,made_by,food_origin,description, photo, category,food_name,price,quantity } = food || {}

    const handleUpdate = async e =>{
        e.preventDefault ()
        const form = e.target;
        const made_by = form.made_by.value;
        const photo = form.photo.value;
        const food_name = form.food_name.value;
        const description = form.description.value;
        const price = parseFloat(form.price.value);
        const quantity = form.quantity.value;
        const category = form.category.value;
        const food_origin = form.food_origin.value;
        const updateFood = {made_by,photo,food_name,description,price,quantity,category,food_origin}
        console.log(updateFood)

        try {
            const { data } = await axios.put(
              `${import.meta.env.VITE_API_URL}/food/${_id}`,
              updateFood
            )
            console.log(data)
            toast.success('Update Data Successfully')
            navigate('/myAddFood')
          } catch (err) {
            console.log(err)
            toast.error(err.message)
          }
    }
    return (
        <div>
            
       <section className="p-6 bg-orange-50 container mx-auto mt-6 mb-14 rounded-2xl dark:text-gray-900">
	<form onSubmit={handleUpdate} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-4 col-span-full lg:col-span-1">
				<p className="font-semibold text-2xl text-center">Update Now !!</p>
				<p className="text-xs text-center mt-2">Food is a tantalizing symphony of flavors, textures, and aromas that nourishes both body and soul. From succulent meats to vibrant vegetables, every dish tells a story of culture and tradition.</p>
				
				<div className="col-span-full  sm:col-span-3">
					<label htmlFor="email" className="text-sm font-semibold text-orange-600">Updated By : (Email)</label>
					<input id="email" disabled defaultValue={user?.email} name='email' type="email" placeholder="Email" className="w-full p-2  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				
			</div>
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

           
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="foodName" className="text-sm font-semibold">Made By</label>
					<input id="made_by" 
                    defaultValue={made_by}  name='made_by' type="text" placeholder="Made by" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="foodName" className="text-sm font-semibold">Food Name</label>
					<input id="foodName" 
                    defaultValue={food_name} name='food_name' type="text" placeholder="Food Name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="photo" className="text-sm font-semibold">Food PhotoURL</label>
					<input id="photo" 
                    defaultValue={photo} name='photo' type="text" placeholder="PhotoURL" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="category" className="text-sm font-semibold">Category</label>
					<input id="category"
                    defaultValue={category} name='category' type="category" placeholder="Category" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="description" className="text-sm font-semibold">Description</label>
					<input id="description" 
                    defaultValue={description}
                    name='description' type="text" placeholder="Description" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="origin" className="text-sm font-semibold">Origin(Country)</label>
					<input id="food_origin" 
                    defaultValue={food_origin} name='food_origin' type="text" placeholder="Country" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm font-semibold">Quantity</label>
					<input id="quantity"
                    defaultValue={quantity} name='quantity' type="number" placeholder="Quantity" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm font-semibold">Price</label>
					<input id="price" 
                    defaultValue={price} name='Price' type="number" placeholder="Price" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
			</div>
		</fieldset>
        <button className='w-2/3 mx-auto bg-orange-500 text-white font-semibold p-3 rounded-2xl' type="submit" value='update'>UPDATE</button>
	</form>
</section>
        </div>
    );
};

export default Update;