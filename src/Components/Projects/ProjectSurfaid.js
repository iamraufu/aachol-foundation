import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import project from '../../data/Projects/projects';
import surfaid from '../../images/surfaid1.jpg'
import interview_hacks from '../../images/interview_hacks.jpg'
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const ProjectSurfaid = () => {
    return (
        <div>
            <Helmet>
                <title>Project Surfaid - Aachol Foundation</title>
                <meta name="title" content="Project Surfaid - Aachol Foundation" />
                <meta name="description" content="Aachol Foundation is a social youth-led organization advocating mental health in Bangladesh." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>
            <Navbar />
            {project.slice(1, 2).map(data =>
                <div className="container my-5">
                    <h1 className="text-center mt-5 text-uppercase">{data.name}</h1>
                    <div style={{ width: '20%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>
                    <img style={{ borderRadius: '15px' }} src={surfaid} alt="Project Surfaid" className="img-fluid mt-5 mx-auto d-block" />
                    <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">{data.description}</p>
                </div>)}
            <div className="container my-5">
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Aachol Foundation Presents Practical Course on "Interview Hacks"</h1>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted">
                    Interviews are one of the most crucial places where job candidates can show their talent, ability, and skills. However, many inexperienced interview candidates experience tremendous stress and frustration regarding sitting for their interview. To help people in this regard, Project Surfaid of Aachol Foundation arranged a Practical Course on "Interview Hacks". The course was scheduled for 27 March 2021 and 30 March 2021 viva Google Meet. In the workshop, there was a 2 days training session and 1 day for a mock interview as a final experience. It was a paid workshop and the registration fee was set 200 taka. We brought trainers from relevant fields in the workshop who could give participants practical and valuable guidance on this issue. Our trainers were Pauroma Pretty Mallick (Psychologist and Mental Health First Aid Trainer) and Yasin Shohag (Human Resource Lead, HR Professional, People Manager, Benchmarking Specialist). In this workshop, the participants were guided to uplift their self-confidence about their corporate careers. It taught them basic corporate etiquette and emphasized how to cope up with the whole interview period.
                </p>
                <img style={{ borderRadius: '15px' }} src={interview_hacks} alt="Project Surfaid" className="img-fluid mt-5 mx-auto d-block" />
            </div>
            <Footer />
        </div>
    );
};

export default ProjectSurfaid;