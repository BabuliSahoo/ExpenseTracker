import { View,TextInput } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {
    console.log("amountChangedHandler :: ");
  }

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input label="Date" textInputConfig={{
        placeholder:'YYYY-MM-DD',
        maxLenght : 10,
        onChangeText: () =>{},
      }}/>
      <Input label="Description"  textInputConfig={{
        multiline :true,
        //autocoorrect:false //default is true
        //autoCapitalize:false //default is true
      }}/>
    </View>
  );
}

export default ExpenseForm;
