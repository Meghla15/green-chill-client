import { useEffect } from "react";


const Gallery = () => {
    useEffect (() =>{
        document.title ='Green Chilli | Gallery'
    },[])
    return (
        <div>
            <h1>this is Gallery

            </h1>
        </div>
    );
};

export default Gallery;