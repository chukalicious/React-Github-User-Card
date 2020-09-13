import React from "react";

class UserCard extends React.Component {
  render() {
    console.log("props passed to userCard component", this.props);
    return (
      <div>
        <h2>This is the UserCard component</h2>
        <h3>Username: </h3>
      </div>
    );
  }
}

export default UserCard;
