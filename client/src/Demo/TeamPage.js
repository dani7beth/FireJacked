import styled from 'styled-components';
import landonPhoto from "../Photos : Images/Landon_about_me_Main.jpg";
import { GoMarkGithub } from "react-icons/go";
import {SiLinkedin} from "react-icons/si"


const TeamPage = () => {
  function renderTeamMember(imagelink, name, githublink, linkedinlink, description) {
    return (
      <div style={
          {
          display:"flex",
          flexDirection:"column",
          margin: "auto", 
          padding: "25px",
          height: "600px", 
          width: "600px", 
          border: "2px solid #d6d6d6",
          borderRadius: "10px",
          justifyContent:"center",
          alignItems:"center",
          marginBottom: "20px"
          }}>
        <img src={imagelink} alt={name} width="200px" style={{margin:"40px", borderRadius: "10px"}} />
        <h3>{name}</h3>
        <div style={{display:"flex", flexDirection: "row", margin: "5px"}}>
          <GoMarkGithub href={githublink} fontSize="24px" style={{marginRight: "10px"}}/>
          <SiLinkedin href={linkedinlink} fontSize="24px" style={{marginLeft: "10px"}} />
        </div>
        <p style={{textAlign: "center", marginTop: "5px"}}>{description}</p>
      </div>
    )
  }

  let landon_description = "I'm a new developer trying to make my way in this world. I like to code, ski and play with my family. I hope to become filthy rich in my coding endevours and make whoever goes on the journey with me just as wealthy."

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", margin: "50px"}}>
        <h1>Team</h1>
      </div>
      <TeamContainer>
        {renderTeamMember(landonPhoto, "Landon Whitesides", "https://github.com/white731", "https://www.linkedin.com/in/landon-whitesides/", landon_description)}
        {renderTeamMember("IMAGE_LINK_HERE", "NAME_HERE", "GITHUBLINK_HERE", "LINKEDINLINK_HERE", "DESCRIPTION_HERE")}
        {renderTeamMember("IMAGE_LINK_HERE", "NAME_HERE", "GITHUBLINK_HERE", "LINKEDINLINK_HERE", "DESCRIPTION_HERE")}
        {renderTeamMember("IMAGE_LINK_HERE", "NAME_HERE", "GITHUBLINK_HERE", "LINKEDINLINK_HERE", "DESCRIPTION_HERE")}
      </TeamContainer>
    </>
  )
}

const TeamContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export default TeamPage;
