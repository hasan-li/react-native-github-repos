import styled from 'styled-components/native';
import { WHITE, BLACK } from '../../constants/colors';

export const Container = styled.View`
  justify-content: center;
  align-self: stretch;
  flex-direction: row;
  margin: 10px 0;
`;

export const Page = styled.TouchableOpacity`
  padding: 7px 15px;
  margin: 10px;
  background-color: ${(props) => (props.selected ? BLACK : WHITE)}
  border: 1px solid ${BLACK};
  border-radius: 30px;
`;

export const Text = styled.Text`
  color: ${(props) => (props.selected ? WHITE : BLACK)};
`;