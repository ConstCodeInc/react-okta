import { Navigate } from "react-router-dom";
import LoginComponent from "./components/Login/Login";
import ListingComponent from "./components/Listing/Listing";
export const routes = [
  {
    path: "/",
    element: <Navigate to="login" />,
  },
  {
    path: "/login",
    element: <LoginComponent />,
  },
  {
    path: "/listing",
    element: <ListingComponent />,
  },
];
