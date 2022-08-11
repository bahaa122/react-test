import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import AddNew from "./AddNew";
import styles from "./Calculator.module.css";
import { CalculatorList } from "./CalculatorList";

const selectTodoIds = (state) =>
  state.calculator?.record.map((todo) => todo.id);
export function Calculator() {
  const data = useSelector((state) => state.calculator);
  const todoIds = useSelector(selectTodoIds, shallowEqual);
  const rendeCalculatorList = todoIds.map((todoId) => {
    return <CalculatorList key={todoId} id={todoId} />;
  });

  return (
    <div>
      <AddNew />
      {rendeCalculatorList}
      <div className={styles.row}>
        <span className={styles.value}>
          {data?.record.length === 0 ? (
            <span className={styles.text}>
              please Click Add New <br />
            </span>
          ) : (
            data.total
          )}
        </span>
      </div>
    </div>
  );
}
