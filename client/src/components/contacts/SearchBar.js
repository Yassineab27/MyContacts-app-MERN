import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchContact } from "../../actions";

const SearchBar = ({ searchContact }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchContact(search);
  }, [search]);

  return (
    <input
      type="text"
      placeholder="Search..."
      name="search"
      value={search}
      onChange={e => setSearch(e.target.value)}
      autoComplete="off"
    />
  );
};

export default connect(
  null,
  { searchContact }
)(SearchBar);
