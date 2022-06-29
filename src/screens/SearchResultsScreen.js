import React from 'react';
import {View, Text} from 'react-native';

import {
  Button,
  Layout,
  Icon,
  useTheme,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

import styles from '../constants/Styles';

import {ThemeContext} from '../constants/theme-context';

const SearchResultsScreen = props => {
  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
        // To account for the fixed searchbar, need to pad the bottom by 60 (40 for searchbar itself, + 20 for margins)
        paddingBottom: 60,
      }}>
      <Text style={{color: theme['text-basic-color']}}>
        Search Results Screen
      </Text>
      <Text style={{color: theme['text-basic-color']}}>
        Search text: {props.search}
      </Text>
    </View>
  );
};

export default SearchResultsScreen;
