/* eslint-disable react-hooks/exhaustive-deps */
import { View, Animated, StatusBar, Dimensions } from 'react-native';
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import DinamicButton from '../../components/DinamicButton/dinamicButton';
import CustomInput from './../../components/CustomInput/CustomInput';
import Switcher from '../../components/Switcher/Switcher';
import { main_text, description as description_img } from './../../helper/path';
import styles from './styles';
import { BG_MAIN, DEFAULT_BUTTON } from '../../helper/colors';
import TaskTime from '../../components/TaskTime/TaskTime';
import CardForSlider from './../../components/CardForSlider/CardForSlider';
import { setColor } from '../../helper/redux/colorSlice';
import DBController, {
  MAIN_INPUT,
  DESCRIPTION,
  PRIORITY,
  COLOR,
} from '../../helper/db/db';
import { setMode } from '../../helper/redux/modeSlice';
import generateColor from '../../helper/utils/utils';
import DatePikcer from '../../components/DataPicker/DataPicker';

function HomeScreen() {
  const mode = useSelector(state => state?.mode.mode);
  const [remove, setRemove] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainInput, setMainInput] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<number>(0);
  // eslint-disable-next-line
  const [date, setDate] = useState<number>();
  const [data, setData] = useState([]);
  const sliderWidth = Dimensions.get('window').width;
  const height = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const opacityCarousel = useRef(new Animated.Value(0)).current;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const dispatch = useDispatch();

  const showCarousel = (toValue: number): void => {
    Animated.timing(opacityCarousel, {
      toValue,
      duration: 100,
      delay: 100,
      useNativeDriver: false,
    }).start();
  };
  const fadeIn = (): void => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      delay: 300,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        Animated.timing(height, {
          toValue: 10,
          duration: 300,
          delay: 500,
          useNativeDriver: false,
        }).start(({ finished }) => {
          if (finished) {
            setRemove(false);
            showCarousel(1);
          }
        });
      };
    });
  };

  const fadeOut = (): void => {
    Animated.timing(height, {
      toValue: 0,
      duration: 300,
      delay: 300,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        Animated.timing(opacityCarousel, {
          toValue: 0,
          duration: 100,
          delay: 100,
          useNativeDriver: false,
        }).start(() => {
          Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            delay: 300,
            useNativeDriver: false,
          }).start();
        });
      }
    });
  };
  const getDataById = () => {
    setMainInput(data[currentIndex]?.main_input);
    setDescription(data[currentIndex]?.description);
    setPriority(data[currentIndex]?.priority);
  };

  const functionForDinamicButton = useCallback(() => {
    if (mode === 'save') {
      DBController.insertDB([MAIN_INPUT, DESCRIPTION, PRIORITY, COLOR], [mainInput, description, priority, generateColor()]);
      fadeIn();
      DBController.checkDB(setData);
    }

    if (mode === 'edit') {
      setRemove(true);
      fadeOut();
      getDataById();
      dispatch(setMode('update'));
    }

    if (mode === 'update') {
      DBController.updateByIdDB([`"${MAIN_INPUT}"`, `"${DESCRIPTION}"`, `"${PRIORITY}"`], [`"${mainInput}"`, `"${description}"`, `"${priority}"`], currentIndex + 1);
      DBController.getDB(setData);
      fadeIn();
    }
  }, [mode, currentIndex, mainInput, description, priority]);

  const auxiliaryUnit = useCallback(() => {
    if (mode === 'save') {
      setDescription('');
      setMainInput('');
      setPriority(0);
    }
  }, [mode]);

  useEffect(() => {
    if (data?.length > 0) {
      dispatch(setColor(data[currentIndex]?.color));
    }
  }, [currentIndex]);

  useEffect(() => {
    DBController.checkDB(setData);
  }, []);

  useEffect(() => {
    if (data?.length > 0) {
      fadeIn();
      dispatch(setMode('pause'));
      dispatch(setColor(data[0]?.color));
    } else {
      dispatch(setColor(DEFAULT_BUTTON));
    }
  }, [data]);
  const form = useMemo(
    () => (
      <Animated.View style={{ opacity }}>
        <View style={[styles.formWrapper]}>
          <CustomInput
            callBack={(value: string) => {
                            setMainInput(value);
                        }}
            clearButtonMode={true}
            imagePlaceholder={main_text}
            label='Main input'
            value={mainInput}
          />
        </View>
        <View style={styles.formWrapper}>
          <Switcher
            callBack={(value: number) => {
                            setPriority(value);
                        }}
            styleContainer={styles.switcher}
            value={priority}
          />
          <DatePikcer styleContainer={styles.dataPicker} />
        </View>
        <View style={[styles.formWrapper, { alignItems: 'flex-start' }]}>

          <CustomInput
            callBack={(value: string) => {
                            setDescription(value);
                        }}
            clearButtonMode={false}
            imagePlaceholder={description_img}
            label='Description'
            multiline={true}
            styleContainer={styles.description}
            value={description}
          />
        </View>
      </Animated.View>
    ),
    [mode],
  );

  const disabledButton = useMemo(() => {
    if (data?.length > 0) {
      return false;
    }
    return null;
  }, [data]);

  const scrollEnabled = useMemo(() => {
    if (mode === 'edit' || mode === 'play') {
      return false;
    }
    return true;
  }, [mode]);

  return (
    <Animated.View style={[styles.container]}>
      <StatusBar backgroundColor={BG_MAIN} />
      <View style={styles.dinamicBlockWrapper}>

        <Animated.View
          style={[
                        remove ? styles.dinamicBlock : styles.center,
                        {
                            height: height.interpolate({
                                inputRange: [0, 10],
                                outputRange: ['100%', '20%'],
                            }),
                        },
                    ]}
        >
          {remove ? form : <TaskTime />}
        </Animated.View>
        <Carousel
          activeAnimationType='decay'
          activeSlideAlignment='center'
          containerCustomStyle={{
                        display: remove ? 'none' : 'flex',
                        marginTop: 33,
                        opacity: opacityCarousel,
                    }}
          data={data}
          enableMomentum={true}
          enableSnap={true}
          itemWidth={sliderWidth / 1.25}
          layout='default'
          onSnapToItem={(index) => {
                        setCurrentIndex(index);
                    }}
          renderItem={e => (<CardForSlider data={e} />)}
          scrollEnabled={scrollEnabled}
          sliderWidth={sliderWidth}
          useScrollView={true}
          windowSize={1}
        />
      </View>
      <View style={[styles.dinamicButtonWrapper]}>
        <DinamicButton
          auxiliaryUnit={auxiliaryUnit}
          callBack={functionForDinamicButton}
          mainButtonDisabled={disabledButton}
        />
      </View>
    </Animated.View>
  );
}
export default React.memo(HomeScreen);
