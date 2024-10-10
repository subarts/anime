import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import PageAnime from "./components/PageAnime.jsx"
import WatchLater from "./components/WatchLater.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <PageAnime />,
  },
  {
    path: "/later",
    element: <WatchLater />,
  },
])

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
)
