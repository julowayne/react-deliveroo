/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import {Button} from 'react-native-elements';
import LottieView from 'lottie-react-native';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      livraison: true
    };
  }
  switchToDelivery = () => {
    const { navigation } = this.props;
    navigation.navigate('Livraison', {
      message: 'Ou me faire livrer ?',
    })
  }
  switchToToGo = () => {
    const { navigation } = this.props;
    navigation.navigate('Emporter',  {
      message: 'Dans quel quartier ?',
    })
  }
  switchFromDeliveryButton = () => {
    this.setState(preState => ({ livraison: !preState.livraison}))
  }
  onPressDelivery = () => {
    this.switchToDelivery();
    this.switchFromDeliveryButton();
  }
  onPressToGo = () => {
    this.switchToToGo();
    this.switchFromDeliveryButton();
  }
  onPress = press => {
    this.setState({press});
  };
  render () {
    const { navigation } = this.props;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerProfile}>
          <LottieView
            source={require('../assets/animations/clock.json')}
            progress={this.state.progress}
            autoPlay
            loop
            style={styles.clock}
          />
          <Text style={styles.mainText}>
            {this.props.now}
          </Text>
        </View>
        <View style={styles.headerProfile}>
          <Image
            style={styles.gpsArrow}
            source={require('../assets/gps-arrow-white.png')}
          />
          {/* Change this text by an input */}
          <Text
            style={styles.location}>
            Rue Yves Toudic
          </Text>
          <Image
            style={styles.arrowDown}
            source={require('../assets/arrow-down.png')}
          />
          <Image
            source={require('../assets/user.png')}
            style={styles.locationArrow}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            containerStyle={styles.buttonContainerStyle1}
            buttonStyle={this.state.livraison ? styles.activeButton : styles.inactiveButton }
            title="Livraison"
            navigation={navigation} 
            onPress={() => this.onPressDelivery()}
          />
          <LottieView
            source={require('../assets/animations/livraison-red.json')}
            progress={this.state.progress}
            autoPlay
            loop
            style={styles.livraison}
          />
          <Button
            containerStyle={styles.buttonContainerStyle2}
            buttonStyle={this.state.livraison ? styles.inactiveButton : styles.activeButton }
            title="A emporter"
            navigation={navigation}
            onPress={() => this.onPressToGo()}
          />
          <LottieView
            source={require('../assets/animations/deliverynobg.json')}
            progress={this.state.progress}
            autoPlay
            loop
            style={styles.delivery}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15
  },
  headerProfile: {
    flexDirection: 'row'
  },
  mainText: {
    color: 'white',
    marginVertical: 10,
    fontSize: 20},
  location: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  locationArrow: {
    width: 40,
    height: 40,
    marginLeft: 125,
    marginTop: -25,
  },
  gpsArrow: {
    width: 10,
    height: 10,
    marginRight: 7,
    marginTop: 10,
  },
  arrowDown: {
    width: 12,
    height: 12,
    marginLeft: 8,
    marginTop: 10,
  },
  ButtonContainer : {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonContainerStyle1: {
    borderRadius: 80,
    height: 40,
    width: 100,
  },
  buttonContainerStyle2: {
    marginHorizontal: 5,
    borderRadius: 80,
    height: 40,
    width: 100,
  },
  buttonStyle: {
    color: 'white',
    borderRadius: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'transparent',
  },
  activeButton : {
    color: 'white',
    borderRadius: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'transparent',
  },
  inactiveButton : {
    color: 'white',
    borderRadius: 80,
    borderColor: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
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
  livraison: {
    width: 50,
    marginVertical: -5,
  },
  delivery: {
    width: 50,
    marginVertical: -5,
    backgroundColor: 'transparent',
  },
  clock: {
    width: 50,
  },
});

export default Header;
