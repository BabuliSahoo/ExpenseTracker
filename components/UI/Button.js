import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({ children, opPress, mode,style}) {
  return (
    <View style={style}>
      <Pressable onPress={opPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, mode ==='flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode ==='flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    padding: 6,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor:GlobalStyles.colors.primary100,
    borderRadius:4
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
});
