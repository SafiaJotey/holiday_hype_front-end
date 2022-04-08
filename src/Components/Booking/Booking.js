import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from './../Hooks/useAuth';

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://guarded-scrubland-87252.herokuapp.com/singleProduct/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = 'pending';

    fetch('https://guarded-scrubland-87252.herokuapp.com/confirmOrder', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  return (
    <div className="booking">
      <h1>Confirm your order</h1>

      <div className="booking-container container">
        <div className="row  d-flex justify-content-center align-items-center ">
          <div className="col-md-6 ">
            <img src={service?.image} alt="" />
          </div>
          <div className="col-md-6 ">
            <h2>Visit Beautiful {service?.name}</h2>
            <p className="text-start">{service?.description}</p>
            <h1> price: {service?.price} $</h1>
          </div>
        </div>

        {/* form */}
        <div className="d-flex justify-content-center align-items-center ">
          <div className="w-100 d-flex flex-column justify-content-center align-items-center  ">
            <div>
              <h1>booking Form</h1>
            </div>
            <div className="form w-75 ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register('Username')}
                  defaultValue={user?.displayName}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register('Email')}
                  defaultValue={user?.email}
                  className="p-2 m-2 w-100"
                />
                <br />
                {service?.name && (
                  <input
                    {...register('name')}
                    defaultValue={service?.name}
                    className="p-2 m-2 w-100"
                    readOnly
                  />
                )}

                <br />

                {service?.price && (
                  <input
                    {...register('price')}
                    defaultValue={service?.price}
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                    readOnly
                  />
                )}

                {service?.image && (
                  <input
                    {...register('image')}
                    defaultValue={service?.image}
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                    readOnly
                  />
                )}

                <input
                  {...register('Address')}
                  placeholder="Enter your proper Address to confirm the order"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register('Mobile')}
                  placeholder="Enter your Contact Number"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Place Order" className="btn " />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
