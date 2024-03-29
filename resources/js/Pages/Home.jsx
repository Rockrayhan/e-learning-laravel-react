import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import FrontendLayout from '@/Layouts/FrontendLayout';
import Banner from '@/Components/Banner';
import AboutCounter from '@/Components/AboutCounter';
import Catagories from '@/Components/Catagories';
import Types from '@/Components/Types';
import Courses from '@/Components/Courses';
import TopInstructors from '@/Components/About/TopInstructors';
import Testimonial from '@/Components/Testimonial';
import Subscribe from '@/Components/Subscribe';



const Home = (props) => {
    const {products, categories, reviews, students, loginMsg } = usePage().props ;

    
    const CategoryName = (id) => {
      const category = categories.find(cat => cat.id === id);
      return category ? category.name : 'Unknown Category';
  };
    const studentName = (id) => {
      const student = students.find(stu => stu.id === id);
      return student ? student.name : 'Unknown Name';
  };

    return (
        <>
      <div>


<FrontendLayout>
<div>

{
          loginMsg && <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong> {loginMsg} </strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        }
<div>

        <Banner></Banner>
        <AboutCounter></AboutCounter>
        <Catagories></Catagories>
        <Types></Types>
        {/* <Courses></Courses> */}
        <TopInstructors></TopInstructors>
        {/* <Testimonial></Testimonial> */}
        <Subscribe></Subscribe>

</div>



</div>
</FrontendLayout>


</div>
</>
    );
};

export default Home;