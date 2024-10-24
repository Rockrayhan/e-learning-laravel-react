import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import walking from "../walking.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const myCourse = useLoaderData();
  // console.log(myCourse);
  const { id } = useParams();
  const idInt = parseInt(id);
  const item = myCourse.find((job) => job.id === idInt);
  console.log(item);

  // const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      
      e.preventDefault();
      alert("order Confirmed");
    //   alert.preventDefault();
    // userInsert();
    // navigate('/courses')
  };

  // const handleChange = (e)=> {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     setUserInfo((val)=>({...val, [name]:value}));
  // }

  //     const userInsert = () => {
  //         // Include default values for course_name and price
  //         const dataToSend = {
  //           ...userInfo,
  //           course_name: myCourse[0].course,
  //           price: myCourse[0].price,
  //         };

  //         axios.post("http://localhost/wdpf55_react/react-tailwind/api/orders.php", dataToSend).then((res) => {
  //           alert(res.data.msg);
  //         });
  //       };

  // console.log(userInfo);

  return (
    <div className="container">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 mt-5">
        <div className="col-span-2 flex flex-col gap-6">
          <h1 className="text-4xl text-orange-900 font-bold">
            
            Course Name: {item.course}
          </h1>

          <h1 className="text-2xl font-semibold border-b-2 border-red-800 bg-red-300 p-5">
            
            OverView
          </h1>

          <div className=" bg-orange-200 rounded-xl py-10 p-5">
            <h6 className="text-2xl font-bold my-4"> Course Description : </h6>
            <p className="text-gray-600">{item.desc}</p>

            <p className="font-semibold"> Get The Course at: ${item.price} </p>

            <div>
              <h6 className="text-xl font-bold my-4 ">
                
                What You’ll get From US
              </h6>
              <ul class="list-disc space-y-2 text-gray-600 p-6">
                <li>Rapid and Efficient Styling with Utility Classes</li>
                <li>Responsive Design Made Easy</li>
                <li>Consistent and Predictable Styling</li>
                <li>Extensive Library of Pre-built Components</li>
                <li>Streamlined Workflow for Faster Development</li>
              </ul>
            </div>

            <div>
              <h6 className="text-xl font-bold my-4">Cirtification</h6>
              <p className="text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, impedit corporis sunt odio pariatur doloremque
                debitis, iste, rem accusamus fuga ut dicta voluptatibus officiis
                non ipsum neque ullam. Quos, quae.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-16">
          <div className="border-2 rounded-lg p-6 flex flex-col">
            <div className="bg-yellow-400 rounded-xl">
              <Lottie animationData={walking}></Lottie>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
              <p className="font-semibold border-red-600 border p-2">
                
                Course Title -
                <span className="text-xl text-red-500">{item.course}</span>
              </p>

              <p className="font-semibold my-5 border-red-600 border p-2">
                
                Price $ -
                <span className="text-xl text-red-500">{item.price}</span>
              </p>

              <input
                type="text"
                name="user_name"
                // onChange={handleChange}
                placeholder="Enter your name"
                className="py-2 px-4 mb-4 border-2 rounded-md w-full"
                required
              />

              <input
                type="text"
                name="mobile"
                // onChange={handleChange}
                placeholder="Enter Your Number"
                className="py-2 px-4 mb-4 border-2 rounded-md w-full"
                required
              />

              <button
                className="py-2 px-4 bg-red-600 hover:bg-orange-500 text-white font-bold rounded-md cursor-pointer"
                type="submit"
                name="submit"
              >
                Enroll Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
