import UseAuth from "../../Hooks/UseAuth";

const AddedFood = () => {
    const {user} = UseAuth()

    const handleAddedFood = async e =>{
        e.preventDefault ()
        const form = e.target;
        const email = form.email.value;
        const photo = form.photo.value;
        const foodName = form.foodName.value;
        const description = form.description.value;
        const price = parseFloat(form.price.value);
        const quantity = form.quantity.value;
        const category = form.category.value;
        const origin = form.origin.value;
        const addedFood = {email,photo,foodName,description,price,quantity,category,origin}
        console.log(addedFood)
    }
    return (
        <div>
           <section className="p-6 bg-orange-50 container mx-auto mt-6 mb-14 rounded-2xl dark:text-gray-900">
	<form onSubmit={handleAddedFood} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-semibold text-2xl">Add A Food Item Here</p>
				<p className="text-xs text-center mt-2">Food is a tantalizing symphony of flavors, textures, and aromas that nourishes both body and soul. From succulent meats to vibrant vegetables, every dish tells a story of culture and tradition.</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm font-semibold">Added By</label>
					<input id="email" disabled defaultValue={user?.email} name='email' type="email" placeholder="Email" className="w-full p-2  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="foodName" className="text-sm font-semibold">Food Name</label>
					<input id="foodName" name='foodName' type="text" placeholder="Food Name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="photo" className="text-sm font-semibold">Food PhotoURL</label>
					<input id="photo" name='photo' type="text" placeholder="PhotoURL" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="category" className="text-sm font-semibold">Category</label>
					<input id="category" name='category' type="category" placeholder="Category" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="description" className="text-sm font-semibold">Description</label>
					<input id="description" name='description' type="text" placeholder="Description" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="origin" className="text-sm font-semibold">Food Origin</label>
					<input id="origin" name='origin' type="text" placeholder="Food Origin" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm font-semibold">Quantity</label>
					<input id="quantity" name='quantity' type="number" placeholder="Quantity" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm font-semibold">Price</label>
					<input id="price" name='Price' type="number" placeholder="Price" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
			</div>
		</fieldset>
        <button className='w-2/3 mx-auto bg-orange-500 text-white font-semibold p-3 rounded-2xl' type="submit" value='add'>Purchase</button>
	</form>
</section>
        </div>
    );
};

export default AddedFood;