import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

type FullPageLoaderProps = {
    show?: boolean;
    label?: string;
};

const FullPageLoader: React.FC<FullPageLoaderProps> = ({
    show = true,
    label = 'Loading…',
}) => {
    if (!show) return null;

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-75"
            style={{ zIndex: 9999 }}
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <div className="text-center">
                <MDBSpinner
                    role="status"
                    className="mb-3"
                    color="primary"
                    style={{ width: '3rem', height: '3rem' }}
                />
                <div className="fw-medium text-muted">{label}</div>
            </div>
        </div>
    );
};

export default FullPageLoader;
