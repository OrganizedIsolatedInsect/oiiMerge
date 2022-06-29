import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  TopNavigation,
  TopNavigationAction,
  Layout,
  Text,
  Divider,
  Icon
} from '@ui-kitten/components';

import styles from '../constants/Styles';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

const FrequentlySearchedScreen = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Frequently Searched"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">Frequently Searched Screen</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default FrequentlySearchedScreen;
