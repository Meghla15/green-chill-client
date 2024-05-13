import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailPage = () => {
  const food = useLoaderData();
  const {
    _id,
    photo,
    category,
    food_name,
    price,
    description,
    made_by,
    food_origin,
  } = food || {};
  // console.log(food);
  useEffect(() => {
    document.title = "Green Chilli | Details Page";
  }, []);
  return (
    <div>
      <section className="bg-orange-50 mb-20  ">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={photo}
              alt="Loading....."
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-sm text-blue-500 uppercase">
                Category : {category}
              </p>

              <p className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                Food Name : {food_name}
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {description}
              </p>

              <div className="flex gap-5">
                <p>
                  Food Origin :{" "}
                  <span className="inline-block mt-2 text-orange-500 hover:text-blue-400">
                    {food_origin}
                  </span>
                </p>

                <p>
                  Made By :{" "}
                  <span className="inline-block mt-2 text-orange-500 hover:text-blue-400">
                    {made_by}
                  </span>
                </p>

                <p>
                  Price :{" "}
                  <span className="inline-block mt-2 text-orange-500 hover:text-blue-400">
                    ${price}
                  </span>
                </p>
              </div>

              <div className="flex gap-12 mt-6">
               <Link to={`/purchase/${_id}`}> <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-orange-600 text-orange-600 ">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-orange-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-orange-600 transition duration-300 group-hover:text-white ease">
                    Purchase Now
                  </span>
                </button></Link>

               <Link to='/orderFood'> <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-orange-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-600 group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Go Home</span>
</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
