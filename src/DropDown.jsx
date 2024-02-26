import React, { useState } from "react";
import Select from "react-select";

function DropDown({ options }) {

  // Custom styles to set a specific width for the dropdown
  // and decrease the size of the options list
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 200,
      cursor: "pointer",
    }),
    menu: (provided) => ({
      ...provided,
      width: 200,
    }),
  };

  return (
    <>
      <div>
        <Select
          options={options}
          isSearchable
          styles={customStyles}
          placeholder="Select a course"
        />
      </div>
    </>
  );
}

export default DropDown;
