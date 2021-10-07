import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import project from '../../data/Projects/projects';
import linchpin from '../../images/linchpin_cover.jpg'
import tableData from '../../data/Projects/tableData';
import linchpinData from '../../data/Projects/linchpinData';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const ProjectLinchpin = () => {
    return (
        <div>
            <Helmet>
                <title>Project Linchpin - Aachol Foundation</title>
                <meta name="title" content="Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a social youth-led organization advocating mental health in Bangladesh." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            {project.slice(3, 4).map(data =>
                <div className="container">
                    <h1 className="text-center mt-5 text-uppercase">{data.name}</h1>
                    <div style={{ width: '40%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>
                    <img style={{ borderRadius: '15px' }} src={linchpin} alt="Project Linchpin" className="img-fluid mt-5 mx-auto d-block" />
                    <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">{data.description}</p>
                </div>)}
            <div className="container my-5">

                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">7 Days Training Session For Skill Development</h1>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    Project Be The Linchpin With Aachol organized a 7-Days Training Session for skill Development during February in 2021. Acquiring skills to prepare oneself is an important step to build one's desired career. Nowadays soft skills are a must to secure a career in the corporate world. To provide interactive learning for the young students, Aachol Foundation arranged these consecutive training sessions with seven guest speakers who have expertise in different skills. This online workshop was held from 11 February 2021 to 18 February 2021 via Google meet. It was a paid workshop with minimal cost for the students. The participants were provided with e-certificates for their respective training. The training sessions conducted and its trainers are outlined in the table below-
                </p>

                <div className="table-responsive-sm">
                    <table className="table table-hover mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Day</th>
                                <th scope="col">Topic of Training Session</th>
                                <th className='text-center' scope="col">Guest speaker</th>
                                <th scope="col">Date held</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map(data =>
                                <tr>
                                    <th scope="row">{data.day}</th>
                                    <td>{data.topic}</td>
                                    <td>{data.guest}</td>
                                    <td>{data.date}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">Through this initiative, we wanted to make a confident and energetic youth group that is capable of doing any kind of task instantly which is essential for the young generation.</p>

                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Training Session On “Designing Essential- Using Different Tools”</h1>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    Aachol Foundation presented a two days training session on designing essentials using different tools as part of our Project Be The Linchpin with Aachol. Our honorable guests in the session were-
                    <ol className='mt-5 fw-bold'>
                        <li>Mithila Arman (Secretary, Secretariat of Creative Art, Aachol Foundation)</li>
                        <li>Md. Mushfiqur Rahman (Coordinator, Secretariat of Creative Art, Aachol Foundation)</li>
                        <li>Sajia Iffat (Chieftain, Secretariat of Creative Art, Aachol Foundation)
                        </li>
                        <li>Shahriar Shawon (Chieftain, Secretariat of Creative Art, Aachol Foundation)</li>
                    </ol>
                    For the development of our country, it is important for companies to attract both national and international customers. Graphic designing can make that a lot easier. Because a good design can tell a story and we can relate to stories quite easily. That’s why we need good graphic designers in our nation. Our intention for the session was to give basic ideas of graphic designing to students and inspire them to become illustrious graphic designers for their and the country's bright future. In this session, our guests spoke about different kinds of tools that can be utilized for graphic designing in day-to-day life. They explained how choosing the right set of tools can make one’s work productive, creative, and easier. Our speakers also described to the participants why graphics designing is so important.
                </p>

                {linchpinData.map(data =>
                    <div className="">
                        <div className="d-flex pt-5">
                            <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                            <h1 className="text-brand fw-bold pt-4 ps-3">{data.name}</h1>
                        </div>
                        <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                            {data.description}
                        </p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ProjectLinchpin;