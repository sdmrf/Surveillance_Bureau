import Complaints from "./Pages/Complaints/Complaints"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import LandingPage from "./Pages/Landing Page/LandingPage"
import Login from "./Pages/Login/Login"
import Register_complaint from "./Pages/Complaints/Complaints"
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.scss"

const Layout = () => {
  return (
    <div className="App">
    <LandingPage />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Layout />),
  },
  {
    path: "home",
    element: (<Home />),
  },
  {
    path: "complaints",
    element: (<Complaints />),
  },
  {
    path: "about",
    element: (<About />),
  },
  {
    path: "contact",
    element: (<Contact />),
  },
  {
    path: "login",
    element: (<Login />),
  },
]);

const App = () => {
  return (
    <div> <RouterProvider router={router} /> </div>
  )
}

export default App