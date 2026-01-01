import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
} from 'mdb-react-ui-kit';

interface EventCardProps {
    title: string;
    date: string;
    text: string;
}

export default function EventCard({ title, date, text }: EventCardProps) {
    return (
        <MDBCard className="p-0 h-100 shdow-1">
            <MDBCardBody>
                <MDBCardTitle className="fw-bold">{title}</MDBCardTitle>
                <span className="text-info">Date: {date}</span>
                <MDBCardText>{text}</MDBCardText>
                <MDBBtn className="w-100 rounded-pill">Register</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}
