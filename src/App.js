import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BlogPost from "./components/Modules/BlogPost";
import ProductDescription from "./components/Modules/ProductDescription";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductDescription></ProductDescription>,
    },
    {
      path: "/pd",
      element: <ProductDescription></ProductDescription>,
    },
    {
      path: "/bp",
      element: <BlogPost></BlogPost>,
    },
  ]);
  return (
    <div className="max-w-3xl m-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
