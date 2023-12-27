import {Link, useParams,useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Update(){
    // const [data,setData] = useState([])
    const {id} = useParams()
    const [editbook, setEditbook] = useState({
        Name: '',
        Price: 0,
        Category: ''
    })
    const navigate = useNavigate()
    useEffect(()=>{
        const Fatchdata = async ()=> {

            try {
                const ShowBook = await axios.get(`http://127.0.0.1:3000/book/${id}`)
                // setData(ShowBook.data)
                setEditbook(ShowBook.data)
                // console.log(ShowBook.data)
                // console.log({id})
            } catch (err) {
                console.log(err.message)
            }
        }
        Fatchdata();

    },[])
    const  handleUpdate =  async (e)=>{
        e.preventDefault()
          const { Name , Price, Category} = editbook
        try {
            const UpdateBook = await axios.put(`http://127.0.0.1:3000/book/${id}`,
                {
                BookName : Name,
                BookPrice : parseInt(Price),
                BookCategory : Category,
            })
            console.log(editbook)
            console.log(UpdateBook)
            navigate('/')
        } catch (err) {
            console.log(err.message)
            console.error("error while calling APIL",err)
        }
    }
    return(
        <div>
            <div>
                <h1>

                </h1>
                {editbook && (
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label>Name :</label>
                            <input type="text" name="name" className="from-control" placeholder="Enter Name"
                                   value={editbook.Name}
                                   onChange={e => setEditbook({...editbook, Name: e.target.value})}/>
                        </div>
                        <div>
                            <label>Price :</label>
                            <input type="number" name="Price" className="from-control" placeholder="Enter Price"
                                   value={editbook.Price}
                                   onChange={e => setEditbook({...editbook, Price: e.target.value})}/>
                        </div>
                        <div>
                            <label>Category :</label>
                            <input type="text" name="Category" className="from-control" placeholder="Enter Category"
                                   value={editbook.Category}
                                   onChange={e => setEditbook({...editbook, Category: e.target.value})}/>
                        </div>
                        <button className="btn-succrss">Update</button>
                        <Link to="/">Back</Link>
                    </form>
                )}

            </div>
        </div>
    )
}