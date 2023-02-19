import React, { useRef } from 'react';

import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';

import { NavLink, useHistory, useLocation } from 'react-router-dom';
import animationData from '../../assets/lotties/login.json';
import useAuth from '../../Hooks/useAuth';
import useMediaQuery from '../../Hooks/useMediaQuery';
import {
  failNotification,
  successNotification,
} from '../../utils/Notification';

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const destination = location?.state?.from || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser, signInWithGoogle, isLoading, setIsLoading } = useAuth();
  // user, authError
  const form = useRef();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const onSubmit = (data) => {
    loginUser(data.user_email, data.password)
      .then((userCredential) => {
        successNotification('Successfully logged in!!');
        history.replace(destination);
      })
      .catch((error) => {
        failNotification('Password or email is not Correct');
      })
      .finally(() => setIsLoading(false));
    // e.preventDefault();
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3>Login</h3>
              <input
                className=" w-100  px-2  py-2 my-1  border border-secondary border-1"
                type="email"
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
              {isLoading && (
                <div class="spinner-border text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
              <NavLink to="/register">
                <p className="text-primary fw-bold text-decoration-underline">
                  New User? Please Register
                </p>
              </NavLink>

              <button
                onClick={handleGoogleSignIn}
                className="mt-1 bg-primary  px-3 py-2 rounded border border-secondary border-start-3 text-white"
              >
                {' '}
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
