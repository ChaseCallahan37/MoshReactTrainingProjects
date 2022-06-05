import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    const { username, password } = this.state.data;
    try {
      await auth.login(username, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (e) {
      if (e.result && e.result.status === 400) {
        debugger;
        const errors = { ...this.state.errors };
        errors.username = e.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
