import { MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <MDBContainer
            fluid
            className="p-3 bg-primary d-sm-flex justify-content-between text-white"
        >
            <div className="mb-3 mb-sm-0">
                <h6 className="fw-bold">Contact Us</h6>
                <p className="m-0">
                    <Mail /> : ballotbeyondpolitics@info.com
                </p>
                <p className="m-0">
                    <Phone size={18} /> : +88016677889
                </p>
            </div>
            <div className="mb-3 mb-sm-0">
                <h6 className="fw-bold">Follow Us</h6>
                <span className="ms-2" role="button">
                    <MDBIcon fab icon="facebook" />
                </span>
                <span className="ms-2" role="button">
                    <MDBIcon fab icon="instagram" />
                </span>
            </div>
            <div className="mb-3 mb-sm-0">
                <h6 className="fw-bold">Quick Links</h6>
                <p className="m-0">Privacy Policy</p>
                <p className="m-0">Terms & Conditions</p>
            </div>
        </MDBContainer>
    );
}
