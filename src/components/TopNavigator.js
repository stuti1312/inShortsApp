import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"

const TopNavigator = ({index, setIndex}) => {
  return (
    <View style={{...styles.container, backgroundColor: '#282c35'}}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={{...styles.text,color: 'lightgray'}}>
            <MaterialIcon name="theme-light-dark" size={25} color="#007fff" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{...styles.left, color: 'lightgray'}}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <IonIcon name="chevron-back" size={25} color="#007fff" />
          <Text style={{...styles.text, color: 'lightgray'}}>Discover</Text>
        </TouchableOpacity>
      )}

      <Text style={{...styles.center, color: '#ffffff'}}>
        {index ? 'All news' : 'Discover'}
      </Text>

      {index ? (
        <TouchableOpacity
          style={styles.right}
          //  onPress={()=>fetchNews("general")}
        >
          <Text style={styles.text}>
            <IonIcon name="refresh-outline" size={25} color="#007fff" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <Text style={{...styles.text, color: '#ffffff'}}>All news</Text>
          <IonIcon name="chevron-forward" size={25} color="#007fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
  },
  right: {width: 80, alignItems: 'flex-end'},
  cenetr: {
    fontSize: 16,
    paddingBottom: 6,
    borderBottomColor: '#007fff',
    borderBottomWidth: 5,
    fontWeight: '700',
    borderRadius:10
  },
  text: {fontSize: 16},
});
