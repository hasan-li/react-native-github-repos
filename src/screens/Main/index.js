import slice from 'lodash/slice';
import React, { useEffect, useState } from 'react';
import {
  FlatList, SafeAreaView, StatusBar, Picker,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import Pagination from '../../components/Pagination';
import RepoRow from '../../components/RepoRow';
import Loading from '../../components/Loading';
import Search from '../../components/Search';
import { WHITE } from '../../constants/colors';
import { setReposPerPage } from '../../actions';
import { Container } from './style';

const Main = () => {
  const [pageRepos, setPageRepos] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.reposState.repos);
  const page = useSelector((state) => state.reposState.page);
  const reposPerPage = useSelector((state) => state.reposState.reposPerPage);
  const loading = useSelector((state) => state.reposState.loading);

  useEffect(() => {
    if (repos) {
      if (repos.length === 0) {
        setPageRepos([]);
        return;
      }
      const start = reposPerPage * page - reposPerPage;
      const end = start + reposPerPage;
      const currentPageRepos = slice(repos, start, end);
      setPageRepos(currentPageRepos);
    }
  }, [page, repos, reposPerPage]);

  const renderedArticles = () => (
    loading
      ? <Loading />
      : (
        <FlatList
          data={pageRepos}
          renderItem={({ item, index }) => (
            <>
              <RepoRow
                id={item.id}
                title={item.name}
                owner={item.owner.login}
                stars={item.watchers_count}
                createdAt={moment.utc(item.created_at, 'YYYY-MM-DD').format('YYYY-MM-DD')}
                index={index}
              />

            </>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      )
  );

  return (
    <>
      <SafeAreaView />
      <Container>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={WHITE}
          animated
        />
        <Search />
        {
          repos
          && repos.length !== 0
          && (
            <Picker
              selectedValue={perPage}
              style={{ width: '50%', alignSelf: 'center' }}
              onValueChange={(itemValue) => {
                setPerPage(itemValue);
                return dispatch(setReposPerPage(itemValue));
              }}
            >
              <Picker.Item label="5" value="5" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="20" value="20" />
            </Picker>
          )
        }
        <Pagination />
        {renderedArticles()}
      </Container>
    </>
  // )
  );
};

export default Main;
