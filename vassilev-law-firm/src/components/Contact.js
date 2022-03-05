const Contact = () => {
    return (
        <>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Директен контакт</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact">
                <div class="container">
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
                        <div class="col-md-6">
                            <div class="contact-form">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Име и фамилия" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Вашата електронна поща" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Тема" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Съдържание" required="required" ></textarea>
                                    </div>
                                    <div>
                                        <button class="btn" type="submit">Изпрати запитване</button>
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