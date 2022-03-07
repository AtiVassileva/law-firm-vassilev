import ContactItem from "./ContactItem";

const ContactInfo = () => {
    return (
        <div className="col-md-6">
            <div className="contact-info">
                <ContactItem heading="Адрес" text="София, бул. Скобелев 19"/>
                <ContactItem heading="Телефон" text="+359888587730"/>
                <ContactItem heading="Имейл" text="atvassilev@abv.bg"/>
            </div>
        </div>
    );
};

export default ContactInfo;