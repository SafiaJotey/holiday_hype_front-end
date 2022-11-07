import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { Accordion } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import faq from '../../Images/faq.png';
import './Faq.css';

const Faq = () => {
  const form = useRef();
  const {
    register,

    formState: { errors },
    reset,
  } = useForm();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mq9g747',
        'template_8r7yvc8',
        form.current,
        'SoERtjLjt-mVRccNn'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    swal('Successfully!', 'Your message is sent successfully!', 'success');
    reset();
  };
  return (
    <div className="container">
      <h3 className="text-primary">
        <span className="text-secondary">Frequently asked</span> questions{' '}
      </h3>
      <p>
        Here are some questions which are frequently asked by our users.Also
        feel free to connect with us.{' '}
      </p>
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md-6 ">
          <div className="col-12">
            {' '}
            <img className="w-100" src={faq} alt="" />
          </div>
          <div className="col-12">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How can I avail packages?</Accordion.Header>
                <Accordion.Body>
                  Simply go to any package, click details button to see details.
                  After that you can click to Book Now button to book the
                  package. Filling your information place the package order and
                  pay to confirm the order.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Can I pay with Visa card</Accordion.Header>
                <Accordion.Body>
                  yes, you can use Visa card for payment.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How can I share my expariences?
                </Accordion.Header>
                <Accordion.Body>
                  Go to blog section click write a blog and you can write
                  attractive blogs to share your tour experiances. After
                  approving by an admin yor blog will be published to public.You
                  can check your blog from my bloog section.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  I have written a blog, why can't I see my blog in the blog
                  section?
                </Accordion.Header>
                <Accordion.Body>
                  Your blog will be evaluated by an admin and after approving,
                  it will publish to public. you can check your status from my
                  blog section. for any query feel free to contact us.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="col-md-6 ps-md-5 ">
          <small className=" text-gray  ">
            For any queries feel free to message us
          </small>
          <form className="w-100   ps-md-5" ref={form} onSubmit={sendEmail}>
            <input
              className=" w-100  bg-gray-100 px-5 outline-none border-2 py-2 focus:border-primary  rounded my-1"
              {...register('user_name', {
                required: 'Name is Required',
              })}
              name="user_name"
              placeholder="Your Name"
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}

            <input
              className=" w-100 mb-0 md:mb-5 lg:mb-0 outline-none border-2 bg-gray-100 focus:border-primary px-5 rounded py-2 my-1 "
              type="email"
              {...register('user_email', {
                required: 'Email is Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              name="user_email"
              placeholder="Your Email "
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}

            <div className="col-span-2">
              <textarea
                className=" w-100 bg-gray-100 py-5 px-5 outline-none border-2 focus:border-primary my-2 "
                {...register('message', {
                  required: 'Message is Required',
                  minLength: {
                    value: 10,
                    message: 'Minimum Required length is 10',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Maximum allowed length is 50 ',
                  },
                })}
                placeholder="Write your message"
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>

            <input
              className="   bg-primary  px-5 py-2 rounded border border-secondary border-start-3   py-2 text-white mx-auto  rounded-md "
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
