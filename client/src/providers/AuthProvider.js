import React from "react";
import Axios from "axios";

//creating context and giving context to our consumer
export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  // init state
  state = { user: null };

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
        alert(`Error in Registration: ${err.response.data}`);
      });
  };

  //login
  handleLogin = (user, history) => {
    
    Axios.post("/api/auth/sign_in", user)
      .then((res) => {
        debugger;
        this.setState({ user: res.data.data });
        console.log(this.state.user);
        history.push("/");
      })
      .catch((err) => {
        debugger;
        alert(err.response.data);
      });
  };

  //logout
  handleLogout = (history) => {
    Axios.delete("/api/auth/sign_out")
      .then((res) => {
        this.setState({ user: null });
        history.push("/login");
      })
      .catch((err) => {
        alert(`Error in Logout: ${err.response.data}`);
      });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          authenticated: this.state.user !== null,
          handleRegister: this.handleRegister,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          setUser: (user) => this.setState({ user }),
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
