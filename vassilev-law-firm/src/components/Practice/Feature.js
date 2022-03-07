import FeatureItem from "./FeatureItem";

const Feature = () => {
    return (
        <div class="feature">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <div class="section-header">
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
                    <div class="col-md-5">
                        <div class="feature-img">
                            <img src="img/feature.jpg" alt="Feature" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;