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
    console.log("CDM!");
    axios
      .get("https://api.github.com/users/chukalicious")
      .then((res) => this.setState({ userInfo: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log("data from inside the render() in App", this.state.data);
    return (
      <div>
        <h1>This is the App Component</h1>
        <UserCard user={this.state} />
      </div>
    );
  }
}

export default App;
