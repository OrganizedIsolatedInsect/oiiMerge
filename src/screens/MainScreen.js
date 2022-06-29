import React, {useState, useEffect} from 'react';
import {View, ScrollView, useWindowDimensions, SectionList} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

import {Text, Button, Layout, Icon, useTheme} from '@ui-kitten/components';

import SearchResultsScreen from './SearchResultsScreen';
import {NavigationContainer} from '@react-navigation/native';

import animalNamesWithRandomUrls from '../data/animalNamesWithRandomUrls.json';
import movieDummy from '../data/movieDummy.json';
import companyNameDummy from '../data/companyNameDummy.json';

// To make flatlist performant, should long data sets be sliced first and then fed into the flatlist rather than slicing it in the flatlist?
import longDataList from '../data/MOCK_DATA_LONG.json';

import FlatCard from '../constants/FlatCard';
import SearchBar from '../constants/SearchBar';

import styles, {Colors} from '../constants/Styles';
import {ThemeContext} from '../constants/theme-context';

const slicedLongList = longDataList.slice(0, 5);

const MainScreen = props => {
  // TO DO - Find how to make LIST collapsible like mobile Wikipedia for listing ACTS -> PART -> DIVISION
  // TO DO - LocalStorage - keeping a list of saved searches locally and loading them into "Last Viewed/Searched" list. Redux-persist vs AsyncStorage?
  //         AsyncStorage example - https://github.com/siobhanpmahoney/newswire-app
  //         Redux-persist - https://github.com/rt2zz/redux-persist
  //         AsyncStorage - https://react-native-async-storage.github.io/async-storage/docs/install
  // IDEA  - FAB button for saving highlights and bookmarks?

  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
        // To account for the fixed searchbar, need to pad the bottom by 60 (40 for searchbar itself, + 20 for margins)
        paddingBottom: 60,
      }}>
      {/* <TopNavigation title="Main Page" alignment="center" /> */}
      <Layout>
        <SearchBar />
        {/* <Button
          style={{marginVertical: 4, flexDirection: 'row'}}
          onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button> */}
        <Button
          onPress={() => {
            console.log(
              'START',
              longDataList.slice(1, 10),
              '\x1b[36m\x1b[47m END \x1b[0m',
            );
          }}>
          Console Log
        </Button>
        <ScrollView nestedScrollEnabled={true}>
          <FlatCard
            cardTitle="Last Viewed"
            data={animalNamesWithRandomUrls}
            navigation="SearchResults"
          />
          <FlatCard
            cardTitle="Recent Changes"
            data={movieDummy}
            navigation="Results"
          />
          <FlatCard
            cardTitle="Frequently Searched"
            data={companyNameDummy}
            navigation="FrequentlySearched"
          />
          <FlatCard
            cardTitle="Long List Test"
            data={longDataList}
            navigation="Results"
          />
          <FlatCard
            cardTitle="Sliced Long List Test"
            data={slicedLongList.slice(0, 0)}
            navigation="Results"
          />
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default MainScreen;
