import Feature from "./Feature";

const Features = () => {
    return (
        <div className="feature-top">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <Feature
                    icon="far fa-check-circle"
                    title="Законно"
                    text="Упълномощен адвокат"
                    />
                    <Feature
                    icon="fa fa-user-tie"
                    title="Опитен"
                    text="30+ години трудов стаж"
                    />
                    <Feature
                    icon="far fa-thumbs-up"
                    title="Успешен"
                    text="Доказан експерт в правото"
                    />
                    <Feature
                    icon="far fa-handshake"
                    title="Подкрепа"
                    text="Заедно срещу неправдата"
                    />
                </div>
            </div>
        </div>
    );
};

export default Features;