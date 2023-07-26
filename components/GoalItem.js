import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}> {itemData.text} </Text>
      </Pressable>
    </View>
  );
}

// adding styling in andriod is easy
// andriod ripple is for styling on andriod
// and style pressed for Iphone


export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
