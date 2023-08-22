const Input = ({ value, id, name, placeholder, type, onChange }) => {
  return (
    <>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        id={id}
      />
    </>
  );
};

export default Input;
