// import {
//   Alert,
//   Button,
//   CircularProgress,
//   // Container,
//   div,
//   TextField,
//   Typography,
// } from '@mui/material';
import React, { useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';

import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import useMediaQuery from '../../Components/Hooks/useMediaQuery';
import animationData from '../../lotties/login.json';

const Login = () => {
  const {
    register,

    formState: { errors },
  } = useForm();
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
  const form = useRef();
  const location = useLocation();
  const history = useHistory();
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    console.log(loginData);
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div className="bgImage">
      <div className="container ">
        <div className="d-flex flex-column  flex-md-row justify-content-start align-items-center">
          <div className="p-5">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 450 : isTablet ? 400 : 300}
            />
          </div>
          <div className=" p-5">
            <form
              className="w-md-75 bg-dark shadow p-3 rounded  "
              ref={form}
              onSubmit={handleLoginSubmit}
            >
              <h3>Login</h3>
              <input
                className=" w-100  px-2  py-2 my-1  border border-secondary border-1"
                type="email"
                onChange={handleOnChange}
                {...register('user_email', {
                  required: 'Email is Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                name="user_email"
                placeholder="Your Email "
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
              <input
                className=" w-100  px-2  py-2 my-1 border border-secondary border-1 "
                type="password"
                onChange={handleOnChange}
                {...register('password', {
                  required: true,
                })}
                name="password"
                placeholder="Enter a password "
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
              <input
                className="  w-100 bg-primary my-1 px-5 py-2 rounded border border-secondary border-start-3  text-white mx-auto  rounded-md "
                type="submit"
                value="Login"
              />
              <NavLink to="/register">
                <p className="text-primary fw-bold text-decoration-underline">
                  New User? Please Register
                </p>
              </NavLink>
              {authError && (
                <div class="text-danger d-flex align-items-center" role="alert">
                  <p>{authError}</p>
                </div>
              )}
              {/* <p>------------------------------------</p> */}
              <button
                onClick={handleGoogleSignIn}
                className="mt-1 bg-primary  px-3 py-2 rounded border border-secondary border-start-3 text-white"
              >
                {' '}
                Login with Google
              </button>
            </form>
            {/* <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />

            <Button
              style={{
                background: '#000b19',
                boxShadow: '1px 1px 5px  #b000b2,  -1px -1px 5px  #b000b2',
              }}
              sx={{ width: '75%', m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: 'none' }} to="/register">
              <Button style={{ color: '#000b19' }} variant="text">
                New User? Please Register
              </Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form> */}

            {/* <Button
            style={{
              background: '#000b19',
              boxShadow: '1px 1px 5px  #b000b2,  -1px -1px 5px  #b000b2',
            }}
            onClick={handleGoogleSignIn}
            variant="contained"
          >
            Google Sign In
          </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
