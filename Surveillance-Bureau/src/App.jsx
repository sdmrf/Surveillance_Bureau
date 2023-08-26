import Complaints from "./Pages/Complaints/Complaints"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import LandingPage from "./Pages/Landing Page/LandingPage"
import Login from  "./Pages/Home/Login/Login"
import Dashboard from "./Pages/Dashboard/Dashboard"
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.scss"
import IdentifyCriminal from "./Pages/Dashboard/Identify Criminal/IdentifyCriminal"
import RegisterCriminal from "./Pages/Dashboard/Register Criminal/RegisterCriminal"
import UpdateCriminal from "./Pages/Dashboard/Update Criminal/UpdateCriminal"
import ViewHistory from "./Pages/Dashboard/View History/ViewHistory"
import PreviousCases from "./Pages/Dashboard/View History/PreviousCases/PreviousCases"
import ViewCases from "./Pages/Dashboard/View History/ViewCases/ViewCases"


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
  {
    path: "dashboard",
    element: (<Dashboard />),
  }
  ,
  {
    path: "dashboard/identify-criminal",
    element: (<IdentifyCriminal />),
  },
  {
    path: "dashboard/register-criminal",
    element: (<RegisterCriminal />),
  },
  {
    path: "dashboard/update-criminal",
    element: (<UpdateCriminal />),
  },
  {
    path: "dashboard/view-history",
    element: (<ViewHistory/>),
  },
  {
    path: "dashboard/view-history/previous-cases",
    element: (<PreviousCases/>),
  },
  {
    path: "dashboard/view-history/view-cases",
    element: (<ViewCases/>),
  }
]);

const App = () => {
  return (
    <div> <RouterProvider router={router} /> </div>
  )
}

export default App