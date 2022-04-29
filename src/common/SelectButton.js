import React from 'react';

const SelectButton = ({ handleChange, options, label }) => {
  return (
    <div className="flex justify-center mb-8 mt-8">
      <div className="mb-3 xl:w-96">
        <select className="form-select" onChange={handleChange}>
          <option defaultValue="">{label}</option>
          {options.map(({ value, name }, idx) => (
            <option key={idx} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectButton;
