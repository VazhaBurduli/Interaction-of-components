

const Book = (props) => {
    return (
        <div className="booksection">
            <h2> {props.name} </h2>
            <div>
                <img src={props.image}></img>
            </div>
            <p> {props.description} </p>
            <p>Characters:
            <span> {props.character1} {props.character2} {props.character3}  </span>
            </p>
            <button onClick={props.action}> Click </button>
        </div>
    )
}

export default Book