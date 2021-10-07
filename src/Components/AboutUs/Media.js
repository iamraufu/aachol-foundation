import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import media_cover from '../../images/media_cover.png';
import mediaData from '../../data/Media/mediaData';
import { Helmet } from 'react-helmet';

const Media = () => {
    return (
        <div>
            <Helmet>
                <title>Media Coverage - Aachol Foundation</title>
                <meta name="title" content="Media Coverage | Aachol Foundation - You Always Matter" />
                <meta name="description" content="Aachol Foundation is a non-profit social organization aimed to create awareness among students about taking care of their mental health, to recognize strengths as well as weaknesses, and to make them focused, participative in daily life." />
                <meta name="keywords" content="aachol foundation, youth, young, student, suicide, mental health, depression, anxiety" />
            </Helmet>

            <Navbar />
            <div className="container my-5">
                <img style={{ borderRadius: '15px' }} src={media_cover} alt="media coverage" className="img-fluid" />

                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Media Coverage</h1>
                </div>
                <p style={{ textAlign: 'justify', fontSize: '18px' }} className="mt-5 text-muted mx-auto">
                    Aachol Foundation has been featured on different popular TV Channels, Online Journals, and Print Media including <b>News Bangla 24</b>, <b>Prothom Alo</b>, <b>Dhaka Tribune</b>, <b>Ittefaq</b>, <b>Samakal</b>, <b>NTV BD</b>, <b>ATN News</b>, <b>Kaler Kontho</b>, <b>Financial Express</b>, <b>RTV Online</b>, <b>Ekattor TV News</b>, <b>The Daily Star</b> etc.
                </p>

            </div>
            <div style={{ backgroundColor: '#f6f6f6' }}>
                <div className="container py-5">
                    <div className="row">
                        {mediaData.map(data =>
                            <div className="col-md-6 col-lg-4 col-xl-3 mt-5 p-2">
                                <a style={{ color: 'black' }} href={data.link} target='_blank' rel="noreferrer" className='text-decoration-none'>
                                    <p className='text-muted fw-bold'>
                                    <svg style={{width:'1em'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#882c94" d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg>
                                        {data.title}</p>
                                    <h5 className="fw-bold title-text">{data.name}</h5>
                                </a>
                            </div>)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Media;