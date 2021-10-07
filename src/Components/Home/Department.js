import './Department.css';
import React from 'react';
import departments from '../../data/Department/departments';

const Department = () => {
    return (
        <div style={{ backgroundColor: '#F0F0F0' }} className="mb-5 pb-5">
            <div className="container mt-5">
                <div className="d-flex pt-5">
                    <div style={{ width: '4px', height: '100px', backgroundColor: '#882c94' }} className=""></div>
                    <h1 className="text-brand fw-bold pt-4 ps-3">Departments of Aachol Foundation</h1>
                </div>
                <div className="container row mt-5 flex-wrap">
                    {
                        departments.slice(0,3).map(data => <div className="col-lg-4 department-card">
                            <img src={data.image} alt="" className="img-fluid mx-auto d-block mt-3" />
                            <h3 className="mt-5 fw-bold">{data.name}</h3>
                            <p style={{ textAlign: 'justify' }} className="mt-4">{data.shortDescription}</p>
                        </div>
                        )
                    }
                </div>
                <button className='mt-5 ms-3 fw-bold btn-brand'><a href="/about" className='text-decoration-none text-white'>Learn More</a></button>
            </div>
        </div>
    );
};

export default Department;