import React from "react";
import User from "./ClassBasedComponent/user";
import UserClass from "./ClassBasedComponent/userClass";
import UserContext from "../Utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component mount function");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>Welcome to react .</h1>
        <div>
          userLoggedIn:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is about us page.</h2>
        {/* <User name="rutuja tathe(functional component)" /> */}
        <UserClass
          name={"rutuja tathe(class component) "}
          location={"dehradun class"}
          contact={"rutujatathe@gmail.com"}
        />
      </div>
    );
  }
}
export default About;
