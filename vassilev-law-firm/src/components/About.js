import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div class="about">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6">
                            <div class="about-img">
                                <img src="img/vassilev.jpg" alt="Atanas Vassilev" />
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <div class="section-header">
                                <h2>адв. Атанас Василев</h2>
                            </div>
                            <div class="about-text">
                                <p>
                                    Адвокат Атанас Василев е роден на 27 май 1968 година в гр. Смолян. Завършва Математическа гимназия "Васил Левски" в родния си град.
                                </p>
                                <p>
                                    Завъшва право в Юридическия факултет на Софийския университет през 1992 година. В периода от 07.06.1993 година до 07.12.1993 година е стажант съдия в Смолянския окръжен съд, а в периода от 09.12.1993 година до 04.10.1995 година е Младши съдия в същия съд. На 24.10.1995 година е вписан в Адвокатската колегия на гр.Смолян от когато и упражнява професията на адвокат.
                                </p>
                                <p>
                                    Практикува в областите на
                                    гражданското, търговското, вещното, облигационното, наследственото, медицинското и гражданско-процесуалното право.</p>
                                <Link to="/contact" class="btn" href="">Свържи се с адв. Василев</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="timeline">
                <div class="container">
                    <div class="section-header">
                        <h2>Професионален път</h2>
                    </div>
                    <div class="timeline-start">
                        <div class="timeline-container left">
                            <div class="timeline-content">
                                <h2><span>{new Date().getFullYear()}</span>Наши дни</h2>
                                <p>
                                Адв. Василев практикува в областите на гражданското, търговското, вещното, облигационното, наследственото, медицинското и гражданско-процесуалното право.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-container right">
                            <div class="timeline-content">
                                <h2><span>1995</span>Адвокат</h2>
                                <p>
                                    На 24.10.1995 година е вписан в Адвокатската колегия на гр.Смолян от когато и упражнява професията на адвокат.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-container left">
                            <div class="timeline-content">
                                <h2><span>1993-1995</span>Съдия</h2>
                                <p>
                                    В периода от 09.12.1993 година до 04.10.1995 година Василев упражнява професията на Младши съдия в Смолянския окръжен съд.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-container right">
                            <div class="timeline-content">
                                <h2><span>1993</span>Стаж</h2>
                                <p>
                                    В периода от 07.06.1993 година до 07.12.1993 година Атанас Василев е стажант съдия в Смолянския окръжен съд.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-container left">
                            <div class="timeline-content">
                                <h2><span>1992</span>Образование</h2>
                                <p>
                                    Завъшва право в Юридическия факултет на Софийския университет през 1992 година.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-container right">
                            <div class="timeline-content">
                                <h2><span>1968</span>Началото</h2>
                                <p>
                                    Роден на 27 май 1968 година в гр. Смолян.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;