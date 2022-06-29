import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Alert,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {
  Select,
  SelectItem,
  useTheme,
  Text,
  Divider,
  Button,
} from '@ui-kitten/components';

import {ThemeContext} from '../constants/theme-context';

import {getLaw} from '../redux/bcLaw';

const testText = props => {
  <Text>TESTING TEXT</Text>;
};

const testData = [
  {
    id: 'd2e7443',
    divId: 'd2e7378',
    divTitle: 'Division 3 — Before Agreement or Final Order is Made',
    html: '<head><base href="https://www.bclaws.gov.bc.ca/"></base></head><a name="section90"></a><h4><a name="section90"></a>Temporary orders respecting family residence</h4><p id="d2e7443" class="sec "><span class="secnum"><span class="secnumholder"><b>90</b>\n\t\t&nbsp; <p class="sub"><a name="d2e7592"></a><span class="num"><span class="holder">(5) </span></span>Nothing in this section prevents the filing of an entry under the <a href="/civix/document/id/complete/statreg/96246_01"><em>Land (Spouse Protection) Act</em></a>.</p>',
  },
];

function onPress(event, href) {
  Alert.alert(`You just pressed ${href}`);
}

const RenderersProps = {
  a: {
    onPress: onPress,
  },
};

const LawScreen = props => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const content = useSelector(state => state.law.content);
  const title = useSelector(state => state.law.title);
  const part = useSelector(state => state.law.part);
  const section = useSelector(state => state.law.section);

  const {width} = useWindowDimensions();
  const ref = useRef();
  const sectionRef = useRef();

  const dropDownIndex = 0;

  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();

  useEffect(() => {
    setLoading(false);
    dispatch(getLaw(props.id));
    setLoading(true);
  }, [dispatch]);

  const scrollToIndex = dropDownIndex => {
    ref.current.scrollToIndex({animated: true, index: dropDownIndex});
  };

  if (!loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        // height: '80%',
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
      }}>
      <View
      // style={styles.header}
      >
        {/* <RenderHTML contentWidth={width} source={title} /> */}
        <Text
          category={'h4'}
          status="warning"
          // style={{color: theme['text-basic-color']}}
        >
          {title}
        </Text>
        <Text category={'h6'} status="basic">
          {part}
        </Text>

        <Select
          selectedIndex={dropDownIndex}
          onSelect={index => scrollToIndex(index.row)}
          placeholder="Select Section"
          style={{
            width: '80%',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          {content.map((item, index) => {
            return <SelectItem title={item.title} key={item.id} />;
          })}
        </Select>
        <Divider />
      </View>
      <View style={styles.container}>
        <FlatList
          ref={ref}
          // data={testData}
          data={section}
          initialNumToRender={200}
          initialScrollIndex={dropDownIndex}
          keyExtractor={item => item.id}
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              ref.current?.scrollToIndex({index: info.index, animated: true});
            });
          }}
          renderItem={item => (
            <View>
              <RenderHTML
                contentWidth={width}
                source={item.item}
                baseStyle={{color: theme['text-basic-color']}}
                enableExperimentalMarginCollapsing={true}
                enableExperimentalBRCollapsing={true}
                enableExperimentalGhostLinesPrevention={true}
                renderersProps={RenderersProps}
              />
            </View>
          )}
        />
      </View>
      <View>
        {/*  <SectionList
          ref={sectionRef}
          sections={data}
          keyExtractor={(item, index) => item + index}
          initialScrollIndex={dropDownIndex}
          renderItem={({item}) => (
            <View>
              <RenderHTML contentWidth={width} source={item} />
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    // fontSize: 15,
    // color: 'blue',
    // fontWeight: 'bold',
  },
  part: {
    // fontSize: 12,
    // color: 'orange',
    // fontWeight: 'bold',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    // paddingBottom: 10,
    alignItems: 'center',
  },
  button: {
    // flex: 1,
    // flexDirection: 'row',
    // width: 100,
  },
  container: {
    // height: '80%',
  },
});

export default LawScreen;
