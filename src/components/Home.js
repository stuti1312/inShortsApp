import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';

import DiscoverScreen from '../screens/DiscoverScreen';
import NewsScreen from '../screens/NewsScreen';
import TopNavigator from './TopNavigator';

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(1);

  const [routes] = useState([
    {key: 'first', title: 'Discover'},
    {key: 'second', title: 'News'},
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={() => <TopNavigator index={index} setIndex={setIndex} />}
    />
  );
};

export default Home;

const styles = StyleSheet.create({});
