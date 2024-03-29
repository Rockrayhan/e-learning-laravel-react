import React from 'react';

const Catagories = () => {
    return (
        <div className='bg-slate-200 py-16 mt-10'>
            <div className='catagories container text-center '>
                <h1 className='text-4xl font-bold '> Catagories You Want To Learn </h1>
                <p className='text-gray-600 mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam unde voluptate, . </p>

                <div className='center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-12 gap-10'>

                        {/* catagories card */}
                        <div className="col-span-1 bg-orange-500 catagories-card  center flex-col rounded-2xl text-white hover:bg-slate-400 hover:text-black gap-4">
                            <div className='bg-white rounded-full center p-5 w-2/4'>
                                <img className='w-3/5' src="assets/img/icon1.png" alt="" />
                            </div>
                            <h1 className=' text-xl font-semibold'> Data Science & Analytics </h1>
                        </div>
                        <div className="col-span-1 bg-lime-500	catagories-card  center flex-col rounded-2xl text-white hover:bg-slate-400		 hover:text-black gap-4">
                            <div className='bg-white rounded-full center p-5 w-2/4'>
                                <img className='w-3/5' src="assets/img/icon2.png" alt="" />
                            </div>
                            <h1 className=' text-xl font-semibold'> Artificial Inteligence </h1>
                        </div>
                        <div className="col-span-1 bg-rose-600 catagories-card  center flex-col rounded-2xl text-white hover:bg-slate-400 hover:text-black gap-4">
                            <div className='bg-white rounded-full center p-5 w-2/4'>
                                <img className='w-3/5' src="assets/img/icon3.png" alt="" />
                            </div>
                            <h1 className=' text-xl font-semibold'> Algebra Math </h1>
                        </div>
                        <div className="col-span-1 bg-sky-600 catagories-card  center flex-col rounded-2xl text-white hover:bg-slate-400 hover:text-black gap-4">
                            <div className='bg-white rounded-full center p-5 w-2/4'>
                                <img className='w-3/5' src="assets/img/icon4.png" alt="" />
                            </div>
                            <h1 className=' text-xl font-semibold'> Web Development </h1>
                        </div>
                        <div className="col-span-1 bg-pink-500 catagories-card  center flex-col rounded-2xl text-white hover:bg-slate-400 hover:text-black gap-4">
                            <div className='bg-white rounded-full center p-5 w-2/4'>
                                <img className='w-3/5' src="assets/img/icon2.png" alt="" />
                            </div>
                            <h1 className=' text-xl font-semibold'> Digital Marketing & SEO </h1>
                        </div>




                    </div>
                </div>

            </div>
        </div>
    );
};

export default Catagories;