import { useEffect, useState } from 'react';
import axios from 'axios';
import {ButtonGroup, Button} from 'react-bootstrap';
const FilterByCategory = ({dataByCategory}) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    try {
      let res = await axios.get(`/api/categories/`)
      setCategories(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const renderCategories = () => {
    return categories.map(c => {
      return (
        <Button onClick={() => dataByCategory(`${c}`)}>{c}</Button>
      )
    })
  }

  return (
    <>
      <h3>Exercise Categories</h3>
      <ButtonGroup size="sm" className="mb-2">
        {renderCategories()}
        <Button onClick={() => dataByCategory('')}>All</Button>
      </ButtonGroup>
    </>
  )
}

export default FilterByCategory;
