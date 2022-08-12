import React, { useState, useeffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SplitButton from "react-bootstrap/SplitButton";
import Button from "react-bootstrap/Button";
import styles from "./CalculatorList.module.css";

const selectTodoById = (state, todoId) => {
  return state.calculator?.record.find((todo) => todo.id === todoId);
};

export function CalculatorList({ id }) {
  const todo = useSelector((state) => selectTodoById(state, id));
  const [operators, setOperators] = useState(todo.operators);
  const [count, setCount] = useState(todo.count);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCount(e.target.value);
    dispatch({
      type: "todos/changed",
      payload: { id: todo.id, count: e.target.value },
    });
    dispatch({
      type: "todos/total",
    });
  };

  const handleDisable = (e) => {
    dispatch({ type: "todos/disabled", payload: todo.id });
    dispatch({
      type: "todos/total",
    });
  };

  const handleDelete = (e) => {
    dispatch({ type: "todos/todoDeleted", payload: todo.id });
    dispatch({
      type: "todos/total",
    });
  };

  const handleOperatorsChanged = (e) => {
    setOperators(e);
    dispatch({
      type: "todos/operatorSelected",
      payload: { Id: todo.id, operator: e },
    });
    dispatch({
      type: "todos/total",
    });
  };

  return (
    <div>
      {console.log(operators)}
      <InputGroup className="mb-3" style={{ color: "red" }}>
        <SplitButton
          variant="outline-secondary"
          title={operators}
          id="segmented-button-dropdown-1"
          onSelect={handleOperatorsChanged}
          className={styles.plus}
        >
          <Dropdown.Item className={styles.plus} eventKey="+">
            +
          </Dropdown.Item>
          <Dropdown.Item className={styles.minus} eventKey="-">
            -
          </Dropdown.Item>
        </SplitButton>
        <Form.Control
          disabled={todo.disable}
          value={count}
          className="text-center"
          type="number"
          aria-label="Text input with dropdown button"
          onChange={handleChange}
        />
        <Button
          className={styles["btn-delete"]}
          variant="outline-secondary"
          onClick={handleDelete}
        >
          <span>Delete</span>
        </Button>
        <Button
          style={{ backgroundColor: "gray", color: "black" }}
          variant="outline-secondary"
          onClick={handleDisable}
        >
          Disable
        </Button>
      </InputGroup>
    </div>
  );
}
