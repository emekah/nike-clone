import { BsChevronLeft } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const PrevArrow = ({onClick}) => {
  return (
    <div className="absolute right-[105px] -top-[80px]" onClick={onClick}>
        <div className="bg-gray-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
            <BsChevronLeft />
        </div>
    </div>
  )
}

export default PrevArrow