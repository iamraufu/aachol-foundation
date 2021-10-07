import React from 'react';
import chapters from '../../data/Chapters/chapters';

const HomeChapters = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center">Our Chapters</h1>
            <div style={{ width: '10%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>

            <div className="container row">
                {chapters.map(data =>
                    <div className="col-lg-4">
                        <a href={data.route} className='text-decoration-none'>
                            <img style={{ borderRadius: '15px' }} src={data.thumbnail} alt={data.title} className="img-fluid secondary-image mx-auto d-block" />
                            <p className="text-muted text-center mt-2 title-text fw-bold">{data.name}</p>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeChapters;