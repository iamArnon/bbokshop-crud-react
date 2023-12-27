import './Home.css'
import {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Home() {
    const [data,setData] = useState([])


    const Fatchdata = async ()=> {


        try {
            const ShowBook = await axios.get(" http://127.0.0.1:3000/book")
            setData(ShowBook.data)
            console.log(ShowBook.data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(()=>{

        Fatchdata();

    },[])
    const handleDelete = async (ID) => {
            const confirm = window.confirm("want you like to Delete")
        if(confirm){

                try{
                    const Deletedata = await  axios.delete(`http://127.0.0.1:3000/book/${ID}`)
                    Fatchdata();
                    console.log(Deletedata)
                }catch (err){
                    console.log(err.message)
                }
        }

    }
    return (
        <div className="main-container">
            <h1>hello everyone</h1>
            <h2>welcome to bookspec</h2>
            <div className="bar-container" ><Link to="/create" className="btn-success">Add +</Link></div>

                <table>
                    <thead>
                    <tr>
                        <th>ID </th>
                        <th>NameBook</th>
                        <th>NamePrice</th>
                        <th>NameCategory</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        data.map((item,index)=>(
                            <tr key={index}>
                                <td>{item.ID}</td>
                                <td>{item.Name}</td>
                                <td>{item.Price}</td>
                                <td>{item.Category}</td>
                                <td>
                                    <Link to={`/read/${item.ID}`}>Read</Link>
                                    <Link to={`update/${item.ID}`} >Edit</Link>
                                    <button onClick={() => handleDelete(item.ID)}> Delete</button>

                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

        </div>
    )

}