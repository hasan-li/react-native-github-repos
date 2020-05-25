import styled from 'styled-components/native';

import {
  LIGHT_GREY, SEMI_WHITE, WHITE, BLACK,
} from '../../constants/colors';

export const Row = styled.View`
  align-self: stretch;
  flex-direction: row;
  background-color: ${({ index }) => (index % 2 ? SEMI_WHITE : WHITE)};

  border-bottom-width: 1px;
  border-bottom-color: ${LIGHT_GREY};
  padding: 15px 3px;
`;

export const LabelRow = styled.View`
  align-self: stretch;
  flex-direction: row;
  background-color: ${BLACK};

  border-bottom-width: 1px;
  border-bottom-color: ${LIGHT_GREY};
  padding: 15px 3px;
`;

export const Column = styled.TouchableOpacity`
  flex: ${({ narrow }) => (narrow ? '1' : '2')};
  align-self: stretch;
  padding: 2px;
  color: ${({ label }) => (label ? WHITE : BLACK)};
`;

export const Text = styled.Text`
  color: ${({ label }) => (label ? WHITE : BLACK)};
  font-weight: ${({ label }) => (label ? 'bold' : 'normal')};
  text-align: center;
`;
