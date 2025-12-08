import { memo } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
} from 'mdb-react-ui-kit';

interface CandidateCardProps {
    name: string;
    text: string;
    img?: string;
    features?: string[];
    onFollow?: () => void;
    onShare?: () => void;
}

const FALLBACK_IMAGE =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_1280.png';

function CandidateCard({
    name,
    text,
    img = FALLBACK_IMAGE,
    features = [],
    onFollow,
    onShare,
}: CandidateCardProps) {
    return (
        <MDBCard className="d-flex flex-column align-items-center p-3 shadow-sm">
            <MDBCardImage
                src={img}
                alt={`${name}'s profile picture`}
                width="200"
                height="200"
                className="rounded-circle object-fit-cover mb-3"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                }}
            />

            <MDBCardBody className="text-center w-100">
                <MDBCardTitle>{name}</MDBCardTitle>
                <MDBCardText className="text-muted">{text}</MDBCardText>

                {features.length > 0 ? (
                    <ul className="list-unstyled ps-0 mb-3">
                        {features.map((feature, index) => (
                            <li key={index} className="small text-secondary">
                                • {feature}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="small text-muted mb-3">No features listed</p>
                )}

                <MDBBtn
                    className="w-100 rounded-pill mb-2"
                    onClick={onFollow}
                    aria-label={`Follow ${name}`}
                >
                    Follow
                </MDBBtn>

                <MDBBtn
                    className="w-100 rounded-pill text-bg-light btn-outline-dark"
                    onClick={onShare}
                    aria-label={`Share ${name}'s profile`}
                >
                    Share Profile
                </MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}

export default memo(CandidateCard);
