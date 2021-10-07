import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import blogData from '../../data/Blogs/blog';
import { Helmet } from 'react-helmet';
import user from '../../images/user.png';

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Blogs - Aachol Foundation</title>
                <meta name="title" content="Blogs | Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <div style={{ backgroundColor: '#f8f8f8' }}>

                <div className="container py-5">
                    <h1 className="text-center">Blogs of Aachol Foundation</h1>
                    <div style={{ width: '20%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>

                    {
                        blogData.map(data =>
                            <div className="row">
                                <div className="col-md-4 col-lg-3 mt-5">
                                    <a style={{ color: 'black' }} href={data.route} className="text-decoration-none">
                                        <img style={{ borderRadius: '15px' }} src={data.img} width={300} alt={data.title} className='img-fluid secondary-image' />
                                    </a>
                                </div>
                                <div className="col-md-4 col-lg-4 mt-5">
                                    <a style={{ color: 'black' }} href={data.route} className="text-decoration-none">
                                        <h3 className='pt-4 fw-bold'>{data.title}</h3>
                                    </a>
                                    <div className="d-flex pt-2">
                                        <div className="">
                                            <img style={{ borderRadius: '50%' }} src={user} width={30} alt="user" className='img-fluid' />
                                        </div>
                                        <div className="">
                                            <p className="ps-2 text-muted title-text">{data.author}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    <button className="mx-auto d-block mt-5 btn-register fw-bold">See More</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;