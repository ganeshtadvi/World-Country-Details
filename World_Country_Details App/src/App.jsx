import "./App.css";
import { ContryDetails } from "./components/Layout/CountryDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Country } from "./pages/Country.jsx";
import { ErrorPage } from "./pages/Errorpage.jsx";

/*extra features we can add:- search country 🔍
filter by population
dynamic route /country/:id
better UI*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Country",
        element: <Country />,
      },
      {
        path: "Country/:id",
        element: <ContryDetails />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
