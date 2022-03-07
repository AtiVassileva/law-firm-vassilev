import { Link } from 'react-router-dom';
import Question from './Question';

const FAQ = () => {
    return (
        <div className="faqs">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="faqs-img">
                            <img src="img/faqs.jpg" alt="Law" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="section-header">
                            <h2>Често задавани въпроси</h2>
                        </div>
                        <div id="accordion">
                            <Question
                                number="1"
                                question=""
                                answer=""
                            />
                            <Question
                                number="2"
                                question=""
                                answer=""
                            />
                            <Question
                                number="3"
                                question=""
                                answer=""
                            />
                            <Question
                                number="4"
                                question=""
                                answer=""
                            />
                            <Question
                                number="5"
                                question=""
                                answer=""
                            />
                            <br />
                            <h5>Имате друг въпрос?</h5>
                        </div>
                        <Link className="btn" to="/contact">
                            Изпратете запитване сега
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;