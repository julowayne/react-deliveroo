import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Card} from 'react-native-elements';


class Offers extends Component {
  render(){
    return (
      <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 8,
      }}>
      <Card containerStyle={styles.offers}>
        <Image
          source={require('../assets/pub1.jpeg')}
          style={{
            width: 350,
            height: 160,
            borderRadius: 5,
            marginHorizontal: 8,
          }}
        />
      </Card>
      <Card containerStyle={styles.offers}>
        <Image
          source={require('../assets/pub2.jpeg')}
          style={{
            width: 350,
            height: 160,
            borderRadius: 5,
            marginHorizontal: 8,
          }}
        />
      </Card>
      <Card containerStyle={styles.offers}>
        <Image
          source={require('../assets/pub3.jpeg')}
          style={{
            width: 350,
            height: 160,
            borderRadius: 5,
            marginHorizontal: 8,
          }}
        />
      </Card>
      <Card containerStyle={styles.offers}>
        <Image
          source={require('../assets/pub4.jpeg')}
          style={{
            width: 350,
            height: 160,
            borderRadius: 5,
            marginHorizontal: 8,
          }}
        />
      </Card>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  offers: {
    borderWidth: 0,
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
    shadowColor: 'rgba(0,0,0, 0.0)',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
});
export default Offers;