const Feature = ({icon, title, text}) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="feature-item">
                <i className={icon}></i>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Feature;