import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "./AuthService";
import "./Login.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", logged: false };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          logged: true
        });

        this.props.getUser(response);
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    if (this.state.logged) return <Redirect to={"/contents"} />;
    return (
      <div className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Future Score</h2>
              <form
                onSubmit={this.handleFormSubmit}
                method="POST"
                className="register-form"
                id="register-form"
              >
                <div className="form-group">
                  <label>
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                    placeholder="Your Name"
                  />
                </div>
                {/* <div className="form-group">
                                <label><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div> */}
                <div className="form-group">
                  <label>
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="pass"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                    placeholder="Password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="login"
                    id="login"
                    className="form-submit"
                    value="Login"
                  />
                </div>
              </form>
              {/* <h1> {this.state.error} ? "Error" : ""</h1> */}
            </div>
          </div>
        </div>
      </div>

      // <div>
      //   <form onSubmit={this.handleFormSubmit}>
      //     <fieldset>
      //       <label>Username:</label>
      //       <input
      //         type="text"
      //         name="username"
      //         value={this.state.username}
      //         onChange={e => this.handleChange(e)}
      //       />
      //     </fieldset>

      //     <fieldset>
      //       <label>Password:</label>
      //       <input
      //         type="password"
      //         name="password"
      //         value={this.state.password}
      //         onChange={e => this.handleChange(e)}
      //       />
      //     </fieldset>

      //     <input type="submit" value="Login" />
      //   </form>

      //   <h1>{this.state.error ? "Error" : ""}</h1>
      // </div>
    );
  }
}

export default Login;
