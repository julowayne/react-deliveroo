import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Card } from 'react-native-elements';

import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef
} from 'react-native-shared-element';

let startAncestor;
let startNode;


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
      }} ref={ref => startAncestor = nodeFromRef(ref)}>
        <SharedElement onNode={node => startNode = node}>
          <Card containerStyle={styles.choices}>          
            <Image
              source={require('../assets/offers.png')}
              style={styles.choicesCardImg}
            />
            <Text
              style={styles.choicesCardText}>
              Offres
            </Text>
          </Card>
        </SharedElement>
      <Card containerStyle={styles.choices}>
        <Image
          source={require('../assets/acai.png')}
          style={styles.choicesCardImg}
        />
        <Text
            style={styles.choicesCardText}>
          Petit Déj..
        </Text>
      </Card>
      <Card containerStyle={styles.choices}>
        <Image
          source={require('../assets/grocery.png')}
          style={styles.choicesCardImg}
        />
        <Text
            style={styles.choicesCardText}>
          Courses
        </Text>
      </Card>
      <Card containerStyle={styles.choices}>
        <Image
          source={require('../assets/pizza.png')}
          style={styles.choicesCardImg}
        />
        <Text
            style={styles.choicesCardText}>
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
  choicesCardImg : {
    height: 80,
    width: 80,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  choicesCardText: {
    color: 'white',
    marginTop: -25,
    marginLeft: 15,
    fontWeight: 'bold',
  }
});
export default Choices;