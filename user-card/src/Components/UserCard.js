import React from "react";

class UserCard extends React.Component {
  render() {
    console.log("props passed to userCard component", this.props.user);

    return (
      <div>
        <h2>User Info: </h2>
        <div>
          <img src={this.props.user.avatar_url} />
        </div>
        <h3>username: {this.props.user.login}</h3>
        <h3>email: {this.props.user.email}</h3>
        <h3>location: {this.props.user.location}</h3>
        <h3>name: {this.props.user.name}</h3>
        <h4>following: {this.props.user.name}</h4>
        <h4>url: {this.props.user.name}</h4>
      </div>
    );
  }
}

export default UserCard;
