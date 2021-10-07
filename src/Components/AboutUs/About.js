import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import founder from '../../images/founder.png';
import departments from '../../data/Department/departments';
import projects from '../../data/Projects/projects';
import chapters from '../../data/Chapters/chapters';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <section>

            <Helmet>
                <title>About Us - Aachol Foundation</title>
                <meta name="title" content="Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a social youth-led organization advocating mental health in Bangladesh." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <div className="container mt-5 mb-5">

                {/* Image of Founder */}
                <img style={{ borderRadius: '15px' }} src={founder} alt="founder" className="img-fluid" />

                {/* Beginning */}
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">The Beginning of Aachol Foundation</h1>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    <span className='fw-bold'>Mental health</span> includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood. The main goal behind building <span className='fw-bold'>Aachol foundation</span> was to help and provide guidance to teenagers and students so that they can get support to get better mental health.
                    <br /><br />
                    Aachol Foundation was <span className='fw-bold'>founded on 25th April 2019 by Mr. Tansen Rose</span>, who is an inspiring graduate of Dhaka University. During his university life he has observed how young generations suffering from mental health issues and couldn’t sharing with anyone. Which is leading this generation into depression, anxiety, suicide, low self-esteem so on. These incidents devastated him and made him evaluate, the ongoing situation of this generation’s mental health in Bangladesh. He grasped that as a nation how much this generation needs mental health support, because in the long run they are the pillar for future progressed Bangladesh. He started to research and found that according to <i>(World Health Organization 2014; Mashreky et al., 2013; Shahnaz et al., 2017; Begum et al., 2017a)</i> approximately one million people commit suicide every year worldwide 60% of all cases of suicide in the world occur in Asia and 39.6 per 100,000 in Bangladesh. From experiencing the incident to seeing the statistics triggered him to come up with a ground-breaking solution which may solve and create awareness for the students of this generation’s assorted mental health issues.
                    <br /><br />
                    Tansen Rose felt that how most of the time families do not disclosing the true nature of the act of any mental instabilities, for fear social stigma also the search for the association of mental disorder is poor. Finally, he concluded every research regarding this mental health situation issues by making a foundation named Aachol.</p>

                {/* Vision */}
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Our Vision</h1>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    Aachol Foundation is a social youth-led organization advocating mental health in Bangladesh. We envision a society where mental health is recognized as an essential part of overall well-being. Mental health is not solely an individual responsibility but is a product of community conditions. We thrive with determination, dedication, and passion to build up a community that is aware of mental health, promotes mental health breaking and overcoming all stigma, and living with compassion. We dream of a better healthy social environment for the future generation and work every day towards making that dream come true. We are ambitious to bring down the suicide rate of youth to zero. We are a bunch of youth who are determined to make this possible in our country, not to lose someone at a very young age due to suicide.
                </p>

                {/* Mission */}
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Our Mission</h1>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    Mental health affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Striving towards our vision, our mission is to create mental health awareness in our community and transform how our community promotes mental health.
                    <br /> <br />
                    Mental health is important at every stage of life, from childhood and adolescence through adulthood. However, our young generation, the future of our country, is mostly affected. Unfortunately, the hostile environment regarding mental health in our society makes it harder for them to survive. <b>We, the Aachol Foundation, aim to help and provide counseling to this vulnerable population - the youth, who are suffering from mental health problems.</b>
                    <br /><br />
                    Our target is not only to cure someone from a delicate mental health situation but to prevent that from happening to someone. We believe that prevention is better than cure. Our approach is to get to the root of the problem and nip it in the bud. We want to motivate the young generation, deviate them from the path of depression. The young generation, when suddenly step into this cruel enough world, it is not easy for them to fit in. There come many kinds of depression due to the lack of people who understand them, lack of confidence, lack of motivation, and so on.<b> We plan to keep them motivated, train them for developing different kinds of skills that will help them to stand out in the world of job hunting or career opportunities.</b>
                    <br /><br />
                    Needless to say, mental health issues are taboo in our country. We established our mission to change that notion and talk about it more and more.<b> We promote mental health awareness and promote skill development of university students especially. We want to make this organization a larger safe platform for youth.</b>
                    <br /> <br />
                    In today's world, technology is thriving fast, and with many many advantages, there are some serious issues we face. As our focus is the vulnerable young generation, we find them facing different uncomfortable situations using the internet and social media. Day by day, the internet is becoming more available and easy to access, and with that, some cybercrimes too. Aachol foundation has found that many young people are being victims of these crimes like hacking personal social media accounts, online harassment, cyberbullying, etc. which leave the victims devastated and in depression. So, to help them, <b>the Aachol foundation offers cyber support and also promotes cyber safety awareness.</b>
                    <br /><br />
                    As we all know, mental health is a multifactorial topic, we thrive to work on many aspects of it to certainly achieve the goal of creating a country where youth are not lost to suicide. <b>Aside from giving counseling, promoting, and arranging skill development training/workshops, we also work on improving the general well-being of the youth, by organizing mindfulness programs to help them to find their inner peace.</b>
                </p>

                {/* Goals and Objectives */}
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Our Goals & Objectives</h1>
                </div>
                <h2 className='mt-5 text-brand'>Goals:</h2>
                <ul className="mt-5 fw-bold text-muted">
                    <li>Encourage and guide every student to take care of their mental health</li>
                    <li>Train the youth of our country with useful skills</li>
                    <li>Remove career-related frustration of students</li>
                </ul>
                <h2 className='mt-5 text-brand'>Objectives:</h2>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    We have decided our goals to make Aachol Foundation the most reliable place whenever the topic “mental health” arises. We’re taking every single step to make those goals come true. These steps are our objectives. Our first goal is to encourage and guide every student to take care of their mental health. For that, we’re already arranging at least 3 live programs every month related to mental health. We’re also planning about opening wings in all the universities of our country so that we can help every single student on their mental health journey. We’ve already started the work of opening wings. Our second goal is to train the youth of our country with useful skills. For this one, we have a full project which is named “project be the linchpin with Aachol.” This particular project is working on developing the skills of students. We arrange special programs on skill development almost every month. Recently we’re planning to organize an extensive webinar on leadership skills and an award-giving ceremony for our chain connectors.  Our third goal is to remove the career-related frustration of students. Nowadays career-related issues and unemployment problems are huge reasons for depression as well as suicide attempts. A lot of people still don’t know how they should handle these pressures. For those, we’ve launched a project named “project happiness” in which anyone can question their definition of happiness, get the real meaning of happiness and think about these problems in a settled way. Our project happiness is also launching a full happiness course in which we’ll learn about happiness from Md. Elias Kanchon, the first certified happiness coach of Bangladesh. Aachol Foundation’s goal is to help all the people of Bangladesh who are seeking help on their mental health journey. We’re taking every step and objective  to make this goal come true.
                </p>

                {/* Departments */}
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Departments of Aachol Foundation</h1>
                </div>
                {
                    departments.map(data => <div className="mt-5">
                        <h3 className="fw-bold">{data.name}</h3>
                        <p style={{ textAlign: 'justify', fontSize: '18px' }} className='mt-3 text-muted'>{data.description}</p>
                    </div>)
                }

                {/* Projects */}
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Projects of Aachol Foundation</h1>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className='mt-5'>Aachol Foundation is running four ongoing projects-</p>
                {
                    projects.map(data => <div className="mt-5">
                        <h3 className="fw-bold">{data.name}</h3>
                        <p style={{ textAlign: 'justify', fontSize: '18px' }} className='mt-3 text-muted'>{data.description}</p>
                    </div>)
                }

                {/* Chapters */}
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Chapters of Aachol Foundation</h1>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className='mt-5'>Aachol Foundation is running  three ongoing Chapter-</p>
                {
                    chapters.map(data => <div className="mt-5">
                        <h3 className="fw-bold">{data.name}</h3>
                        <p style={{ textAlign: 'justify', fontSize: '18px' }} className='mt-3 text-muted'>{data.description}</p>
                    </div>)
                }
            </div>
            <Footer />
        </section>
    );
};

export default About;