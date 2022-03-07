const TimelineItem = ({ className, year, title, text }) => {
    return (
        <div className={className}>
            <div className="timeline-content">
                <h2><span>{year}</span>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default TimelineItem;