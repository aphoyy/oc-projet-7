import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';

function Root() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Gallery />
            </main>
            <Footer />
        </>
    );
}

export default Root;