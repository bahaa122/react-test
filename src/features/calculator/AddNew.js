import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

const AddNew = () => {
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    dispatch({
      type: "todos/todoAdded",
      payload: { operators: "+" },
    });
    dispatch({
      type: "todos/total",
    });
  };

  return (
    <header className="header">
      <Button onClick={handleKeyDown} className="mb-3" variant="primary">
        Add New Row
      </Button>
    </header>
  );
};

export default AddNew;
