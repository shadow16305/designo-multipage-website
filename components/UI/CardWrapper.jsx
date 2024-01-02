const CardWrapper = (props) => {
  return (
    <div className={`rounded-3xl ${props.className}`}>{props.children}</div>
  );
};

export default CardWrapper;
