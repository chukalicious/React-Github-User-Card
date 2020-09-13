import React from "react";
import UserCard from "./Components/UserCard";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/chukalicious")
      .then((res) => this.setState({ userInfo: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Github User Card</h1>
        <UserCard user={this.state.userInfo} />
      </div>
    );
  }
}

export default App;
