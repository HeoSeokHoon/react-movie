import {useState, useEffect} from "react";

function Practice() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1)
    const onChange = (event) => setKeyword(event.target.value);
    const iRunOnlyOne = () => {
        console.log("i run only once");
    }
    useEffect(iRunOnlyOne, []);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("Search For", keyword);
        }
        console.log("i run keyword changes");
    }, [keyword])
    useEffect(() => {
        console.log("i run counter changes")
    }, [counter])
    useEffect(() => {
        console.log("i run keyword or counter changes")
    }, [counter, keyword]);
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here...."/>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default Practice;
