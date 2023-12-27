import {useEffect,useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


export default function Read(){
    const [data,setData] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        const Fatchdata = async ()=> {

            try {
                const ShowBook = await axios.get(`http://127.0.0.1:3000/book/${id}`)
                setData(ShowBook.data)
                console.log(ShowBook.data)
                console.log({id})
            } catch (err) {
                console.log(err.message)
            }
        }
        Fatchdata();

    },[id])

    return(
        <div>
            <div>
                <h3>detail of book</h3>
                <div>
                    <strong>Name : {data.Name}</strong>
                </div>
                <div>
                    <strong>Price : {data.Price}</strong>
                </div>
                <div>
                    <strong>Category : {data.Category}</strong>
                </div>
                <Link to={`/update/${id}`}>Edit</Link>
                <Link to='/'>Back</Link>

            </div>
        </div>
    )
}