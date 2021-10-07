import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import blogData from '../../data/Blogs/blog';

const Blog4 = () => {
    return (
        <div>
            <Navbar />
            <Helmet>
                <title>টক্সিক সম্পর্কের সাধারণ বৈশিষ্ট্য এবং উত্তরণের উপায় - Aachol Foundation</title>
                <meta name="title" content="টক্সিক সম্পর্কের সাধারণ বৈশিষ্ট্য এবং উত্তরণের উপায় | Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>
            {
                blogData.slice(3, 4).map(data =>
                    <div className="container my-5">

                        <img style={{ borderRadius: '15px' }} src={data.img} alt="Aachol Foundation" className='img-fluid mx-auto d-block' />

                        <div className="d-flex pt-5">
                            <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                            <h1 className="text-brand fw-bold pt-4 ps-3">{data.title}</h1>
                        </div>
                        <p  style={{ fontSize: '18px' }}className="text-muted mt-5">Written by: <span className="fw-bold">{data.author}</span></p>
                        <p>{data.designation}</p>
                        <p  style={{ textAlign: 'justify', fontSize: '18px' }} className=' text-muted mt-5'>{data.p1}</p>
                        <p  style={{ textAlign: 'justify', fontSize: '18px' }} className=' text-muted'>{data.p2}</p>
                        <p  style={{ textAlign: 'justify', fontSize: '18px' }} className=' text-muted'>{data.p3}</p>
                        <p  style={{ textAlign: 'justify', fontSize: '18px' }} className=' text-muted'>{data.p4}</p>
                        <p  style={{ textAlign: 'justify', fontSize: '18px' }} className=' text-muted'>{data.p5}</p>
                        <p  style={{ textAlign: 'justify', fontSize: '18px' }} className=' text-muted'>{data.p6}</p>
                    </div>
                )
            }
            <Footer />
        </div>
    );
};

export default Blog4;