import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NewsCard from '@/components/Cards/News';
import EventCard from '@/components/Cards/Event';
import Footer from '@/components/Footer';
// mock card data
import { news, events } from '@/mocks';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <MDBContainer fluid className="mt-2 p-2">
                <MDBRow className="g-4">
                    {/* NEWS SECTION */}
                    <MDBCol md="8">
                        <h4 className="text-black mb-3">Election News</h4>

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
                    </MDBCol>

                    {/* EVENTS SECTION */}
                    <MDBCol md="4">
                        <h4 className="text-black mb-3">Upcoming Events</h4>

                        <MDBRow className="g-3">
                            {events.map((ev) => (
                                <MDBCol md="12" key={ev.id}>
                                    <EventCard
                                        title={ev.title}
                                        date={ev.date}
                                        text={ev.text}
                                    />
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer fluid className="mt-2 p-2">
                <h4 className="text-black mb-3">Important Resources</h4>
                <div className="ps-5">
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">Election commission of Bangladesh</a>
                        </li>
                        <li>
                            <a href="#">Voter Registration Guidelines</a>
                        </li>
                        <li>
                            <a href="#">Polling Station Locator</a>
                        </li>
                    </ul>
                </div>
            </MDBContainer>
            <Footer />
        </>
    );
};

export default Home;
