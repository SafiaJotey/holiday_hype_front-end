import React from 'react';
import {
  AiFillCamera,
  AiFillHeart,
  AiOutlineCheck,
  AiOutlineEnvironment,
} from 'react-icons/ai';
const Reason = () => {
  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-md-6">
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-center align-items-center my-2">
            <div className="rounded-circle bg-primary p-3 ">
              <AiOutlineEnvironment className=" fw-bold fs-3 text-white" />
            </div>
            <div className="px-4 ">
              <h5 className="fw-bold text-primary">Diverse Destinations</h5>
              <p>
                Travelmate knows the value of your time and the varieties bucket
                list of you. We have the innovative team to fulfill your taste
                of diverse destination.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-center align-items-center my-2">
            <div className="rounded-circle bg-primary p-3 ">
              <AiOutlineCheck className=" fw-bold fs-3 text-white" />
            </div>
            <div className="px-4 ">
              <h5 className="fw-bold text-primary">Easy Tour Confirmation</h5>
              <p>
                A long Tour Confirmation process can’t support you to purchase
                any tour package. Travelmate has tried to complete the whole
                process into one call.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-center align-items-center my-2">
            <div className="rounded-circle bg-primary p-3 ">
              <AiFillCamera className=" fw-bold fs-3 text-white" />
            </div>
            <div className="px-4 ">
              <h5 className="fw-bold text-primary">Beautiful Places</h5>
              <p>
                Travelers want beautiful and unique places every time they want
                to leave the home. We’re ready with years of experience to
                introduce the best places in the Wolrd.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-center align-items-center my-2 ">
            <div className="rounded-circle bg-primary p-3 ">
              <AiFillHeart className=" fw-bold fs-3 text-white" />
            </div>
            <div className="px-4 ">
              <h5 className="fw-bold text-primary">Experienced Team</h5>
              <p>
                Travelmate introduces 24/7 support team via online or offline.
                You can reach us in every method including email, social media
                or phone call. Just feel free to ask anything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
