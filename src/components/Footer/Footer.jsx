import {Container,Row, Col} from 'react-bootstrap';
import './footer.css';

const year = new Date();

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className='align-item-center'>
                    <Col sm={12} md={12} className='text-center'>
                        <p>&copy;{year.getFullYear()} João Silveira - Web Designer. <br></br>All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
