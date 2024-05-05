import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet, DevSettings } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  console.log("editedExpenseId :: " + editedExpenseId);
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    console.log("deleteExpenseHandler");
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    console.log("cancelHandler");
    navigation.goBack();
  }
  function confirmHandler() {
    console.log("confirmHandler");
    if(isEditing){
      expenseCtx.updateExpense({
        description:'Test!!!!',
        amount:22.45,
        date: new Date('2023-06-17'),
      });
    }else{
      expenseCtx.addExpense({
        description:'Test',
        amount:20.18,
        date: new Date('2024-04-19'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode={"flat"} onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}> {isEditing ? "Update" : "Add"}</Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
    justifyContent: "space-between",
    frameElement: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 18,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
