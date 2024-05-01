import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ route,navigation }) {
  const editedExpenseId = route.params?.expenseId;
  console.log("editedExpenseId :: "+editedExpenseId);
  const isEding = !!editedExpenseId;
  
  useLayoutEffect(()=>{
    navigation.setOptions({
        title:isEding? 'Edit Expense' :'Add Expense'
      });
  },[navigation,isEding]);
  

  return <Text>ManageExpense Screen</Text>;
}

export default ManageExpense;
