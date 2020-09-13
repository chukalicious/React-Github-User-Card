import React from "react";
import UserCard from "./Components/UserCard";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      followersInfo: [{}],
    };
  }

  componentDidMount() {
    let one = "https://api.github.com/users/chukalicious";
    let two = "https://api.github.com/users/chukalicious/followers";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          console.log("Response one:", responseOne);
          console.log("Response Two:", responseTwo.data);
          // use/access the results
        })
      )
      .catch((errors) => {
        // react on errors.
      });
  }

  render() {
    console.log("first render state: ", this.state);
    return (
      <div>
        <h1>Github User Card</h1>
        <UserCard user={this.state.userInfo} />
      </div>
    );
  }
}

export default App;
