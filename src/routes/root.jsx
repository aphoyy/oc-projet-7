import { Header, Banner, Gallery, Footer } from '../components';

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