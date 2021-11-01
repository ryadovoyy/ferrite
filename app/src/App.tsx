import React from 'react';
import {
  DefaultTheme,
  Provider as PaperProvider,
  ActivityIndicator
} from 'react-native-paper';

import { ScreenWrapper } from './lib/components/ScreenWrapper';
import { Colors } from './lib/consts';

declare global {
  namespace ReactNativePaper {
    interface Theme {
      roundness: number;
    }

    interface ThemeColors {
      primary: string;
      text: string;
    }
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.Primary,
    text: Colors.Primary
  }
};

export const App = () => {
  return (
    <PaperProvider theme={theme}>
      <ScreenWrapper>
        <ActivityIndicator size="large" />
      </ScreenWrapper>
    </PaperProvider>
  );
};
