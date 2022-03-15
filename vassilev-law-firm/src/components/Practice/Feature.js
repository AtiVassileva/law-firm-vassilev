import FeatureItem from "./FeatureItem";

const Feature = () => {
    return (
        <div className="feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="section-header">
                            <h2>Защо адв. Василев?</h2>
                        </div>
                        <FeatureItem
                            icon="fa fa-gavel"
                            title="Най-добрите правни практики"
                            text=""
                        />
                        <FeatureItem
                            icon="fa fa-balance-scale"
                            title="Ефективност и доверие"
                            text=""
                        />
                        <FeatureItem
                            icon="far fa-smile"
                            title="Желани резултати"
                            text=""
                        />
                    </div>
                    <div className="col-md-5">
                        <div className="feature-img">
                            <img src="img/feature.jpg" alt="Feature" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;