const FeatureItem = ({title, text, icon}) => {
    return (
        <div class="row align-items-center feature-item">
            <div class="col-5">
                <div class="feature-icon">
                    <i class={icon}></i>
                </div>
            </div>
            <div class="col-7">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default FeatureItem;