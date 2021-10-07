import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import publication_cover from '../../images/publication_cover.png';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';
import publicationData from '../../data/Publications/publicationData';

const Publications = () => {


    return (
        <div>

            <Helmet>
                <title>Publications - Aachol Foundation</title>
                <meta name="title" content="Publications | Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <div className="container my-5">
                <img style={{ borderRadius: '15px' }} src={publication_cover} alt="Media Coverage of Aachol Foundation" className="img-fluid mx-auto d-block" />

                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Publications</h1>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted mx-auto">
                    Aachol Foundation's research and analysis unit is working heart and soul for collecting and representing the states of student's mental health, the mental health issues they are facing and ways to come out from those issues. The datas research and analysis unit is collecting and making are for every one to know where  the mental health state of the students of our country lies and how can we make it better.
                </p>
                    {
                        publicationData.map(data =>
                            <div className="my-5">
                                <h3 className="text-brand fw-bold text-center">{data.title}</h3>
                                <div style={{ width: '40%', height: '2px', backgroundColor: 'black' }} className="container line my-5"></div>
                                <iframe className="my-5" title={data.title} src={data.link} width="100%" height='1000'></iframe>
                            </div>
                        )}
            </div>
            <Footer />
        </div>
    );
};

export default Publications;