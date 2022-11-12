import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddServices from './Components/AddServices/AddServices';
import AllServices from './Components/AllServices/AllServices';
import Blog from './Components/Blog/Blog';
import PublishBlog from './Components/Blog/PublishBlog';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Booking from './Components/Booking/Booking';
import Header from './Components/Header/Header';
import ManageOrder from './Components/ManageOrders/ManageOrder';
import MyBlogs from './Components/MyBlogs/MyBlogs';
import MyOrders from './Components/MyOrders/MyOrders';
import Payment from './Components/MyOrders/Payment/Payment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import AuthProvider from './utils/Context/AuthProvider';

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
        <Banner></Banner>
        <About></About>
        <Social></Social>
        <Footer></Footer> */}
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/addServices">
              <AddServices></AddServices>
            </PrivateRoute>
            <Route path="/allServices">
              <AllServices></AllServices>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/myBlog/:email">
              <MyBlogs></MyBlogs>
            </PrivateRoute>

            <PrivateRoute exact path="/myOrder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/payment/:orderId">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute exact path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/addServices">
              <AddServices></AddServices>
            </Route>
            <Route path="/addBlog">
              <Blog></Blog>
            </Route>
            <Route path="/details/:blogId">
              <BlogDetails></BlogDetails>
            </Route>
            <PrivateRoute path="/publish">
              <PublishBlog></PublishBlog>
            </PrivateRoute>

            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
