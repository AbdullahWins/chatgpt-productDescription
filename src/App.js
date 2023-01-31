import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductDescription from "./components/Modules/ProductDescription";

function App() {
  const router = createBrowserRouter([
    {
      path: "/pc",
      element: <ProductDescription></ProductDescription>,
    },
    {
      path: "/",
      element: <ProductDescription></ProductDescription>,
    },
  ]);
  return (
    <div className="max-w-3xl m-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
