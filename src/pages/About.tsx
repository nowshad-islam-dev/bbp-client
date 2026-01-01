import Layout from '@/Layout';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBIcon,
} from 'mdb-react-ui-kit';

const About = () => {
    return (
        <Layout>
            <MDBContainer style={{ minHeight: '99vh', padding: '20px' }}>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>About Us</MDBCardTitle>
                                <MDBCardText>
                                    Welcome to our application! We are dedicated
                                    to providing the best service possible. Our
                                    team is committed to excellence and
                                    innovation. Thank you for visiting our about
                                    page.
                                </MDBCardText>
                                <MDBCardText>
                                    Our mission is to empower users with
                                    innovative solutions that enhance their
                                    productivity and creativity. We believe in
                                    the power of technology to transform lives.
                                </MDBCardText>
                                <MDBBtn color="primary" href="/contact">
                                    Contact Us{' '}
                                    <MDBIcon far icon="paper-plane" />
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="6">
                        <img
                            src="/about.png"
                            alt="About Us"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow style={{ marginTop: '20px' }}>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Our Values</MDBCardTitle>

                                <div>
                                    <ul>
                                        <li>Integrity</li>
                                        <li>Innovation</li>
                                        <li>Customer Satisfaction</li>
                                        <li>Teamwork</li>
                                    </ul>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    );
};

export default About;
