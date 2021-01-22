import Axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroll-component';
import Button from 'react-bootstrap/Button';

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
      let res = await Axios.get(`/api/all_exercises?page=${pageX}`)
      setExercises([...exercises, ...res.data.data])
      setPage(pageX)
    } catch (error) {
      console.log(error)
    }
  }
  
  const renderAllExercises = () => {
    return exercises.map((exercise) => {
      return (
        <div key={exercise.id}>
          <Link to={`showexercise/${exercise.id}`}>
            <h1>{exercise.activity}</h1>
            <p>{exercise.id}</p>
          </Link>
          <p>{exercise.description}</p>
        </div>
      )
    })
  }

  // const styles = {
  //   scroller: { 
  //     height: '80vh', 
  //     overflow: 'auto', 
  //   },
  // }
  
  // if(exercises.length + 1  < totalPages*10){
  //   return (
  //     <>
  //       <h1>Choose an exercise</h1>
  //       {renderAllExercises()}
  //       <Button variant="primary" onClick={()=>loadMore()}>Load More</Button>
  //     </>
  //   )
  // }

  return (
    <>
      <h1>Choose an exercise</h1>
      <InfiniteScroll
          dataLength={exercises.length}
          next={()=>loadMore()}
          hasMore={exercises.length + 1 < totalPages * 10 ? true : false }
          loader={<h4>Loading...</h4>}
          // height={400}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>End of Exercises</b>
            </p>
          }
        >
      {renderAllExercises()}
      </InfiniteScroll>
    </>
  )

}

export default AllExercises

{/* <InfiniteScroll
pageStart={page}
loadMore={()=>loadMore()}
hasMore={false}
useWindow={false}
>
</InfiniteScroll> */}