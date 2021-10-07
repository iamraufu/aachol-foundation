import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { Helmet } from 'react-helmet';

const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Register as a Member - Aachol Foundation</title>
                <meta name="title" content="Register as a Member | Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <div className="container my-5">
                <h1 className="text-center mt-5 text-uppercase">Register as a Member of Aachol Foundation</h1>
                <div style={{ width: '40%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    Aachol Foundation was <span className='fw-bold'>founded on 25th April 2019 by Mr. Tansen Rose</span>, who is an inspiring graduate of Dhaka University. During his university life he has observed how young generations suffering from mental health issues and couldn’t sharing with anyone. Which is leading this generation into depression, anxiety, suicide, low self-esteem so on. These incidents devastated him and made him evaluate, the ongoing situation of this generation’s mental health in Bangladesh. He grasped that as a nation how much this generation needs mental health support, because in the long run they are the pillar for future progressed Bangladesh. He started to research and found that according to <i>(World Health Organization 2014; Mashreky et al., 2013; Shahnaz et al., 2017; Begum et al., 2017a)</i> approximately one million people commit suicide every year worldwide 60% of all cases of suicide in the world occur in Asia and 39.6 per 100,000 in Bangladesh. From experiencing the incident to seeing the statistics triggered him to come up with a ground-breaking solution which may solve and create awareness for the students of this generation’s assorted mental health issues.
                    </p>

                    <h3 className='text-danger fw-bold text-center mt-5'>*Aachol Foundation Currently Not Recruiting Any Members*</h3>
            </div>
            <Footer />
        </div>
    );
};

export default Register;