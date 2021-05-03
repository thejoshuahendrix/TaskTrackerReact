import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      {title}
      <Button
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
