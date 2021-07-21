import { useState } from "react"
import { ShowForm } from "./ShowForm"
import { useEffect } from "react"
import axios from 'axios'
import styles from './ShowForm.module.css'
export function Form() {

    const initState = {
        name: "",
        age: "",
        address: "",
        Department: "",
        marritalstatus: "",
        salary: "",
        profilepic: "",

    }
    const [filter, setFilter] = useState([]);
    const [list, setList] = useState([]);
    const [state, setState] = useState(initState)
    const handleChange = e => {
  
        const { name, type, value, checked } = e.target

        setState({ ...state, [name]: type === "checkbox" ? checked : value })
        console.log("state",state)
    }
     
    useEffect(function () {
        getData()

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(" http://localhost:3001/formdata", state).then(() => {
            getData()

        })
    }
    const getData = () => {
        axios.get(" http://localhost:3001/formdata").then(({ data }) => {

            setList(data)
            setFilter(data);
        })
    }
    const handleDepartment = (e) => {
        console.log(list);
         const a = list.filter((el) => {
            return el.Department === e.target.value
         })
        setFilter(a);
        
      
        
    }
    const handleSort=(e)=>{
             axios.get(`http://localhost:3001/formdata?_sort=salary&_order=${e.target.value}`).then(({ data }) => {
            setFilter(data);
        })
    }
    return <>
        <div className={styles.flex}>
            <div>
            <form onSubmit={handleSubmit}>

                <label>
                    Name:
                    <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" placeholder="Enter your age" onChange={handleChange} />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" placeholder="Enter your address" onChange={handleChange} />
                </label>
                <label>
                    Salary:
                    <input type="number" name="salary" placeholder="Enter your salary" onChange={handleChange} />
                </label>
                <label>
                    <select onChange={handleChange} name="Department">
                        <option value="it">IT</option>
                        <option value="R and D">R and D</option>
                        <option value="Administration">Administration</option>

                    </select>
                </label>
                <label>
                   maritial-Status: <input onChange={handleChange} name="marritalstatus" type="checkbox" />
                </label>
                <label>
                    <input onChange={handleChange} name="profilepic" type="file" placeholder="file" />
                </label>
                <input type="submit" value="submit" />
                </form>
                </div>
            <div className={styles.top}>
                <button value="R and D" onClick={handleDepartment}>R and D</button>
                <button value="it" onClick={handleDepartment}>IT</button>
                <button value="Administration" onClick={handleDepartment}>Administration</button>
            </div>
            <div>
                <button value="asc" onClick={handleSort}>Salary Asce</button>
                <button value="desc" onClick={handleSort}>Salary Desc</button>
            </div>

        </div>

        {console.log(filter)}
        <ShowForm data={filter}/>
    </>
}