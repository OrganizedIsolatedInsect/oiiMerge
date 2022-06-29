import React, {useState, useEffect} from 'react';
import {View, FlatList, Pressable, Linking} from 'react-native';

import {Card, Button, Text, Icon} from '@ui-kitten/components';

import Collapsible from 'react-native-collapsible';

// useNavigation required to pass navigation props to NON NAVIGATION screens (ie. components)
import {useNavigation} from '@react-navigation/native';

import styles from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Item = ({index, title, preview, website}) => (
  <View style={{marginLeft: 20, marginBottom: 10}}>
    {/* Linking is used to open WEBSITES. This opens the particular website associated to each datapoint.  */}
    <Pressable
      onPress={() =>
        Linking.openURL(website).catch(err =>
          console.error('An error occurred ', err),
        )
      }>
      <Text style={styles.flatCardItemTitle}>
        {index}. {title}
      </Text>
      <Text style={styles.flatCardItemPreview} numberOfLines={1}>
        {preview}
      </Text>
      <Text>{website}</Text>
    </Pressable>
  </View>
);

const FlatCard = props => {
  // declare useNavigation as navigation to pass navigation props
  const navigation = useNavigation();

  // If there is no data available for the flatlist, set state to empty. With an empty state, the idea is to
  // check to see if you should render the Footer. If nothing exists in the list, don't show footer.
  const [isEmpty, setIsEmpty] = useState(true);

  const renderItem = ({item, index}) => (
    <Item
      title={item.title}
      preview={item.preview}
      index={index + 1}
      website={item.website}
    />
  );

  const CollapsedDownArrow = props => (
    <Icon {...props} name="arrow-ios-downward-outline" />
  );

  const CollapsedUpArrow = props => (
    <Icon {...props} name="arrow-ios-upward-outline" />
  );

  // In UI Kitten, header in Card puts a divider between the header and the content. Using this function in the flatlist allows it to not have a divider. Put this header in the card if you want the divider to appear.
  const Header = () => (
    <View style={{paddingTop: 0, flexDirection: 'row'}}>
      <Text category="h6">{props.cardTitle}</Text>
      {collapsedState ? (
        <Button
          accessoryRight={CollapsedDownArrow}
          appearance="ghost"
          style={styles.chevronButtonStyle}></Button>
      ) : (
        <Button
          accessoryRight={CollapsedUpArrow}
          appearance="ghost"
          style={styles.chevronButtonStyle}></Button>
      )}
    </View>
  );

  const ListEmpty = () => {
    // useEffect needed to set state, otherwise you'll get a "Cannot update a component while rendering a different component" warning
    useEffect(() => {
      setIsEmpty(true);
    });

    return (
      <View>
        <Text style={{textAlign: 'center'}}>
          {props.cardTitle} list is empty
        </Text>
      </View>
    );
  };

  const Footer = () => (
    <Button
      style={{marginTop: 15}}
      mode="text"
      onPress={() => navigation.navigate(props.navigation)}>
      View {props.cardTitle}
    </Button>
  );

  // SetState for collapsible flatlist display
  const [collapsedState, setCollapsedState] = useState(true);

  const toggleExpanded = () => {
    const collapsed = collapsedState === true ? false : true;
    setCollapsedState(collapsed);
    // console.log('collapsed:', collapsed);
    // console.log('collapsedState:', collapsedState);
    // setCollapsedState(false)
  };

  return (
    <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
      <TouchableOpacity onPress={toggleExpanded}>
        <Card>
          <Collapsible collapsed={collapsedState} collapsedHeight={30}>
            <FlatList
              ListHeaderComponent={Header}
              ListEmptyComponent={ListEmpty}
              ListFooterComponent={Footer}
              style={[styles.listStyle]}
              // Regardless of the length/amount in data, use slice to only show me the first 10.
              data={props.data.slice(0, 3)}
              renderItem={renderItem}
              //   keyExtractor={props.keyExtractor}
              keyExtractor={item => item.id}
              navigation={props.navigation}
              scrollEnabled={false}
              nestedScrollEnabled={true}
            />
          </Collapsible>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default FlatCard;
