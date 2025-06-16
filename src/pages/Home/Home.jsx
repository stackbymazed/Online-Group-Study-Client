import React from 'react';
import FAQ from '../../Components/FAQ/FAQ';
import Hero from '../../Components/Hero/Hero';
import Testimonials from '../../Components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='min-h-screen lg:px-16 space-y-10'>
            <Hero></Hero>
            <Testimonials></Testimonials>
            <FAQ></FAQ>

        </div>
    );
};

export default Home;