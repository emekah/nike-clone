



const Button = (props) => {
    
  return (
    <div>
      {" "}
      {/* eslint-disable-next-line react/prop-types */}
      <button className={`rounded-full bg-white flex items-center px-5 py-2 ${props.display}`} >
      {/* eslint-disable-next-line react/prop-types */}
        {props.name}
      </button>
    </div>
  );
};

export default Button;
