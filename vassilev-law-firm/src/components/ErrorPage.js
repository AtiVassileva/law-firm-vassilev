import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h3>Страницата не е намерена!</h3>
                    <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2>Страницата, която търсите не съществува или е била премахната.
                </h2>
                <Link className="notfound-link"to="/">
                    <i className="fa fa-home"></i>&nbsp;Начало
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link className="notfound-link" to="contact">                 
                    <i className="fa fa-pen"></i>&nbsp;Запитване
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;