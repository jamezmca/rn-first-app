import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,  FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), value: goalTitle }
    ]);
  };


  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList 
        data={courseGoals} 
        renderItem={ItemData => <GoalItem title={ItemData.item.value}/>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },


});
 