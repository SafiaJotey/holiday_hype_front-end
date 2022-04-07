import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddProducts from './../../../Components/AddProducts/AddProducts';
import AddReviews from './../../../Components/AddReviews/AddReviews';
import Makeadmin from './../../../Components/Admin/MakeAdmin/Makeadmin';
import useAuth from './../../../Components/Hooks/useAuth';
import ManageOrder from './../../../Components/ManageOrders/ManageOrder';
import ManageProducts from './../../../Components/ManageProducts/ManageProducts';
import MyOrders from './../../../Components/MyOrders/MyOrders';
import Payment from './../../../Components/Payment/Payment';
import DashboardHome from './../DashboardHome/DashboardHome';

const drawerWidth = 240;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <Divider />
      <div>
        <Link to={`${url}`}>
          <Button style={{ color: '#000b19' }} variant="inherit">
            Dashboard
          </Button>
        </Link>
      </div>
      {!admin && (
        <Box>
          <div>
            <Link to={`${url}/myOrder`}>
              <Button style={{ color: '#000b19' }} variant="inherit">
                MyOrder
              </Button>
            </Link>
          </div>
          {/* <div> <Link to={`${url}/payment`}><Button style={{color:"#000b19"}} variant="inherit">Payment</Button></Link></div> */}
          <div>
            <Link to={`${url}/review`}>
              <Button style={{ color: '#000b19' }} variant="inherit">
                Review
              </Button>
            </Link>
          </div>
        </Box>
      )}
      {admin && (
        <Box>
          <div>
            <Link to={`${url}/manageOrder`}>
              <Button style={{ color: '#000b19' }} variant="inherit">
                Manage Order
              </Button>
            </Link>
          </div>
          <div>
            <Link to={`${url}/manageProduct`}>
              <Button style={{ color: '#000b19' }} variant="inherit">
                Manage Product
              </Button>
            </Link>
          </div>
          <div>
            <Link to={`${url}/makeadmin`}>
              <Button style={{ color: '#000b19' }} variant="inherit">
                Make Admin
              </Button>
            </Link>
          </div>
          <div>
            <Link to={`${url}/addService`}>
              <Button style={{ color: '#000b19' }} variant="inherit">
                Add new Product
              </Button>
            </Link>
          </div>
        </Box>
      )}
      <Link to="/home">
        <Button style={{ color: '#000b19' }} variant="inherit">
          Go to Home page
        </Button>
      </Link>
      <Button style={{ color: '#000b19' }} variant="inherit" onClick={logout}>
        Logout
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          style={{
            backgroundImage: 'linear-gradient(45deg,#b000b2,#000b19,#b000b2)',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="bar" variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/myOrder`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/review`}>
            <AddReviews></AddReviews>
          </Route>
          <Route path={`${path}/payment/:id`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/makeadmin`}>
            <Makeadmin></Makeadmin>
          </Route>

          <Route path={`${path}/manageOrder`}>
            <ManageOrder></ManageOrder>
          </Route>

          <Route path={`${path}/manageProduct`}>
            <ManageProducts></ManageProducts>
          </Route>

          <Route path={`${path}/manageProduct`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/addService`}>
            <AddProducts></AddProducts>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
