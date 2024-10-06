import { StrictMode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import PageAnime from "./components/PageAnime.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <PageAnime />,
  },
])

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
)
