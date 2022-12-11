import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import Spinner from '../../utils/Spinner/Spinner';

const Booking = () => {
  const history = useHistory();
  const { user } = useAuth();
  // const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(
      `https://holiday-hype-back-end.onrender.com/api/v1/packages/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setService(data.data[0]));
  }, [serviceId]);

  console.log(service);
  const {
    register,
    handleSubmit,

    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    data.status = 'pending';
    swal({
      title: ' Do you want to order this watch?',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        swal('Done.This item is added to your order list.', {
          icon: 'success',
        });
        fetch(
          ' https://holiday-hype-back-end.onrender.com/api/v1/bookings/confirmBookings',
          {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
          }
        )
          .then((res) => res.json())
          .then((result) => {});
      }
      // setShow(false);
      history.replace('/myOrder');
    });
  };

  return (
    <>
      {' '}
      {!service.description ? (
        <Spinner />
      ) : (
        <div className="py-4">
          <h3 className="fw-bold">Confirm Your bookings</h3>
          <div className=" container ">
            <h4 className="mb-2 fw-bold">
              Visit Beautiful{' '}
              <span className="text-secondary"> {service?.title}</span>{' '}
            </h4>
            <div className="row  d-flex justify-content-center align-items-start my-4  ">
              <div className="col-md-6  d-flex justify-content-end">
                <img
                  className="w-100 p-2 img-fluid  float-md-start  border border-1 border-line rounded bg-dark shadow"
                  src={service?.image}
                  alt=""
                />
              </div>
              <div className="col-md-6 mt-4">
                <h5 className="text-start fw-bold  px-2">
                  {service?.subTitle}
                </h5>
                <p className="text-start  px-2">{service?.description}</p>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center p-4 ">
              <div className="w-100 d-flex flex-column justify-content-start align-items-start ">
                <div>
                  <h4 className="fw-bold text-decoration-underline">
                    Booking details
                  </h4>
                </div>
                <div className="text-start  ">
                  <p>
                    {' '}
                    <span className="fw-bold">Place:</span> {service?.title}{' '}
                  </p>
                  <p>
                    <span className="fw-bold"> Location:</span>{' '}
                    {service?.location}{' '}
                  </p>
                  <p>
                    <span className="fw-bold">Duration: </span>
                    {service?.duration}
                  </p>
                  <p>
                    <span className="fw-bold">Date:</span> {service?.date}
                  </p>
                  <h5>Cost:$ {service?.price} </h5>

                  <Button
                    className=" my-2 bg-primary  px-3 py-2 rounded border border-secondary border-start-3 "
                    variant="primary"
                    onClick={handleShow}
                  >
                    Book Your Seat Now
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title className="text-primary fw-bold">
                        Your{' '}
                        <span className="text-secondary fw-bold">
                          information
                        </span>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register('Username')}
                          defaultValue={user?.displayName}
                          className="p-2 m-1 w-100 border border-line rounded"
                        />
                        <br />
                        <input
                          {...register('Email')}
                          defaultValue={user?.email}
                          className="p-2  m-1  w-100 border border-line rounded"
                        />
                        <br />
                        {service?.title && (
                          <input
                            {...register('name')}
                            defaultValue={service?.title}
                            className="p-2  m-1 w-100 border border-line rounded"
                            readOnly
                          />
                        )}
                        {service?.location && (
                          <input
                            {...register('location')}
                            defaultValue={service?.location}
                            className="p-2  m-1 w-100 border border-line rounded"
                            readOnly
                          />
                        )}

                        <br />

                        {service?.price && (
                          <input
                            {...register('price')}
                            defaultValue={service?.price}
                            className="p-2  m-1 w-100 border border-line rounded"
                          />
                        )}

                        {service?.image && (
                          <input
                            className="d-none "
                            {...register('image')}
                            defaultValue={service?.image}
                          />
                        )}

                        <input
                          {...register('Address', { required: true })}
                          placeholder="Enter your proper Address to confirm the order"
                          className="p-2  m-1  w-100 border border-line rounded"
                        />
                        {errors.Address && (
                          <span className="text-danger fw-bold mx-2 ">
                            <small>This field is required</small>
                          </span>
                        )}
                        <br />
                        <input
                          {...register('Mobile', {
                            required: true,
                            pattern: {
                              value: /^(?:\+88|01)?\d{11}\r?$/,
                              message: 'Please enter a valid contact number',
                            },
                          })}
                          onKeyUp={() => {
                            trigger('Mobile');
                          }}
                          placeholder="Enter your Contact Number"
                          className="p-2  m-1  w-100 border border-line rounded"
                        />
                        {errors.Mobile && (
                          <span className="text-danger fw-bold mx-2 ">
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
                          value="Place Booking"
                          className="mt-3 bg-primary text-white  px-3 py-2 rounded border border-secondary border-start-3"
                        />
                      </form>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
