const InputField = (props) => {
  return (
    <input
      value={props.value}
      onChange={(e) => props.setstatevalue(e.target.value)}
      {...props}
    />
  );
};

export default InputField;
