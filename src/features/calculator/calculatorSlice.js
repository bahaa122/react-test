import produce from "immer";

const initialState = { record: [], total: "" };

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

function total(todos) {
  console.log(todos);
  var dd = 0;
  todos.map((item) => {
    if (!item.disable) {
      return (dd += item.count);
    }
  });
  return dd;
}

const calculatorSlice = (state = initialState, action) =>
  produce(state, (draft) => {
    //  function calculatorSlice(state = initialState, action) {
    switch (action.type) {
      case "todos/todoAdded": {
        // Can return just the new todos array - no extra object around it
        return {
          record: [
            ...state.record,
            {
              id: nextTodoId(state.record),
              count: 0,
              disable: false,
              operators: action.payload.operators,
            },
          ],
        };
      }

      case "todos/todoDeleted": {
        return {
          ...state,
          record: state.record.filter((todo) => todo.id !== action.payload),
        };
      }

      case "todos/disabled": {
        const todo = draft.record.find((todo) => todo.id === action.payload);
        if (todo) {
          console.log(todo);
          todo.disable = !todo.disable;
        }
        return draft;
      }
      case "todos/changed": {
        const todo = draft.record.find((todo) => todo.id === action.payload.id);
        if (todo) {
          console.log(todo);
          todo.count = parseInt(action.payload.count);
        }
        return draft;
      }
      case "todos/total": {
        const todo = state.record;

        var totalCount = 0;
        todo.map((item) => {
          if (!item.disable) {
            if (item.operators == "+") {
              return (totalCount += item.count);
            } else {
              return (totalCount -= item.count);
            }
          }
        });
        return {
          record: state.record,
          total: totalCount,
        };
      }

      case "todos/operatorSelected": {
        const todo = draft.record.find((todo) => todo.id === action.payload.Id);
        if (todo) {
          console.log(todo);
          todo.operators = action.payload.operator;
        }
        return draft;
      }

      default:
        return state;
    }
  });
export default calculatorSlice;
