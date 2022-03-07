const ContactItem = ({heading, text}) => {
    return (
        <div className="contact-item">
            <i className="fa fa-map-marker-alt"></i>
            <div className="contact-text">
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ContactItem;