const ContactItem = ({icon, heading, text}) => {
    return (
        <div className="contact-item">
            <i className={icon}></i>
            <div className="contact-text">
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ContactItem;