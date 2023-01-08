import React from 'react';
import CountUp from 'react-countup';
import './CountUp.css';

const CountUpp = () => {
    return (
        <div className='container mx-auto px-20 py-20'>
            <div className="grid grid-cols-4 gap-5 justify-center">
                <div>
                    <div className='flex justify-center gap-2'>
                        <div className='w-1/4 text-right'><CountUp className='text-5xl font-semibold' delay={5000} end={12} enableScrollSpy={true} scrollSpyDelay= {500}/></div>
                        <div className='text-2xl w-1/4 text-orange-400'>+</div>
                    </div>
                    <div className='ml-20 mt-1 text-sm text-gray-500'>Years Experience</div>
                </div>
                <div>
                    <div className='flex justify-center gap-2'>
                        <div className='w-1/4 text-right'><CountUp className='text-5xl font-semibold' delay={5000} end={531} enableScrollSpy={true} scrollSpyDelay= {500} /></div>
                        <div className='text-2xl w-1/4 text-orange-400'>+</div>
                    </div>
                    <div className='ml-20 mt-1 text-sm text-gray-500'>Products Sold</div>
                </div>
                <div>
                    <div className='flex justify-center gap-2'>
                        <div className='w-1/4 text-right'><CountUp className='text-5xl font-semibold' delay={5000} end={132} enableScrollSpy={true} scrollSpyDelay= {500} /></div>
                        <div className='text-2xl w-1/4 text-orange-400'>+</div>
                    </div>
                    <div className='sep mt-1 text-sm text-gray-500'>Sellers</div>
                </div>
                <div>
                    <div className='flex justify-center gap-2'>
                        <div className='w-1/4 text-right'><CountUp className='text-5xl font-semibold' delay={5000} end={916} enableScrollSpy={true} scrollSpyDelay= {500} /></div>
                        <div className='text-2xl w-1/4 text-orange-400'>+</div>
                    </div>
                    <div className='ml-16 mt-1 text-sm text-gray-500'>Happy Customers</div>
                </div>
            </div>
        </div>
    );
};

export default CountUpp;