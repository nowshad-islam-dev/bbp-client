import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Layout from '@/Layout';
import CandidateCard from '@/components/Cards/Candidate';
import { candidates } from '@/mocks';

const Candidates = () => {
    return (
        <Layout>
            <MDBContainer
                fluid
                className="mt-2 p-2"
                style={{ minHeight: '99vh' }}
            >
                <MDBRow className="g-3">
                    {candidates.map((c) => (
                        <MDBCol sm={6} lg={4} key={c.id}>
                            <CandidateCard
                                name={c.name}
                                text={c.text}
                                img={c.img}
                                features={c.features}
                            />
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </Layout>
    );
};

export default Candidates;
