import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#074ced',
  accent: '#a9c0f5',
  textHeader: '#ffffff',
};

const styles = StyleSheet.create({
  mainScreenHeader: {
    backgroundColor: Colors.primary, //'#074ced'
  },
  searchbarStyle: {
    backgroundColor: Colors.primary, //'#074ced'
    paddingBottom: 10,
  },
  searchbarInputStyle: {
    backgroundColor: Colors.accent, //'#a9c0f5',
    borderRadius: 30,
  },
  cardStyle: {
    marginHorizontal: 30,
    elevation: 10,
    shadowColor: '#000000',
    borderRadius: 10,
    marginVertical: 20,
  },
  flatCardItemTitle: {
    fontWeight: 'bold',
    paddingRight: 100,
  },
  flatCardItemPreview: {
    paddingLeft: 15,
  },
  cardHeader: {
    // backgroundColor: Colors.primary, //'#074ced'
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  cardTitleStyle: {
    color: Colors.textHeader,
    textAlign: 'center',
  },
  listStyle: {
    // paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  searchBarContainer: {
    margin: 10,
    marginHorizontal: 25,
    borderRadius: 30,
  },
  chevronButtonStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingTop: 0,
  },
  drawerLabelsStyle: {fontSize: 15, marginVertical: 10},
});

const NavigatorThemeLight = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#c6cbef',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 0, 0)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default styles;
