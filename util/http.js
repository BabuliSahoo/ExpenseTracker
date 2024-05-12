import axios from 'axios';

const BACKEND_URL =
  'https://expensetracker-b908b-default-rtdb.asia-southeast1.firebasedatabase.app';

export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    };
    expenses.push(expenseObj);
  }

  console.log("fetchExpenses :: " + expenses);
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, amount);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
