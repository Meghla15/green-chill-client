import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const AboutUs = () => {
    useEffect (() =>{
        Aos.init();

    })
    return (
        <div className="container  mx-auto flex lg:flex-row flex-col lg:p-1 px-3 gap-10 " data-aos ="fade-up">
             <img src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA=" className="w-full h-full  rounded-xl "  alt="" />
    
        
        <div className="space-y-2">
            <h1 className="font-bold text-2xl text-orange-600">About Us</h1>
            <p className="font-bold text-3xl">Welcome To Green Chilli</p>
            <p className="w-full pr-3">Welcome to Green Chilli, where passion for flavor meets culinary craftsmanship. Nestled in the heart of Bougra, our restaurant invites you on a gastronomic journey through the vibrant world of Indian cuisine. <br /> <br /> From sizzling tandoori delights to aromatic curries and delectable vegetarian options, each dish at Green Chilli is a celebration of authenticity and quality ingredients. Join us and experience the warmth of Indian hospitality and the unforgettable taste of tradition. </p>
            <div className="flex">
            <div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl text-orange-600">50+</p>
			<p className="text-sm sm:text-base">Clients</p>
		</div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl text-orange-600">89K</p>
			<p className="text-sm sm:text-base">Followers on social media</p>
		</div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl text-orange-600">22</p>
			<p className="text-sm sm:text-base">Years of experience</p>
		</div>
            </div>
        </div>
        
        </div>
       
    );
};

export default AboutUs;