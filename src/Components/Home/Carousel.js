import React from 'react';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';

const Carousel = () => {
    return (
        <section className="carousel-container">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img src={image1} class="d-block w-100 img-fluid" alt="seminar on depression and suicide" />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src={image2} class="d-block w-100 img-fluid" alt="Founder giving speech" />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src={image3} class="d-block w-100 img-fluid" alt="prize giving to guest" />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src={image4} class="d-block w-100 img-fluid" alt="open air discussion" />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src={image5} class="d-block w-100 img-fluid" alt="pictures taken after session" />
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div style={{ backgroundColor: '#E5E5E5', borderRadius: '15px', marginTop: '-1.2rem', position: 'relative', zIndex: '2' }} className="container pb-5 mb-5 ml-2">
                <h1 className="text-center pt-5 text-brand fw-bold">Aachol Foundation</h1>
                <h6 className='text-center fw-bold'>You Always Matter</h6>
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <iframe style={{ borderRadius: '15px' }} width="100%" height="355" src="https://www.youtube.com/embed/y7VHA1Blqsc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <p style={{ textAlign: 'justify', fontSize: '18px' }} className="px-4">
                            <span className='fw-bold'>Aachol Foundation</span> is a social youth-led organization advocating <span className='fw-bold'>mental health</span> in Bangladesh. We envision a society where mental health is recognized as an essential part of overall well-being.
                            <br /> <br />
                            Mental health is not solely an individual responsibility but is a product of community conditions. We thrive with determination, dedication, and passion to build up a community that is aware of mental health, promotes mental health breaking and overcoming all stigma, and living with compassion.
                            <br /> <br />
                            We dream of a better healthy social environment for the future generation and work every day towards making that dream come true. We are ambitious to bring down the suicide rate of <span className='fw-bold'>youth to zero</span>.
                        </p>
                    </div>
                </div>
                <div className="container-fluid action-section d-lg-flex">
                    <h5 className="fw-bold mx-4">If you want to become one of our members, then register on our website</h5>
                    <a href="/registration"><button className='btn-register'>Register <span className='fw-bold ps-2'>&#8594;</span></button></a>
                </div>
            </div>
        </section>
    );
};

export default Carousel;