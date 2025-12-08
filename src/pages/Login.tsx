import { useState, type FormEvent } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useMobile';

const Login = () => {
    const mobile = useIsMobile();

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formValue);
    };

    const inputContainerClass = `d-flex flex-row align-items-center mb-4 ${
        mobile ? 'w-auto' : 'w-50'
    } `;
    return (
        <MDBContainer fluid>
            <MDBCard
                className="text-black m-sm-5"
                style={{ borderRadius: '25px' }}
            >
                <MDBCardBody>
                    <MDBRow tag="form">
                        <MDBCol
                            md="12"
                            lg="6"
                            className="order-2 order-lg-1 d-flex flex-column align-items-center"
                        >
                            <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                Login With Your Credentials
                            </p>

                            <div className={inputContainerClass}>
                                <MDBIcon fas icon="envelope me-3" size="lg" />
                                <MDBInput
                                    label="Enter your email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formValue.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={inputContainerClass}>
                                <MDBIcon fas icon="lock me-3" size="lg" />
                                <MDBInput
                                    label="Type your password"
                                    name="password"
                                    type="password"
                                    required
                                    value={formValue.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <MDBBtn
                                type="submit"
                                onClick={handleSubmit}
                                className="mb-4"
                                size="lg"
                            >
                                Login
                            </MDBBtn>

                            <p>
                                Don't have an account?
                                <Link to="/register">&nbsp;Register here</Link>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="12"
                            lg="6"
                            className="order-1 order-lg-2 d-flex align-items-center"
                        >
                            <MDBCardImage
                                className="rounded"
                                src="/login-bg.png"
                                fluid
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default Login;
