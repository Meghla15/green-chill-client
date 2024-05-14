import { useLoaderData } from "react-router-dom";
import "./Gallery.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const foods = useLoaderData();
  // console.log(foods)
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="">
      <div
        className="hero h-48 mb-6"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-88.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715558400&semt=sph)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-green-500 font-bold">
              Green Chilli
            </h1>
            <p className="mb-5">
              Home | <span className="text-orange-600">Gallery</span>
            </p>
          </div>
        </div>
      </div>
      <button
        className="btn mt-2 text-center mx-auto w-1/3 mb-3"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Add Review
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form action="" className="space-y-2">
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full max-w-xs"
            />
            <textarea
              placeholder="Feedback"
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
            ></textarea>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div
        className="mx-auto container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 "
        data-aos="fade-right"
      >
        {foods.map((item) => (
          <div key={foods._id} className="card">
            <img className="card-img" src={item.photo} alt="" />

            <div className="card-body">
              <div className=" card-title flex flex-col text-white">
                <h1 className="card-title">{item.food_name}</h1>
                <p className="card-sub-title text-xs">{item.description}</p>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
