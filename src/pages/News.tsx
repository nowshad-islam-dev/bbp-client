import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInputGroup,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useGetNewsQuery } from '@/store/api/apiSlice';
import Layout from '@/Layout';
import FullPageLoader from '@/components/Loader';
import NewsCard from '@/components/Cards/News';

const News = () => {
    const navigate = useNavigate();
    const { data, isLoading, isError } = useGetNewsQuery();

    const news = data?.data;

    if (isLoading) {
        return <FullPageLoader />;
    }

    if (isError || !news) {
        return (
            <Layout>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: '99vh' }}
                >
                    <p className="ms-3 text-danger fw-bold display-3">
                        Failed to load news. Please try again later.
                    </p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div style={{ minHeight: '99vh' }}>
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
                            <MDBCol
                                sm="6"
                                lg="4"
                                key={n.id}
                                onClick={() => navigate(`/news/${n.id}`)}
                            >
                                <NewsCard
                                    title={n.title}
                                    text={n.text}
                                    img={n.img}
                                />
                            </MDBCol>
                        ))}
                    </MDBRow>
                </MDBContainer>
            </div>
        </Layout>
    );
};

export default News;
