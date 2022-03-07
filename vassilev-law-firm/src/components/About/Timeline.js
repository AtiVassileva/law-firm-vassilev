import TimelineItem from "./TimelineItem";

const Timeline = () => {
    return (
        <div className="timeline">
            <div className="container">
                <div className="section-header">
                    <h2>Професионален път</h2>
                </div>
                <div className="timeline-start">
                    <TimelineItem
                        className="timeline-container left"
                        year={new Date().getFullYear()}
                        title="Наши дни"
                        text="Адв. Василев практикува в областите на гражданското, търговското, вещното, облигационното, наследственото, медицинското и гражданско-процесуалното право."
                    />
                    <TimelineItem
                        className="timeline-container right"
                        year="1995"
                        title="Адвокат"
                        text="На 24.10.1995 година е вписан в Адвокатската колегия на гр.Смолян от когато и упражнява професията на адвокат."
                    />
                    <TimelineItem
                        className="timeline-container left"
                        year="1993-1995"
                        title="Съдия"
                        text="В периода от 09.12.1993 година до 04.10.1995 година Василев упражнява професията на Младши съдия в Смолянския окръжен съд."
                    />
                    <TimelineItem
                        className="timeline-container right"
                        year="1993"
                        title="Стаж"
                        text="В периода от 07.06.1993 година до 07.12.1993 година Атанас Василев е стажант съдия в Смолянския окръжен съд."
                    />
                    <TimelineItem
                        className="timeline-container left"
                        year="1992"
                        title="Образование"
                        text="Завъшва право в Юридическия факултет на Софийския университет през 1992 година."
                    />
                </div>
            </div>
        </div>
    );
};

export default Timeline;