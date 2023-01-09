/* eslint-disable no-shadow */
import { View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import { hot_priority, low_priority, normal_priority } from '../../helper/path';
import { BG_GREY } from './../../helper/colors';

interface Props {
    callBack: CallableFunction;
    styleContainer: object;
    value: number;
}

enum Priority {
  low = 0,
  normal = 1,
  hot = 2,
}

export default function Switcher(props: Props) {
  const [select, setSelect] = useState<number | null>(props?.value || 1);
  const handlePress = (priority: Priority) => {
    if (priority === Priority.low) {
      setSelect(1);
    }
    if (priority === Priority.normal) {
      setSelect(2);
    }
    if (priority === Priority.hot) {
      setSelect(3);
    }
  };

  useEffect(() => {
    if (props.callBack) {
      props.callBack(select);
    }
  }, [select]);

  return (
    <View style={[styles.container, props?.styleContainer]}>
      <View style={styles.wrapperSwitcher}>
        <TouchableOpacity
          onPress={() => handlePress(Priority.low)}
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
          onPress={() => handlePress(Priority.normal)}
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
          onPress={() => handlePress(Priority.hot)}
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
