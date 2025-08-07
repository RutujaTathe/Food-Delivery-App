import { useState, useEffect } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("interval");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("useEffect");
    };
    // api call
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const data = await fetch("https://api.github.com/users/RutujaTathe");
    const json = await data.json();
    console.log("github Api data", json);
  }

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>count={count}</h1>
      <h1>count2={count2}</h1>
      <h2>Name:{props.name}</h2>
      <h3>Location:Pune</h3>
      <h4>contact:@Rutuja</h4>
    </div>
  );
};
export default User;
