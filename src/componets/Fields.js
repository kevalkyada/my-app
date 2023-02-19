import React from "react";

const Fields = ({ name, email, index, deleteData }) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4> {email}</h4>
      <h4 onClick={deleteData}>Delete</h4>
    </div>
  );
};

export default Fields;
