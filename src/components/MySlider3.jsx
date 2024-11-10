import { useEffect, useState } from "react";
import Card from "./Card";
import Title from "./Title";
import { sports } from "./constants";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";



const MySlider3 = () => {
  const [progress, setProgress] = useState(0);
  const [slideToShow, setSlideToShow] = useState(4);

  const setSlides = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlideToShow(3);
    } else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
      setSlideToShow(2);
    } else if (window.innerWidth <= 650) {
      setSlideToShow(1);
    }
  };

  useEffect(() => {
    setSlides();
    setProgress(100 / (sports.length - slideToShow + 1));
    window.addEventListener("resize", () => {
      setSlides();
    })
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current) => {
      setProgress((100 / (sports.length - slideToShow + 1)) * (current + 1));
      console.log(slideToShow);
    },
  };
  return (
    <div className="mb-5">
      <div className="p-10">
        <div>
          <Title name="Shop By Sport" />
        </div>
        <div></div>
      </div>
      <div className="relative">
        <Slider {...settings}>
          {sports.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              height="350"
              title={product.title}
              displayBtn="block"
              desc=""
              price=""
              button={product.button}
              grayScale={100}
            />
          ))}
        </Slider>
        <div className="h-[2px] bg-gray-300 w-[250px] absolute -top-[15px] right-10">
          <div
            className="bg-gray-400 absolute h-[100%] transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MySlider3;
