
import { useEffect } from 'react';
import Carousel from '../../Components/Carousel';
import TopFoodSection from '../../Components/TopFoodSection/TopFoodSection';

const Home = () => {
    useEffect (() =>{
        document.title ='Green Chilli | Home'
    },[])
    return (
        <div className='space-y-32 container mx-auto'>
            <Carousel></Carousel>
            <TopFoodSection></TopFoodSection>
        </div>
    );
};

export default Home;