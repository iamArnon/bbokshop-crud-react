import {Link,useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function Create() {
    const [addbook, setAddbook] = useState({
        Name: '',
        Price: 0,
        Category: ''
    })
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
         const { Name , Price, Category} = addbook
        try {
            const AddBookkub = await axios.post(" http://127.0.0.1:3000/book", {

                BookName : Name,
                BookPrice : parseInt(Price),
                BookCategory : Category,
            })
            console.log(addbook)
            console.log(AddBookkub)
            navigate('/')
        } catch (err) {
            console.log(err.message)
            console.error("error while calling API",err)
        }


    }
    return(
        <div>
            <div>S
                <h1></h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name :</label>
                        <input type="text" name="name" className="from-control" placeholder="Enter Name" onChange={e => setAddbook({...addbook,Name: e.target.value})}/>
                    </div>
                    <div>
                        <label>Price :</label>
                        <input type="number" name="Price" className="from-control" placeholder="Enter Price" onChange={e => setAddbook({...addbook,Price: e.target.value})}/>
                    </div>
                    <div>
                        <label>Category :</label>
                        <input type="text" name="Category" className="from-control" placeholder="Enter Category" onChange={e => setAddbook({...addbook,Category: e.target.value})}/>
                    </div>
                    <button className="btn-succrss">Submit</button>
                    <Link to="/" >Back</Link>
                </form>
            </div>
        </div>
    )
}