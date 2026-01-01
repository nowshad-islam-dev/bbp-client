import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple,
} from 'mdb-react-ui-kit';

interface NewsCardProps {
    title: string;
    text: string;
    img: string;
}

export default function NewsCard({ title, text, img }: NewsCardProps) {
    return (
        <MDBCard
            role="button"
            className="h-100 shadow-2"
            style={{ height: '300px' }}
        >
            <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
            >
                {/* Responsive image ratio */}
                <div className="ratio ratio-16x9">
                    <MDBCardImage
                        src={img}
                        alt="News"
                        className="object-fit-cover"
                    />
                </div>
                <a>
                    <div
                        className="mask"
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle className="fw-bold">{title}</MDBCardTitle>
                <MDBCardText className="text-muted">
                    {text.length > 80 ? `${text.slice(0, 81)}...` : text}
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}
