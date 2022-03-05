﻿import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-8">
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <div class="footer-link">
                                    <h2>адв. Василев</h2>
                                    <Link to="/contact">Гражданско право</Link>
                                    <Link to="/contact">Наследствено право</Link>
                                    <Link to="/contact">Търговско право</Link>
                                    <Link to="/contact">Вещно право</Link>
                                    <Link to="/contact">Облигационно право</Link>
                                    <Link to="/contact">Медицинско право</Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="footer-link">
                                    <h2>Бързи линкове</h2>
                                    <Link to="/about">За мен</Link>
                                    <Link to="/practice">Практика</Link>
                                    <Link to="/pricing">Тарифи</Link>
                                    <Link to="/contact">Контакти</Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="footer-contact">
                                    <h2>Свържи се</h2>
                                    <p><i class="fa fa-map-marker-alt"></i>гр. Смолян, ул. Дичо Петров 13</p>
                                    <p><i class="fa fa-phone-alt"></i>+359888587730</p>
                                    <p><i class="fa fa-envelope"></i>atvassilev@abv.bg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container copyright">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; <a href="https://htmlcodex.com/law-firm-website-template">HTML Codex</a>, All Right Reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;