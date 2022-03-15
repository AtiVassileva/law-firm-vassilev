import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavMenu = () => {
    const location = useLocation().pathname;

    const getClassNames = (path) => {
        return location === path
            ? 'nav-item nav-link active'
            : 'nav-item nav-link';
    };

    return (
        <div className="nav-bar">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <Link to="/"
                                className={getClassNames('/')}>
                                <i className="fa fa-home"></i>
                                &nbsp;Начало
                            </Link>
                            <Link to="/about"
                                className={getClassNames('/about')}>
                                За мен
                            </Link>
                            <Link to="/practice"
                                className={getClassNames('/practice')}>
                                Практика
                            </Link>
                            <Link to="/contact"
                                className={getClassNames('/contact')}>
                                Контакти
                            </Link>

                        </div>
                        <div className="ml-auto">
                            <Link to="/contact" className="btn">Изпрати запитване</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavMenu;