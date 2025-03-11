import { View, Text } from 'react-native';
import React from 'react';

export default function AboutScreen({route}) {
  const {name} = route.params
  return (
    <View>
      <Text>About Screen Name is : {name}</Text>
    </View>
  );
} 