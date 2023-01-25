import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function VariableWidthSlick() {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="m-auto w-[90%] py-10 items-center">
      <Slider {...settings}>
        <div style={{ width: 100 }}>
          <p>100</p>
        </div>
        <div style={{ width: 200 }}>
          <p>200</p>
        </div>
      </Slider>
    </div>
  );
}

export default VariableWidthSlick;
