import emailjs from 'emailjs-com';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import { successfullySentQuestionMessage } from '../../utils/notificationConstants';

const ContactForm = () => {
    const { addNotification } = useNotificationContext();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t9eztsu', 'template_bzgu2dd', e.target, 'eHPiisu9RiN1VfbIB')
            .then(() => {
                addNotification(successfullySentQuestionMessage, types.success)
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="col-md-6">
            <div className="contact-form">
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Име и фамилия"
                            name="name"
                            required="required" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Вашата електронна поща"
                            name="email"
                            required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            name="subject"
                            placeholder="Тема" required="required" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="content"
                            placeholder="Съдържание" required="required" ></textarea>
                    </div>
                    <div>
                        <button className="btn" type="submit">Изпрати запитване</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;