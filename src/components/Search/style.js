import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import SI from 'react-native-search-filter';

import { LIGHT_GREY } from '../../constants/colors';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: ${width};
`;

export const SearchInput = styled(SI)`
  padding: 9px 25px;
  margin: 10px;
  border-radius: 20px;
  font-size: 16px;
  background-color: ${LIGHT_GREY};
`;
