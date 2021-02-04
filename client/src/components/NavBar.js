import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import brandLogo from "../Logos/TransparentBackground/FirejackedFeelTheBurnTransparentBackground1x/WhiteTextBlackBackground.png";

export default (props) => {
  const history = useHistory();
  const {
    userAuthenticated,
    adminAuthenticated,
    handleUserLogout,
    handleAdminLogout,
    user,
    admin,
  } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  const userNavBar = () => {
    return (
      
      <div style={{ paddingBottom: "20px" }}>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={{ backgroundColor: "#000000" }}
        >
          <Nav>
            <BrandLogo>
              <Navbar.Brand href='/'/>
            </BrandLogo>
              <Nav.Link href="/user_dash">
                <h4>PROFILE</h4>
            </Nav.Link>
            <Nav.Link href="/user_stats">
              <h4>STATS</h4>
            </Nav.Link>
            <Nav.Link href="/team_page">
              <h4>ABOUT US</h4>
            </Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <StyledImage src={user.image} />
              <StyledDrop
                title={`${user.first_name} ${user.last_name}`}
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => handleUserLogout(history)}>
                  LOGOUT
                </NavDropdown.Item>
              </StyledDrop>
            </Navbar.Collapse>
          </Nav>
        </Navbar>
      </div>
    );
  };

  const adminNavBar = () => {
    return (
      <div style={{ paddingBottom: "20px" }}>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={{ backgroundColor: "#000000" }}
        >
          <Nav>
            <BrandLogo>
              <Navbar.Brand href='/'/>
            </BrandLogo>
            <Nav.Link href="/admin_dash">
              <h4>Dashboard</h4>
            </Nav.Link>
            {/* <Nav.Link href="/admin-submissions">
              <h4>User Submissions</h4>
            </Nav.Link> */}
          </Nav>
          <Nav className="ml-auto">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <StyledImage src={admin.image} />
              <StyledDrop
                title={`${admin.first_name} ${admin.last_name}`}
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => handleAdminLogout(history)}>
                  Logout
                </NavDropdown.Item>
              </StyledDrop>
            </Navbar.Collapse>
          </Nav>
        </Navbar>
      </div>
    );
  };


  const noLogin = () => {
    return (
      <div style={{ paddingBottom: "20px" }}>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={{ backgroundColor: "none" }}
        >
          <Nav>
            <BrandLogo>
              <Navbar.Brand href='/'/>
            </BrandLogo>
            <Nav.Link href="/login">
              <h4>LOGIN</h4>
            </Nav.Link>
            <Nav.Link href='/user_register'>
              <h4>REGISTER</h4>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link href="/admin_login">
                <h4>ADMIN</h4>
              </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Navbar>
      </div>
    );
  };

  if (userAuthenticated) {
    return userNavBar();
  }
  if (adminAuthenticated) {
    return adminNavBar();
  }
  return noLogin();
};

export const BigText = styled.div`
color:white;
font-size:1.4em;
font-family:Roboto, "medium capped"
`


export const Sources = styled.div`
  display: flex;
  justify-content: end;
`;

export const FunnyText = styled.h1`
  font-weight: 900;
`;

export const StyledImage = styled.img`
  width: 50px;
  border-radius: 50%;
`;

export const StyledDrop = styled(NavDropdown)`
.dropdown-menu{
  max-width: 10px;
}
.dropdown-menu.show{
}
.dropdown-item{
  stuff here
}&hover{
  stuff here
}
`;

export const FireLogo = styled.div`
  font-size: 2em;
`;

export const BrandLogo = styled(Navbar.Brand)`
  background-image: url(${brandLogo});
  background-size: 300px;
  background-position: -40px -125px;
  background-repeat: no-repeat;
  width: 200px;
  height: 50px;
`;

export const StyledNav = styled(Nav.Link)`
  font-size: 6rem !important;
`;
