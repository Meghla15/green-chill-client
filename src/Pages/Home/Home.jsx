
import { useEffect } from 'react';
import TopFoodSection from '../../Components/TopFoodSection/TopFoodSection';
import Banner from '../../Components/Banner';
import AboutUs from '../../Components/AboutUsHome/AboutUs';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Home = () => {
    useEffect (() =>{
        document.title ='Green Chilli | Home'
    },[])
    return (
        <div className='space-y-32 '>
            <Banner></Banner>
            <TopFoodSection></TopFoodSection>
            <AboutUs></AboutUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;