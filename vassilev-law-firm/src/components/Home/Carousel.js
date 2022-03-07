import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
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
    );
};

export default Carousel;