import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of Shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 29.99,
    date: new Date("2021-01-22"),
  },
  {
    id: "e3",
    description: "A pair of bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A pair of books",
    amount: 14.99,
    date: new Date("2021-02-19"),
  },
  {
    id: "e5",
    description: "Another of book",
    amount: 18.99,
    date: new Date("2021-02-18"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.Type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action, payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpense = { ...state };
      updatedExpense[updateableExpenseIndex] = updatedItem;
      return updatedExpense;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id,expenseData) {
    dispatch({ type: "DELETE", payload: { id: id, data: expenseData } });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: id });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
