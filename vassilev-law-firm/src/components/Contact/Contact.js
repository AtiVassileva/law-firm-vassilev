import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Директен контакт</h2>
                        </div>
                    </div>
                </div>
            </div>
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