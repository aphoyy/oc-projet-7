import './Header.scss';

function Header() {
    return (
        <header className="header">
            <img src="src/assets/kasa-logo-colored.png" alt="Kasa logo" />
            <nav>
                <a href="/">Accueil</a>
                <a href="/about">A propos</a>
            </nav>
        </header>
    );
}

export default Header;
