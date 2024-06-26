import {useState} from "react";

function ReactPractice() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(toDo);
        if (toDo === "") {
            return;
        }
        setTodos((currentArray) => [toDo, ...currentArray]);
        setTodo("");
    };
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
                <button>Add To do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default ReactPractice;