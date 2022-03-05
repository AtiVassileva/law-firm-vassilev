import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div className="nav-bar">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <Link to="/" className="nav-item nav-link active">
                                <i className="fa fa-home"></i>
                                &nbsp;Начало
                            </Link>
                            <Link to="/about" className="nav-item nav-link">За мен</Link>
                            <Link to="/practice" className="nav-item nav-link">Практика</Link>
                            <Link to="/pricing" className="nav-item nav-link">Тарифи</Link>
                            <Link to="/contact" className="nav-item nav-link">Контакти</Link>

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