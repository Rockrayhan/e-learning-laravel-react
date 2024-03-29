import React, { useEffect, useState } from "react";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./fakedata.json");
        const data = await response.json();

        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-5">
        Here are Our latest Courses
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  container my-16">
        {courses.slice(0, 3).map((data) => (
          <Course
            key={data.id}
            data={data}
            // handleAddToCart={handleAddToCart}
          ></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
