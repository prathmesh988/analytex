import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Registration from "./pages/Registration";
import Stats from "./pages/Stats";

// Create a router with your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/stats",
    element: <Stats />,
  },
]);

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
