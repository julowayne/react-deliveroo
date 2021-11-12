import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Card} from 'react-native-elements';


class Choices extends Component {
  render(){
    return (
      <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 8,
        paddingVertical: 8,
      }}>
      <Card containerStyle={styles.choices}>
        <Image
          source={require('../assets/offers.png')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 5,
            marginHorizontal: 8,
          }}
        />
        <Text
          style={{
            color: 'white',
            marginTop: -25,
            marginLeft: 15,
            fontWeight: 'bold',
          }}>
          Offres
        </Text>
      </Card>
      <Card containerStyle={styles.choices}>
        <Image
          source={require('../assets/acai.png')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 5,
            marginHorizontal: 8,
          }}
        />
        <Text
          style={{
            color: 'white',
            marginTop: -25,
            marginLeft: 15,
            fontWeight: 'bold',
          }}>
          Petit Déj..
        </Text>
      </Card>
      <Card containerStyle={styles.choices}>
        <Image
          source={require('../assets/grocery.png')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 5,
            marginHorizontal: 8,
          }}
        />
        <Text
          style={{
            color: 'white',
            marginTop: -25,
            marginLeft: 15,
            fontWeight: 'bold',
          }}>
          Courses
        </Text>
      </Card>
      <Card containerStyle={styles.choices}>
        <Image
          source={require('../assets/pizza.png')}
          style={{
            height: 80,
            width: 120,
            borderRadius: 5,
            marginHorizontal: 8,
          }}
        />
        <Text
          style={{
            color: 'white',
            marginTop: -25,
            marginLeft: 15,
            fontWeight: 'bold',
          }}>
          Pizzas
        </Text>
      </Card>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  choices: {
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
export default Choices;