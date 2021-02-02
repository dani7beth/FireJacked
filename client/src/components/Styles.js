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
overflow:auto;
background:#f0f8ff;
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

export const BoxCustomAllExercises = styled(BoxMain)`
height: 600px;
`

export const NatesBox = styled(BoxMain)`
height 300px;
border
`

export const BoxAdminExercises = styled.div`
height: 500px;
width: 100%;
border: solid;
overflow:auto;
background:#f0f8ff;
margin:auto;
margin-top:50px;
padding:10px
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
border: solid 1px black;
margin-bottom: 10px;
border-radius: 8px;
padding: 10px;
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


