const Title = (props) => {
  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      <h2 className="text-[22px]">{props.name}</h2>
    </div>
  );
};

export default Title;
