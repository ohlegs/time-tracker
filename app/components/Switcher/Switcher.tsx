import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { hot_priority, low_priority, normal_priority } from '../../helper/path';
import { BG_GREY } from './../../helper/colors';

export default function Switcher() {
  const [select, setSelect] = useState<number | null>();
  const count = 0;
  const handlePress = (priority: string) => {
    if (priority === 'low') {
      setSelect(1);
    }
    if (priority === 'normal') {
      setSelect(2);
    }
    if (priority === 'hot') {
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
            select === 1 ? { backgroundColor: BG_GREY } : null,
          ]}
        >
          <Image
            source={normal_priority}
            style={styles.imagePriority}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress('normal')}
          style={[
            styles.bgImage,
            select === 2 ? { backgroundColor: BG_GREY } : null,
          ]}
        >
          <Image
            source={low_priority}
            style={styles.imagePriority}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress('hot')}
          style={[
            styles.bgImage,
            select === 3 ? { backgroundColor: BG_GREY } : null,
          ]}
        >
          <Image
            source={hot_priority}
            style={styles.imagePriority}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
