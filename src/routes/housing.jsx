import { Header, Banner, Accordion, Rating, Footer } from '../components';
import data from '../datas/logements.json';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Housing() {
    const [picture, setPicture] = useState(0)

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state
    useEffect(() => {
        if (id === null) {
            navigate('/not-found');
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
    return (
        <>
            <Header />
            <main className="housing">
                <Banner src={item["cover"]} className={"housing"} />
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
                            <h4>
                                {item["host"]["name"].split(' ')[0]}
                                <span> {item["host"]["name"].split(' ')[1]}</span>
                            </h4>
                            <img src={item["host"]["picture"]} alt={item["host"]["name"]} />
                        </div>
                        <Rating itemRating={item["rating"]} />
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