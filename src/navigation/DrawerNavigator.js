import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Drawer,
  DrawerItem,
  Text,
  IndexPath,
  Icon,
  Toggle,
  Divider,
  ListItem,
} from '@ui-kitten/components';

import {TouchableWithoutFeedback, Button} from 'react-native';

import MainScreen from '../screens/MainScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import LoadedResultsScreen from '../screens/LoadedResultsScreen';
import FrequentlySearchedScreen from '../screens/FrequentlySearchedScreen';
import LawScreen from '../screens/LawScreen';

import {ThemeContext} from '../constants/theme-context';

import styles from '../constants/Styles';

import {DrawerHeader} from './DrawerHeader';
// import {drawerFooter} from './DrawerFooter';

const SmartphoneIcon = props => <Icon {...props} name="smartphone-outline" />;
const fileTextIcon = props => <Icon {...props} name="file-text-outline" />;
const clipboardIcon = props => <Icon {...props} name="clipboard-outline" />;
const moonIcon = props => <Icon {...props} name="moon-outline" />;
const sunIcon = props => <Icon {...props} name="sun" fill="#f3e164" />;

const {Navigator, Screen} = createDrawerNavigator();

const DrawerContent = ({navigation, state, evaProps}) => {
  const themeContext = React.useContext(ThemeContext);

  const [checked, setChecked] = useState(false);

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
    themeContext.toggleTheme();
  };

  const darkModeToggle = evaProps =>
    themeContext.theme === 'dark' ? (
      <Toggle checked={true} onChange={onCheckedChange} />
    ) : (
      <Toggle checked={false} onChange={onCheckedChange} />
    );

  const drawerFooter = evaProps => (
    <React.Fragment>
      <Divider />
      <TouchableWithoutFeedback disabled>
        <ListItem
          title={evaProps => (
            <Text>
              {themeContext.theme === 'dark'
                ? 'Switch to Light Mode'
                : 'Switch to Dark Mode'}
            </Text>
          )}
          accessoryLeft={themeContext.theme === 'dark' ? sunIcon : moonIcon}
          accessoryRight={darkModeToggle}
          style={{marginBottom: 30}}
        />
      </TouchableWithoutFeedback>
      <Text category={'h6'} style={{textAlign: 'center', marginBottom: 10}}>
        Copyright 2022
      </Text>
    </React.Fragment>
  );

  return (
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}
      footer={drawerFooter}
      header={DrawerHeader}>
      <DrawerItem
        title={evaProps => (
          <Text
            {...evaProps}
            style={[evaProps.style, styles.drawerLabelsStyle]}>
            Main
          </Text>
        )}
        accessoryLeft={SmartphoneIcon}
      />
      <DrawerItem
        title={evaProps => (
          <Text
            {...evaProps}
            style={[evaProps.style, styles.drawerLabelsStyle]}>
            Search Results
          </Text>
        )}
        accessoryLeft={fileTextIcon}
      />
      <DrawerItem
        title={evaProps => (
          <Text
            {...evaProps}
            style={[evaProps.style, styles.drawerLabelsStyle]}>
            Results
          </Text>
        )}
        accessoryLeft={clipboardIcon}
      />
      <DrawerItem
        title={evaProps => (
          <Text
            {...evaProps}
            style={[evaProps.style, styles.drawerLabelsStyle]}>
            BC Law Screen
          </Text>
        )}
        accessoryLeft={clipboardIcon}
      />

      {/* <DrawerItem
        title="Main"
        accessoryLeft={SmartphoneIcon}
        style={[styles.drawerLabelsStyle]}
      />
      <DrawerItem title="Search Results" accessoryLeft={fileTextIcon} />
      <DrawerItem title="Results" accessoryLeft={clipboardIcon} />
      <DrawerItem title="BC Law Screen" accessoryLeft={clipboardIcon} /> */}

      <Divider />
      <DrawerItem
        title={evaProps => (
          <Button
            title="debug"
            onPress={() => {
              console.log('Is Checked? ', checked);
              console.log('Theme Style? ', themeContext.theme);
            }}
          />
        )}
      />
    </Drawer>
  );
};

export const DrawerNavigator = (navigation, evaProps) => (
  <Navigator
    // initialRouteName="LawScreen"
    drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{
      drawerType: 'slide',
      headerShadowVisible: ThemeContext.dark ? false : true,
      //   headerShown: false
    }}>
    <Screen name="Main" component={MainScreen} options={{title: 'Main Page'}} />
    <Screen
      name="SearchResults"
      component={SearchResultsScreen}
      options={{title: 'Search Results'}}
    />
    <Screen
      name="Results"
      component={LoadedResultsScreen}
      options={{title: 'Loaded Results'}}
    />
    <Screen
      name="LawScreen"
      component={LawScreen}
      options={{title: 'BC Law Screen'}}
    />
    <Screen
      name="FrequentlySearched"
      component={FrequentlySearchedScreen}
      options={{title: 'Frequently Searched'}}
    />
  </Navigator>
);
