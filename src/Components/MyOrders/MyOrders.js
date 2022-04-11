import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from './../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
  const { user } = useAuth();

  const [services, setServices] = useState([]);

  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user.email}`)
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
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
    });
  };
  const handlePay = (id) => {};

  return (
    <div className="container">
      <h1 className="order my-5">
        Orders of <span className="highlight">{user.displayName}</span>{' '}
      </h1>
      {services.length === 0 ? (
        <div className="d-flex justify-content-center">
          <h5>You haven't placed any order yet!</h5>
        </div>
      ) : (
        <div class="">
          <div class="row g-0 d-flex justify-content-between align-items-center">
            {services.map((service) => (
              <div
                className="col-md-6 card p-2 
       services mb-3  "
                style={{ maxWidth: '540px' }}
              >
                <div className="row   m-1">
                  <div class="col-md-7 ">
                    <img className="w-100 h-100" src={service?.image} alt="" />
                  </div>
                  <div class="col-md-5">
                    <div class="card-body text-start">
                      <h6>Place:{service?.name}</h6>
                      <p>Location:{service?.location}</p>

                      <h6 className="text-danger">
                        {' '}
                        Total Cost :$ {service?.price}
                      </h6>
                      <p>UserName:{service?.Username}</p>
                      <p>Address:{service?.Address}</p>
                      <p className="text-danger">Status:{service?.status}</p>
                      <div className="d-flex">
                        <button
                          onClick={() => handlePay(service?._id)}
                          className="btn-success rounded px-4 py-2 m-1 "
                        >
                          pay
                        </button>
                        <button
                          onClick={() => handleDelete(service?._id)}
                          className=" btn-danger rounded px-4 py-2 m-1"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
