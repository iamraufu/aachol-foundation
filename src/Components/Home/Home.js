import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Carousel from './Carousel';
import Department from './Department';
import Mission from './Mission';
import { Helmet } from 'react-helmet';
import HomeChapters from './HomeChapters';

const Home = () => {
    return (
        <main>

            <Helmet>
                <title>Aachol Foundation - You Always Matter</title>
                <meta name="title" content="Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a social youth-led organization advocating mental health in Bangladesh." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <Carousel />
            <Mission />
            <Department />
            <HomeChapters />
            <Footer />
        </main>
    );
};

export default Home;