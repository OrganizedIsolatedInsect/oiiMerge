import React, {useContext, useState} from 'react';
import {Text, Divider, ListItem, Icon, Toggle} from '@ui-kitten/components';

import {TouchableWithoutFeedback} from 'react-native';

import {ThemeContext} from '../constants/theme-context';

const moonIcon = props => <Icon {...props} name="moon-outline" />;
const sunIcon = props => <Icon {...props} name="sun" fill="#f3e164" />;

const drawerFooter = (evaProps, props) => {
  //   const themeContext = useContext(ThemeContext);

  const [checked, setChecked] = useState(false);

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
    props.themeContext.toggleTheme();
    console.log('Is Checked? ', checked);
    console.log('Theme Style? ', props.themeContext);
    console.log('Toggle is Checked?', isChecked);
  };

  const darkModeToggle = evaProps =>
    props.themeContext.theme === 'dark' ? (
      <Toggle checked={true} onChange={onCheckedChange} />
    ) : (
      <Toggle checked={false} onChange={onCheckedChange} />
    );

  return (
    <React.Fragment>
      <Divider />
      <TouchableWithoutFeedback disabled>
        <ListItem
          title={evaProps => (
            <Text>
              {props.themeContext.theme === 'dark'
                ? 'Switch to Light Mode'
                : 'Switch to Dark Mode'}
            </Text>
          )}
          accessoryLeft={
            props.themeContext.theme === 'dark' ? sunIcon : moonIcon
          }
          accessoryRight={darkModeToggle}
          style={{marginBottom: 30}}
        />
      </TouchableWithoutFeedback>
      <Text category={'h6'} style={{textAlign: 'center', marginBottom: 10}}>
        Copyright 2022
      </Text>
    </React.Fragment>
  );
};

export default drawerFooter;
