import React, { useState } from "react";
import Select from "react-select";

function DropDown({ options }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
      display: isHovered ? "block" : "none", // Show/hide the menu based on hover
    }),
  };

  return (
    <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
