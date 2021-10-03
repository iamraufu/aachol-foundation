import React from 'react';
import './Navbar.css';
import logo from '../../../../src/logo.svg';
import aboutData from '../../../data/Navbar/about';
import chaptersData from '../../../data/Navbar/chapters';
import projectsData from '../../../data/Navbar/projects';

const Navbar = () => {

    return (
        <section className="nav-container">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="logo of aachol foundation" className='img-fluid' width={80} />
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto custom">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About Us
                                    </a>
                                    <ul style={{backgroundColor:'#882c94'}} className="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
                                        {aboutData.map(about =><li><a className="dropdown-item mt-2 fw-bold" href={about.route}>{about.name}</a></li>)}
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Chapters
                                    </a>
                                    <ul style={{backgroundColor:'#882c94'}} className="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
                                    {chaptersData.map(chapter =><li><a className="dropdown-item mt-2 fw-bold" href={chapter.route}>{chapter.name}</a></li>)}
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Projects
                                    </a>
                                    <ul style={{backgroundColor:'#882c94'}} className="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
                                    {projectsData.map(project =><li><a className="dropdown-item fw-bold" href={project.route}>{project.name}</a></li>)}
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/members">Members</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="/blogs">Blogs</a>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;