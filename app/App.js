import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [description, setDescription] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, { title: task, description: description, completed: false }]);
    setTask(null);
    setDescription(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index].completed = !itemsCopy[index].completed; // Toggle the 'completed' status
    setTaskItems(itemsCopy);
  };

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1); // Remove task from the list
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <View key={index} style={styles.taskRow}>
                  {/* Mark as complete by clicking the task */}
                  <TouchableOpacity onPress={() => completeTask(index)}>
                    <Task text={item.title} description={item.description} completed={item.completed} />
                  </TouchableOpacity>
                  {/* Add a delete button */}
                  <TouchableOpacity onPress={() => deleteTask(index)}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Write a task title'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={'Write a task description'}
          value={description}
          onChangeText={text => setDescription(text)}
        />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222324',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C0C0C0',
  },
  items: {
    marginTop: 30,
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // To position "Delete" next to the task
    alignItems: 'center',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#222324',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginBottom: 10,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#222324',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
    color: '#C0C0C0',
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
