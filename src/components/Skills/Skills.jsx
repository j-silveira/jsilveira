import './skills.css';
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from '../../assets/img/logohtml.png';
import css from '../../assets/img/css3.png';
import javascript from '../../assets/img/logojava.png';
import react from '../../assets/img/logoreact.png';
import bootstrap from '../../assets/img/logobootstrap.png';
import wordpress from '../../assets/img/wordpress.svg';
import adobexd from '../../assets/img/adobexd.svg';
import adobeillustrator from '../../assets/img/adobeill.svg';
import figma from '../../assets/img/figma.svg';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-box'>
                            <h2>
                                Skills
                            </h2>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay= {true}
                                autoPlaySpeed={3000}
                                className='skill-slider'>
                                <div className='item'>
                                    <img src={html} alt='a'/>
                                    <p>HTML</p>
                                </div>
                                <div className='item'>
                                    <img src={css} alt='css js web designer'/>
                                    <p>CSS</p>
                                </div>
                                <div className='item'>
                                    <img src={javascript} alt='javascript js web designer'/>
                                    <p>Javascript</p>
                                </div>
                                <div className='item'>
                                    <img src={react} alt='react js web designer'/>
                                    <p>React</p>
                                </div>
                                <div className='item'>
                                    <img src={bootstrap} alt='bootstrap js web designer'/>
                                    <p>Bootstrap</p>
                                </div>
                                <div className='item'>
                                    <img src={wordpress} alt='wordpress js web designer'/>
                                    <p>Wordpress</p>
                                </div>
                                <div className='item'>
                                    <img src={figma} alt='figma js web designer'/>
                                    <p>Figma</p>
                                </div>
                                <div className='item'>
                                    <img src={adobexd} alt='adobe xd js web designer'/>
                                    <p>Adobe XD</p>
                                </div>
                                <div className='item'>
                                    <img src={adobeillustrator} alt='adobe illustrator js web designer'/>
                                    <p>Adobe Illustrator</p>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Skills;
