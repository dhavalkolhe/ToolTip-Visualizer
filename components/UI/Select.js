const Select = ({ value, options, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="input">
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
