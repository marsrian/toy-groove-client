import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Register from "../Pages/Register/Register";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blog from "../Pages/Blog/Blog";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import PrivetRoute from "../privetRoute/PrivetRoute";
import UpdateToy from "../Pages/MyToys/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "mytoys",
            element: <PrivetRoute><MyToys /></PrivetRoute>
        },
        {
            path: "alltoys",
            element: <AllToys />
        },
        {
            path: "toydetails/:id",
            element: <PrivetRoute><ToyDetails /></PrivetRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
            path: "addtoy",
            element: <PrivetRoute><AddToy /></PrivetRoute>
        },
        {
            path: "blog",
            element: <Blog />
        },
        {
            path: "login",
            element: <Login />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "updatetoy/:id",
          element: <UpdateToy />,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

export default router;
