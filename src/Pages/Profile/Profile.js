import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import userImg from '../../assets/Images/user.png';
import useAuth from '../../Hooks/useAuth';
import { successNotification } from '../../utils/Notification';
const Profile = () => {
  // const email = useParams();

  // const [user, setuser] = useState({});
  const { user, isLoading } = useAuth();
  const [edit, setEdit] = useState(false);
  console.log(user);
  // useEffect(() => {
  //   fetch(
  //     `https://holiday-hype-back-end.onrender.com/api/v1/user/current/${email.email}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, [user]);
  // console.log(user);
  const {
    register,
    handleSubmit,

    formState: { errors },
    trigger,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const newUser = {
      id: user._id,
      address: data.Address,
      phoneNumber: data.Mobile,
    };
    // console.log(newUser);
    fetch(`https://holiday-hype-back-end.onrender.com/api/v1/user/update`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    successNotification('Profile Updated');
    setEdit(false);
  };
  return (
    <div className="bgImage">
      <div className="container  ">
        <h1 className="pt-3 fw-bold ">
          User's <span className="text-secondary "> Profile</span>{' '}
        </h1>
        <p className="fs-6">Welcome to Holiday Hype.</p>
        <div className=" d-flex flex-column flex-md-row justify-content-center text-start my-5">
          <div className="  shadow p-5">
            <div className=" row ">
              <div className="col-md-4 rounded-circle  ">
                <img
                  src={user?.photoURL ? user.photoURL : userImg}
                  className="w-100 h-100 rounded-circle "
                  alt=""
                />
              </div>
              <div className=" col-md-8 px-5">
                <p className=" fw-bold fs-5  text-primary ">User's Details</p>
                {!edit ? (
                  <div className="d-flex flex-column justify-content-start">
                    <p className="fs-6 text-primary">
                      User's Name: {user?.displayName}
                    </p>

                    <p>Email: {user?.email}</p>
                    <p>
                      Phone Number:
                      <span
                        className={`${user?.phoneNumber}?"text-black":text-gray`}
                      >
                        {' '}
                        {user?.phoneNumber
                          ? user?.phoneNumber
                          : 'Not given yet'}
                      </span>
                    </p>

                    <p>
                      Address:{' '}
                      <span
                        className={`${user?.address}?"text-black":text-gray`}
                      >
                        {' '}
                        {user?.address ? user?.address : 'Not given yet'}
                      </span>
                    </p>
                    <button
                      className="mt-1 mx-1 bg-primary pe-auto  py-2 rounded border border-secondary border-start-3 text-white"
                      onClick={() => setEdit(true)}
                    >
                      Edit Profile
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register('Username')}
                      defaultValue={user?.displayName}
                      className="  w-100 p-1 border border-line "
                    />
                    <br />
                    <input
                      {...register('Email')}
                      defaultValue={user?.email}
                      className=" mt-1 p-1 w-100 border border-line "
                    />
                    <br />

                    <input
                      {...register('Address')}
                      placeholder="Enter your proper Address to confirm the order"
                      className="  mt-1 p-1  w-100 border border-line "
                    />
                    {errors.Address && (
                      <span className="text-danger fw-bold mx-2 ">
                        <small>This field is required</small>
                      </span>
                    )}
                    <br />
                    <input
                      {...register('Mobile', {
                        pattern: {
                          value: /^(?:\+88|01)?\d{11}\r?$/,
                          message: 'Please enter a valid contact number',
                        },
                      })}
                      onKeyUp={() => {
                        trigger('Mobile');
                      }}
                      placeholder="Enter your Contact Number"
                      className=" mt-1 p-1 w-100 border border-line "
                    />
                    {errors.Mobile && (
                      <span className="text-danger p-1 fw-bold mx-2 ">
                        {errors.Mobile.message === '' ? (
                          <small>this field is required </small>
                        ) : (
                          <small>{errors.Mobile.message}</small>
                        )}
                      </span>
                    )}

                    <br />

                    <input
                      type="submit"
                      value="Update Profile"
                      className="mt-3 rounded bg-primary text-white  px-3 py-2  border border-secondary border-start-3"
                    />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
