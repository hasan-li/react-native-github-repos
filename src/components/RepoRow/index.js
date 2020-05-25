import React from 'react';
import { useDispatch } from 'react-redux';

import { orderColumnBy } from '../../actions';
import {
  Row, Column, LabelRow, Text,
} from './style';

const RepoRow = ({
  id,
  title,
  owner,
  stars,
  createdAt,
  index,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      {index === 0 && (
        <LabelRow index={index}>
          <Column narrow onPress={() => dispatch(orderColumnBy('id'))}>
            <Text label>ID</Text>
          </Column>
          <Column onPress={() => dispatch(orderColumnBy('name'))}>
            <Text label>Repo Title</Text>
          </Column>
          <Column onPress={() => dispatch(orderColumnBy('full_name'))}>
            <Text label>Owner</Text>
          </Column>
          <Column narrow onPress={() => dispatch(orderColumnBy('watchers_count'))}>
            <Text label>Stars</Text>
          </Column>
          <Column onPress={() => dispatch(orderColumnBy('created_at'))}>
            <Text label>Created At</Text>
          </Column>
        </LabelRow>
      )}
      <Row index={index}>
        <Column narrow>
          <Text>{id}</Text>
        </Column>
        <Column>
          <Text>{title}</Text>
        </Column>
        <Column>
          <Text>{owner}</Text>
        </Column>
        <Column narrow>
          <Text>{stars}</Text>
        </Column>
        <Column>
          <Text>{createdAt}</Text>
        </Column>
      </Row>
    </>
  );
};
export default RepoRow;
