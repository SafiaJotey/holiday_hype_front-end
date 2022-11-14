import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import animationData from '../../../assets/lotties/payment.json';
import useMediaQuery from '../../../utils/Hooks/useMediaQuery';
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

  useEffect(() => {
    fetch(`https://guarded-scrubland-87252.herokuapp.com/payment/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orderId]);

  return (
    <div class="container">
      <div className=" d-flex flex-column justify-content-center align-items-center m-3">
        <h3 className="text-primary fw-bold">
          Confirm <span className="text-secondary ">Your Order</span>
        </h3>
        <p className="mb-3">
          Pay for your order online. Enter your valid card information and pay
          online easily.
        </p>
      </div>
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-7 text-start">
          <h5 className="">
            <spin className="text-primary fw-bold">Pay for:</spin> {order?.name}{' '}
            package
          </h5>
          <p>Location: {order?.location} </p>
          <p>
            <span className="fw-bold">Duration: </span>4 days 3 nights
          </p>
          <p>
            <span className="fw-bold">Date:</span> 22 Nov,2022-25 Nov,2022
          </p>
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
  );
};

export default Payment;
