import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

const AddNew = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    dispatch({
      type: "todos/todoAdded",
      payload: { count: 1, operators: "+" },
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
