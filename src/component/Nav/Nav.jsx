import SearchBar from '../SearchBar/SearchBar.jsx';
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Look for your city...
                        </a>
                    </li>
                </ul>
                <SearchBar />
            </div>
        </nav>
    );
}
