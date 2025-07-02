import React from 'react';
import FAQ from '../../Components/FAQ/FAQ';
import Hero from '../../Components/Hero/Hero';
import Testimonials from '../../Components/Testimonials/Testimonials';
import FeatureSection from '../../Components/FeatureSection/FeatureSection';

const Home = () => {
    return (
        <div className='min-h-screen lg:px-16 space-y-10 max-w-[1400px] mx-auto'>
            <Hero></Hero>
            <FeatureSection></FeatureSection>
            <Testimonials></Testimonials>
            <FAQ></FAQ>

        </div>
    );
};

export default Home;