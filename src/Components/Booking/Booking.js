import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from './../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        fetch(' https://guarded-scrubland-87252.herokuapp.com/confirmOrder', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
      }
    });

    console.log(data);
  };
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="booking">
      <h3>Confirm Your Order</h3>
      <div className="booking-container container ">
        <h4 className="mb-5">
          Visit Beautiful <span className="highlight"> {service?.title}</span>{' '}
        </h4>
        <div className="row  d-flex justify-content-center align-items-center ">
          <div className="col-md-6 ">
            <img src={service?.image} alt="" />
          </div>
          <div className="col-md-6 ">
            <h3 className="text-start">{service?.subTitle}</h3>
            <p className="text-start">{service?.description}</p>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center ">
          <div className="w-100 d-flex flex-column justify-content-start align-items-start mt-5">
            <div>
              <h3>Book Your Order</h3>
            </div>
            <div className="text-start  ">
              <p> Place: {service?.title} </p>
              <p> Location: {service?.location} </p>
              <h5> price:$ {service?.price} </h5>
              <Button className="my-2 " variant="primary" onClick={handleShow}>
                Book Now
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    {service?.ModelName && (
                      <input
                        {...register('name')}
                        defaultValue={service?.ModelName}
                        className="p-2 m-2 w-100"
                        readOnly
                      />
                    )}
                    {service?.location && (
                      <input
                        {...register('location')}
                        defaultValue={service?.location}
                        className="p-2 m-2 w-100"
                        readOnly
                      />
                    )}

                    <br />

                    {service?.price && (
                      <input
                        {...register('price')}
                        defaultValue={service?.price}
                        className="p-2 m-2 w-100"
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
                      className="p-2 m-2 w-100"
                    />
                    {errors.Address && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                    <br />
                    <input
                      {...register('Mobile', {
                        required: true,
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Only numbers are allowed',
                        },
                      })}
                      onKeyUp={() => {
                        trigger('Mobile');
                      }}
                      placeholder="Enter your Contact Number"
                      className="p-2 m-2 w-100"
                    />
                    {errors.Mobile && (
                      <small className="text-danger">
                        {errors.Mobile.message}
                      </small>
                    )}
                    {errors.Address && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}

                    <br />

                    <input
                      type="submit"
                      value="Place Booking"
                      className="btn "
                    />
                  </form>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
