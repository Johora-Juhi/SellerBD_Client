import React from 'react';
import AdvertiseItem from '../AdvertiseItem/AdvertiseItem/AdvertiseItem';
import Banner from '../Banner/Banner';
// import Copyright from '../Copyright/Copyright';
import CustomerLove from '../CustomerLove/CustomerLove';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import HomeAboutSection from '../HomeAboutSection/HomeAboutSection';
import ProductCategories from '../ProductCategories/ProductCategories';
import UpComming from '../UpComming/UpComming';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAboutSection></HomeAboutSection>
            <ProductCategories></ProductCategories>
            <AdvertiseItem></AdvertiseItem>
            <UpComming></UpComming>
            <FeatureProduct></FeatureProduct>
            <CustomerLove></CustomerLove>
            {/* <Copyright></Copyright> */}
        </div>
    );
};

export default Home;