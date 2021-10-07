import React from 'react';

const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="container py-5">
                <h1 style={{ fontSize: '38px' }} className="text-center text-white pt-5 fw-bold">Subscribe to Our Newsletter</h1>
                <p className="text-center text-white pt-1 fs-5">
                    Receive regular updates about our upcoming events, courses, programme and more
                </p>
                <div className="d-flex justify-content-center">
                    <form action="/">
                        <input type="text" id="email" name="email" class='input-email' placeholder="Your Email" />
                        <input type="submit" class="ms-2 btn-register"value="Submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Subscribe;