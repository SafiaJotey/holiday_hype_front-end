import { default as React, useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';

import { useLocation } from 'react-router-dom';
import animationData from '../../assets/lotties/login.json';
import useMediaQuery from '../../Hooks/useMediaQuery';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginData, setLoginData] = useState({});
  const { isLoading, registerUser, signInWithGoogle } = useAuth();
  // user, authError
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

  const onSubmit = (data) => {
    let newLoginData = { ...loginData };
    newLoginData.name = data.name;

    newLoginData.email = data.user_email;
    newLoginData.password = data.password;
    newLoginData.password2 = data.password2;
    setLoginData(newLoginData);
    if (loginData.password !== loginData.password2) {
      alert('Your password did not match');
      return;
    }
    console.log(loginData);
    registerUser(loginData.email, loginData.password, loginData.name, history);
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
              <h3>Register</h3>
              <input
                className=" w-100  px-2  py-2 my-1  border border-secondary border-1"
                type="text"
                {...register('name', {
                  required: 'Name is Required',
                })}
                name="name"
                placeholder="Your Name "
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
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
                className=" w-100  px-2  py-2 my-1 border border-secondary border-1 "
                type="password"
                {...register('password2', {
                  required: true,
                })}
                name="password2"
                placeholder="Confirm password "
              />
              {errors.password2 && (
                <small className="text-danger">
                  {errors.password2.message}
                </small>
              )}
              <input
                className="  w-100 bg-primary my-1 px-5 py-2 rounded border border-secondary border-start-3  text-white mx-auto  rounded-md "
                type="submit"
                value=" Register"
              />
              {isLoading && (
                <div class="spinner-border text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
              <NavLink to="/login">
                <p className="text-primary fw-bold text-decoration-underline">
                  Already have a account? Please Login
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
export default Register;
