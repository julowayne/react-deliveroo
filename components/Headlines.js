import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Card} from 'react-native-elements';


class Headlines extends Component {
  render(){
    return (
      <View>
        <View
          style={styles.headlineText}>
          <Text
            style={styles.headlineText2}>
            A la une
          </Text>
          <Text style={{color: 'black'}}>
            Annonces à la une de nos partenaires
          </Text>
        </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={styles.headlineContainer}>
          <Card containerStyle={styles.offers}>
            <Image
              source={require('../assets/pub1.jpeg')}
              style={styles.headlineCard}
            />
          </Card>
          <Card containerStyle={styles.offers}>
            <Image
              source={require('../assets/pub2.jpeg')}
              style={styles.headlineCard}
            />
          </Card>
          <Card containerStyle={styles.offers}>
            <Image
              source={require('../assets/pub3.jpeg')}
              style={styles.headlineCard}
            />
          </Card>
          <Card containerStyle={styles.offers}>
            <Image
              source={require('../assets/pub4.jpeg')}
              style={styles.headlineCard}
            />
          </Card>
        </View>
      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  headlineText: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 10
  },
  headlineText2: {
    fontWeight: 'bold',
    fontSize: 20, 
    color: 'black'
  },
  headlineContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 8,
  },
  headlineCard: {
    width: 260,
    height: 130,
    borderRadius: 5,
    marginHorizontal: 8,
  },
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

export default Headlines;