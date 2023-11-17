import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Login from "./pages/user/Login";
import Stats from "./pages/admin/Stats";
import NotFoundPage from "./pages/user/NotFoundPage";
import InitiativeForm from "./pages/user/InitiativeForm";
import FeedbackForm from "./pages/user/FeedbackForm";
import AdvanceRegistration from "./pages/user/AdvanceRegistration";
import AdminPageLayout from "./layout/AdminPageLayout";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/Registration", element: <AdvanceRegistration /> },
      { path: "/Initiative", element: <InitiativeForm /> },
      {
        path: "/admin",
        element: <AdminPageLayout />,
        children: [
          { path: "Dashboard", element: <Stats /> },
          { path: "side1", element: <Stats /> },
        ],
      },
      { path: "/feedback", element: <FeedbackForm /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
