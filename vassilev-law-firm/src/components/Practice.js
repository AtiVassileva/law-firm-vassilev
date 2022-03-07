import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

const Practice = () => {
    return (
        <>
            <PageHeader title="Професионална практика" />
            <div className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa fa-landmark"></i>
                                </div>
                                <h3>Гражданско право</h3>
                                <p>Гражданско-правни субекти и правоотношенията между тях.
                                </p>
                                <Link to="/contact" className="btn" href="">Свържи се</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa fa-users"></i>
                                </div>
                                <h3>Наследствено право</h3>
                                <p>
                                    Завещания, съдебни делби на имоти, наследяване.</p>
                                <Link to="/contact" className="btn" href="">Свържи се</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa fa-hand-holding-usd"></i>
                                </div>
                                <h3>Търговско право</h3>
                                <p>
                                    Търговски договори, несъстоятелност, регистрации.
                                </p>
                                <Link to="/contact" className="btn" href="">Свържи се</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>
                                <h3>Вещно право</h3>
                                <p>
                                    Право на собственост, ограничени вещни права, право на ползване.
                                </p>
                                <Link to="/contact" className="btn" href="">Свържи се</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa fa-gavel"></i>
                                </div>
                                <h3>Облигационно право</h3>
                                <p>Уреждане на облигационни отношения, акции, ценни книжа.</p>
                                <Link to="/contact" className="btn" href="">Свържи се</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa fa-globe"></i>
                                </div>
                                <h3>Медицинско право</h3>
                                <p>
                                    Последици от неправилно лечение, грешни диагнози.
                                </p>
                                <Link to="/contact" className="btn" href="">Свържи се</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="feature">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="section-header">
                                <h2>Защо адв. Василев?</h2>
                            </div>
                            <div class="row align-items-center feature-item">
                                <div class="col-5">
                                    <div class="feature-icon">
                                        <i class="fa fa-gavel"></i>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <h3>Best law practices</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                                    </p>
                                </div>
                            </div>
                            <div class="row align-items-center feature-item">
                                <div class="col-5">
                                    <div class="feature-icon">
                                        <i class="fa fa-balance-scale"></i>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <h3>Efficiency & Trust</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                                    </p>
                                </div>
                            </div>
                            <div class="row align-items-center feature-item">
                                <div class="col-5">
                                    <div class="feature-icon">
                                        <i class="far fa-smile"></i>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <h3>Results you deserve</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="feature-img">
                                <img src="img/feature.jpg" alt="Feature" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Practice;