import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { loader as HomeLoader } from "./pages/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "product/:id",
          element: <ProductDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
