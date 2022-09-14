import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Home from './src/components/Home';

const App = () => {
  return (
    <View style={{...styles.container, backgroundColor: '#282c35'}}>
      <Home/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
