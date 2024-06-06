import { Header, Banner, Footer, Accordion }  from '../components';

function About() {
    return (
        <>
            <Header selected={"about"} />
            <main className="about">
                <Banner
                    className={"about"}
                    src="banner-img-2.png"
                />
                <Accordion
                    title="Fiabilité"
                    text="Les annonces postées sur Kasa garantissent une fiabilité total. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Accordion
                    title="Respect"
                    text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Accordion
                    title="Service"
                    text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Accordion
                    title="Sécurité"
                    text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </main>
            <Footer />
        </>
    );
}

export default About;
