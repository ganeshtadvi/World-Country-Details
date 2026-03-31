import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h4>{error.status}</h4>
      <h2>{error.statusText}</h2>
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </div>
  );
};
