import { useState } from "react";

import axios from 'axios';
import styled from 'styled-components'
import styles from './Style.module.css'

export function Notes() {

   
    const [filter, setfilte] = useState([]);
    const [state, setstate] = useState("")
    const [data, setdata] = useState([]);
    const Conatiner = styled.div`
     text-align:center;
    border:1px solid black;
     display: grid;

  grid-template-columns: 50% 50%;
  margin:auto;
 
    `

 
    const handleinput = (e) => {
         var a = Date()
    console.log(a);
    a = a.split(" ");
    console.log(a);
        const { name, value } = e.target;
        setstate({...state,[name]:value,date:`${a[0]+" "+a[1]+" "+a[2]}`});
    }
    const handlechange = (e) => {
       
        console.log(state);
        axios.post("http://localhost:3001/data", state).then((a)=>{
              getdata()
        })

         
    }
    const getdata = () => {
        axios.get("http://localhost:3001/data").then(({data}) => {
            setdata(data);
            setfilte(data);
        });
       
    }
 
 
    const handledelete = (e) => {
        axios.delete(`http://localhost:3001/data/${e.target.value}`).then(() => {
            getdata();
        })
    }
    const handlesort = (e) => {

        axios.get(`http://localhost:3001/data?_sort=date&_order=${e.target.value}`).then(({data}) => {
            console.log(data);
            setfilte(data);
       })
   }

    return <>
        <div className={styles.box}>
            <div><h3>Enter Title</h3><input type="text" onChange={handleinput} name="Title"></input></div>
            <div ><h3>Description Box</h3></div>
        <div><textarea className={styles.box2}  onChange={handleinput}  name="description"></textarea></div>
            <button onClick={handlechange}>save</button>
        </div>

        <Conatiner>
            {filter.map((e)=>{
                return <><div key={e.id} className={styles.section}>
                    <h1>{e.Title}</h1>
                    <p>{e.description}</p>
                    <div><button value={e.id} onClick={handledelete}>delete</button>
                        <button onClick="">edit</button>
                        </div>
                   
                </div>
                
                    </>
            })}
        </Conatiner>
        <div>
            <div className={styles.btn}><button value="asc" onClick={handlesort}>asc</button>
                        <button value="desc" onClick={handlesort}>desc</button>
                    </div>
        </div>
        </>
}