import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, LoadingSpinner } from './style';
import { BLACK } from '../../constants/colors';

const Loading = () => (
  <Container>
    <LoadingSpinner>
      <ActivityIndicator size="large" color={BLACK} />
    </LoadingSpinner>
  </Container>
);

export default Loading;
