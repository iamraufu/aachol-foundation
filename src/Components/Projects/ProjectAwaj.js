import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import project from '../../data/Projects/projects';
import safe from '../../images/safe.jpg';
import share from '../../images/share.jpg';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const ProjectAwaj = () => {
    return (
        <div>

            <Helmet>
                <title>Project Awaj - Aachol Foundation</title>
                <meta name="title" content="Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a social youth-led organization advocating mental health in Bangladesh." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            {project.slice(0, 1).map(data =>
                <div className="container">
                    <h1 className="text-center mt-5 text-uppercase">{data.name}</h1>
                    <div style={{ width: '20%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">{data.description}</p>
                </div>)}

            <div className="container py-5">
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h2 className="text-brand fw-bold pt-4 ps-3">Aachol Foundation Presents "Online Space: A Trap Of Virtual Crime" Workshop</h2>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    The first initiative taken by Project Awaj was organizing an online workshop titled "Online Space: A Trap Of Virtual Crime" on 30 December 2020. The workshop was held from 9:00 - 10:30 PM via Zoom meeting. The honorable guest of this workshop was Jewel Ace, who is Cyber ​​Security & Crime Analyst. It was hosted by Rafiya Rahman (Special Bee Coordinator of Aachol Foundation). The aim of this workshop was to encourage and assist students to receive mental and legal support regarding cybercrime. Many young people have little knowledge about the hazards of cybercrime and ways to protect themselves from harm. The workshop answered the queries our participants had regarding cyber-security and cybercrime. It created awareness and gave practical solutions to the listeners about protecting oneself from the traps of virtual crime. The participants were provided an e-certificate for their active participation in the workshop.
                </p>

                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h2 className="text-brand fw-bold pt-4 ps-3">Webinar on "Cyber Pandemic: How Much Safe You Are!"</h2>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    Aachol Foundation wanted to send the message of cybercrime awareness to a wider population. With this aim, Project Awaj united with numerous social organizations working in Bangladesh to create more awareness about cybercrime. Project Awaj successfully organized a webinar titled "Cyber Pandemic: How Much Safe You Are!" on 20 February 2020 in collaboration with 28 social organizations of Bangladesh. The webinar was live-streamed on Zoom and Facebook.
                </p>
                <img style={{ borderRadius: '15px' }} src={safe} alt="Project Awaj" className="img-fluid mt-5 mx-auto d-block" />
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    We had three honorable guests from different fields to give their expert views on the matter. Our guests were-
                    <ol className='mt-3 fw-bold'>
                        <li>Md. Khairul Alam (Additional Superintendent of Police from B Circle, Khulna District Police &  Former Additional Superintendent of Police from Cyber Police Centre, CID)</li>
                        <li>Andalib Mahmud (Mental Health Professional & Trainer of Neuro-Linguistic Programming)</li>
                        <li>Sadat Rahman ( founder & CEO of Cyber Teens, Founder of Narail Volunteers & Winner of the International Children's Peace Prize 2020)</li>
                    </ol>
                    In our society, those who are victims of cybercrime have to face extremely humiliating situations. These incidents have a negative impact on young people and gradually end their lives. The event was aimed at educating young people about cybercrime, how to use technology properly and safely, how to protect themselves from such problems, and how victims can ensure legal and psychological support for themselves. EMK Center was the outreach partner, The Daily Campus was the online media partner, Youth School for Social Entrepreneurs (YSSE) was the strategic partner and Doctor TV was the electronic media partner in this event.
                </p>

                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h2 className="text-brand fw-bold pt-4 ps-3">Webinar on "Social Media: What We Like, Comment, Share?</h2>
                </div>
                <img style={{ borderRadius: '15px' }} src={share} alt="Project Awaj" className="img-fluid mt-5 mx-auto d-block" />
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    Project Awaj arranged another webinar titled "Social Media: What We Like, Comment, Share?" on 9 April 2021. The webinar was streamed via Streamyard. Our honorable guest was Tahsin N Rakib (known by the name Tahseenation) who is an Influencer, Social Activist & Content Creator from Bangladesh. He is a widely popular content creator on both Facebook and YouTube. Nowadays almost everyone is involved in social media and they browse online platforms in their spare time. But some are so engrossed in social media that they are not aware when, where, what kind of post or comment is to be made. Some tend to forget whether it is appropriate, valid, or harmful to the feelings of others. This event was aimed to create awareness among all about what we share on their social media platforms. So that no one has to be a victim of such cybercrime. Through this webinar, we wanted to guide the young students about the effect of the activities we do on social media platforms such as like, comment and share.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectAwaj;