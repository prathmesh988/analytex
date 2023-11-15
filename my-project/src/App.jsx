import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Registration from "./pages/Registration";
import Stats from "./pages/Stats";
import NotFoundPage from "./pages/NotFoundPage";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
// Create a router with your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Registration /> },
      { path: "/stats", element: <Stats /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
