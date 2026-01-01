import { MDBContainer } from 'mdb-react-ui-kit';

export default function Hero() {
    return (
        <MDBContainer fluid className="mt-3 p-1">
            <div className="bg-image position-relative">
                <img
                    src="/hero.jpg"
                    className="w-100 img-fluid rounded"
                    alt="Hero"
                />

                {/* Dark overlay */}
                <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                >
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <h1 className="text-white text-center display-5 fw-bold">
                            Bringing Citizens & Leaders Closer
                        </h1>
                    </div>
                </div>
            </div>
        </MDBContainer>
    );
}
