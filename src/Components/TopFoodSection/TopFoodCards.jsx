import { Link } from "react-router-dom";


const TopFoodCards = () => {
    return (
        <div>
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body space-y-3">
    <h2 className="card-title"></h2>
    <p className="text-center text-xl font-bold">Food Name</p>
    <div className="flex justify-around">
   <div className="flex">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>

   <p>Food category</p>
   </div>
    <div className="flex">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-orange-600 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

    <p>Price</p>
    </div>
    </div>
    <div className="card-actions">
    <button className="rounded-2xl bg-orange-600 text-white font-semibold px-5 text-xm py-3 w-2/3 mx-auto"><Link to=''>Explore Now</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default TopFoodCards;