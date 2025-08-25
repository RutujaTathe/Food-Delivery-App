import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "dummy",
        location: "default",

        avatar_url:
          "https://www.shutterstock.com/image-photo/blond-hair-girl-taking-photo-260nw-2492842415.jpg",
      },
    };
  }
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("interval");
    }, 1000);
    //api calls
    const data = await fetch("https://api.github.com/users/RutujaTathe");
    const json = await data.json();
    console.log("data coming from class component", json);
    this.setState({
      userInfo: json,
    });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component unmount call");
  }
  componentDidUpdate(prevProps, prevState) {
    if ((this.state.count = !prevState.count)) {
      // code to run when count changes
      console.log("Count updated:", this.state.count);
    }
    if ((this.state.count2 = !prevState.count2)) {
      // code to run when count changes
      console.log("Count updated:", this.state.count);
    }

    console.log("componnet did updated call");
  }

  render() {
    // const { name, location, contact } = this.props;
    const { count, count2 } = this.state;
    console.log("Child render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>count:{count}</h1> */}
        {/* <h1>count2:{count2}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 + 1,
            });
          }}
        > 
          Count Increase
        </button> */}
        <img src={avatar_url} className="w-44 h-44 rounded"></img>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        {/* <p>{bio}</p> */}

        {/* <h4>contact:{contact}</h4> */}
      </div>
    );
  }
}

export default UserClass;
