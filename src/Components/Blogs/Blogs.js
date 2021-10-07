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
                <meta name="title" content="Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a social youth-led organization advocating mental health in Bangladesh." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <div style={{ backgroundColor: '#f8f8f8' }}>

                <div className="container py-5">
                    <div className="col-md-2"></div>
                    {
                        blogData.map(data =>
                            <div className="row">
                                <div className="col-md-4 mt-5">
                                    <img style={{ borderRadius: '15px' }} src={data.img} alt={data.title} className='img-fluid' />
                                </div>
                                <div className="col-md-4 mt-5">
                                    <h3 className=''>{data.title}</h3>
                                    <div className="d-flex">
                                        <div className="">
                                            <img style={{ borderRadius: '50%' }} src={user} width={30} alt="user" className='img-fluid' />
                                        </div>
                                        <div className="">
                                            <p className="ps-2 text-muted">{data.author}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    <div className="col-md-2">
                        <h5>Recent Blogs</h5>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;