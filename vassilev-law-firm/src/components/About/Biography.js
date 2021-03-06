import { Link } from 'react-router-dom';

const Biography = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="about-img">
                            <img src="img/vassilev.jpg"
                                alt="Atanas Vassilev" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="section-header">
                            <h2>адв. Атанас Василев</h2>
                        </div>
                        <div className="about-text">
                            <p>
                                Адвокат Атанас Василев е роден на 27 май 1968 година в гр. Смолян. Завършва Математическа гимназия "Васил Левски" в родния си град.
                            </p>
                            <p>
                                Завъшва право в Юридическия факултет на Софийския университет през 1992 година. В периода от 07.06.1993 година до 07.12.1993 година е стажант съдия в Смолянския окръжен съд, а в периода от 09.12.1993 година до 04.10.1995 година е Младши съдия в същия съд. На 24.10.1995 година е вписан в Адвокатската колегия на гр.Смолян от когато и упражнява професията на адвокат.
                            </p>
                            <p>
                                Практикува в областите на
                                гражданското, търговското, вещното, облигационното, наследственото, медицинското и гражданско-процесуалното право.</p>
                            <Link to="/contact" className="btn">
                                Свържи се с адв. Василев
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biography;