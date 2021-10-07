import React from 'react';
import partnersData from '../../data/Partners/partnersData';

const Partners = () => {
    return (
        <div style={{ backgroundColor: '#F0F0F0' }} className="mb-5 pb-5">
            <div className="container mt-5">
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Our Valuable Partners & Sponsors</h1>
                </div>

                {partnersData.map(partner =>
                    <img style={{ borderRadius: '15px' }} src={partner.image} alt={partner.name} width={85} className="mt-5 p-2 img-fluid secondary-image" />
                )}

            </div>
        </div>
    );
};

export default Partners;