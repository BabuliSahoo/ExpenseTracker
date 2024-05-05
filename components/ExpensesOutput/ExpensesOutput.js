import { View ,StyleSheet,Text} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses,expensesperiod,fallbackText}) {
  let content = <Text style ={styles.infoText}>{fallbackText}</Text>
  if(expenses.length > 0){
    content =  <ExpensesList expenses={expenses}/>
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesperiod}/>
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:GlobalStyles.colors.primary700,
    paddingHorizontal:24,
    paddingTop:0,
    paddingBottom:0
  },
  infoText:{
    color:'white',
    fontSize:16,
    textAlign:'center',
    marginTop:32
  }
});
