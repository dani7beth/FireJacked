import { useEffect, useState } from 'react';
import axios from 'axios';
import {ButtonGroup, Button} from 'react-bootstrap';
import { CategoryButton, CategoryButtonGroup, YO } from '../components/Styles';
const FilterByCategory = ({dataByCategory}) => {
  const [categories, setCategories] = useState([])
  const [active, setActive] = useState(true)

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
      return <CategoryComp c= {c} dataByCategory={dataByCategory}/>
    })
  }

  return (
    <>
      <CategoryButtonGroup size="sm" className="mb-2">
        {renderCategories()}
        <CategoryButton onClick={() => dataByCategory('')}>
          <YO>All</YO>
        </CategoryButton>
      </CategoryButtonGroup>
    </>
  )
}

export default FilterByCategory;

const CategoryComp = ({c, dataByCategory}) => {
  const [selected, setSelected] = useState(false)


  return (
    <CategoryButton onClick={() => 
      {
        dataByCategory(`${c}`)
        setSelected(!selected)
      }
      }
      >
        <YO 
        active = {selected}
        >{c}</YO>
      </CategoryButton>
  )
}
