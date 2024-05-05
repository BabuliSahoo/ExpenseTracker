import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utility/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  console.log("RecentExpenses :: "+expensesCtx.expenses.length);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });
  console.log("RecentExpenses After :: "+recentExpenses.length);

  return (<ExpensesOutput expenses={recentExpenses} expensesperiod="Last 7 days" fallbackText="No expenses Registered from last 7 Days" />);
}

export default RecentExpenses;