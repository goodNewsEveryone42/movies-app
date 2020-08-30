import React from "react";
import { Navbar, Form } from "bootstrap-4-react";

import "./header.css";

const Header = () => {
  return (
    <Navbar className="navbar">
      <div className="navbar-wrapper">
        <p className="navbar-wrapper__title">Movies App</p>
        <div className="navbar-form-wrapper">
          <Form className="navbar-form">
            <Form.Input
              type="search"
              placeholder="Search"
              mr="sm-2"
              className="navbar-input"
            />
          </Form>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
