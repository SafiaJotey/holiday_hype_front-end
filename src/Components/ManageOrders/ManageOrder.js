import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import './ManageOrder.css';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  const [status, setStatus] = useState('');
  const { user } = useAuth();

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  useEffect(() => {
    fetch('http://localhost:5000/allOrders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);

  // const status = "apporved";
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ status }),
    });

    console.log(id);
  };

  //delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
        }
      });
    console.log(id);
  };

  return (
    <div className="container manage">
      <h1>Total orders : {orders.length}</h1>
      <div className="row">
        <col-12>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Place</th>
                <th>By</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {orders?.map((order, index) => (
              <tbody>
                <tr>
                  <td>{index}</td>
                  <td>{order.name}</td>
                  <td>$ {order.price}</td>
                  <td>{user.email}</td>
                  <td>
                    <input
                      onChange={handleStatus}
                      type="text"
                      defaultValue={order.status}
                    />
                  </td>
                  <button
                    onClick={() => handleDelete(order?._id)}
                    className="btn bg-danger text-white p-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(order._id)}
                    className="btn bg-success text-white p-2"
                  >
                    Update
                  </button>
                </tr>
              </tbody>
            ))}
          </Table>
        </col-12>
      </div>
    </div>
  );
};

export default ManageOrder;
