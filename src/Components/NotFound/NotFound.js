import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <section>
            <Helmet>
                <title>Page not found - Aachol Foundation</title>
                <meta name="title" content="Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <div style={{height:'600px'}} className=" container my-5">
                <h1 style={{ fontSize: '16vw' }} className="mt-5 text-center fw-bold">404</h1>
                <h3 style={{fontSize: '20px' }} className="fw-bold text-center text-uppercase">The page you're looking for does not exist</h3>
                </div>
            <Footer />
        </section>
    );
};

export default NotFound;