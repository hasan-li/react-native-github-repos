import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import Loading from '../../components/Loading';

const Application = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate('Main');
  }, []);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
      />
      <Loading />
    </>
  );
};

export default Application;
