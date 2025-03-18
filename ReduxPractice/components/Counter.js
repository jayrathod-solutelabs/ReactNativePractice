// src/components/Counter.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

const Counter = () => {
  // Use the useSelector hook to access state from the Redux store
  const count = useSelector((state) => state.counter.value);
  
  // Use the useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Handlers for increment and decrement actions
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Counter</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={handleIncrement} />
        <View style={styles.buttonSpacer} />
        <Button title="Decrement" onPress={handleDecrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  count: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonSpacer: {
    width: 20,
  },
});

export default Counter;