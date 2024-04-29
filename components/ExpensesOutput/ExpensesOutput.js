import {View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpenseList";

const DUMMY_EXPENSES = [
  {
      id:'e1',
      description:'A pair of Shoes',
      amount: 59.99,
      date:new Date('2021-12-19')
  },  {
      id:'e2',
      description:'A pair of trousers',
      amount: 29.99,
      date:new Date('2021-01-22')
  },  {
      id:'e3',
      description:'A pair of bananas',
      amount: 5.99,
      date:new Date('2021-12-01')
  },  {
      id:'e4',
      description:'A pair of books',
      amount: 14.99,
      date:new Date('2021-02-19')
  },
  {
      id:'e5',
      description:'Another of book',
      amount: 18.99,
      date:new Date('2021-02-18')
  }
];

function ExpensesOutput({ expenses,expensesperiod}) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesperiod}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;
