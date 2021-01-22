import Axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroller';

const AllExercises = () => {

  const [exercises, setExercises] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  
  useEffect(()=>{
    getAllExercises()
  },[])


  const getAllExercises = async() => {
    try {
      let res = await Axios.get("/api/all_exercises")
      console.log(res.data)
      setExercises(res.data.data)
      setTotalPages(res.data.total_pages)
    } catch (error) {
      console.log(error)
    }

  };

  const loadMore = async () => {
    const pageX = page + 1
    try {
      let res = await Axios.get(`/api/all_exercises?page=${page}`)
      setExercises([...exercises, ...res.data.data])
      setPage(pageX)
    } catch (error) {
      console.log(error)
    }
  }
  
  const renderAllExercises = () => {
    return exercises.map((exercise) => {
      return (
      <InfiniteScroll
      pageStart={page}
      loadMore={()=>loadMore()}
      hasMore={false}
      useWindow={false}
      >
        <div style={styles.scroller} key={exercise.id}>
          <Link to={`showexercise/${exercise.id}`}>
            <h1>{exercise.activity}</h1>
          </Link>
          <p>{exercise.description}</p>
        </div>
      </InfiniteScroll>
      )
    })
  }

  const styles = {
    scroller: { 
      height: '80vh', 
      overflow: 'auto', 
    },
  }
  

  return (
    <>
      <h1>Choose an exercise</h1>
      {renderAllExercises()}
    </>
    

  )

}

export default AllExercises