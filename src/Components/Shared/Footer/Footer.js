import React from 'react';
import logo from '../../../logo.svg';
import footerData from '../../../data/Footer/footerData';
import groupsData from '../../../data/Footer/groupsData';
import links from '../../../data/Footer/links';
import play from '../../../images/play.png';
import app from '../../../images/app.png';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#282424' }}>
            <div className="container-fluid p-5">

                <div className="row">
                    <div className="col-lg-4">
                        <img src={logo} alt="" width={80} className="img-fluid" />
                        <h5 className="text-white mt-3">Registered Address</h5>
                        {/* <p className="text-muted mt-3">Sahera Tropical Centre, 7th floor,
                            Room 1, 218 New Elephant Road,
                            Dhaka, Bangladesh</p> */}

                        <p className="mt-3"><a href="mailto:aacholfoundation@gmail.com" className="text-decoration-none text-muted">aacholfoundation@gmail.com</a></p>
                        <p className=""><a href="tel:8801617586387" className="text-decoration-none text-muted">+8801617-586387</a></p>

                    </div>

                    <div className="col-lg-2">
                        <h5 style={{ marginTop: '75px' }} className="text-white">Important Links</h5>
                        <div className="row">
                            {footerData.map(data => <a className='text-muted mt-2 text-decoration-none' href={data.link}>{data.name}</a>)}
                        </div>
                    </div>

                    <div className="col-lg-3">

                        <h4 className='text-white mt-4 text-center'>Contact Us On Social Media</h4>

                        <h5 className='text-white mt-4'>Aachol Foundation</h5>
                        {links.map(data =>
                            <a href={data.link} className='text-muted mt-2 text-decoration-none' target="_blank" rel="noreferrer">
                                <img src={data.icon} alt={data.name} className='img-fluid mt-2 px-2' style={{ width: '50px' }} /></a>)}
                        <h5 className='text-white mt-4'>Groups</h5>
                        <div className="row">{groupsData.map(data => <a href={data.link} className='text-muted mt-2 text-decoration-none' target="_blank" rel="noreferrer">{data.name}</a>)}</div>
                    </div>

                    <div className="col-lg-3">
                        <h4 className='text-white mt-4 text-center'>Download Aachol Foundation App</h4>
                        <a href="/app" target="_blank" rel="noreferrer">
                            <img src={play} alt="Download Official App" className="img-fluid mx-auto d-block my-4" style={{ width: '150px' }} />
                        </a>

                        <a href="/app" target="_blank" rel="noreferrer">
                            <img src={app} alt="Download Official App" className="img-fluid mx-auto d-block my-4" style={{ width: '150px' }} />
                        </a>
                    </div>
                </div>
            </div>
            <p style={{marginBottom:'0'}} className='text-center text-white'>
                Developed with &hearts; by <a href="https://raufuprezens.web.app/" className="text-decoration-none text-muted ps-1" target="_blank" rel="noreferrer"> Raufu Prezens Inc.</a>
            </p>
        </div>
    );
};

export default Footer;