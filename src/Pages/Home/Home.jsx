
import { useEffect } from 'react';
import TopFoodSection from '../../Components/TopFoodSection/TopFoodSection';
import Banner from '../../Components/Banner';

const Home = () => {
    useEffect (() =>{
        document.title ='Green Chilli | Home'
    },[])
    return (
        <div className='space-y-32 '>
            <Banner></Banner>
            <TopFoodSection></TopFoodSection>
        </div>
    );
};

export default Home;