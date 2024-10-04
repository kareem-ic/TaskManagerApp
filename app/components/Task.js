import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={[styles.square, props.completed && styles.completedSquare]}></View>
        <View style={styles.textContainer}>
          <Text style={[styles.itemText, props.completed && styles.completedText]}>
            {props.text}
          </Text>
          <Text style={[styles.itemDescription, props.completed && styles.completedDescription]}>
            {props.description}
          </Text>
        </View>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#222324',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  completedSquare: {
    backgroundColor: '#28a745', // Green to indicate completion
    opacity: 0.6,
  },
  textContainer: {
    flexDirection: 'column',
  },
  itemText: {
    fontWeight: 'bold',
    maxWidth: '80%',
    color: '#888'
  },
  completedText: {
    textDecorationLine: 'line-through', // Strike-through for completed tasks
    color: '#888',
  },
  itemDescription: {
    maxWidth: '80%',
    color: '#666',
    fontSize: 12,
  },
  completedDescription: {
    textDecorationLine: 'line-through', // Strike-through for description
    color: '#888',
  },
//   circular: {
//     width: 12,
//     height: 12,
//     borderColor: 'red',
//     borderWidth: 2,
//     borderRadius: 5,
//   },
});

export default Task;
