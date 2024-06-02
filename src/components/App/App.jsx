import './App.scss';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <div className="main">
                <Banner />
                <Gallery />
            </div>
            <Footer />
        </>
    );
}

export default App;
