import PageHeader from '../PageHeader';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
    return (
        <>
            <PageHeader title="Директен контакт"/>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <ContactInfo/>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;