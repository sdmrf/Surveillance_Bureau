import Complaints from "./Pages/Complaints/Complaints"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import LandingPage from "./Pages/Landing Page/LandingPage"
import Login from  "./Pages/Home/Login/Login"
import Viewcriminal from "./Pages/Dashboard/View History/ViewHistory"
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.scss"

const Layout = () => {
  return (
    <div className="App">
    <Viewcriminal />
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