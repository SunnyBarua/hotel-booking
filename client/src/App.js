import Login from "./auth/Login";
import Home from "./booking/Home";
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom"
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./user/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import DashboardSeller from "./user/DashboardSeller";
import NewHotel from "./hotels/NewHotel";
import StripeCallback from "./stripe/StripeCallback";


function App() {
  return (
    <Router>
     <Navbar/>
     <ToastContainer position="top-center"/>

      <Switch>
      <Route exact path="/">
         <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <PrivateRoute exact path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard/seller">
          <DashboardSeller/>
        </PrivateRoute>
        <PrivateRoute exact path="/hotels/new">
          <NewHotel/>
        </PrivateRoute>
        <PrivateRoute exact path="/stripe/callback">
         <StripeCallback/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
