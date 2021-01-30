import { useEffect, useState } from "react";
import AUserSubmission from "./AUserSubmission";
import { Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "../components/Styles";
import axios from 'axios';

const AllUserSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getAllSubmissions();
  }, []);

  const getAllSubmissions = async () => {
    try {
      // debugger
      let res = await axios.get("/api/all_submissions");
      console.log(res.data);
      setSubmissions(res.data.data);
      setTotalPages(res.data.total_pages);
    } catch (error) {
      console.log(error);
      return <h1>It would appear there has been a grave error.</h1>;
    }
  };
  
  const loadMore = async () => {
    const pageX = page + 1;
    try {
      let res = await axios.get(`/api/all_submissions?page=${pageX}`);
      setSubmissions([...submissions, ...res.data.data]);
      setPage(pageX);
    } catch (error) {
      console.log(error);
    }
  };

  const renderSubmissions = () => {
    return submissions
      .filter((s) => s.status == "Pending")
      .map((s) => <AUserSubmission key={s.id} {...s} />);
  };

  return (
    <>
      <h1>Select a Submssion</h1>
      <Box>
        <InfiniteScroll
          dataLength={submissions.length}
          next={() => loadMore()}
          hasMore={submissions.length + 1 < totalPages * 10 ? true : false}
          loader={<h4>Loading...</h4>}
          height={700}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>End of Submissions</b>
            </p>
          }
        >
          {renderSubmissions()}
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default AllUserSubmissions;
