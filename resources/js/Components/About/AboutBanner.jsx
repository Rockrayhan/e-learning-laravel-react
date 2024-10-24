import React from 'react';

const AboutBanner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 my-16 gap-12'>
            <div className="col-span-1">
                <img src="assets/img/img9.png" alt="" />
            </div>

            <div className="col-span-1">
                <div className='flex flex-col gap-10'>
                    <h4 className='text-sky-600	font-semibold'> Not sure where to start ?</h4>
                    <h1 className='text-3xl font-bold text-teal-950	'>Want to know Special Offers & Updates of new courses?</h1>


                    <div className='flex'>
                        <div className='rounded-full bg-purple-700 center p-6 m-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-7 text-white ">
                                <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                            </svg>

                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'> Online Classes </h1>
                            <p className="text-gray-600 mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde animi quos! Quod dolores
                            </p>
                        </div>

                    </div>


                    <div className='flex'>
                        <div className='rounded-full bg-pink-700 center p-6 m-2'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 text-white ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                            </svg>

                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'> Get Certificate </h1>
                            <p className="text-gray-600 mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde animi quos! Quod dolores
                            </p>
                        </div>

                    </div>


                    <div className='flex'>
                        <div className='rounded-full bg-blue-600 center p-6 m-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 text-white ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>


                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'> Life Time Support </h1>
                            <p className="text-gray-600 mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde animi quos! Quod dolores
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutBanner;