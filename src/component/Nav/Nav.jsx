import SearchBar from '../SearchBar/SearchBar.jsx';
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
                        alt=""
                        width="30"
                        height="24"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                    </ul>
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
}
