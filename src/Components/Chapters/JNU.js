import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import chapter from '../../data/Chapters/chapters'
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const JNU = () => {
    return (
        <div>

            <Helmet>
                <title>Jagannath University Chapter - Aachol Foundation</title>
                <meta name="title" content="Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a social youth-led organization advocating mental health in Bangladesh." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>
            
            <Navbar />
            {chapter.slice(2, 3).map(data =>
                <div className="container mb-5">
                    <img style={{ borderRadius: '15px' }} src={data.image} alt="JNU Chapter of Aachol Foundation" className="img-fluid mt-5" />
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
        </div>
    );
};

export default JNU;