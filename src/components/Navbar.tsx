import { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <MDBNavbar
            expand="md"
            light
            bgColor="light"
            className="shadow-sm py-2 sticky-top"
        >
            <MDBContainer fluid className="px-3">
                {/* Brand */}
                <span className="logo fs-5 fw-semibold text-primary d-flex align-items-center">
                    <MDBIcon far icon="handshake" className="me-2" />
                    Ballot Beyond Politics
                </span>

                {/* Toggler */}
                <MDBNavbarToggler
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="border-0 shadow-none"
                >
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>

                {/* Collapsible Nav Items */}
                <MDBCollapse
                    navbar
                    open={open}
                    className="d-md-flex justify-content-end mt-3 mt-md-0"
                >
                    <MDBNavbarNav className="align-items-md-center gap-md-2">
                        {/* Login Button */}
                        <MDBNavbarItem>
                            <button className="btn d-flex align-items-center gap-1 px-3 py-2 rounded-pill border-0 bg-primary  fw-medium text-white">
                                <UserCircle2 size={18} />
                                <Link className="text-white" to="/login">
                                    Login
                                </Link>
                            </button>
                        </MDBNavbarItem>

                        {/* Links */}
                        {['Home', 'Candidates', 'News', 'Polls', 'About'].map(
                            (item) => (
                                <MDBNavbarItem key={item}>
                                    <MDBNavbarLink
                                        href="#"
                                        className="fw-medium text-dark px-3 py-2 rounded hover-bg"
                                    >
                                        {item}
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            ),
                        )}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>

            {/* Small hover effect style */}
            <style>{`
                .hover-bg:hover {
                    background: #f0f0f0;
                    transition: background 0.2s;
                }
            `}</style>
        </MDBNavbar>
    );
}
