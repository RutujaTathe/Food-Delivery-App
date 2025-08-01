import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("error", err);
  return (
    <div>
      <h1>OOP's !!!</h1>
      <h2>Something went wrong </h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
