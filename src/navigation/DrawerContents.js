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

import styles from '../constants/Styles';

const SmartphoneIcon = props => <Icon {...props} name="smartphone-outline" />;
const fileTextIcon = props => <Icon {...props} name="file-text-outline" />;
const clipboardIcon = props => <Icon {...props} name="clipboard-outline" />;
const moonIcon = props => <Icon {...props} name="moon-outline" />;
const sunIcon = props => <Icon {...props} name="sun" fill="#f3e164" />;

export const DrawerContents = props => {
  return (
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}
      footer={drawerFooter}
      header={DrawerHeader}>
      <DrawerItem title="Main" accessoryLeft={SmartphoneIcon} />
      <DrawerItem title="Search Results" accessoryLeft={fileTextIcon} />
      <DrawerItem title="Results" accessoryLeft={clipboardIcon} />
      <DrawerItem title="BC Law Screen" accessoryLeft={clipboardIcon} />
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
