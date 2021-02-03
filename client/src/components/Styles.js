import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const Box = styled.div`
height: 700px;
width: 100%;
border: solid;
overflow:auto;
background:#f0f8ff;
margin:auto;
margin-top:50px;
padding:10px
`

export const BoxCustom = styled.div`
height: 300px;
width: 100%;
border: solid;
overflow: auto;
background: #f0f8ff;
margin:auto;
margin-top:50px;
padding:10px
`

export const BoxMain = styled.div`
width: 100%;
overflow:auto;
margin:auto;
margin-top:10px;
padding:10px
`

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
border-radius: 8px;
`

export const NateSeeHistorySubsContainer = styled.div`
height: 330px;
width: 90%;
border: 2px solid #d6d6d6;
border-radius: 8px;
`
export const BoxCustomAllExercises = styled(BoxMain)`
height: 600px;
`

export const NatesBox = styled(BoxMain)`
height 300px;
border
`

export const BoxAdminExercises = styled(BoxMain)`
height: 450px;

`
export const BoxUserHistory = styled.div`
height: 300px;
width: 100%;
border: solid;
overflow:auto;
background:#f0f8ff;
margin:auto;
margin-top:50px;
padding:10px
`

export const LevelsBox = styled.div`
border: solid;
margin-top: 10px;
min-height: 100px;
`

export const BackgroundContainer = styled.div`
margin:auto
width:100%
`
export const Container = styled.div`
margin:auto;
width:95%
`

export const UserExerciseLevelContainer = styled.span`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
border: solid 1px #D6D6D6;
margin-bottom: 10px;
border-radius: 8px;
padding: 10px;
width: 98%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin: 15px auto;
`

export const UserExerciseLevelLeft = styled.div`
order: 1;
flex-grow: 4;
`

export const UserExerciseLevelRight = styled.div`
order 2;
flex-grow: 1;
align-self:center;
display:flex;
flex-direction: column;
flex-wrap: wrap;
align-items: stretch;
`
export const UserExerciseLevelButtons = styled(Button)`
margin: 5px;
width: 7em;
color: white;
background-color:black
`

export const CategoryButtonGroup = styled.div`
display:flex;
flex-direction:row;
flex-wrap:no-wrap;
border: solid 1px black;
align-items: center;
margin-top: 15px;

`

export const CategoryButton = styled.div`
flex-grow: 1;

`
export const YO = styled.button`

border: solid 1px black;
min-width: 80px;
min-height: 60px;
padding: 5px;
Background-color: ${props => props.selected === props.category ? "black" : "white"};
Color: ${props => props.selected === props.category ? "white" : "black"};
text-align: center;
justify-self: center;
cursor: pointer;


${CategoryButton}:hover & {
  Background-color: black;
  Color: White
}
`

export const ButtonMain = styled.div`
border: solid 1px black;
min-width: 80px;
min-height: 60px;
padding: 5px;
`

export const ButtonSeeExercise = styled(ButtonMain)`

`

export const AdminExerciseContainerLeft = styled.div`
order: 1;
flex-grow: 6;
`

export const AdminExerciseContainerMiddle = styled.div`
order: 2;
flex-grow: 2;
align-self:center;
display:flex;
flex-direction: column;
flex-wrap: wrap;
align-items: stretch;
`

export const AdminExerciseContainerRight = styled.div`
order: 3;
flex-grow: 1;
`

export const SubmissionsContainer = styled.span`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
border: solid 1px black;
margin-bottom: 10px;
border-radius: 15px;
padding: 0px;
`
export const SubmissionContainerLeft = styled.div`
background: black;
border-radius: 15px;
flex-grow: 1;
`

export const SubmissionContainerMiddle = styled.div`
margin: auto;
flex-grow: 6;
`

export const SubmissionContainerRight = styled.div`
flex-grow: 2;
`



