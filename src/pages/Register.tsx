import { useState, type FormEvent } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import { useIsMobile } from '@/hooks/useMobile';

const Register = () => {
    const mobile = useIsMobile();

    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        repeatPassword: '',
        agreementCheck: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = e.target;
        setFormValue({
            ...formValue,
            [name]: type === 'checkbox' ? checked : value,
        });
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
                            className="order-2 order-lg-1 d-flex flex-column align-items-center"
                        >
                            <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                Register Your Account
                            </p>

                            <div className={inputContainerClass}>
                                <MDBIcon fas icon="user me-3" size="lg" />
                                <MDBInput
                                    label="First name*"
                                    name="firstName"
                                    type="text"
                                    required
                                    value={formValue.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={inputContainerClass}>
                                <MDBIcon fas icon="user me-3" size="lg" />
                                <MDBInput
                                    label="Last name*"
                                    name="lastName"
                                    type="text"
                                    required
                                    value={formValue.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={inputContainerClass}>
                                <MDBIcon fas icon="envelope me-3" size="lg" />
                                <MDBInput
                                    label="Email*"
                                    name="email"
                                    type="email"
                                    required
                                    value={formValue.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={inputContainerClass}>
                                <MDBIcon fas icon="phone me-3" size="lg" />
                                <MDBInput
                                    label="Phone number"
                                    name="phone"
                                    type="number"
                                    size="lg"
                                    value={formValue.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={inputContainerClass}>
                                <MDBIcon fas icon="lock me-3" size="lg" />
                                <MDBInput
                                    label="Type a strong password"
                                    name="password"
                                    type="password"
                                    required
                                    value={formValue.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={inputContainerClass}>
                                <MDBIcon fas icon="key me-3" size="lg" />
                                <MDBInput
                                    label="Repeat your password"
                                    name="repeatPassword"
                                    type="password"
                                    required
                                    value={formValue.repeatPassword}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4 d-inline-flex flex-wrap">
                                <MDBCheckbox
                                    label="Agree to"
                                    name="agreementCheck"
                                    required
                                    checked={formValue.agreementCheck}
                                    onChange={handleChange}
                                />
                                <Link to="#">&nbsp;terms & conditions</Link>
                            </div>

                            <MDBBtn
                                onClick={handleSubmit}
                                type="submit"
                                className="mb-4"
                                size="lg"
                            >
                                Register
                            </MDBBtn>
                            <p>
                                Already have an account?
                                <Link to="/login">&nbsp;Login</Link>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default Register;
