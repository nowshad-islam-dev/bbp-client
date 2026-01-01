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
    MDBCardImage,
    MDBInput,
    MDBIcon,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { handleFormApiError } from '@/helpers/handleFormApiError';
import { LoginSchema, type LoginFormData } from '@/schemas/auth';
import { useAppDispatch } from '@/hooks/redux';
import { useIsMobile } from '@/hooks/useMobile';
import { useLoginMutation } from '@/store/api/apiSlice';
import { setCredentials } from '@/store/features/authSlice';

const Login = () => {
    const [loginQuery, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const mobile = useIsMobile();
    const navigate = useNavigate();

    const [showPassword, setShowPassoword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<LoginFormData>({ resolver: zodResolver(LoginSchema) });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const result = await loginQuery(data).unwrap();
            dispatch(setCredentials(result));
            void navigate('/');
        } catch (err) {
            handleFormApiError<LoginFormData>({
                error: err,
                setError,
                fallbackMessage: 'Login failed. Please try again.',
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
                                lg="6"
                                className="order-2 order-lg-1 d-flex flex-column align-items-center"
                            >
                                <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                    Login With Your Credentials
                                </p>

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
                                            label="Enter your email"
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
                                            label="Type password"
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

                                {/* Root Error */}
                                {errors.root && (
                                    <div className="alert alert-danger text-center">
                                        {errors.root.message}
                                    </div>
                                )}

                                <MDBBtn
                                    className="mb-4"
                                    size="lg"
                                    disabled={isLoading || isSubmitting}
                                >
                                    Login
                                </MDBBtn>

                                <p>
                                    Don't have an account?
                                    <Link to="/register">
                                        &nbsp;Register here
                                    </Link>
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
                    </form>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default Login;
