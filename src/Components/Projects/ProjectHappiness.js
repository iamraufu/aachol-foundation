import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import project from '../../data/Projects/projects';
import happiness from '../../images/happiness.jpg';
import session1 from '../../images/session1.jpg';
import session2 from '../../images/session2.jpg';
import session4 from '../../images/session4.jpg';
import event from '../../images/event.jpg';
import happinessData from '../../data/Projects/happinessData';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const ProjectHappiness = () => {
    return (
        <div>
            <Helmet>
                <title>Project Happiness - Aachol Foundation</title>
                <meta name="title" content="Project Happiness - Aachol Foundation" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            {project.slice(2, 3).map(data =>
                <div className="container">
                    <h1 className="text-center mt-5 text-uppercase">{data.name}</h1>
                    <div style={{ width: '20%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>
                    <img style={{ borderRadius: '15px' }} src={happiness} alt="Project Happiness" className="img-fluid mt-5 mx-auto d-block" />
                    <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">{data.description}</p>
                </div>)}

            <div className="container">
                <div className="d-flex py-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h2 className="text-brand fw-bold pt-4 ps-3">Webinar on “The Power of Happiness - How to Build Emotional Immune System”</h2>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-6">
                        <img style={{ borderRadius: '15px' }} src={session4} alt="Project Happiness" className="img-fluid mt-5" />
                    </div>
                    <div className="col-lg-6">
                        <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">The journey of Aachol Foundation's Project Happiness started with this webinar. The main purpose of this webinar was to learn about the ways to acquire psychological happiness and how to build yourself as a real happy person by practicing those rules.  The discussion was about the association of happiness, the relationship between happiness and success, and various issues to keep yourself happy.  The webinar was held on 12 July 2021 at 8 pm.  The honorable guest of the webinar was Md Elias Kanchon, who is an Author and Happiness Coach, and Founder of Coach Kanchon Academy. 190 people participated in this webinar and they received an e-certificate for participation.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="d-flex py-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h2 className="text-brand fw-bold pt-4 ps-3">“Empowered by Happiness (Warm Up Session)”</h2>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-6">
                        <p style={{ textAlign: 'justify', fontSize: '18px', alignItems: 'center' }} className="mt-5 text-muted">The topic of the session was how to maintain peace of mind in line with the busy age of technology.  198 people participated in this session.  This webinar was hosted on August 8, 2021, at 8 p.m.The guest of the webinar was Md Elias Kanchon (Author and Happiness Coach and Founder, Coach Kanchon Academy).</p>
                    </div>
                    <div className="col-lg-6">
                        <img style={{ borderRadius: '15px' }} src={session2} alt="Project Happiness" className="img-fluid mt-5" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="d-flex py-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h2 className="text-brand fw-bold pt-4 ps-3">Webinar on “The Pursuit of Happiness - Arts of Finding Your Innerself”</h2>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-6">
                        <img style={{ borderRadius: '15px' }} src={session1} alt="Project Happiness" className="img-fluid mt-5" />
                    </div>
                    <div className="col-lg-6">
                        <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">The topic of this webinar was the ways in which one can find self-satisfaction and peace of mind in order to bring back the entity that has drifted away from the show-off in this competitive age of technology. The webinar was held on 28 August 2021 at 8 p.m. and  259 people attended the webinar. The guest of this webinar was Md Elias Kanchon, Author and Happiness Coach, Founder, Coach Kanchon Academy. This webinar was jointly organized by Aachol Foundation and Speechmaster Bangladesh.</p>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <h1 className="text-center mt-5 text-uppercase">Lightening Up The Mood</h1>
                <div style={{ width: '20%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>
                <img style={{ borderRadius: '15px' }} src={event} alt="Project Happiness" className="img-fluid mt-5 mx-auto d-block" />
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">Aachol Foundation organized many live sessions related to mental health issues as part of a series named “Lightening Up The Mood”. Doctor TV was our media partner in this series. The sessions were streamed on the Facebook pages of Aachol Foundation and Doctor TV.</p>
            </div>

            {
                happinessData.map(data =>
                    <div className="container">

                        <div className="d-flex py-5">
                            <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                            <h2 className="text-brand fw-bold pt-4 ps-3">{data.name}</h2>
                        </div>

                        <p style={{ textAlign: 'justify', fontSize: '18px' }} className="text-muted">{data.description}</p>
                    </div>
                )
            }
            <Footer />
        </div>
    );
};

export default ProjectHappiness;