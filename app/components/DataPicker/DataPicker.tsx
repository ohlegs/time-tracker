/* eslint-disable no-shadow */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import styles from './styles';
import { data_selector } from '../../helper/path';

interface Props{
  // TODO Добавить в бд запись
  // eslint-disable-next-line
  callback?: CallableFunction
  styleContainer: object
}

export default function DatePikcer(props: Props) {
  const [value, setValue] = useState(new Date());
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  const onChange = (selectedDate: Date) => {
    setCurrentDate(`${selectedDate.getDate()} / ${selectedDate.getMonth().toString().length === 2 ? selectedDate.getMonth() : '0'.concat(selectedDate.getMonth() + 1)} / ${selectedDate.getFullYear()}`);
    setValue(selectedDate);
    // props?.callback(selectedDate);
  };

  useEffect(() => {
  }, [currentDate]);

  const showMode = (currentMode:string) => {
    DateTimePickerAndroid.open({
      value: currentDate ? new Date(value) : new Date(),
      onChange,
      mode: currentMode,
      is24Hour: true,

    });
  };

  return (
    <View style={[styles.container, props?.styleContainer]}>
      <TouchableOpacity
        onPress={() => showMode('date')}
        style={styles.wrapperButton}
      >
        <Image
          source={data_selector}
          style={styles.icon}
        />
        <Text style={styles.text} >{currentDate || 'deadline'}</Text>
      </TouchableOpacity>
    </View>
  );
}
