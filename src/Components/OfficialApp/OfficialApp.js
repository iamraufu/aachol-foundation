import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import logo from '../../logo.svg'
import { Helmet } from 'react-helmet';

const OfficialApp = () => {
    return (
        <div>
            <Navbar />
            <Helmet>
                <title>Official App of Aachol Foundation</title>
                <meta name="title" content="Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a social youth-led organization advocating mental health in Bangladesh." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <div className="container my-5">
                <h1 className="text-center mt-5 text-uppercase">Official App of Aachol Foundation</h1>
                <div style={{ width: '40%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    With a vast luminosity of traditional glory in the Mental Health sector, Aachol Foundation has the 1st official website in the organization history. Being a torch-bearer of this vibrant tradition, this time Aachol foundation has taken the initiative to launch their official app which will represent the organization in front of the whole world and spread the illumination and might of mental health across the globe. In addition to this, this app will be a great place to quench the thirst of counseling with a great variety of features to make the best out of it, keeping track of the ever-changing and dynamic world of mental health, and lot more beyond one’s imagination.
                </p>
                <img src={logo} alt="Official Logo of Aachol Foundation" className="img-fluid mx-auto d-block my-5" width="250" />
                <button className='btn-brand text-white fw-bold mx-auto d-block'>Download</button>
            </div>
            <Footer />
        </div>
    );
};

export default OfficialApp;