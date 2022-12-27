import { Text, Pressable, Vibration } from 'react-native';
import React, { useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { setMode } from '../../helper/redux/modeSlice';
import { DEFAULT_BUTTON } from '../../helper/colors';

interface Props {
    data: { item: { color: string } };
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
    if (mode === 'edit') {
      dispatch(setMode('save'));
    } else {
      dispatch(setMode('edit'));
    }
  }, [mode]);
  return (
    <Pressable
      delayLongPress={1000}
      onLongPress={handlePress}
    >
      <LinearGradient
        angle={-20}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={[data?.item?.color, DEFAULT_BUTTON]}
        style={styles.container}
        useAngle={true}
      >
        <Text>{data?.item?.id}</Text>
      </LinearGradient>
    </Pressable>
  );
}
