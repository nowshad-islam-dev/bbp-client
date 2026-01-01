import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBTypography,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <MDBContainer className="text-center" style={{ marginTop: '100px' }}>
            <MDBRow>
                <MDBCol>
                    <MDBTypography
                        tag="h1"
                        className="display-1"
                        color="danger"
                    >
                        404
                    </MDBTypography>
                    <MDBTypography tag="h2" className="mb-4" color="warning">
                        Page Not Found
                    </MDBTypography>
                    <MDBTypography tag="p" className="mb-4">
                        Sorry, the page you are looking for does not exist.
                    </MDBTypography>
                    <Link to="/" replace>
                        <MDBBtn color="primary">Go Back To Home</MDBBtn>
                    </Link>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default NotFound;
