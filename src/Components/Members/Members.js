import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import leadersData from '../../data/Members/leadersData';
import { Helmet } from 'react-helmet';

const Members = () => {
    return (
        <div>
            <Helmet>
                <title>Members - Aachol Foundation</title>
                <meta name="title" content="Members | Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <div className="container my-5">
                <h1 className="text-center mt-5">Aachol Foundation</h1>
                <div style={{ width: '20%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted mx-auto">We are a bunch of youth who are determined to make this possible in our country, not to lose someone at a very young age due to suicide.
                    We dream of a better healthy social environment for the future generation and work every day towards making that dream come true.
                </p>
                <div className="row">
                        {leadersData.map(data =>
                    <div className="col-lg-3 col-md-4 col-sm-6 my-1 text-center">
                            <img style={{ borderRadius: '50%' }} src={data.image} alt={data.designation} className="img-fluid p-5 secondary-image" />
                            <h4 className="title-text fw-bold">{data.name}</h4>
                            <p className="text-muted">{data.designation}</p>
                    </div>
                        )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Members;