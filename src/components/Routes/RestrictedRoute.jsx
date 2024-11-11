import { Navigate } from "react-router";

export const RestrictedRoute = ({ component: Components }) => {
  //   const token = useSelector(selectAuthToken);

  return <Navigate to="/myRecipes" />;
};
