/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import {SearchBar, Card} from 'react-native-elements';
import Header from '../header';
import Choices from '../Choices';
import Offers from '../Offers';
import Headlines from '../Headlines';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      livraison: true
    };
  }
  
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }
  state = {
    search: '',
    buttonBckGrd: 'rgba(0, 0, 0, 0.2)',
  };

  updateSearch = search => {
    this.setState({search});
  };
  render() {
    const now = 'Maintenant'
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={this.props.navigation} now={now} livraisonState={this.state.livraison}/>
        </View>
        <View style={styles.contentContainer}>
          <SearchBar
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.inputContainer}
            searchIcon={{color: '#00ccbc', size: 25}}
            lightTheme
            placeholder="Plats, restaurants ou types de c..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <ScrollView>
            <View style={styles.choicesContainer}>
              <ScrollView horizontal={true}>
              <Choices />
              </ScrollView>
            </View>
            <View style={styles.offersContainer}>
              <ScrollView horizontal={true}>
              <Offers />
              </ScrollView>
            </View>
            <View style={styles.headlinesContainer}>
            <Headlines/>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  header : {
    flex: 1.4,
    backgroundColor: '#00ccbc'
  },
  contentContainer : { 
    flex: 4, 
    padding: 0
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginHorizontal: 15,
    marginTop: -35,
  },
  inputContainer: {
    borderRadius: 80,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  choicesContainer : {
    flex: 1, 
    marginBottom: 12, 
    marginTop: 8
  },
  offersContainer: {
    flex: 1
  },
  headlinesContainer: {
    flex: 1
  },

});

export default HomeScreen;
