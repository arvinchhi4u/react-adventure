import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummyphoto.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_USER_API);
    const json = await data.json();

    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="my-4">
        <img className="w-20" src={avatar_url} alt={name} />
        <h2 className="mt-4">Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @arvinchhi4u</h4>
      </div>
    );
  }
}

export default UserClass;
