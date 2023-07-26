import { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [goal, setGoal] = useState("");

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goal);
    setGoal("");
  }

  // here in react native nodal comes with
  // own attributes like visisble and animation type
  // button gets title and onPress as an attributes
  // not onClick an regaular reactJS web
  // image can be import and it needs reuqire in sourse to get the image 


  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')}/>
      
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc' />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={props.onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
   
    padding: 16,
    backgroundColor: '#311b6b'
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    width: "100%",
    padding: 8,
    color: '#120438',
    borderRadius: 6,
    padding: 16
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },

  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image:{
    width: 100,
    height: 100,
    margin: 20,
  }
});
