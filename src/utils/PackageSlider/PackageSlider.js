import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import '~slick-carousel/slick/slick-theme.css';
// import '~slick-carousel/slick/slick.css';

const PackageSlider = (props) => {
  const { services } = props;
  console.log(services);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

    speed: 300,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {services?.map((service) => (
          <div className="col-md-4 p-2">
            <div className="bg-dark border border-line my-2 p-2 shadow">
              <div>
                <img className="w-100" src={service?.image} alt="" />
              </div>

              <h6 className="text-primary fw-bold my-2">{service?.title}</h6>

              <p>{service?.subTitle}</p>
              <h5 className="text-secondary fw-bold ">
                {' '}
                Cost : $ {service?.price}
              </h5>
              <Link to={`/booking/${service._id}`}>
                <button className=" bg-primary text-white px-3 py-2 rounded border border-secondary border-start-3">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PackageSlider;
