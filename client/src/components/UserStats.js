import Axios from "axios";
import { useState, useEffect } from "react";
import { StyledLink } from "./Styles";
import { Table } from "react-bootstrap";
import FilterByCategory from "../exercises/FilterByCategory";
import styled from "styled-components";

const UserStats = () => {
  const [stats, setStats] = useState([]);
  const [defaultSubs, setDefaultSubs] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getSubmissions();
  }, []);

  // const getCategories = async () => {
  //   try {
  //     let res = await Axios.get(`/api/categories/`);
  //     setCategories(res.data);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const dataByCategory = (category) => {
    // debugger
    console.log("Searched");
    setCategory(category);
    let filteredSubOne = defaultSubs.filter((x) => x.category !== null);
    let filteredSubs = filteredSubOne.filter(
      (str) => str.category.indexOf(category) > -1
    );
    console.log("FILTERES SUBS");
    console.log(filteredSubs);
    setStats(filteredSubs);
    // console.log(searchText);
  };

  const getSubmissions = async () => {
    try {
      let res = await Axios.get("/api/user_stats");
      console.log(res.data);
      setStats(res.data);
      setDefaultSubs(res.data);
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
        <div style={{ padding: "100px 400px" }}>
          <h5 style={{ textAlign: "center" }}>{x.category}</h5>
          <Table striped bordered>
            <thead>
              <tr style={{backgroundColor: '#f4f4f4'}}>
                <th>Activity</th>
                <th>Goal</th>
                <th>Metric</th>
                <th>Level</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {x.submissions.map((x) => (
                <tr style={{backgroundColor: '#f4f4f4'}}>
                  <td>
                    <StyledLink to={`/${x.exercise_id}/user_see_history/blank`}>
                      {/* {x.activity} {x.goal} {x.metric} Level: {x.level_name} |{" "}
                    {x.status} */}
                      {x.activity}
                    </StyledLink>
                  </td>
                  <td>{x.goal}</td>
                  <td>{x.metric}</td>
                  <td>{x.level_name}</td>
                  <td>{x.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    });
  };

  return (
    <>
      {/* <h1>Most 5 most Recent Submissions</h1>
      {renderMostRecent()} */}

      <h1 style={{ textAlign: "center" }}>Completed Submission by Category</h1>
      <FilterByCategory dataByCategory={dataByCategory} />
      {renderTopSubmissionByCategory()}

      {/* <h1>Percentage of total levels completed</h1>

      what percent of the total levels the user has completed 
         Pie graph comparing levels completed to all levels 

    <h1> Number of completed exercise levels: 17</h1>
    <h1> Number of uncompleted exercise levels: 4</h1> */}
    </>
  );
};

export default UserStats;

export const StyledTable = styled.div``;
