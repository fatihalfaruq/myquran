import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pindah} from '../router/Index';

const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<Pindah>>();
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
