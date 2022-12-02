import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function TaskTime() {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {'123'} : {'50'}
      </Text>
    </View>
  );
}
