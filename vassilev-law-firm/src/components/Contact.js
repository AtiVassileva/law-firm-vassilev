import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t9eztsu', 'template_bzgu2dd', e.target, 'eHPiisu9RiN1VfbIB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

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
                        <div className="col-md-6">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="contact-text">
                                        <h2>Местоположение</h2>
                                        <p>гр. Смолян, ул. Полк. Дичо Петров 13</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-phone-alt"></i>
                                    <div className="contact-text">
                                        <h2>Телефон</h2>
                                        <p>+359888587730</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <i className="fa fa-envelope"></i>
                                    <div className="contact-text">
                                        <h2>Имейл</h2>
                                        <p>atvassilev@abv.bg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;