import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInputGroup,
    MDBBtn,
} from 'mdb-react-ui-kit';
import Layout from '@/Layout';
import NewsCard from '@/components/Cards/News';
import { news } from '@/mocks';

const News = () => {
    return (
        <Layout>
            <div className="mb-3">
                <h4 className="text-black my-3">Subscribe for Updates</h4>
                <div className="d-flex justify-content-center">
                    <MDBInputGroup className="mb-3 w-75">
                        <input
                            className="form-control"
                            placeholder="Enter your email"
                            type="email"
                            style={{
                                borderTopLeftRadius: '25px',
                                borderBottomLeftRadius: '25px',
                            }}
                        />
                        <MDBBtn className="btn-primary">Subscribe</MDBBtn>
                    </MDBInputGroup>
                </div>
            </div>
            <MDBContainer fluid className="mt-2 p-2">
                <MDBRow className="g-3">
                    {news.map((n) => (
                        <MDBCol sm="6" lg="4" key={n.id}>
                            <NewsCard
                                title={n.title}
                                text={n.text}
                                img={n.img}
                            />
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </Layout>
    );
};

export default News;
