import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modeIsVisible, setModeIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModeIsVisible(true);
  };

  function addGoalHandler(enteredText) {
    setCourseGoals((curretCourseGoals) => [
      ...curretCourseGoals,
      // we can use key instead of ID
      { text: enteredText, id: Math.random().toString() },
    ]);
    setModeIsVisible(false);
  }

  function endGoalHandler() {
    setModeIsVisible(false);
  }

  function deleteHandler(id) {
    setCourseGoals((currentCoursegGoals) => {
      return currentCoursegGoals.filter((goal) => goal.id !== id);
    });
  }

  // status bas is inbuilt we just have to install it use it with style
  return (
    <>
      <StatusBar style='light'/>
      
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        {modeIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modeIsVisible}
            onCancel={endGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          {/* flatlist*/}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData.item}
                  onDeleteItem={deleteHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}


//React dev tools - extension not work  for native 
// for we can install it globally npm install -g react-devtools
// flatlist with keyextractor means finding item or index
// data to get value and renderItem means what do you want to render
// we can open debugger by clicking J
// we can use console log to check the flow of program/code
// remotely debugging is also possible
// open by running commond react-devtools
// popup will open then connect with remote debug tools - IOS


// stylesheet object
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 3,
  },
});

// there is no CSS in general
// inline and separte objects - stylesheet
// almost everything is like ReactJS
// flatlist and scrollview is new
// flatlist has ome properties like keyextractor
// data nad renderItem
// usestate is same, props are same and binding function or preconfigure them
// for future execution is same . like I did with delete function
// bind ID with delete function then getting that ID in different compoent
// and use to delete value form List using specific ID
// old way of React JS using helpful function to pass another function using proos
