import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/carousel-1.jpg" alt="Carousel" />
                        <div className="carousel-caption">
                            <h1 className="animated fadeInLeft">Адвокатска кантора <br />
                                Атанас Василев</h1>
                            <p className="animated fadeInRight">гр. София, бул. Скобелев 19</p>
                            <Link to="/contact" className="btn animated fadeInUp">
                                Свържи се
                            </Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/carousel-2.jpg" alt="Carousel" />
                        <div className="carousel-caption">
                            <h1 className="animated fadeInLeft">Готови сме да защитим интересите ви.</h1>
                            <p className="animated fadeInRight">Не се колебайте да се свържете с нас!</p>
                            <Link to="/contact" className="btn animated fadeInUp">
                                Свържи се
                            </Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/carousel-3.jpg" alt="Carousel" />
                        <div className="carousel-caption">
                            <h1 className="animated fadeInLeft">Борим се за правата ви.</h1>
                            <p className="animated fadeInRight">Вярваме в справедливостта.</p>
                            <Link to="/contact" className="btn animated fadeInUp">
                                Свържи се
                            </Link>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="feature-top">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-sm-6">
                            <div className="feature-item">
                                <i className="far fa-check-circle"></i>
                                <h3>Legal</h3>
                                <p>Govt Approved</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="feature-item">
                                <i className="fa fa-user-tie"></i>
                                <h3>Attorneys</h3>
                                <p>Expert Attorneys</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="feature-item">
                                <i className="far fa-thumbs-up"></i>
                                <h3>100% Успех</h3>
                                <p>Без загубено дело</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="feature-item">
                                <i className="far fa-handshake"></i>
                                <h3>Support</h3>
                                <p>Quick Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="faqs-img">
                                <img src="img/faqs.jpg" alt="Law" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="section-header">
                                <h2>Често задавани въпроси</h2>
                            </div>
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne" aria-expanded="true">
                                            <span>1</span> Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                                            <span>2</span> Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapseThree">
                                            <span>3</span> Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapseFour">
                                            <span>4</span> Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapseFive">
                                            <span>5</span> Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link className="btn" to="">Виж всички</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;