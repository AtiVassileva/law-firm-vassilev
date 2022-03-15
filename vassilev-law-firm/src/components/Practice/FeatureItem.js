const FeatureItem = ({title, text, icon}) => {
    return (
        <div className="row align-items-center feature-item">
            <div className="col-5">
                <div className="feature-icon">
                    <i className={icon}></i>
                </div>
            </div>
            <div className="col-7">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default FeatureItem;