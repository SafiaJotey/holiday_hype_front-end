import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
  const { user } = useAuth();

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

  const [services, setServices] = useState([]);

  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(
      `https://holiday-hype-back-end.onrender.com/api/v1/bookings/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, [control, user.email, services]);

  const handleDelete = (id) => {
    swal({
      title: ' Do you want to delete this package order?',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        swal('The package is deleted', {
          icon: 'success',
        });
        fetch(
          `https://holiday-hype-back-end.onrender.com/api/v1/bookings/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setControl(true);
          });
      }
    });
  };

  return (
    <div className="container">
      <h1 className="pt-3">
        Orders of <span className="text-secondary">{user.displayName}</span>{' '}
      </h1>
      <p className="">Confirm your order by online payment</p>
      {services !== {} && services.length === 0 ? (
        <div className="d-flex justify-content-center">
          <h5>You haven't placed any order yet!</h5>
        </div>
      ) : (
        <div class="row  d-flex justify-content-between align-items-center">
          {services.map((service) => (
            <div
              className="col-md-6  bg-dark p-2 border border-1 border-line rounded shadow mb-3  "
              style={{ maxWidth: '550px' }}
            >
              <div className="row   m-1">
                <div class="col-md-5 ">
                  <img
                    className="w-100 h-75 mt-2  p-1 img-fluid  float-md-start m-3 border border-1 border-line rounded bg-dark shadow"
                    src={service?.image}
                    alt=""
                  />
                </div>
                <div class="col-md-7  p-3">
                  <div class="card-body text-start text-primary">
                    <h5 className="fw-bold">Place: &nbsp;{service?.name}</h5>
                    <p>
                      <span className="fw-bold">Location:</span>&nbsp;
                      {service?.location}
                    </p>

                    <h6 className="text-secondary">
                      Total Cost : &nbsp; $ {service?.price}
                    </h6>
                    <p>
                      {' '}
                      <span className="fw-bold"> UserName:</span>&nbsp;
                      {service?.Username}
                    </p>
                    <p>
                      <span className="fw-bold">Address:</span>&nbsp;
                      {service?.Address}
                    </p>
                    {/* <p className="text-success">Status:{service?.status}</p> */}
                    <div className="d-flex justify-content-start align-items-center">
                      {service.payment ? (
                        <p className="text-primary fw-bold m-2">paid.</p>
                      ) : (
                        <Link to={`/payment/${service._id}`} className="pay">
                          <div>
                            <button className="mt-3 bg-primary text-white  px-3 py-2 rounded border border-secondary border-start-3">
                              pay
                            </button>
                          </div>
                        </Link>
                      )}
                      {service.payment ? (
                        <p className="text-primary fw-bold my-2">
                          Have a great holiday!
                        </p>
                      ) : (
                        <button
                          onClick={() => handleDelete(service?._id)}
                          className="mx-1 mt-3 bg-secondary text-white  px-3 py-2 rounded border border-secondary border-start-3"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
