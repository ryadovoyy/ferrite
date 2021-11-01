import React from 'react';
import { View } from 'react-native';

export const ScreenWrapper: React.FC = ({ children }) => {
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        justifyContent: 'space-around'
      }}
    >
      {children}
    </View>
  );
};
