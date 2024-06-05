import './Header.scss';

function Header({ selected }) {
    return (
        <header className="header">
            <img src="/src/assets/kasa-logo-colored.png" alt="Kasa logo" />
            <nav>
                <a 
                    href="/"
                    className={selected == "home" ? "active" : ""}
                >
                    Accueil
                </a>
                <a
                    href="/about"
                    className={selected == "about" ? "active" : ""}
                >
                    A propos
                </a>
            </nav>
        </header>
    );
}

export default Header;
