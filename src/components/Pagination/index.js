import React from 'react';
import { } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import range from 'lodash/range';

import { setNewPage } from '../../actions';

import { Container, Page, Text } from './style';

const Pagination = () => {
  const dispatch = useDispatch();
  const numberOfPages = useSelector((state) => state.reposState.numberOfPages);
  const page = useSelector((state) => state.reposState.page);

  const changePage = (p) => {
    dispatch(setNewPage(p));
  };

  return (
    <Container>
      {range(1, numberOfPages + 1).map((p) => (
        <Page key={p} selected={p === page} onPress={() => changePage(p)}>
          <Text selected={p === page}>{p}</Text>
        </Page>
      ))}
    </Container>
  );
};

export default Pagination;
