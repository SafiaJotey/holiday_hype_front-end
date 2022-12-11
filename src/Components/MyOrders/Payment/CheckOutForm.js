import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './style.css';

const CheckOutForm = ({ order }) => {
  const { user } = useAuth();
  const { price, username, _id } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState([]);
  useEffect(() => {
    fetch(
      'https://holiday-hype-back-end.onrender.com/api/v1/payment/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess(' ');
    } else {
      setError('');
      console.log('[PaymentMethod]', paymentMethod);
    }
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: username,
            email: user.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess(' ');
    } else {
      setError(' ');
      console.log(paymentIntent);
      setSuccess('Your payment processed successfully');
      setProcessing(false);
      //save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        clientSecret: paymentIntent.client_secret.slice('_secret')[0],
      };
      console.log(payment);
      const url = `http://localhost:5000/api/v1/bookings/${_id}`;
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application.json',
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {processing ? (
          <Spinner animation="border" variant="warning" />
        ) : (
          <button
            className="mt-3 bg-primary text-white  px-3 py-2 rounded border border-secondary border-start-3"
            type="submit"
            disabled={!stripe}
          >
            Pay ${order?.price}
          </button>
        )}
      </form>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}
    </div>
  );
};

export default CheckOutForm;
