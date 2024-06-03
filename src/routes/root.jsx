import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';

function Root() {
    return (
        <>
            <Header />
            <main>
                <Banner 
                    title="Chez vous, partout et ailleurs"
                    src="banner-img-1.png"
                    brightness="brightness-40"
                />
                <Gallery />
            </main>
            <Footer />
        </>
    );
}

export default Root;