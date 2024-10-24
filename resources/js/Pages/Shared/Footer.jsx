import React from 'react';

const Footer = () => {
    return (
       <div className='footer pt-24 pb-6 text-white flex items-end h-fit'>
       <div className="container">
       <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 text-center text-white'>
            <div className="col-span-2 flex flex-col gap-5"> 
            <h1 className='text-4xl font-serif text-blue-200'>Ektu Khani Tech </h1>
            <p className='text-gray-300'>Edumel is a Bootstrap Template for online courses education websites support multiple courses</p>

            <h1> Connect: F T L </h1>
            </div>
            <div className="col-span-1 flex flex-col gap-5">
            <h1 className='text-2xl text-blue-100'> Explore </h1>
            <a className='text-gray-300' href=""> <h5> About US  </h5> </a>
            <a className='text-gray-300' href=""> <h5> Contact US  </h5> </a>
            <a className='text-gray-300' href=""> <h5> Service  </h5> </a>
            <a className='text-gray-300' href=""> <h5> Support  </h5> </a>
            </div>

            <div className="col-span-1 flex flex-col gap-5">
            <h1 className='text-2xl text-blue-100'> Programs </h1>
            <a className='text-gray-300' href=""> <h5> Digital Marketing  </h5> </a>
            <a className='text-gray-300' href=""> <h5> Debugging </h5> </a>
            <a className='text-gray-300' href=""> <h5> Online Gaming   </h5> </a>
            <a className='text-gray-300' href=""> <h5>  Social Marketing  </h5> </a>
            </div>

            <div className="col-span-1 flex flex-col gap-5">
            <h1 className='text-2xl text-blue-100'> Links </h1>
            <a className='text-gray-300' href=""> <h5> News & Blogs  </h5> </a>
            <a className='text-gray-300' href=""> <h5> Privacy Policy  </h5> </a>
            <a className='text-gray-300' href=""> <h5> Support  </h5> </a>
            <a className='text-gray-300' href=""> <h5> Return Policy  </h5> </a>
            </div>

            <div className="col-span-1 flex flex-col gap-5">
            <h1 className='text-2xl text-blue-100'> Address </h1>
            <a className='text-gray-300' href=""> <h5> +880 1682011307  </h5> </a>
            <a className='text-gray-300' href=""> <h5> support@ekt.com  </h5> </a>
            <a className='text-gray-300' href=""> <h5>  Agargaon, Taltola  </h5> </a>
            <a className='text-gray-300' href=""> <h5>  Dhaka, Bangladesh  </h5> </a>
            </div>

        </div>

        <hr className='mt-10' />
        <div className='flex justify-between mt-10'>
            <p> @ 2023 ALL Right Reserved by <span className='font-serif text-blue-200'>Ektu Khani Tech</span> </p>
            <div className='flex justify-evenly gap-14'>
                <p> Terms Of Service </p>
                <p>Join Us</p>
                <p>Privecy Policy</p>
            </div>
        </div>
       </div>
       </div>
    );
};

export default Footer;