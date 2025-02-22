import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className="hero bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Welcome to Our Website</h1>
                    <p className="lead">We provide the best solutions for your business.</p>
                    <a href="#services" className="btn btn-light btn-lg mt-3">Get Started</a>
                </div>
            </section>
        </div>
    );
};

export default Hero;