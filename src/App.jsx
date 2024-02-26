import React from "react";
import DropDown from "./DropDown";

function App() {
  const options = [
    { value: "Amazon", label: "Amazon" },
    { value: "Facebook", label: "Facebook" },
    { value: "Apple", label: "Apple" },
    { value: "Netflix", label: "Netflix" },
    { value: "Google", label: "Google" },
  ];

  return (
    <> 
      <DropDown options={options}/>
    </>
  );
}

export default App;
