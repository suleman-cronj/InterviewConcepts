import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Counter = ({count, onPress, label}) => {
  console.log(`${label} rerendered`);

  return (
    <View style={styles.counterContainer}>
      <Text>{label}</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Increment Count</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const handlePressA = () => setCountA(countA + 1);
  const handlePressB = () => setCountB(countB + 1);

  return (
    <View style={styles.container}>
      <Counter count={countA} onPress={handlePressA} label="Counter A" />
      <Counter count={countB} onPress={handlePressB} label="Counter B" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
