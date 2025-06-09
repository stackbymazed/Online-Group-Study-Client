import React from 'react';
import FAQ from '../../Components/FAQ/FAQ';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
    return (
        <div className='min-h-screen lg:px-16 space-y-10'>
            <Hero></Hero>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;