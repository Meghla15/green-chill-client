import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <h1 className='text-xl font-bold text-center text-orange-600 '>Testimonial</h1>
            <div>
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-orange-600 ">clients</span> say
        </h1>

        <p className="lg:w-2/3 md:w-2/3  w-full mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
        Green Chilli's website is a testament to our commitment to excellence. With captivating visuals and intuitive design, it effortlessly mirrors the vibrant atmosphere and delectable offerings of our restaurant. Seamlessly browse menus, make reservations, and immerse yourself in the culinary journey we offer, all at your fingertips.
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                    “Green Chilli delivers an exceptional dining experience every time. The ambiance is welcoming, the staff is attentive, and the food is simply outstanding. Whether you're a fan of classic Indian dishes or looking to try something new, this restaurant has something for everyone. I've never left disappointed and highly recommend it to anyone craving authentic flavors”.
                </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                    
                    <div className="mx-4">
                        <h1 className="font-semibold text-blue-500">Robbert</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-300">From : Poddopar, Rajshahi</span>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                    “I recently discovered Green Chilli and I'm already hooked! From the moment I stepped inside, I felt like I was transported to India. The aroma of spices, the vibrant decor, it all adds to the experience. But the real star is the food. Each dish is expertly prepared, bursting with flavor and freshness. It's evident that the chefs take pride in their craft. Green Chilli has quickly become my go-to spot for delicious Indian cuisine”.
                </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                    
                    <div className="mx-4">
                        <h1 className="font-semibold text-blue-500">Mia Brown</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-300">From : Sirajgong, Dhaka</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            </div>
        </div>
    );
};

export default Testimonial;