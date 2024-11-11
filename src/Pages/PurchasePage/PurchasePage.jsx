import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";

const PurchasePage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const { user } = UseAuth();
  const food = useLoaderData();
  const { food_name, price, photo } = food || {};

  const handlePurchase = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const food_name = form.food_name.value;
    const price = parseFloat(form.price.value);
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const date = startDate;

    const purchaseFood = {
      name,
      email,
      food_name,
      price,
      quantity,
      photo,
      date,
    };
    console.log(purchaseFood);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/purchase`,
        purchaseFood
      );
      console.log(data);
      toast.success("Purchase Successfully");
      navigate("/orderFood");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Green Chilli | Purchase Page";
  }, []);

  return (
    <div className="border w-2/3 py-8 container mx-auto bg-gray-50 mt-14 mb-48">
      <h1 className="text-center text-orange-600 font-bold text-3xl p-4">
        Purchase Now{" "}
      </h1>

      <section className="p-6  text-gray-900">
        <form
          onSubmit={handlePurchase}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-8 gap-4 col-span-full lg:col-span-4">
              <div className="col-span-full sm:col-span-4">
                <label className="text-xm font-semibold">User name</label>
                <input
                  disabled
                  name="name"
                  type="text"
                  placeholder="User name"
                  defaultValue={user?.displayName || "Name not found"}
                  className=" p-2  text-green-600 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-4">
                <label className="text-xm font-semibold">User Email</label>
                <input
                  name="email"
                  type="text"
                  disabled
                  defaultValue={user?.email}
                  placeholder="User Email"
                  className=" p-2 text-green-600 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label className="text-sm font-semibold">Food Name</label>
                <input
                  disabled
                  name="food_name"
                  type="text"
                  placeholder="Food name"
                  defaultValue={food_name}
                  className="w-full p-2  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-xm font-semibold">Price</label>
                <input
                  disabled
                  name="price"
                  type="text"
                  placeholder="Price"
                  defaultValue={price}
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full  sm:col-span-2">
                <label className="text-xm font-semibold">Quantity</label>
                <input
                  name="quantity"
                  type="number"
                  placeholder="Quantity"
                  required
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-xm font-semibold">Buying Date</label>
                <DatePicker
                  disabled
                  className="w-full p-2 rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="col-span-full hidden  sm:col-span-2">
                <label className="text-xm font-semibold">Photo</label>
                <input
                  defaultValue={photo}
                  name="photo"
                  type="text"
                  placeholder="photo"
                  required
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <button
            className="w-full bg-orange-500 text-white font-semibold p-3 rounded-2xl"
            type="submit"
            value="add"
          >
            Purchase
          </button>
        </form>
      </section>
    </div>
  );
};

export default PurchasePage;
