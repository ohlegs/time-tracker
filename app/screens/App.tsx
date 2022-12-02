import {View, Image, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

import SQLite from 'react-native-sqlite-2';
import styles from './styles';
import store from '../helper/redux/store';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import HomeScreen from './Main/Main';
import History from './History/Main';
import {icon_add, icon_history} from './../helper/path';
import {Provider} from 'react-redux';
const Tab = createBottomTabNavigator();

export default function App() {
  const [positionAdd, setPositionAdd] = useState(0);
  const [positionHistory, setPositionHistory] = useState(0);
  const [positionView, setPositionView] = useState(0);
  const [currentPosition, setCurrentPosition] = useState('Home');

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeOut = value => {
    Animated.timing(fadeAnim, {
      toValue: value - 20,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    fadeOut(positionAdd);
  }, [positionAdd]);

  useEffect(() => {
    if (currentPosition === 'Home') {
      fadeOut(positionAdd);
    }
    if (currentPosition === 'History') {
      fadeOut(positionHistory);
    }
  }, [currentPosition]);

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.getCurrentRoute().name;
          const trackScreenView = name => {
            setCurrentPosition(name);
          };

          if (previousRouteName !== currentRouteName) {
            routeNameRef.current = currentRouteName;
            await trackScreenView(currentRouteName);
          }
        }}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: styles.tabBarStyle,
            tabBarBackground: () => (
              <View style={styles.tabBarBackground}>
                <Animated.View
                  style={[styles.animateCirles, {left: fadeAnim}]}
                />
                <BlurView
                  style={styles.blurView}
                  blurType="light"
                  blurRadius={14}
                />
              </View>
            ),
          }}>
          <Tab.Screen
            options={{
              title: ' ',
              header: () => null,
              tabBarIcon: () => (
                <Image
                  onLayout={event => {
                    event.target.measure(
                      (x, y, width, height, pageX, pageY) => {
                        setPositionAdd(pageX);
                      },
                    );
                  }}
                  style={styles.add_icon}
                  source={icon_add}
                />
              ),
            }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              title: ' ',
              header: () => null,
              tabBarIcon: () => (
                <Image
                  onLayout={event => {
                    event.target.measure(
                      (x, y, width, height, pageX, pageY) => {
                        setPositionHistory(pageX);
                      },
                    );
                  }}
                  style={styles.history_icon}
                  source={icon_history}
                />
              ),
            }}
            name="History"
            component={History}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
