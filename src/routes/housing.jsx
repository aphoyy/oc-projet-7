import { Header, Banner, Accordion, Rating, Footer } from '../components';
import data from '../datas/logements.json';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Housing() {
    // Get id from params
    const id = useParams().id;

    // Get list of all valid id
    const validId = []
    for (let i = 0; i < data.length; i++) {
        validId.push(data[i]["id"]);
    }

    // Check if id is valid else go to error page
    const navigate = useNavigate();
    useEffect(() => {
        if (id === null || validId.includes(id) === false) {
            navigate('/404');
        }
    })

    // Get appartment information
    let item = data[0];
    if (id !== null && validId.includes(id) === true) {
        const index = validId.findIndex((value) => value === id);
        item = data[index];
    }

    return (
        <>
            <Header />
            <main className="housing">
                <Banner
                    slides={item["pictures"]}
                    className={"housing"}
                />
                <div className="info">
                    <div className="info-housing">
                        <h1>{item["title"]}</h1>
                        <h3>{item["location"]}</h3>
                        <div className="tags">
                            {item["tags"].map((item, index) => (
                                <div key={item + index}>{item}</div>
                            ))}
                        </div>
                    </div>
                    <div className="info-host">
                        <div className="host">
                            <h3>
                                {item["host"]["name"].split(' ')[0]}
                                <span> {item["host"]["name"].split(' ')[1]}</span>
                            </h3>
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