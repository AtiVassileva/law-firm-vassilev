import { Link } from 'react-router-dom';

const Service = ({title, content, icon}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="service-item">
                <div className="service-icon">
                    <i className={icon}></i>
                </div>
                <h3>{title}</h3>
                <p>{content}</p>
                <Link to="/contact" className="btn" >
                    Свържи се
                </Link>
            </div>
        </div>
    );
};

export default Service;