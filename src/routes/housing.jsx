import Header from '../components/Header/Header';
import Accordion from '../components/Accordion/Accordion';
import Footer from '../components/Footer/Footer';
import data from '../datas/logements.json';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Housing() {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state

    useEffect(() => {
        if (id === null) {
            navigate('/');
        }
    })

    let item = data[0];
    if (id !== null) {
        const locationHousing = id["Housing"];
        let housingIndex;
        for (let i = 0; i < data.length; i++) {
            if (data[i]["id"] === locationHousing) {
                housingIndex = i;
            }
        }

        item = data[housingIndex];
    }

    let rating = [];
    for (let i = 1; i <= 5; i++) {
        if (i > item["rating"]) {
            rating.push(
                <img
                    key={"rating" + i}
                    src="/src/assets/star-inactive.png"
                    alt="Empty star"
                    className="star-inactive"
                />)
        } else {
            rating.push(
                <img
                    key={"rating" + i}
                    src="/src/assets/star-active.png"
                    alt="Colored star"
                    className="star-active"
                />)
        }
    }

    return (
        <>
            <Header />
            <main className="housing">
                <img src={item["cover"]} />
                <div className="info">
                    <div className="housing">
                        <h1>{item["title"]}</h1>
                        <h4>{item["location"]}</h4>
                        <div className="tags">
                            {item["tags"].map((item, index) => (
                                <div key={item + index}>{item}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="host">
                            <h4>{item["host"]["name"]}</h4>
                            <img src={item["host"]["picture"]} alt={item["host"]["name"]} />
                        </div>
                        <div className="rating">{rating}</div>
                    </div>
                </div>
                <div className="row">
                    <Accordion
                        title="Description"
                        text={item["description"]}
                    />
                    <Accordion
                        title="Équipements"
                        text={item["equipments"]}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Housing;