import React from 'react';
import './AboutBanner.css';
import lap from '../../../assets/images/about/asus-zenbook-UX303LN.png';
import sel from '../../../assets/images/about/seller2.jpg';
import Navbar from '../../Shared/Navbar/Navbar';
import HomeAboutSection from '../../Home/HomeAboutSection/HomeAboutSection';

const AboutBanner = () => {
    return (
        <>
        <div className='proBanner'>
            <Navbar></Navbar>
                <h1 className='text-7xl font-bold tracking-widest uppercase text-center mt-32 font text-white animate__animated animate__fadeInDown'>About</h1>
            </div>
            <div className='wave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,176C320,192,400,256,480,256C560,256,640,192,720,186.7C800,181,880,235,960,261.3C1040,288,1120,288,1200,272C1280,256,1360,224,1400,208L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L1440,0L1440,320L0,320Z"></path></svg> */}
        </div>
        <div className='mb-32 mt-24'>
        <HomeAboutSection></HomeAboutSection>
        </div>
        </>
    );
};

export default AboutBanner;

  // <div className='aboutBanner container mx-auto px-20 py-20'>
        //     <div className="grid grid-cols-2 gap-5">
        //         <div className='px-10'>
        //             <h1 className='text-4xl font-semibold mb-8'>ASUS ZenBook UX303LN 5th Gen</h1>
        //             <h5 className='mb-7 text-base bg-orange-100 border border-orange-300 rounded-md inline px-5 py-3'><span className='text-center mr-1 font-semibold'>৳14,500</span> <span className='text-gray-400' style={{ textDecoration: 'line-through' }}>৳32,000</span> </h5>
        //             <h2 className='font-semibold mt-10 mb-3 text-xl'>Product Specification</h2>
        //             <div className='flex'>
        //                 <div className='border-r-2 border-gray-300 pr-5'>
        //                     <h3 className='text-sm text-gray-500'>RAM | ROM</h3>
        //                     <h4 className='font-semibold'>16GB | 1 TB</h4>
        //                 </div>
        //                 <div className='border-r-2 border-gray-300 px-5'>
        //                     <h3 className='text-sm text-gray-500'>Processor</h3>
        //                     <h4 className='font-semibold'>Core i7</h4>
        //                 </div>
        //                 <div className='border-r-2 border-gray-300 px-5'>
        //                     <h3 className='text-sm text-gray-500'>Camera</h3>
        //                     <h4 className='font-semibold'>1 MP</h4>
        //                 </div>
        //                 <div className='px-5'>
        //                     <h3 className='text-sm text-gray-500'>Sim</h3>
        //                     <h4 className='font-semibold'>Dual Sim</h4>
        //                 </div>
        //             </div>
        //             <h2 className='font-semibold mt-10 mb-3 text-xl'>Condition</h2>
        //             <div className='flex'>
        //                 <div className='border-r-2 border-gray-300 pr-5'>
        //                     <h3 className='text-sm text-gray-500'>Status</h3>
        //                     <h4 className='font-semibold'>Good</h4>
        //                 </div>
        //                 <div className='border-r-2 border-gray-300 px-5'>
        //                     <h3 className='text-sm text-gray-500'>Scratch</h3>
        //                     <h4 className='font-semibold'>No Scratch</h4>
        //                 </div>
        //                 <div className='px-5'>
        //                     <h3 className='text-sm text-gray-500'>Connectivity</h3>
        //                     <h4 className='font-semibold'>No Issue</h4>
        //                 </div>
        //             </div>
        //             <h2 className='font-semibold mt-10 mb-3 text-xl'>Battery Condition</h2>
        //             <div className='flex'>
        //                 <div className='pr-5'>
        //                     <h3 className='text-sm text-gray-500'>Battery Health</h3>
        //                     <h4 className='font-semibold'>84%</h4>
        //                 </div>
        //             </div>
        //             <h2 className='font-semibold mt-10 mb-3 text-xl'>Used Time</h2>
        //             <div className='flex'>
        //                 <div className='pr-5'>
        //                     <h3 className='text-sm text-gray-500'>Year Of Use</h3>
        //                     <h4 className='font-semibold mb-10'>2 Years</h4>
        //                 </div>
        //             </div>
        //             <div className='w-3/4 border-2 border-orange-400 rounded-tl-3xl rounded-br-3xl p-10'>
        //                 <div className='flex justify-evenly items-center'>
        //                     <img style={{ width: '100px' }} className="rounded-full" src={sel} alt="" />
        //                     <div>
        //                         <h2 className='font-semibold mb-2'>Alex Josef</h2>
        //                         <h2 className='text-gray-500 text-xs mb-1'>Email: alex@gmail.com</h2>
        //                         <h2 className='text-gray-500 text-xs mb-1'>Phone: +880 3434 35342</h2>
        //                         <h2 className='text-gray-500 text-xs'>Location: Chattogram</h2>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='mx-auto'>
        //             <img src={lap} alt="" />
        //         </div>
        //     </div>
        // </div >