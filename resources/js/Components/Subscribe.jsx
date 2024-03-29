import React from 'react';

const Subscribe = () => {
    return (
        <div className='container center rounded-2xl bg-slate-200 w-4/5 p-10 subscribe-section mt-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='col-span-1'>
                    <img src="assets/img/img9.png" alt="" />
                </div>
                <div className='col-span-2'>
                    <div className='flex flex-col gap-6'>
                        <h4 className='text-sky-600	font-semibold'> Not sure where to start ?</h4>      
                        <h1 className='text-3xl font-bold text-teal-950	'>Want to know Special Offers & Updates of new courses?</h1>
                        <button className='bg-pink-600 font-bold text-white p-4 w-2/6'>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;