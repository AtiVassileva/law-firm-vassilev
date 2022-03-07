import Service from './Service';

const Services = () => {
    return (
        <div className="service">
            <div className="container">
                <div className="row">
                    <Service 
                    title="Гражданско право"
                    content="Гражданско-правни субекти и правоотношенията между тях."
                    icon="fa fa-landmark"
                    />
                    <Service 
                    title="Наследствено право"
                    content="Завещания, съдебни делби на имоти, наследяване."
                    icon="fa fa-users"
                    />
                    <Service 
                    title="Търговско право"
                    content="Търговски договори, несъстоятелност, регистрации."
                    icon="fa fa-hand-holding-usd"
                    />
                    <Service 
                    title="Вещно право"
                    content="Право на собственост, ограничени вещни права, право на ползване."
                    icon="fa fa-graduation-cap"
                    />
                    <Service 
                    title="Облигационно право"
                    content="Уреждане на облигационни отношения, акции, ценни книжа."
                    icon="fa fa-gavel"
                    />
                    <Service 
                    title="Медицинско право"
                    content="Последици от неправилно лечение, грешни диагнози."
                    icon="fa fa-globe"
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;