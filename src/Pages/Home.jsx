import React, { useRef, useEffect, useCallback, useState } from 'react';
import './Home.css';
import linkedinImage from './Images/linkedin.png';
import GithubImage from './Images/github.png';
import Portrait from './Images/portrait.jpg';
import Down from './Images/down-arrow.png'
import Insta from './Images/insta.png'
import { Spotify } from 'react-spotify-embed';
import Construction from './Images/Under-Construction.png'

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
                            <p style={{ fontFamily: 'Times New Roman, serif', textAlign: 'left', fontSize: '20px', fontWeight: 'lighter', marginBottom: '0px' }}>
                                Been a computer nerd since childhood.<br />
                                Currently doing my B.Tech. from <a href="https://iiitd.ac.in/" rel="noopener noreferrer" style={{ color: '#5e8c64', textDecoration: 'none' }}>IIIT Delhi</a><br /><br /></p>
                            <p style={{ fontFamily: 'Times New Roman, serif', textAlign: 'left', fontSize: '20px', fontWeight: 'lighter', marginTop: '0px' }}>
                                I have a special interest in low level programming, OS development and graphics <br />but I love to explore all the fields and constantly learn about anything that may <br /> interest me in the slightest.
                            </p>
                        </div>
                    </div>
                    <div className="right-content2">
                        <img src={Portrait} alt='Irfan Raza smiling into your soul' className='portrait' />
                    </div>
                    <div className="button-container">
                        <button className="games-button" onClick={() => scrollToGames()}>
                            <span style={{ fontFamily: 'Times New Roman, serif' }}>Stuff I like</span>
                            <img src={Down} alt="Down" />
                        </button>
                    </div>
                </div>
                <div className="games-section">
                    <button className="go-up" onClick={() => scrollToTop()}>
                        <img src={Down} alt="Up" className="go-up-img" style={{ transform: 'scaleY(-1)' }} />
                        <span style={{ fontFamily: 'Nunito, serif' }}>Go Back</span>
                    </button>
                    <div className="games-content">
                        <div className="left-content3">
                            <h1>🎮Games I LOVE:🕹️</h1>
                            <ul>
                                <li>Elden Ring</li>
                                <li>Ghost of Tsushima</li>
                                <li>Sekiro</li>
                                <li>NFS</li>
                                <li>Prince of Persia</li>
                                <li>Tomb Raider</li>
                            </ul>
                            <p style={{ fontSize: '15px' }}>Note: They are in no particaular order. 😉</p>
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

            <div className="card C3">
                <div className="contact-container">
                    <h1 style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'lighter', fontSize: '4rem' }}>
                        Let's Talk
                    </h1>
                    <div className="contact-content">
                        <div className="contact-left">
                            Mail me at: irfan.tz026@gmail.com
                        </div>
                        <div className="contact-right">
                            <a href="https://www.instagram.com/irfan.tz" target="_blank" rel="noopener noreferrer" className="instagram-link">
                                <img src={Insta} alt="Instagram" />
                                Instagram
                            </a>
                        </div>
                    </div>
                    <img src={Construction} alt='Construction Warning' style={{width: '40%', marginTop: '10%'}}/>
                    <p style={{fontWeight: 'bolder'}}>The site is still under construction so I apologise if something may not work as intended or things look out of place.</p>
                </div>
            </div>


        </div>
    );

};

export default Home;
