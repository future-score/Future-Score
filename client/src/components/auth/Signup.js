import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link, Redirect } from "react-router-dom";

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", redirect: false };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service
      .signup(username, password)
      .then(() => {
        this.setState({
          username: "",
          password: "",
          redirect: true
        });
        //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
        //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
        //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
        // this.props.getUser(response.user);
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
    console.log(process.env)
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form
                method="POST"
                className="register-form"
                id="register-form"
                onSubmit={this.handleFormSubmit}
              >
                <div className="form-group">
                  <label>
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    id="username"
                    placeholder="Your Name"
                    onChange={e => this.handleChange(e)}
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
                    value={this.state.password}
                    id="pass"
                    placeholder="Password"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
              </form>
              <h1>{this.state.error ? "Error" : null}</h1>
            </div>
          </div>
        </div>
        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>

      // <div>
      //   <h3>Welcome!, create your account next:</h3>

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

      //     <input type="submit" value="Sign up" />
      //   </form>

      //   <h1>{this.state.error ? "Error" : ""}</h1>
      // </div>
    );
  }
}

export default Signup;
