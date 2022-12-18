import { Text } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface Props {
  data: { item: string }
}

export default function CardForSlider(props: Props) {
  const { data } = props;
  return (
    <LinearGradient
      angle={-20}
      angleCenter={{ x: 0.5, y: 0.5 }}
      colors={['#00FFC2', data?.item?.color]}
      style={styles.container}
      useAngle={true}
    >
      <Text>{data?.item?.id}</Text>
    </LinearGradient>
  );
}
