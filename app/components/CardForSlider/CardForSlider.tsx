import { Text, Pressable, Vibration, Image } from 'react-native';
import React, { useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { setMode } from '../../helper/redux/modeSlice';
import { DEFAULT_BUTTON } from '../../helper/colors';
import { low_priority, normal_priority, hot_priority } from '../../helper/path';

interface Props {
    data: {
        item: {
            color: string;
            description: string;
            id: number;
            main_input: string;
            priority: number;
        };
    };
}
// eslint-disable-next-line
enum Mode {
    cancel = 'cancel',
    save = 'save',
    edit = 'edit',
    pause = 'pause',
    play = 'play',
    lock_close = 'lock_close',
    lock_open = 'lock_open',
}

export default function CardForSlider(props: Props) {
  const { data } = props;
  const mode = useSelector(state => state.mode.mode);

  const dispatch = useDispatch();
  const handlePress = useCallback(() => {
    Vibration.vibrate(50, false);
    setInterval(() => {
      Vibration.cancel();
    }, 50);
    if (mode === Mode.edit) {
      dispatch(setMode(Mode.pause));
    } else {
      dispatch(setMode(Mode.edit));
    }
  }, [mode]);
  return (
    <Pressable
      delayLongPress={500}
      onLongPress={handlePress}
    >
      <LinearGradient
        angle={-20}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={[data?.item?.color, DEFAULT_BUTTON]}
        style={styles.container}
        useAngle={true}
      >
        <Text>{data.item.main_input}</Text>
        <Text>{data.item.description}</Text>
        <Image
          resizeMode='contain'
          source={
                        (data.item.priority === 1 && normal_priority)
                        || (data.item.priority === 2 && low_priority)
                        || (data.item.priority === 3 && hot_priority)
                    }
          style={{ width: 25, height: 25 }}
        />
        {/* <ScrollView style={styles.srollView}> */}
        {/* </ScrollView> */}
      </LinearGradient>
    </Pressable>
  );
}
