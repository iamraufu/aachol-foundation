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
                <div style={{height:'800px'}} class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src={image1} class="d-block w-100 img-fluid" alt="seminar on depression and suicide" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={image2} class="d-block w-100 img-fluid" alt="Founder giving speech" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={image3} class="d-block w-100 img-fluid" alt="prize giving to guest" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={image4} class="d-block w-100 img-fluid" alt="open air discussion" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={image5} class="d-block w-100 img-fluid" alt="pictures taken after session" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;