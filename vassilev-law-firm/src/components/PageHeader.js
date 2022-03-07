const PageHeader = ({ title }) => {
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;