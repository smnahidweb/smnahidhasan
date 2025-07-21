import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';


const HomeLayout = () => {
    return (
        <div>
           <div className='mb-10'>
           <Navbar></Navbar>
           </div>
          
           <div className='min-h-screen'>
            <Outlet>

            </Outlet>
           </div>
           <div>

           <Footer></Footer>
           </div>
        </div>
    );
};

export default HomeLayout;