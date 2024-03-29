import React from 'react';

import parrot from '../lotty.json';
import Lottie from 'lottie-react';

const Banner = () => {
    return (
            <div className='banner bg-cyan-950 text-white '>
                <div className='container grid grid-cols-1 lg:grid-cols-2 gap-20 '>
                    <div className="col-span-1 lg:col-span-1 mt-12">
                        <div className='flex flex-col text-center gap-10 justify-center h-full'>
                            <h1 className='text-5xl'> Upgrade your learning Skills <br />
                                & Upgrade your life </h1>
                            <h1 className='text-4xl text-center'> With </h1>
                            <h1 className='text-5xl font-serif text-blue-200'> Ektu Khani Tech </h1>
                            <div className='flex gap-6 justify-center'>
                                <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm p-5 text-center me-2 mb-2">Find Courses</button>

                                <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm p-5 text-center me-2 mb-2"> Get Started </button>



                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-1 mt-12">
                        <img src="assets/img/banner.png" alt="" />
                        <Lottie animationData={parrot}></Lottie>
                    </div>
                </div>
            </div>
    );
};

export default Banner;