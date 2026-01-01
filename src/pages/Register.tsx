import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { handleFormApiError } from '@/helpers/handleFormApiError';
import { RegisterSchema, type RegisterFormData } from '@/schemas/auth';
import { useIsMobile } from '@/hooks/useMobile';
import { useRegisterMutation } from '@/store/api/apiSlice';

const Register = () => {
    const mobile = useIsMobile();
    const navigate = useNavigate();
    const [registerQuery, { isLoading }] = useRegisterMutation();

    const [showPassword, setShowPassoword] = useState(false);
    const [agreementCheck, setAgreementCheck] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<RegisterFormData>({ resolver: zodResolver(RegisterSchema) });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            await registerQuery(data).unwrap();
            void navigate('/login');
        } catch (err) {
            handleFormApiError<RegisterFormData>({
                error: err,
                setError,
                fallbackMessage: 'Registration failed. Please try again.',
            });
        }
    };

    return (
        <MDBContainer fluid>
            <MDBCard
                className="text-black m-sm-5"
                style={{ borderRadius: '25px' }}
            >
                <MDBCardBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <MDBRow>
                            <MDBCol
                                md="12"
                                className="order-2 order-lg-1 d-flex flex-column align-items-center"
                            >
                                <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                    Register Your Account
                                </p>

                                {/* First Name */}
                                <div
                                    className={`d-flex flex-column mb-4 ${
                                        mobile ? 'w-auto' : 'w-50'
                                    }`}
                                >
                                    <div className="d-flex align-items-center position-relative">
                                        <MDBIcon
                                            fas
                                            icon="user me-3"
                                            size="lg"
                                        />

                                        <MDBInput
                                            label="First Name*"
                                            className="pe-5 w-100"
                                            {...register('firstName')}
                                        />
                                    </div>

                                    {/* Error */}
                                    {errors.firstName && (
                                        <div className="text-danger small mt-1">
                                            {errors.firstName.message}
                                        </div>
                                    )}
                                </div>

                                {/* Email */}
                                <div
                                    className={`d-flex flex-column mb-4 ${
                                        mobile ? 'w-auto' : 'w-50'
                                    }`}
                                >
                                    <div className="d-flex align-items-center position-relative">
                                        <MDBIcon
                                            fas
                                            icon="user me-3"
                                            size="lg"
                                        />

                                        <MDBInput
                                            label="Last Name*"
                                            className="pe-5 w-100"
                                            {...register('lastName')}
                                        />
                                    </div>

                                    {/* Error */}
                                    {errors.lastName && (
                                        <div className="text-danger small mt-1">
                                            {errors.lastName.message}
                                        </div>
                                    )}
                                </div>

                                {/* Email */}
                                <div
                                    className={`d-flex flex-column mb-4 ${
                                        mobile ? 'w-auto' : 'w-50'
                                    }`}
                                >
                                    <div className="d-flex align-items-center position-relative">
                                        <MDBIcon
                                            fas
                                            icon="envelope me-3"
                                            size="lg"
                                        />

                                        <MDBInput
                                            label="Email*"
                                            className="pe-5 w-100"
                                            {...register('email')}
                                        />
                                    </div>

                                    {/* Error */}
                                    {errors.email && (
                                        <div className="text-danger small mt-1">
                                            {errors.email.message}
                                        </div>
                                    )}
                                </div>

                                {/* Phone */}
                                <div
                                    className={`d-flex flex-column mb-4 ${
                                        mobile ? 'w-auto' : 'w-50'
                                    }`}
                                >
                                    <div className="d-flex align-items-center position-relative">
                                        <MDBIcon
                                            fas
                                            icon="phone me-3"
                                            size="lg"
                                        />

                                        <MDBInput
                                            label="Phone Number"
                                            className="pe-5 w-100"
                                            {...register('phone')}
                                        />
                                    </div>

                                    {/* Error */}
                                    {errors.phone && (
                                        <div className="text-danger small mt-1">
                                            {errors.phone.message}
                                        </div>
                                    )}
                                </div>

                                {/* Password */}
                                <div
                                    className={`d-flex flex-column mb-4 ${
                                        mobile ? 'w-auto' : 'w-50'
                                    }`}
                                >
                                    <div className="d-flex align-items-center position-relative">
                                        <MDBIcon
                                            fas
                                            icon="lock me-3"
                                            size="lg"
                                        />

                                        <MDBInput
                                            label="Create password*"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            className="pe-5 w-100"
                                            {...register('password')}
                                        />

                                        <span
                                            onClick={() =>
                                                setShowPassoword(
                                                    (prev) => !prev,
                                                )
                                            }
                                            className="position-absolute end-0 me-1 cursor-pointer opacity-50"
                                        >
                                            {showPassword ? (
                                                <EyeOff size={18} />
                                            ) : (
                                                <Eye size={18} />
                                            )}
                                        </span>
                                    </div>

                                    {/* Error */}
                                    {errors.password && (
                                        <div className="text-danger small mt-1">
                                            {errors.password.message}
                                        </div>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div
                                    className={`d-flex flex-column mb-4 ${
                                        mobile ? 'w-auto' : 'w-50'
                                    }`}
                                >
                                    <div className="d-flex align-items-center position-relative">
                                        <MDBIcon
                                            fas
                                            icon="lock me-3"
                                            size="lg"
                                        />

                                        <MDBInput
                                            label="Confirm password*"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            className="pe-5 w-100"
                                            {...register('confirmPassword')}
                                        />
                                    </div>

                                    {/* Error */}
                                    {errors.confirmPassword && (
                                        <div className="text-danger small mt-1">
                                            {errors.confirmPassword.message}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4 d-inline-flex flex-wrap">
                                    <MDBCheckbox
                                        label="Agree to"
                                        name="agreementCheck"
                                        checked={agreementCheck}
                                        onChange={() =>
                                            setAgreementCheck((prev) => !prev)
                                        }
                                    />
                                    <Link to="#">&nbsp;terms & conditions</Link>
                                </div>

                                {/* Root Error */}
                                {errors.root && (
                                    <div className="alert alert-danger text-center">
                                        {errors.root.message}
                                    </div>
                                )}

                                <MDBBtn
                                    type="submit"
                                    className="mb-4"
                                    size="lg"
                                    disabled={
                                        isLoading ||
                                        isSubmitting ||
                                        !agreementCheck
                                    }
                                >
                                    Register
                                </MDBBtn>
                                <p>
                                    Already have an account?
                                    <Link to="/login">&nbsp;Login</Link>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default Register;
