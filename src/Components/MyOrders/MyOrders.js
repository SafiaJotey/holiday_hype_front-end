import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../utils/Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
  const { user } = useAuth();
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [services, setServices] = useState([]);

  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://guarded-scrubland-87252.herokuapp.com/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [control]);

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
          `https://guarded-scrubland-87252.herokuapp.com/deleteOrder/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
    });
  };

  return (
    <div className="container">
      <h1 className="order mt-5">
        Orders of <span className="highlight">{user.displayName}</span>{' '}
      </h1>
      <p className="mb-5">Confirm your order by online payment</p>
      {services.length === 0 ? (
        <div className="d-flex justify-content-center">
          <h5>You haven't placed any order yet!</h5>
        </div>
      ) : (
        <div class="row g-0 d-flex justify-content-between align-items-center">
          {services.map((service) => (
            <div
              className="col-md-6 card 
       services mb-3  "
              style={{ maxWidth: '550px' }}
            >
              <div className="row   m-1">
                <div class="col-md-5 ">
                  <img
                    className="w-100 h-75 mt-2"
                    src={service?.image}
                    alt=""
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body text-start">
                    <h6>Place:{service?.name}</h6>
                    <p>Location:{service?.location}</p>

                    <h6 className="text-danger">
                      {' '}
                      Total Cost :$ {service?.price}
                    </h6>
                    <p>UserName:{service?.Username}</p>
                    <p>Address:{service?.Address}</p>
                    {/* <p className="text-success">Status:{service?.status}</p> */}
                    <div className="d-flex justify-content-start align-items-center">
                      {service.payment ? (
                        <p className="text-success m-2">paid.</p>
                      ) : (
                        <Link to={`/payment/${service._id}`} className="pay">
                          <div>
                            <button className="rounded fs-6 px-3 py-1 m-1  btn-success d-flex justify-content-start align-items-center">
                              pay
                            </button>
                          </div>
                        </Link>
                      )}
                      {service.payment ? (
                        <p className="text-success my-2">
                          Have a great holiday!
                        </p>
                      ) : (
                        <button
                          onClick={() => handleDelete(service?._id)}
                          className=" buttonCancel   fs-6 px-3 py-1 btn-danger rounded m-1"
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
