import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
        console.log(json.data.movie)
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <h1>Detail</h1>
            <div>{loading ? "Loading..." :
                (<div>
                    <img src={detail.large_cover_image}/>
                    <h2>제목 : {detail.title}</h2>
                    <p>점수 : {detail.rating}</p>
                    <p>개봉일 : {detail.date_uploaded}</p>
                </div>)
            }</div>
        </div>
    );
}

export default Detail;