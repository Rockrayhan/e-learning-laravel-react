import React from 'react';

const TopInstructors = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-40 10 gap-6 container'>
            <div className="col-span-1">
                <div className='flex flex-col gap-10'>

                    <h4 className='text-sky-600	font-semibold'> Not sure where to start ?</h4>
                    <h1 className='text-4xl font-bold text-teal-950	'>Our Top Instructors</h1>
                    <p className='text-gray-600'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quis facere obcaecati dolores distinctio amet explicabo! Delectus molestiae enim numquam, necessitatibus, sit sint nam ut at esse rerum sequi placeat.
                    </p>

                    <div className='flex gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class=" h-6 text-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <h3 className='text-xl font-semibold'>Develop your skills Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                    </div>

                    <div className='flex gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class=" h-6 text-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <h3 className='text-xl font-semibold'>Share your knowledge Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                    </div>

                    <div className='flex gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class=" h-6 text-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <h3 className='text-xl font-semibold'>Earn from globally Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                    </div>

                    <button className='bg-red-500 font-bold text-white p-4 w-2/6 rounded-lg'> Start Teching Today </button>

                </div>
            </div>

            <div className="col-span-1">
                <div className='grid grid-cols-2 gap-6'>
                    {/* each instructor card */}
                    <div className='col-span-1 bg-white '>
                        <div className='p-5 flex flex-col gap-5 rounded-md border border-sky-950'>
                            <img src="assets/img/team-1.jpg" alt="" />
                            <h1 className='text-2xl font-semibold'> Walter White </h1>
                            <h6 className='text-gray-600'> Marketer </h6>
                            <div className='flex gap-4'>

                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <p>20 Students</p>

                                </div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    <p> 5 courses</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* each instructor card */}
                    <div className='col-span-1 bg-white '>
                        <div className='p-5 flex flex-col gap-5 rounded-md border border-sky-950'>
                            <img src="assets/img/team-2.jpg" alt="" />
                            <h1 className='text-2xl font-semibold'> Jessy Pinkman </h1>
                            <h6 className='text-gray-600'> Sub Meth Instructor </h6>
                            <div className='flex gap-4'>

                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <p>20 Students</p>

                                </div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    <p> 5 courses</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* each instructor card */}
                    <div className='col-span-1 bg-white '>
                        <div className='p-5 flex flex-col gap-5 rounded-md border border-sky-950'>
                            <img src="assets/img/team-3.jpg" alt="" />
                            <h1 className='text-2xl font-semibold'> Billy Butcher </h1>
                            <h6 className='text-gray-600'> Marketer </h6>
                            <div className='flex gap-4'>

                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <p>20 Students</p>

                                </div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    <p> 5 courses</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* each instructor card */}
                    <div className='col-span-1 bg-white '>
                        <div className='p-5 flex flex-col gap-5 rounded-md border border-sky-950'>
                            <img src="assets/img/team-4.jpg" alt="" />
                            <h1 className='text-2xl font-semibold'> John Centa </h1>
                            <h6 className='text-gray-600'> Marketer </h6>
                            <div className='flex gap-4'>

                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <p>20 Students</p>

                                </div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    <p> 5 courses</p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default TopInstructors;