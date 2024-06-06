import { Header, Footer } from '../components';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />
            <main className="error">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
                <a href="/">Retourner sur la page d&apos;accueil</a>
            </main>
            <Footer />
        </>
    )
}

export default ErrorPage;