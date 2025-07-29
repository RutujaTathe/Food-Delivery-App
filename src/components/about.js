import User from "./ClassBasedComponent/user";
import UserClass from "./ClassBasedComponent/userClass";

const About = () => {
  return (
    <div>
      <h1>Welcome to react .</h1>
      <h2>This is about us page.</h2>
      <User />
      <UserClass />
    </div>
  );
};

export default About;
