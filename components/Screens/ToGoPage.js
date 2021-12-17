/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';
import {SearchBar, Button} from 'react-native-elements';
import LottieView from 'lottie-react-native';

class ToGoPage extends Component {
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

  goBackToHome = () => {
    const { navigation } = this.props;
    navigation.navigate('Home')
  }

  updateSearch = search => {
    this.setState({search});
  };

  onPress = press => {
    this.setState({press});
  };

  render() {
    const { navigation, route } = this.props;
    const {search} = this.state;
    const { message } = route.params;
    return (
      <View style={{flex: 1, backgroundColor: '#f8f9fa'}}>
        <View style={{flex: 1.4, backgroundColor: '#00ccbc'}}>
          <View style={styles.mainContainer}>
            <View style={styles.headerProfile}>
              <TouchableOpacity style={{ marginTop: 8}} onPress={ () =>  this.goBackToHome()}>
                <Image source={require("../../assets/back-button-w2.png")}/>
              </TouchableOpacity>
              <Text style={styles.mainText}>
                {message}
              </Text>
            </View>
            <View style={styles.headerProfile}>
              <Image
                style={styles.gpsArrow}
                source={require('../../assets/gps-arrow-white.png')}
              />
              <Text
                style={styles.location}>
                Rue Yves Toudic
              </Text>
              <Image
                style={styles.arrowDown}
                source={require('../../assets/arrow-down.png')}
              />
              <Image
                source={require('../../assets/user.png')}
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
                source={require('../../assets/animations/livraison-red.json')}
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
                source={require('../../assets/animations/deliverynobg.json')}
                progress={this.state.progress}
                autoPlay
                loop
                style={styles.delivery}
              />
            </View>
          </View>
        </View>
        <View style={{flex: 4, padding: 0}}>
          <SearchBar
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            searchIcon={{color: '#00ccbc', size: 25}}
            lightTheme
            placeholder="Plats, restaurants ou types de c..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <ScrollView>
            <View style={{flex: 1, marginBottom: 12, marginTop: 8}}>
             <Text>
               ToGo
             </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginHorizontal: 15,
    marginTop: -35,
  },
  inputContainerStyle:{
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
  mainContainer: {
    padding: 15
  },
  headerProfile: {
    flexDirection: 'row'
  },
  mainText: {
    color: 'white',
    margin: 10,
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


export default ToGoPage;
