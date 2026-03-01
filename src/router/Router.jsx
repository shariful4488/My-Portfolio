import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      // এখানে প্রজেক্ট ডিটেইলস অ্যাড করতে পারেন পরে
    ],
  },
]);

export default routes; 