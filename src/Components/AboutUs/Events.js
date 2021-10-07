import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import event from '../../images/event.png';
import upcoming from '../../data/Events/upcoming';
import past from '../../data/Events/past';
import event_1 from '../../images/1.jpg';
import event_2 from '../../images/event_2.png';
import event_3 from '../../images/event_3.png';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const Events = () => {
    return (
        <section>

            <Helmet>
                <title>Events - Aachol Foundation</title>
                <meta name="title" content="Events | Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <div className="container my-5">
                <img style={{ borderRadius: '15px' }} src={event} alt="Event of Aachol Foundation" className="img-fluid" />
            </div>
            <div style={{ backgroundColor: '#F0F0F0' }} className="pb-5">
                <div className="container">
                    <h2 className="text-brand fw-bold mt-5 pt-5">Upcoming Events</h2>

                    {upcoming.map(data => <div className="col-md-3 mt-5 pb-5">
                        <a href={data.link} className="text-decoration-none" target="_blank" rel="noreferrer">
                            <img style={{ borderRadius: '15px' }} src={data.banner} alt="Upcoming Event" className="img-fluid secondary-image" />
                            <p className="text-muted">{data.date}</p>
                            <h5 style={{ marginTop: '-12px', color: 'black' }} className="fw-bold title-text">{data.name}</h5>
                            <h6 className='text-muted fw-bold'>{data.location}</h6>
                        </a>
                    </div>)}

                    <h1 className="text-center mt-5 fw-bold">Outdoor Events Organized by
                        <br />
                        <span className="text-brand">Aachol Foundation</span></h1>
                    <div style={{ width: '40%', height: '2px', backgroundColor: '#882c94' }} className="container line my-5"></div>

                    {/* Event 1 */}
                    <div className="row py-5">
                        <div className="col-lg-6 mt-5">
                            <h3 className='fw-bold'>Depression and Suicide: A Bridge to Hope at Dhaka University</h3>
                            <p style={{ textAlign: 'justify', fontSize: '18px' }} className='mt-3 text-muted'>Aachol Foundation arranged an outdoor event named “Depression and Suicide: A Bridge to Hope” on 29 October 2019 at Dhaka University. A lot of students in our country choose the road of suicide to escape from depression. A huge number of people in our country still do not know that depression can be cured and suicide is not a way of doing it. Our event was for those people who wanted to get out of their depression and also for all of the students who wanted to know about handling depression. We want to eradicate the term “suicide” from our nation. Our honorable guests for the event were Golam Rabbani (General secretary of Daksu), Faysal Ahmed Rafi (CEO, Bdlisteners), Dilara Hanif Purnima(Actress), Dr. Mehzabin Haque (Chairman of Psychology Department, Dhaka University).
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src={event_1} alt="Outdoor Event" className="img-fluid mt-5" />
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="row py-5">
                        <div className="col-lg-6">
                            <img src={event_2} alt="Outdoor Event" className="img-fluid mt-5" />
                        </div>
                        <div className="col-lg-6 mt-5">
                            <h3 className='fw-bold'>Depression and Suicide: A Bridge to Hope at Shamsunnahar Hall, Dhaka University</h3>
                            <p style={{ textAlign: 'justify', fontSize: '18px' }} className='mt-3 text-muted'>Aachol Foundation arranged another outdoor event named “Depression and Suicide: A Bridge to Hope” on 19 February 2020 at Shamsunnahar Hall, Dhaka University. This program was also held to create awareness about mental health, depression and to reduce the rate of suicide. Our honorable guests for the event were Monira Rahman (Co-founder of Innovation for Well Being Foundation), Mostak Ahmed Imran (Play Therapist). Some respective personalities shared their stories about coming out of their depression in our program. The stories were shared by A B M Sumon (Actor), Farzana Wahid Shayan (Singer), Shurovi Sobhana (Painter), Nadira Kiron (News Editor, ATN Bangla), and Sohel Mamun (Senior Reporter, Dhaka Tribune).
                            </p>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="row py-5">
                        <div className="col-lg-6 mt-5">
                            <h3 className='fw-bold'>Free Counselling at BYLC Youth Carnival 2019</h3>
                            <p style={{ textAlign: 'justify', fontSize: '18px' }} className='mt-3 text-muted'>The team of Aachol Foundation went to a youth carnival arranged by BYLC (Bangladesh Youth Leadership Centre). It was held on 27th and 28th December 2019. On that carnival we gave free counseling to 34 students, we raised awareness among almost 2500 students and gave the floor to about 200 students to share their idea about how to keep our mental health well. We also arranged a quiz in which around 200 students participated. Attending this carnival was a part of our idea about “mental health support.” And our biggest success was that we could help so many students out there on their mental health journey.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src={event_3} alt="Outdoor Event" className="img-fluid mt-5" />
                        </div>
                    </div>

                    <h2 className="text-brand fw-bold mt-5">Past Events</h2>
                    <div className="row">
                        {past.map(data => <div className="col-md-3 mt-5">
                            <a href={data.link} className="text-decoration-none">
                                <img style={{ borderRadius: '15px' }} src={data.banner} alt="Upcoming Event" className="img-fluid secondary-image" />
                                <p className="text-muted">{data.date}</p>
                                <h5 style={{ marginTop: '-12px', color: 'black' }} className="fw-bold title-text">{data.name}</h5>
                                <h6 className='text-muted fw-bold'>{data.location}</h6>
                            </a>
                        </div>)}
                    </div>

                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Events;