
import Header from '@/Pages/Shared/Header';
import Footer from '@/Pages/Shared/Footer';
import { usePage } from '@inertiajs/react';
import React from 'react';


const FrontendLayout = ({ children }) => {
    const {  userData , products, categories, reviews, students, loginMsg} = usePage().props; 
    //used usepage().props rather than direct distructuring (like children) because it can't get data 
    const { user, token } = userData ;

    return (
        <div>
<Header userData={userData} ></Header>

        <main class="main" id="top">
    {children}
        </main>

    <Footer></Footer>
        </div>
    );
};

export default FrontendLayout;