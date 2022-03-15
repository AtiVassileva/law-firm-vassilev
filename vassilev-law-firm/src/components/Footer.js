import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-8">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="footer-link">
                                    <h2>адв. Василев</h2>
                                    <Link to="/contact">Гражданско право</Link>
                                    <Link to="/contact">Наследствено право</Link>
                                    <Link to="/contact">Търговско право</Link>
                                    <Link to="/contact">Вещно право</Link>
                                    <Link to="/contact">Облигационно право</Link>
                                    <Link to="/contact">Медицинско право</Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="footer-link">
                                    <h2>Бързи линкове</h2>
                                    <Link to="/">Начало</Link>
                                    <Link to="/about">За мен</Link>
                                    <Link to="/practice">Практика</Link>
                                    <Link to="/contact">Контакти</Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="footer-contact">
                                    <h2>Свържи се</h2>
                                    <p>
                                        <i className="fa fa-map-marker-alt"></i>
                                        гр. София, бул. Скобелев 19
                                    </p>
                                    <p><i className="fa fa-phone-alt"></i>
                                        +359888587730
                                    </p>
                                    <p><i className="fa fa-envelope"></i>
                                        atvassilev@abv.bg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <Link to="https://htmlcodex.com/law-firm-website-template">HTML Codex</Link>, All Right Reserved.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By
                            <Link to="https://htmlcodex.com">HTML Codex
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <a href="#" className="back-to-top">
                <i className="fa fa-chevron-up"></i>
            </a>
        </div>
    );
};

export default Footer;