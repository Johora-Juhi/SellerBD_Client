import React from 'react';
import upCommingImage from '../../../assets/images/home/upcommig.png';
import './UpComming.css';
import Countdown from 'react-countdown';

const UpComming = () => {
    const Completionist = () => <span>New categories are launching.</span>;
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <div>
                <div className="flex justify-center gap-6 pt-10">
                    <div className='flex flex-col justify-center'>
                        <div className='time border border-secondary flex justify-center items-center mx-auto'>
                            <div className='text-2xl'>{hours}</div>
                        </div>
                        <h2 className='text-center text-lg mt-4'>Hours</h2>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='time border border-secondary flex justify-center items-center mx-auto'>
                            <div className='text-2xl'>{minutes}</div>
                        </div>
                        <h2 className='text-center text-lg mt-4'>Minutes</h2>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='time border border-secondary flex justify-center items-center mx-auto'>
                            <div className='text-2xl'>{seconds}</div>
                        </div>
                        <h2 className='text-center text-lg mt-4'>Seconds</h2>
                    </div>
                </div>
            </div>;
        }
    };
    return (
        <div className='upcomming'>
            <div className="w-3/4 mx-auto px-20 py-32">
                <div className="grid grid-cols-2 gap-8 justify-center items-center">
                    <div>
                        <img src={upCommingImage} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-5xl font-semibold'><span className='text-secondary '>Cooming</span> soon!</h1>
                        <h2 className='text-center text-xl mt-5 text-gray-500'>GET READY!!!</h2>
                        <Countdown
                            date={Date.now() + 9999999999}
                            renderer={renderer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpComming;