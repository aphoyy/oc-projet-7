import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';

function Root() {
    return (
        <>
            <Header selected={"home"} />
            <main>
                <Banner
                    className="home"
                    title="Chez vous, partout et ailleurs"
                    src="banner-img-1.png"
                />
                <Gallery />
            </main>
            <Footer />
        </>
    );
}

export default Root;