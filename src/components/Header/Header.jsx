import './Header.scss';

export function Header({ selected }) {
    return (
        <header className="header">
            <img src="/src/assets/kasa-logo-colored.png" alt="Kasa logo" />
            <nav>
                <a 
                    href="/"
                    className={selected == "home" ? "active" : ""}
                >
                    <h2>Accueil</h2>
                </a>
                <a
                    href="/about"
                    className={selected == "about" ? "active" : ""}
                >
                    <h2>A propos</h2>
                </a>
            </nav>
        </header>
    );
}
