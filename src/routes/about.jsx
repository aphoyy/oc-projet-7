import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

function About() {
    return (
        <>
            <Header />
            <main>
                <Banner 
                    src="banner-img-2.png"
                    brightness="brightness-70"
                />
            </main>
            <Footer />
        </>
    );
}

export default About;