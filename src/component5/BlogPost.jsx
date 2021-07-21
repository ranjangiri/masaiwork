import axios from 'axios';
import { BlogCard } from './BlogCard'
import { useState } from 'react';
import { useEffect } from 'react';
export function Blog() {



  const [list, setList] = useState([]);
  const [state, setState] = useState()
  const handleChange = e => {
    const { name, type, value, checked } = e.target

    setState({ ...state, [name]: type === "checkbox" ? checked : value })
  }
  useEffect(function () {
    getData()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/blogdata", state).then(() => {
      getData()

    })
  }
  const getData = () => {
    axios.get("http://localhost:3001/blogdata").then(({ data }) => {

      setList(data)
    })
  }
  return <>
    <div>
      <form onSubmit={handleSubmit}>

        <label>
          Title:
          <input type="text" name="title" placeholder="title" onChange={handleChange} />
        </label>
        <label>
          Body:
          <input type="text" name="body" placeholder="body" onChange={handleChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" placeholder="author" onChange={handleChange} />
        </label>
        <label>
          private:
          <input type="checkbox" name="private" onChange={handleChange} />
        </label>
        <label>
          <select onChange={handleChange} name="category">
            <option value="science">science</option>
            <option value="bio">Bio</option>
            <option value="commerce">commerce</option>

          </select>
        </label>
        <label>
          <input onChange={handleChange} name="file" type="file" placeholder="file" />
        </label>
        <input type="submit" value="submit" />
      </form>


    </div>

    <BlogCard data={list} />
  </>

}