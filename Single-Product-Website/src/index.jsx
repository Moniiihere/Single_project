import "./index.css";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/HeaderComponent/HeaderComponent/HeaderComponent";
import FooterComponent from "./component/FooterComponent/FooterComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Body from "./component/Body/Body";

//import Card from "./component/Card/Card"
import { productData } from "./api/DummyData";

import Card, { More, Title } from "./component/Card/Card";

import App from "./App";

import ChooseUs from "./component/ChooseUs/ChooseUs";
import Offer from "./component/Offer/Offer";
import Review from "./component/Review/Review";
import Login from "./Login";

import Feedback from "./Feedback";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />

      <Outlet />

      <FooterComponent />
    </>
  );
};

const Layout = () => {
  return (
    <>
      <App />

      <ChooseUs />
      <Offer />
      <Title />
      <Body />
      <More />
      <Review />
      <Feedback />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Layout />,
      },

      {
        path: "/home",
        element: <Layout />,
      },

      {
        path: "/image",
        element: <Body />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/us",
        element: <ChooseUs />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/review",
        element: <Review />,
      },
      {
        path: "/log",
        element: <Login />,
      },
      {
        path: "/feed",
        element: <Feedback />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
