import React from 'react';
import { Controller, useForm } from 'react-hook-form';
// import useAuth from '../../utils/Hooks/useAuth';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const AddServices = () => {
  // const { user } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data)
    // fetch('https://guarded-scrubland-87252.herokuapp.com/addServices', {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div className="bgImage p-2">
      <h1 className=" text-center ">
        {' '}
        Add A <span className="text-secondary">New Package</span>
      </h1>
      <div className="  m-auto row">
        <div className=" row d-flex justify-content-center align-items-center">
          <div className="col-md-4 bg-dark shadow p-3 rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register('title')}
                placeholder="Title"
                className="w-100  px-2  py-2 my-1  border border-secondary border-1"
              />
              <br />
              <input
                {...register('subTitle')}
                placeholder="subTitle"
                className="w-100  px-2  py-2 my-1  border border-secondary border-1"
              />
              <br />
              <input
                {...register('location')}
                placeholder="Location"
                className="w-100  px-2  py-2 my-1  border border-secondary border-1"
              />
              <br />
              <input
                {...register('description')}
                placeholder="Description"
                className="w-100  px-2  py-2 my-1  border border-secondary border-1"
              />
              <br />
              <input
                {...register('image', { required: true })}
                placeholder="Image Link"
                className="w-100  px-2  py-2 my-1  border border-secondary border-1"
              />
              <br />
              <input
                {...register('price', { required: true })}
                placeholder="Total cost"
                type="number"
                className="w-100  px-2  py-2 my-1  border border-secondary border-1"
              />
              <br />
              {errors.price && <span>This field is required</span>}
              <div className="  d-flex flex-row justify-content-between ">
                <div className="pe-2 w-50">
                  <Controller
                    control={control}
                    name="date-input"
                    render={({ field }) => (
                      <DatePicker
                        className=" w-100  py-2 my-1  border border-secondary border-1"
                        placeholderText=" Select Starting  date"
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                    )}
                  />
                </div>
                <select
                  {...register('duration')}
                  className="w-50    py-2 my-1  border border-secondary border-1"
                >
                  <option value="">Select Event Duration</option>

                  <option value="3 days 2 nights">3 days 2 nights</option>
                  <option value="4 days 3 nights">4 days 3 nights</option>
                  <option value="5 days 4 nights">5 days 4 nights</option>
                  <option value="6 days 5 nights">6 days 5 nights</option>
                  <option value="7 days 6 nights">7 days 6 nights</option>
                  <option value="8 days 7 nights">8 days 7 nights</option>
                  <option value="9 days 8 nights">9 days 8 nights</option>
                </select>
              </div>
              <input
                type="submit"
                value="ADD"
                className="mt-1 bg-primary  px-3 py-2 rounded border border-secondary border-start-3 text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
