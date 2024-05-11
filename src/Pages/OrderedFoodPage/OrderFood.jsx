
const OrderFood = () => {
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex gap-16 justify-between">
    <h2 className="card-title">Food Name</h2>
    <p>icon</p>
    </div>
   <div className="flex justify-between">
    <p>clock outline</p>
    <p>price</p>
   </div>
    <p className="font-semibold text-xl">Owner name : </p>
  </div>
</div>
        </div>
    );
};

export default OrderFood;