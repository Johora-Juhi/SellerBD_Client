import React from 'react';
import './AboutTeam.css';
import t1 from '../../../assets/images/about/t1.jpg';
import t2 from '../../../assets/images/about/t2.jpg';
import t3 from '../../../assets/images/about/t3.jpg';
import t4 from '../../../assets/images/about/t4.jpg';

const AboutTeam = () => {
    return (
        <div className='bg-black'>
            <div className="container mx-auto px-20 py-24">
                <div className='text-center'>
                    <h3 className='rainbow-text text-center inline'>OUR TEAM</h3>
                </div>
                <h2 className='text-white text-center text-5xl mt-10'>Meet Our Team</h2>
                <div className="grid grid-cols-4 gap-5 mt-20">
                    <div className='text-center'>
                        <img src={t1} alt="" />
                        <h3 className='text-white text-3xl mt-4 font-normal tracking-wide'>Mark Spencer</h3>
                        <h4 className='rainbow-text mt-1'>CEO</h4>
                    </div>
                    <div className='text-center'>
                        <img src={t2} alt="" />
                        <h3 className='text-white text-3xl mt-4 font-normal tracking-wide'>Manda Moore</h3>
                        <h4 className='rainbow-text mt-1'>ACCOUNTANT</h4>
                    </div>
                    <div className='text-center'>
                        <img src={t3} alt="" />
                        <h3 className='text-white text-3xl mt-4 font-normal tracking-wide'>Smith George</h3>
                        <h4 className='rainbow-text mt-1'>DIGITAL MARKETER</h4>
                    </div>
                    <div className='text-center'>
                        <img src={t4} alt="" />
                        <h3 className='text-white text-3xl mt-4 font-normal tracking-wide'>Lucas Watson</h3>
                        <h4 className='rainbow-text mt-1'>INVESTOR</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;