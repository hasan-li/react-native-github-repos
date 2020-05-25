import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { searchTerm, emptyRepos } from '../../actions';
import { SearchInput } from './style';

const CategoryFilter = ({
  setSearchByTerm,
  emptyLatestSearchRepos,
}) => {
  const [searchText, setSearchText] = useState('');

  const searchUpdated = (term) => {
    if (term === '') {
      emptyLatestSearchRepos();
    }
    setSearchText(term);
    setSearchByTerm(term);
  };

  return (
    <>
      <SearchInput
        onChangeText={(t) => searchUpdated(t)}
        placeholder="Search"
        clearIcon={searchText !== '' && <Text>x</Text>}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSearchByTerm: (term) => dispatch(searchTerm(term)),
  emptyLatestSearchRepos: () => dispatch(emptyRepos()),
});


export default connect(
  null,
  mapDispatchToProps,
)(CategoryFilter);
