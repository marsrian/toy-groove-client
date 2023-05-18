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
            element: <MyToys />
        },
        {
            path: "alltoys",
            element: <AllToys />
        },
        {
            path: "addtoy",
            element: <AddToy />
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
        }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

export default router;
