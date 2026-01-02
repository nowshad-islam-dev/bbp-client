import { MDBBtn, MDBBtnGroup, MDBInput } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import { useGetNewsByIdQuery } from '@/store/api/apiSlice';
import Layout from '@/Layout';
import FullPageLoader from '@/components/Loader';

const SingleNews = () => {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading, isError } = useGetNewsByIdQuery(id!, {
        skip: !id,
    });

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
            <main className="container py-4" style={{ minHeight: '99vh' }}>
                <article className="mx-auto" style={{ maxWidth: '900px' }}>
                    <h2 className="text-center fw-bold mb-4">{news.title}</h2>

                    <div className="text-center mb-4">
                        <img
                            src={news.img}
                            alt={news.title}
                            className="img-fluid rounded shadow-sm"
                            style={{
                                maxHeight: '450px',
                                objectFit: 'cover',
                            }}
                        />
                        <small>{new Date(news.createdAt).toDateString()}</small>
                    </div>

                    <p className="fs-6 lh-lg text-muted">{news.text}</p>
                </article>
            </main>
            <section className="p-3">
                <p className="m-0 fw-bold">Add your valuable comment</p>
                <MDBInput type="text" label="Write here..." className="my-1" />
                <MDBBtnGroup>
                    <MDBBtn className="bg-danger">Cancel</MDBBtn>
                    <MDBBtn>Comment</MDBBtn>
                </MDBBtnGroup>
            </section>
        </Layout>
    );
};

export default SingleNews;
