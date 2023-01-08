import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import AboutTeam from '../AboutTeam/AboutTeam';
import CountUpp from '../CountUp/CountUpp';
import OurServices from '../OurServices/OurServices';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <AboutTeam></AboutTeam>
            <CountUpp></CountUpp>
            <OurServices></OurServices>
        </div>
    );
};

export default About;