import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import LandingPage from "./pages/landing-page/LandingPage";
import Home from "./pages/home/Home";
import Complaints from "./pages/complaints/Complaints";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import IdentifyCriminal from "./pages/dashboard/identify-criminal/IdentifyCriminal";
import RegisterCriminal from "./pages/dashboard/register-criminal/RegisterCriminal";
import UpdateCriminal from "./pages/dashboard/update-criminal/UpdateCriminal";
import ViewHistory from "./pages/dashboard/view-history/ViewHistory";
import ViewCases from "./pages/dashboard/view-history/view-cases/ViewCases";
import ViewPreviousCases from "./pages/dashboard/view-history/view-previous-cases/ViewPreviousCases";
import UpdateCriminalInfo from "./pages/dashboard/update-criminal/update-criminal-info/UpdateInfo";
import AddNewCases from "./pages/dashboard/update-criminal/add-new-cases/AddNewCases";

const Layout = () => {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/SurveillanceBureau",
    element: (<Layout />),
  },
  {
    path: "/SurveillanceBureau/home",
    element: (<Home />),
  },
  {
    path: "/SurveillanceBureau/complaints",
    element: (<Complaints />),
  },
  {
    path: "/SurveillanceBureau/about",
    element: (<About />),
  },
  {
    path: "/SurveillanceBureau/contact",
    element: (<Contact />),
  },
  {
    path: "/SurveillanceBureau/login",
    element: (<Login />),
  },
  {
    path: "/SurveillanceBureau/dashboard",
    element: (<Dashboard />),
  },
  {
    path: "/SurveillanceBureau/dashboard/identify-criminal",
    element: (<IdentifyCriminal />),
  },
  {
    path: "/SurveillanceBureau/dashboard/register-criminal",
    element: (<RegisterCriminal />),
  },
  {
    path: "/SurveillanceBureau/dashboard/update-criminal",
    element: (<UpdateCriminal />),
  },
  {
    path: "/SurveillanceBureau/dashboard/view-history",
    element: (<ViewHistory />),
  },
  {
    path: "/SurveillanceBureau/dashboard/view-history/view-previous-cases",
    element: (<ViewPreviousCases />),
  },
  {
    path: "/SurveillanceBureau/dashboard/view-history/view-cases",
    element: (<ViewCases />),
  },
  {
    path: "/SurveillanceBureau/dashboard/update-criminal/update-criminal-info/UpdateInfo",
    element: (<UpdateCriminalInfo />),
  },
  {
    path: "/SurveillanceBureau/dashboard/add-new-cases/AddNewCases",
    element: (<AddNewCases />),
  },

]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
