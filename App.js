import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {Appearance} from 'react-native';

import store from './src/redux/store';

import {DrawerNavigator} from './src/navigation/DrawerNavigator';
import {ThemeContext} from './src/constants/theme-context';

function App() {
  const colorScheme = Appearance.getColorScheme();

  const [theme, setTheme] = React.useState(colorScheme);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  const NavigatorThemeLight = {
    dark: false,
    colors: {
      primary: 'color-primary-default',
      background: 'background-basic-color-1', //'rgb(255, 255, 255)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(0, 0, 0)',
      border: 'border-basic-color-1',
      notification: 'text-danger-color',
    },
  };

  const NavigatorThemeDark = {
    dark: true,
    colors: {
      primary: 'color-primary-default',
      background: 'background-basic-color-1', //'rgb(34, 43, 69)',
      card: 'rgb(34, 43, 69)', //applyTheme["background-basic-color-1"],
      text: 'rgb(255, 255, 255)', // theme["background-alternative-color-1"],
      border: 'border-basic-color-1',
      notification: 'text-danger-color',
    },
  };

  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva[theme]}>
        <IconRegistry icons={EvaIconsPack} />
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <SafeAreaProvider>
            <NavigationContainer
              theme={
                theme === 'dark' ? NavigatorThemeDark : NavigatorThemeLight
              }>
              <DrawerNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
        </ThemeContext.Provider>
      </ApplicationProvider>
    </Provider>
  );
}

export default App;
