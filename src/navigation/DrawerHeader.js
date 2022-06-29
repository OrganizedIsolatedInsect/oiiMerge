import React from 'react';
import {Text, Divider} from '@ui-kitten/components';

import {ImageBackground} from 'react-native';

export const DrawerHeader = evaProps => (
  <React.Fragment>
    <Text category={'h6'} style={{textAlign: 'center', marginVertical: 10}}>
      Name Here Logo Down Below
    </Text>
    <Divider />
    <ImageBackground
      style={{width: 280, height: 186}}
      source={require('../assets/van.jpg')}
    />
    <Divider />
  </React.Fragment>
);
