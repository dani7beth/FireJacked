import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Box = styled.div`
  height: 700px;
  width: 100%;
  border: solid;
  overflow: auto;
  background: #f0f8ff;
  margin: auto;
  margin-top: 50px;
  padding: 10px;
`;

export const BoxCustom = styled.div`
  height: 300px;
  width: 100%;
  border: solid;
  overflow: auto;
  background: #f0f8ff;
  margin: auto;
  margin-top: 50px;
  padding: 10px;
`;

export const BoxMain = styled.div`
  width: 100%;
  overflow: auto;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
`;

export const NateSeeHistorySubs = styled.div`
height: 252px;
width: 100%;
overflow:auto;
margin:auto;
margin-top:10px;
padding:10px
`

export const NateSeeHistoryContainer = styled.div`
margin-top: 23px;
margin-bottom: 65px;
height: 200px;
width: 90%;
border: 2px solid #d6d6d6;
border-radius: 10px;
`

export const NateSeeHistorySubsContainer = styled.div`
height: 330px;
width: 90%;
border: 2px solid #d6d6d6;
border-radius: 10px;
`
export const BoxCustomAllExercises = styled(BoxMain)`
  height: 600px;
`;

export const AllExercisesContainer = styled(BoxMain)`
  max-width: 900px;
`;

export const NatesBox = styled(BoxMain)`
height 300px;
border
`;

export const BoxAdminExercises = styled(BoxMain)`
  height: 450px;
`;

export const BoxAdminSubmissions = styled(BoxMain)`
  height: 600px;
`;

export const BoxUserHistory = styled.div`
  height: 300px;
  width: 100%;
  border: solid;
  overflow: auto;
  background: #f0f8ff;
  margin: auto;
  margin-top: 50px;
  padding: 10px;
`;

export const LevelsBox = styled.div`
  border: solid;
  margin-top: 10px;
  min-height: 100px;
`;

export const BackgroundContainer = styled.div`
margin:auto
width:100%
`;
export const Container = styled.div`
  margin: auto;
  width: 95%;
`;

export const UserExerciseLevelContainer = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border: solid 1px #d6d6d6;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  width: 98%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 15px auto;
`;

export const UserExerciseLevelLeft = styled.div`
  order: 1;
  flex-grow: 4;
`;

export const UserExerciseLevelRight = styled.div`
order 2;
flex-grow: 1;
align-self:center;
display:flex;
flex-direction: column;
flex-wrap: wrap;
align-items: stretch;
`;
export const UserExerciseLevelButtons = styled(Button)`
  margin: 5px;
  width: 7em;
  color: white;
  background-color: black;
  border-color: black;
  &:hover {
    color: white;
    background-color: #f4731f;
    border-color: #d6d6d6;
  }
`;

export const CategoryButtonGroup = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items: center;
justify-content: center;
margin 15px auto;
border-radius:8px;

`;

export const CategoryButton = styled.div`
  // min-width: 130px;
`;

export const YO = styled.button`
  font-size: 12px;
  border: solid 2px black;
  min-height: 30px;
  padding: 5px;
  background-color: ${(props) =>
    props.selected === props.category ? "black" : "white"};
  color: ${(props) => (props.selected === props.category ? "white" : "black")};
  text-align: center;
  cursor: pointer;
  // border-radius:8px;
  ${CategoryButton}:hover & {
    background-color: black;
    color: White;
  }
`;

export const ButtonMain = styled.div`
  border: solid 1px black;
  min-width: 80px;
  min-height: 60px;
  padding: 5px;
`;

export const ButtonSeeExercise = styled(ButtonMain)``;

export const AdminExerciseContainerLeft = styled.div`
  order: 1;
  flex-grow: 6;
`;

export const AdminExerciseContainerMiddle = styled.div`
  order: 2;
  flex-grow: 2;
  align-self: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const AdminExerciseContainerRight = styled.div`
order: 3;
flex-grow: 1;
align-self:center;
float: right;
justify-content:flex-end;
display: flex;
`

export const SubmissionsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
border: solid 1px #D6D6D6;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin-bottom: 10px;
border-radius: 10px;
width:98%;
padding: 0px;
margin: 15px auto;
`
export const SubmissionContainerLeft = styled.div`
background: black;
border-radius: 10px 0 0 10px;
flex-grow: 1;
margin-right: 10px;
width:150px;
`

export const SubmissionContainerMiddle = styled.div`
  padding-left: 10px;
  margin: auto;
  flex-grow: 200;
`;

export const SubmissionContainerRight = styled.div`
  flex-grow: 40;
`;

export const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  overflow: auto;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
  justify-content: space-evenly;
`;

export const DashboardLeftSideBar = styled.div`
  order: 1;
  // flex-grow: 1;
  padding: 20px;
  max-width: 250px;
`;

export const DashboardRightSideBar = styled.div`
  order: 3;
  // flex-grow: 1;
  padding: 20px;
  max-width: 250px;
`;

export const DashboardCenter = styled.div`
order: 2;
min-width: 851px;
// flex-grow: 2;
`

export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: solid 1px #d6d6d6;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #febd4a;
  padding: 20px;
`;

export const TrainerInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: solid 1px #d6d6d6;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #f4731f;
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  // color: #F4731F;
  color: black;
`;

export const UserIndexDiv = styled.div`
  margin-top: 10px;

  border: solid 1px #d6d6d6;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #febd4a;
  padding: 10px;
`;
export const UserIndexTop = styled.div``;

export const UserIndexBottom = styled.div`
  width: 100%;
  overflow: auto;
  margin: auto;
  max-height: 500px;
  margin-top: 20px;
`;

export const SubmissionVerification = styled(Link)`
font-size: 18px;
border: solid 2px black;
border-radius: 8px;
min-height: 30px;
padding: 5px;
background-color: ${(props) =>
  props.selected === props.category ? "black" : "white"};
color: ${(props) => (props.selected === props.category ? "white" : "black")};
text-align: center;
cursor: pointer;
// border-radius:8px;
${CategoryButton}:hover & {
  background-color: black;
  color: White;
}
`;

export const SearchBarParent = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`

export const SearchBarChild1 = styled.div`
min-width: 400px;
`

export const SearchBarChild2 = styled.div`
margin-left: -70px;
`

export const SearchBarChild3 = styled.div`
align-self:right;
`


export const OrangeButton = styled(Button)`
  background-color: #f4731f;
  border-color: #f4731f;
  &:hover {
    background-color: #f2670c;
    border-color: #f2670c;
  }
`;

export const YellowButton = styled(Button)`
  background-color: #febd4a;
  border-color: #febd4a;
  &:hover {
    background-color: #fab232;
    border-color: #fab232;
  }
`;
