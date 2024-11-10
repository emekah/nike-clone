import { BsChevronRight } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const NextArrow = ({onClick}) => {
  return (
    <div className="absolute right-10 -top-[80px]" onClick={onClick}>
        <div className="bg-gray-200 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
            <BsChevronRight />
        </div>
    </div>
  )
}

export default NextArrow