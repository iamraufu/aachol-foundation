import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Carousel from './Carousel';
import Department from './Department';
import Mission from './Mission';
import { Helmet } from 'react-helmet';
import HomeChapters from './HomeChapters';
import Partners from './Partners';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <main>

            <Helmet>
                <title>Aachol Foundation - You Always Matter</title>
                <meta name="title" content="Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <Carousel />
            <Mission />
            <Department />
            <HomeChapters />
            <Partners />
            <Subscribe />
            <Footer />
        </main>
    );
};

export default Home;