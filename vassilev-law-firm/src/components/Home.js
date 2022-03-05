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
                            <h1 className="animated fadeInLeft">Адвокатска кантора Атанас Василев</h1>
                            <p className="animated fadeInRight">гр. Смолян, ул. Полк. Дичо Петров 13</p>
                            <a className="btn animated fadeInUp" href="/contact">Свържи се</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/carousel-2.jpg" alt="Carousel" />
                        <div className="carousel-caption">
                            <h1 className="animated fadeInLeft">Готови сме да защитим интересите ви.</h1>
                            <p className="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
                            <a className="btn animated fadeInUp" href="/contact">Свържи се</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/carousel-3.jpg" alt="Carousel" />
                        <div className="carousel-caption">
                            <h1 className="animated fadeInLeft">We fight for your privilege</h1>
                            <p className="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
                            <a className="btn animated fadeInUp" href="/contact">Свържи се</a>
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
            <div class="feature-top">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-3 col-sm-6">
                            <div class="feature-item">
                                <i class="far fa-check-circle"></i>
                                <h3>Legal</h3>
                                <p>Govt Approved</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="feature-item">
                                <i class="fa fa-user-tie"></i>
                                <h3>Attorneys</h3>
                                <p>Expert Attorneys</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="feature-item">
                                <i class="far fa-thumbs-up"></i>
                                <h3>100% Успех</h3>
                                <p>Без загубено дело</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="feature-item">
                                <i class="far fa-handshake"></i>
                                <h3>Support</h3>
                                <p>Quick Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;