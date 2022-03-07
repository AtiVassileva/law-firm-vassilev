const Question = ({ number, question, answer }) => {
    return (
        <div className="card">
            <div className="card-header">
                <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne" aria-expanded="true">
                    <span>{number}</span> {question}
                </a>
            </div>
            <div id="collapseOne" className="collapse show" data-parent="#accordion">
                <div className="card-body">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default Question;