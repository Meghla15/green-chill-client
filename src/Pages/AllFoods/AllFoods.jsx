import { useEffect } from "react";

const AllFoods = () => {
    useEffect (() =>{
        document.title ='Green Chilli | All Food'
    },[])
    return (
        <div>
            <h1>this is all foods page</h1>
        </div>
    );
};

export default AllFoods;