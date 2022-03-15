import ContactItem from "./ContactItem";

const ContactInfo = () => {
    return (
        <div className="col-md-6">
            <div className="contact-info">
                <ContactItem 
                icon="fa fa-map-marker-alt"
                heading="Адрес" 
                text="София, бул. Скобелев 19"
                />
                <ContactItem 
                icon="fa fa-phone-alt"
                heading="Телефон" 
                text="+359888587730"
                />
                <ContactItem 
                icon="fa fa-envelope"
                heading="Имейл" 
                text="atvassilev@abv.bg"
                />
            </div>
        </div>
    );
};

export default ContactInfo;