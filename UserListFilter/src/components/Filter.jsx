import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

const Filter = ({ setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="search by name" onChange={handleChange} />
    </div>
  );
};

export default connect(null, { setFilter })(Filter);
