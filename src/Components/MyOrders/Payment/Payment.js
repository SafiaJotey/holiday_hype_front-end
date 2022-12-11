import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import animationData from '../../../assets/lotties/payment.json';
import useMediaQuery from '../../../Hooks/useMediaQuery';
import Spinner from '../../../utils/Spinner/Spinner';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(
  'pk_test_51Jy0LwBgFp1VWIUWHbxJnNCwiyBmGGn06StHxseA6ZvMlfKJBZrkSXT1TvXeUgBiTThCByH2mc2QPbQ8q2YTJPGr00CNflA4te'
);

const Payment = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState([]);

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
  console.log(order);

  useEffect(() => {
    fetch(
      `https://holiday-hype-back-end.onrender.com/api/v1/payment/${orderId}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data.data[0]));
  }, [orderId]);

  return (
    <>
      {!order.name ? (
        <Spinner />
      ) : (
        <div class="container">
          <div className=" d-flex flex-column justify-content-center align-items-center m-3">
            <h3 className="text-primary fw-bold">
              Confirm <span className="text-secondary ">Your Order</span>
            </h3>
            <p className="mb-3">
              Pay for your order online. Enter your valid card information and
              pay online easily.
            </p>
          </div>
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-7 text-start">
              <h5 className="">
                <spin className="text-primary fw-bold">Pay for:</spin>{' '}
                {order?.name} package
              </h5>
              <p>Location: {order?.location} </p>

              <p className="text-primary fw-bold">
                ----------------------------------------------------------------------------
              </p>

              <p className="fw-bold">User Details:</p>
              <small>
                <span className="fw-bold">Name: </span>
                {order?.Username}
              </small>
              <br />
              <small>
                <span className="fw-bold">Email:</span> {order?.Email}
              </small>
              <br />
              <small>
                <span className="fw-bold">Address: </span>
                {order?.Address}
              </small>
              <br />
              <small>
                <span className="fw-bold">Contact:</span> {order?.Mobile}
              </small>
              <br />
              <h5 className="text-warning fw-bold">Cost: $ {order?.price} </h5>
              {order?.price && (
                <Elements stripe={stripePromise}>
                  <CheckOutForm order={order} />
                </Elements>
              )}
            </div>
            <div class="col-md-5">
              {' '}
              <div className=" pe-none">
                <Lottie
                  options={defaultOptions}
                  isClickToPauseDisabled={true}
                  width={isDesktop ? 400 : isTablet ? 300 : 250}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;
