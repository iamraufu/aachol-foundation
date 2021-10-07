import React from 'react';
import mission from '../../images/mission.jpg';

const Mission = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center">Our Mission</h1>
            <div style={{ width: '10%', height: '2px', backgroundColor: '#882c94' }} className="container line mb-5"></div>
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <p style={{ textAlign: 'justify', fontSize: '18px' }} className="pe-4 text-muted">
                        <span className='fw-bold'>Mental health</span> affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Striving towards our vision, our mission is to create mental health awareness in our community and transform how our community promotes mental health.
                        <br /><br />
                        We, the <span className='fw-bold'>Aachol Foundation</span>, aim to help and provide counseling to this vulnerable population - the youth, who are suffering from mental health problems. Our target is not only to cure someone from a delicate mental health situation but to prevent that from happening to someone. We believe that prevention is better than cure.
                    </p>
                    <button className='mt-4 fw-bold btn-brand'><a href="/about" className='text-decoration-none text-white'>Learn More</a></button>
                </div>
                <div className="col-lg-6">
                    <img style={{ borderRadius: '15px' }} src={mission} alt="Mission of Aachol Foundation" className="img-fluid mt-5 secondary-image" />
                </div>
            </div>

        </div>
    );
};

export default Mission;