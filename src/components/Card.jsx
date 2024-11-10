import Button from "./Button";

const Card = (props) => {
  /* eslint-disable-next-line react/prop-types */
  const { title, image, displayBtn, desc, price, height, button, grayScale } = props;
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src={image}
          className={` object-cover `}
          style={{ height: `${height}px`, filter: `grayscale(${grayScale}%)` }}
          alt="product-1"
        />
        <div className={`absolute left-10 right-0 bottom-10 ${displayBtn}`}>
          <Button name={button} />
        </div>
      </div>

      <h3 className="font-medium mt-5 text-[18px]">{title}</h3>
      <p className="mb-3 text-[16px]">{desc}</p>
      <h3 className="font-medium text-[18px]">{price}</h3>
    </div>
  );
};

export default Card;
