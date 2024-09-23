import React, {useState} from 'react';
import './home.css'
import { Container, Row, Col, ThemeProvider} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import Particle from '../Particle/Particle';
import cvpdf from '../../assets/img/joaosilveiracven.pdf';

export const Home = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    });

    return(
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
        >
            <section id="home" className='Home'>
                <Container>
                    <Particle />
                    <Row>
                        <Col sm={12} md={12} xl={12} className='header-bx'>
                            <h1>Hi, I'm João Silveira</h1>
                            <p>I'm a Web Designer based in Porto, Portugal, <br></br>passionate about creating amazing solutions for the web.</p>
                        </Col>
                        <Col sm={6} md={6} xl={6} className='header-btn'>
                            <a
                                href={cvpdf}
                                target='_blank'
                                download="joaosilveiracven.pdf"
                                rel="noreferrer"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                Download my CV
                                <ArrowRightCircle size={25} />
                            </a>
                        </Col>
                    </Row>
                    <div className={isHovering ? 'cursor cursor-hover' : 'cursor'}
                        style={{
                            left: cursorX + 'px',
                            top: cursorY + 'px'
                        }}
                    >
                        Click
                    </div>
                    <div className='scroll-down'></div>
                </Container>
            </section>
        </ThemeProvider>
    )
}

export default Home;
