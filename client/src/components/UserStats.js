import Axios from "axios";
import { useState, useEffect } from "react";
import { StyledLink } from "./Styles";
import { Table } from "react-bootstrap";

const UserStats = () => {
  const [stats, setStats] = useState([]);
  // const [categories, setCategories] = useState([])

  useEffect(() => {
    getSubmissions();
  }, []);

  const getCategories = async () => {
    try {
    } catch (error) {}
  };

  const getSubmissions = async () => {
    try {
      let res = await Axios.get("/api/user_stats");
      console.log(res.data);
      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderMostRecent = () => {
    let sortedStats = stats.sort((a, b) => a.created_at > b.created_at);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return sortedStats.slice(0, 5).map((s) => {
      s.created_at = new Date();
      let date = new Date(s.created_at);
      return (
        <>
          <p>
            {`${s.activity} Level: ${s.level_name} Created On: ${
              dayNames[s.created_at.getDay()] +
              " " +
              monthNames[s.created_at.getMonth()] +
              " " +
              s.created_at.getDate()
            }`}{" "}
            | {s.status}
          </p>
          {/* <p>{date.toLocaleDateString("en-US")}</p> */}
        </>
      );
    });
  };

  const normalizeData = (arrayOfObjects) => {
    let key = "category";

    const categories = [
      ...new Map(
        arrayOfObjects.map((item) => [item[key], { category: item.category }])
      ).values(),
    ];

    const submissions = categories.map((x) => {
      return {
        ...x,
        submissions: arrayOfObjects.filter((y) => y.category === x.category),
      };
    });

    console.log(submissions);

    return submissions;
  };

  const renderTopSubmissionByCategory = () => {
    let normalizedData = normalizeData(stats);
    let filteredData = normalizedData.filter(
      (x) => x.submissions.status !== "Approved"
    );

    return filteredData.map((x) => {
      return (
        <>
          <tr>
            <h5>{x.category}</h5>
          </tr>
          {x.submissions.map((x) => (
            <StyledLink to={`/${x.exercise_id}/user_see_history/blank`}>
              <p>
                {x.activity} {x.goal} {x.metric} Level: {x.level_name} |{" "}
                {x.status}
              </p>
            </StyledLink>
          ))}
        </>
      );
    });
  };

  return (
    <>
      <h1>Most 5 most Recent Submissions</h1>
      {renderMostRecent()}

      <h1>Completed Submission by Category</h1>
      <Table striped bordered hover>
        <thead>{renderTopSubmissionByCategory()}</thead>
        {/* <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody> */}
      </Table>

      {/* <h1>Percentage of total levels completed</h1>

      what percent of the total levels the user has completed 
         Pie graph comparing levels completed to all levels 

    <h1> Number of completed exercise levels: 17</h1>
    <h1> Number of uncompleted exercise levels: 4</h1> */}
    </>
  );
};

export default UserStats;
