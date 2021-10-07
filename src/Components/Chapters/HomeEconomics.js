import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import chapter from '../../data/Chapters/chapters'
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const HomeEconomics = () => {
    return (
        <section>
            
            <Helmet>
                <title>Home Economics Chapter - Aachol Foundation</title>
                <meta name="title" content="Home Economics Chapter | Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            {chapter.slice(0, 1).map(data =>
                <div className="container mb-5">
                    <img style={{ borderRadius: '15px' }} src={data.image} alt="Eden Mohila College Chapter of Aachol Foundation" className="img-fluid mt-5 mx-auto d-block" />
                    <div className="d-flex pt-5 mt-5">
                        <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                        <h1 className="text-brand fw-bold pt-4 ps-3">{data.name}</h1>
                    </div>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">{data.description}</p>
                    <div className="d-flex pt-5 mt-5">
                        <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                        <h1 className="text-brand fw-bold pt-4 ps-3">Executives</h1>
                    </div>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">Executives will be updated soon</p>
                </div>)}
            <Footer />
        </section>
    );
};

export default HomeEconomics;