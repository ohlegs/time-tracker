import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  decrement,
  increment,
  selectCount,
} from '../../helper/redux/counterSlice';
import styles from './styles';
import {hot_priority, low_priority, normal_priority} from '../../helper/path';
import {bg_grey} from './../../helper/colors';
import {useDispatch, useSelector} from 'react-redux';

export default function Switcher() {
  const [select, setSelect] = useState<Number | null>();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const count = useSelector(selectCount);
  useEffect(() => {
    console.log('123');
  }, [count]);
  const dispatch = useDispatch();
  const handlePress = index => {
    dispatch(increment());
    if (index === 'low') {
      setSelect(1);
    }
    if (index === 'normal') {
      setSelect(2);
    }
    if (index === 'hot') {
      setSelect(3);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputName}>{count}</Text>
      <View style={styles.wrapperSwitcher}>
        <TouchableOpacity
          onPress={() => handlePress('low')}
          style={[
            styles.bgImage,
            {backgroundColor: select === 1 ? bg_grey : null},
          ]}>
          <Image style={styles.imagePriority} source={normal_priority} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress('normal')}
          style={[
            styles.bgImage,
            {backgroundColor: select === 2 ? bg_grey : null},
          ]}>
          <Image style={styles.imagePriority} source={low_priority} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress('hot')}
          style={[
            styles.bgImage,
            {backgroundColor: select === 3 ? bg_grey : null},
          ]}>
          <Image style={styles.imagePriority} source={hot_priority} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
