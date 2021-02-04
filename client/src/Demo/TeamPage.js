import styled from 'styled-components';

const TeamPage = () => {
  function renderTeamMember(imagelink, name, githublink, linkedinlink, description) {
    return (
      <div style={{margin: "auto", padding: "25px", textAlign: "center", height: "600px", width: "600px"}}>
        <img src={imagelink} alt={name} />
        <h3>{name}</h3>
        <a href={githublink}>Github Icon</a>
        <a href={linkedinlink}>LinkedIn Icon</a>
        <p>{description}</p>
      </div>
    )
  }

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", margin: "50px"}}>
        <h1>Team</h1>
      </div>
      <TeamContainer>
        {renderTeamMember("IMAGE_LINK_HERE", "Landon Whitesides", "GITHUBLINK_HERE", "LINKEDINLINK_HERE", "DESCRIPTION_HERE")}
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
