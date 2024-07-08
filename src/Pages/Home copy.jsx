import React, { useRef, useEffect, useCallback, useState } from 'react';
import './Home.css';
import linkedinImage from './Images/linkedin.png';
import GithubImage from './Images/github.png';
import Portrait from './Images/portrait.jpg';
import Down from './Images/down-arrow.png'
import Insta from './Images/insta.png'
import { Spotify } from 'react-spotify-embed';
import Construction from './Images/under-construction.webp'
import cpp_icon from './Images/cpp.png'
import c_icon from './Images/C.png'
import python_icon from './Images/python.png'
import java_icon from './Images/java.png'
import javascript_icon from './Images/javascript.png'
import mysql_icon from './Images/mysql.png'
import Tux from './Images/Tux.png'
import github_icon from './Images/github.png'
import react_icon from './Images/react.png'
import django_icon from './Images/django.png'
import docker_icon from './Images/docker.png'
import ligma_icon from './Images/ligma.png'
import vivado_icon from './Images/vivado.png'
import archlinux_icon from './Images/arch.png'
import Emma from './Images/1.png'
import ChupacabraSaysHello from './Images/2.png'
import Website from './Images/3.png'
import kartify from './Images/4.png'

const Home = () => {
    const containerRef = useRef(null);
    const [currentCard, setCurrentCard] = useState(0);
    const scrollThreshold = useRef(0);
    const SCROLL_SENSITIVITY = 200;

    const [showGames, setShowGames] = useState(false);

    const scrollToGames = () => {
        const card2 = containerRef.current.children[1]; // Assuming Card 2 is the second child
        card2.classList.add('show-games');
    };

    const scrollToTop = () => {
        const card2 = containerRef.current.children[1];
        card2.classList.remove('show-games');
    };

    const handleScroll = useCallback((event) => {
        event.preventDefault();
        if (containerRef.current) {
            const { clientWidth, children } = containerRef.current;
            const totalCards = children.length;

            scrollThreshold.current += event.deltaY;

            if (Math.abs(scrollThreshold.current) > SCROLL_SENSITIVITY) {
                const direction = scrollThreshold.current > 0 ? 1 : -1;
                const newCardIndex = Math.max(0, Math.min(currentCard + direction, totalCards - 1));

                if (newCardIndex !== currentCard) {
                    containerRef.current.scrollTo({
                        left: newCardIndex * clientWidth,
                        behavior: 'smooth',
                    });
                    setCurrentCard(newCardIndex);
                }
                scrollThreshold.current = 0;
            }
        }
    }, [currentCard, showGames]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) container.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            if (container) {
                container.removeEventListener('wheel', handleScroll);
            }
        };
    }, [handleScroll]);

    const [currentLink, setCurrentLink] = useState("https://open.spotify.com/album/2hEnymoejldpuxSdTnkard?si=kH-NKlzMTYegn-jKIzzMiA");

    const links = {
        Joji: "https://open.spotify.com/album/2hEnymoejldpuxSdTnkard?si=f1460997843149b8",
        Love: "https://open.spotify.com/album/6CczqhUdYOH4qLSDnN3zkg?si=Z_J2PW7hQmSntBoxkNkMKQ",
        HipHopDance: "https://open.spotify.com/playlist/1QaH4hvrp25LQhuUvZlCRO?si=f08bd84bc9df4211",
        Mix: "https://open.spotify.com/playlist/1aM4UgH9WNADkoBWpKeew0?si=5a985486e62b4fa7"
    };

    const changeLink = (category) => {
        setCurrentLink(links[category]);
    };


    return (
        <div className="scroll-container" ref={containerRef}>
            <div className="card C1">
                <div className="left-content1">
                    <p>Irfan<br />Raza</p>
                </div>
                <div className="right-content1">
                    <div className="icon-group">
                        <a href="https://www.linkedin.com/in/mohd-irfan-raza/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImage} alt="LinkedIn" className="icon" />
                            <p>LinkedIn</p>
                        </a>
                    </div>
                    <div className="icon-group">
                        <a href="https://github.com/irfan-tz" target="_blank" rel="noopener noreferrer">
                            <img src={GithubImage} alt="GitHub" className="icon" />
                            <p>GitHub</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="card C2">
                <div className="card-content">
                    <div className="left-content2">
                        <h1 className='heading'>About Me</h1>
                        <div>
                            <p style={{ fontFamily: 'Times New Roman, serif', textAlign: 'left', fontSize: '20px', fontWeight: 'lighter', marginTop: '0px' }}>
                                Been a computer nerd since childhood.<br />
                                Currently doing my B.Tech. from <a href="https://iiitd.ac.in/" rel="noopener noreferrer" style={{ color: '#5e8c64', textDecoration: 'none' }}>IIIT Delhi</a><br /><br />
                            </p>
                            <p style={{ fontFamily: 'Times New Roman, serif', textAlign: 'left', fontSize: '20px', fontWeight: 'lighter', marginTop: '0px' }}>
                                I have a special interest in low level programming, OS development and graphics <br />but I love to explore all the fields and constantly learn about anything that may <br /> interest me in the slightest.
                            </p>

                            <div style={{ marginBottom: '10px' }}>
                                <center className='languages'>
                                    <h3 style={{ fontFamily: "Roboto, serif", margin: "0px", color: "#706c34" }}>Languages</h3>
                                    <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".5rem", margin: "0px", padding: "0px", listStyleType: "none" }}>
                                        <li><a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank">
                                            <img src={cpp_icon} style={{ width: "2rem" }} />
                                        </a></li>
                                        <li><a href="https://en.wikipedia.org/wiki/The_C_Programming_Language" target="_blank">
                                            <img src={c_icon} style={{ width: "2rem" }} />
                                        </a></li>
                                        <li><a href="https://www.python.org/about/" target="_blank">
                                            <img src={python_icon} style={{ width: "2rem" }} />
                                        </a></li>
                                        <li><a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">
                                            <img src={java_icon} style={{ width: "2rem" }} />
                                        </a></li>
                                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                                            <img src={javascript_icon} style={{ width: "2rem" }} />
                                        </a></li>
                                        <li><a href="https://en.wikipedia.org/wiki/MySQL" target="_blank">
                                            <img src={mysql_icon} style={{ width: "3rem" }} />
                                        </a></li>
                                        <li>
                                            <a href="https://en.wikipedia.org/wiki/Verilog" target="_blank" style={{ textDecoration: "none" }}>
                                                <p style={{ fontSize: "1.5rem", color: "#000000", margin: "0px" }}>Verilog</p>
                                            </a>
                                        </li>
                                    </ul>
                                </center>
                            </div>

                            <div>
                                <center className='languages'>
                                    <h3 style={{ fontFamily: "Roboto, serif", margin: "0px", color: "#706c34" }}>Tools & Techs</h3>
                                    <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".5rem", margin: "0px", padding: "0px", listStyleType: "none" }}>
                                        <li><a href="https://www.linux.com/what-is-linux/" target="_blank">
                                            <img src={Tux} style={{ width: "2rem" }} />
                                        </a></li>
                                        <li><a href="https://github.com/" target="_blank">
                                            <img src={github_icon} style={{ width: "2.4rem" }} />
                                        </a></li>
                                        <li><a href="https://react.dev/" target="_blank">
                                            <img src={react_icon} style={{ width: "2.6rem" }} />
                                        </a></li>
                                        <li><a href="https://www.djangoproject.com" target="_blank">
                                            <img src={django_icon} style={{ width: "3rem", marginTop: "10px" }} />
                                        </a></li>
                                        <li><a href="https://aws.amazon.com/docker/" target="_blank">
                                            <img src={docker_icon} style={{ width: "2.4rem" }} />
                                        </a></li>
                                        <li><a href="https://www.figma.com/design/" target="_blank">
                                            <img src={ligma_icon} style={{ width: "1.45rem" }} />
                                        </a></li>
                                        <li>
                                            <a href="https://www.xilinx.com/products/design-tools/vivado.html" target="_blank" style={{ textDecoration: "none" }}>
                                                <img src={vivado_icon} style={{ width: "2rem" }} />
                                            </a></li>
                                        <li>
                                            <a href="https://archlinux.org/" target="_blank" style={{ textDecoration: "none" }}>
                                                <img src={archlinux_icon} style={{ width: "6rem" }} />
                                            </a></li>
                                    </ul>
                                </center>
                            </div>
                        </div>

                    </div>
                    <div className="right-content2">
                        <img src={Portrait} alt='Irfan Raza smiling into your soul' className='portrait' />
                    </div>
                    <div className="button-container">
                        <button className="games-button" onClick={() => scrollToGames()}>
                            <span style={{ fontFamily: 'Calibri, serif', fontWeight: "bold", color: "#d0b27b", fontSize: "1.4rem" }}>STUFF I LIKE</span>
                            <img src={Down} alt="Down" />
                        </button>
                    </div>
                </div>
                <div className="games-section">
                    <button className="go-up" onClick={() => scrollToTop()}>
                        <img src={Down} alt="Up" className="go-up-img" style={{ transform: 'scaleY(-1)' }} />
                        <span style={{ fontFamily: 'Nunito, serif', fontWeight: "bold", fontSize: "1.4rem" }}>Go Back</span>
                    </button>
                    <div className="games-content">
                        <div className="left-content3">
                            <h1 style={{ color: "#454545" }}>🎮Games I LOVE:🕹️</h1>
                            <ul style={{ color: "#454545" }}>
                                <li>Elden Ring</li>
                                <li>Ghost of Tsushima</li>
                                <li>Sekiro</li>
                                <li>NFS</li>
                                <li>Prince of Persia</li>
                                <li>Tomb Raider</li>
                            </ul>
                            <p style={{ fontSize: '15px', color: "#454545" }}>Note: They are in no particaular order. 😉</p>
                        </div>
                        <div className="right-content3">
                            <Spotify link={currentLink} />
                            <div className="button-group">
                                <button onClick={() => changeLink('Joji')}>Joji</button>
                                <button onClick={() => changeLink('Love')}>Love</button>
                                <button onClick={() => changeLink('HipHopDance')}>HipHop/Dance</button>
                                <button onClick={() => changeLink('Mix')}>MegaMix</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <center className="card C3">
                <h1 style={{ position: "absolute", top: "40px", margin: 0, width: "100%", color: "#191d18" }}>Projects</h1>
                <ol style={{ alignContent: "center", display: "grid", gap: "2rem", gridAutoFlow: "row", listStyleType: "none", maxWidth: "100vw", gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
                    <li className='projectList'>
                        <a href='https://github.com/irfan-tz/opencv-face-recognizer' style={{ alignItems: "center", display: "flex", gap: "1rem", height: "100%", maxWidth: "100vw", textDecoration: "none" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h3 style={{ color: "#a9b6a5", margin: 0, textAlign: "left" }}>Face Recognizer</h3>
                                <p style={{ color: "#a9b6a5", textAlign: "left" }}>A face recognizer I made back in class 12th as a final CS project with python using OpenCV with additional image capture and store functionality.</p>
                            </div>
                            <img src={Emma} style={{ width: "12rem", borderStyle: "solid" }} />
                        </a>
                    </li>
                    <li className='projectList'>
                        <a href='https://github.com/irfan-tz/64-bitOS' style={{ alignItems: "center", display: "flex", gap: "1rem", height: "100%", maxWidth: "100vw", textDecoration: "none" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h3 style={{ color: "#a9b6a5", margin: 0, textAlign: "left" }}>64-bitOS</h3>
                                <p style={{ color: "#a9b6a5", textAlign: "left" }}>A bare-metal x86-64 kernel featuring multiboot compliance, long mode activation, and paging setup. It does basic VGA text mode characters printing with C.</p>
                            </div>
                            <img src={ChupacabraSaysHello} style={{ width: "14rem", borderStyle: "solid" }} />
                        </a>
                    </li>
                    <li className='projectList'>
                        <a href='https://github.com/irfan-tz/Portfolio' style={{ alignItems: "center", display: "flex", gap: "1rem", height: "100%", maxWidth: "100vw", textDecoration: "none" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h3 style={{ color: "#a9b6a5", margin: 0, textAlign: "left" }}>This website</h3>
                                <p style={{ color: "#a9b6a5", textAlign: "left" }}>Made using only ReactJs and CSS, with <a href='https://www.npmjs.com/package/react-spotify-embed' style={{ color: "#FFFFFF" }}>react-spotify-embed</a></p>
                            </div>
                            <img src={Website} style={{ width: "14rem" }} />
                        </a>
                    </li>
                    <li className='projectList'>
                        <a href='https://github.com/irfan-tz/Kartify_E-Commerce-Website' style={{ alignItems: "center", display: "flex", gap: "1rem", height: "100%", maxWidth: "100vw", textDecoration: "none" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h3 style={{ color: "#a9b6a5", margin: 0, textAlign: "left" }}>Kartify E-Commerce</h3>
                                <p style={{ color: "#a9b6a5", textAlign: "left" }}>
                                    An E-Commerce project I made for my DBMS course with robust database. Made using Django, ReactJS with DjangoREST and authentication managed by ReduxThunk by sending JWT token. 
                                </p>
                            </div>
                            <img src={kartify} style={{ width: "14rem" }} />
                        </a>
                    </li>

                </ol>
            </center>

            <div className="card C4">
                <center>
                    <div className="contact-container">
                        <h1 style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'lighter', fontSize: '4rem', color: "#008080" }}>
                            Let's Talk
                        </h1>
                        <div className="contact-content">
                            <p style={{ fontFamily: "Times New Roman, serif", color: "#005959" }}>
                                Mail me at: irfan.tz026@gmail.com
                            </p>
                            <div className="contact-right">
                                <a href="https://www.instagram.com/irfan.tz" target="_blank" rel="noopener noreferrer" className="instagram-link">
                                    <img src={Insta} alt="Instagram" />
                                    Instagram
                                </a>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                            <h1 style={{ color: "#ffd19f", WebkitTextStroke: "0.5px black" }}>Under Construction</h1>
                            <img src={Construction} alt='Construction Warning' style={{ width: '40%' }} />
                            <p style={{ fontWeight: 'bolder', color: "#008080" }}>The site is still under construction so I apologise if something may not work as intended or things look out of place.</p>
                        </div>
                    </div>
                </center>
            </div>


        </div>
    );

};

export default Home;
