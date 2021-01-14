import React from "react";
import Axios from "axios";

//creating context and giving context to our consumer
export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  // init state
  state = { 
    user: null,
    admin: null
   };


  //handlers for different states in user auth

  //register
  handleRegister = (user, history) => {
    Axios.post("/api/auth/", user)
      .then((res) => {
        this.setState({ user: res.data.data });
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        alert(`Error in Registration`);
      });
  };

  //user login
  handleUserLogin = (user, history) => {
    Axios.post("/api/auth/sign_in", user)
      .then((res) => {
        this.handleAdminLogout()
        this.setState({ user: res.data.data });
        console.log(this.state.user);
        localStorage.setItem('token-type','user')
        history.push("/");
      })
      .catch((err) => {
        alert("Error loggin in user");
      });
  };

  //admin login
  handleAdminLogin = (admin, history) => {
    Axios.post("/api/admin_auth/sign_in", admin)
      .then((res) => {
        this.handleUserLogout()
        this.setState({ admin: res.data.data });
        console.log(this.state.admin);
        localStorage.setItem('token-type','admin')
        history.push("/admin_dash");
      })
      .catch((err) => {
        console.log("Error logging in admin");
      });
  };

  //logout
  handleUserLogout = (history) => {
    Axios.delete("/api/auth/sign_out")
      .then((res) => {
        this.setState({ user: null });
        localStorage.removeItem('token-type')
        history.push("/login");
      })
      .catch((err) => {
        alert(`Error in Logout`);
      });
  };

  handleAdminLogout = (history) => {
    Axios.delete("/api/admin_auth/sign_out")
      .then((res) => {
        this.setState({ admin: null });
        localStorage.removeItem('token-type')
        history.push("/admin-login");
      })
      .catch((err) => {
        alert(`Error in Logout`);
      });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          userAuthenticated: this.state.user !== null,
          adminAuthenticated: this.state.admin !== null,
          handleRegister: this.handleRegister,
          handleUserLogin: this.handleUserLogin,
          handleUserLogout: this.handleUserLogout,
          handleAdminLogin: this.handleAdminLogin,
          handleAdminLogout: this.handleAdminLogout,
          setUser: (user) => this.setState({ user }),
          setAdmin: (admin) => this.setState({ admin }),
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
