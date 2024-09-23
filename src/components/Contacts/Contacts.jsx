import './contacts.css';
import {Container,Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

export function Contacts() {
    return (
        <section className='contacts' id='contacts'>
            <Container>
                <h2>Get in touch</h2>
                <p>Let's work together to create an exceptional web experience for your users.<br></br>If you need a web designer, get in touch!</p>
                <Row className='align-item-center'>
                        <Col sm={12} className='mt-4 text-center'>
                            <div className='social-icon'>
                                <a href='mailto:jaofilipesilveira@gmail.com' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className='icons'/></a>
                                <a href='https://www.instagram.com/joaof_silveira/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='icons'/></a>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </section>
    );
}

export default Contacts;
