import * as React from 'react';
import { Text, View, TextInput, StyleSheet, Button ,Alert,Platform,Image,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import DropDownPicker from 'react-native-dropdown-picker';
export default class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      morning: '',
      noon: '',
      evening: '',
     
      previewImage: 'image_1',
      dropdownHeight: 40,
    };
  }

  async addStory() {
    if (
      this.state.morning &&
      this.state.noon &&
      this.state.evening 
     
    ) {
      let storyData = {
        preview_image: this.state.previewImage,
        morning: this.state.morning,
        noon: this.state.noon,
        evening: this.state.evening,
      
      };
      await firebase
        .database()
        .ref('/data/' + Math.random().toString(36).slice(2))
        .set(storyData)
       // .then(function (snapshot) {});
     // this.props.setUpdateToTrue();
      //this.props.navigation.navigate('Feed');
    } else {
      Alert.alert(
        'Error',
        'All fields are required!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  }

  render() {
     let preview_images = {
      monday: require('../assets/monday.jpg'),
      tuesday: require('../assets/tuesday.jpg'),
      wednesday: require('../assets/wednesday.jpg'),
      thursday: require('../assets/thursday.jpg'),
      friday: require('../assets/friday.jpg'),
      saturday: require('../assets/saturday.jpg'),
      sunday: require('../assets/sunday.jpg'),
    };
    return (
      <View style ={styles.container}>
         <Image
           source={require('../assets/thermometer_10.png')}
          style={styles.titleImage}
        />
         <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}></Image>

            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              <DropDownPicker
              
                  items={[
                  { label: 'Monday', value: 'monday' },
                  { label: 'Tuesday', value: 'tuesday' },
                  { label: 'Wednesday', value: 'wednesday' },
                  { label: 'Thursday', value: 'thursday' },
                  { label: 'Friday', value: 'friday' },
                  { label: 'Saturday', value: 'saturday' },
                  { label: 'Sunday', value: 'sunday' },
                ]}
             
                defaultValue={this.state.previewImage}
                containerStyle={{
                  height: 40,
                  borderRadius: RFValue(20),
                  marginBottom: RFValue(20),
                  marginHorizontal: RFValue(10),
                }}
                onOpen={() => {
                  this.setState({ dropdownHeight: 230 });
                }}
                onClose={() => {
                 this.setState({ dropdownHeight: 40 });
                }}
                style={{ backgroundColor: 'transparent' }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{
                  backgroundColor: '#eee',
                }}
                labelStyle={styles.dropdownLabelLight}
                arrowStyle={styles.dropdownLabelLight}
                onChangeItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
              />
              </View>
           <View
              style={{ marginHorizontal: RFValue(10), marginTop: RFValue(40) }}>
        <Text> Morning (Fahrenheit) - </Text>
        <TextInput
          placeholder="Temperature"
          value={this.state.morning}
          onChangeText={(text) => {
            this.setState({
              morning: text,
            });
          }}
        />

        <Text> Noon (Fahrenheit) - </Text>
        <TextInput
          placeholder="Temperature"
          value={this.state.noon}
          onChangeText={(text) => {
            this.setState({
              noon: text,
            });
          }}
        />

        <Text> Evening (Fahrenheit) - </Text>
        <TextInput
          placeholder="Temperature"
          value={this.state.evening}
          onChangeText={(text) => {
            this.setState({
              evening: text,
            });
          }}
        />

       
</View>
     

        <View style={styles.submitButton}>
          <Button
            onPress={() => this.addStory()
           }
            title="Submit"
            color="#841584"
          />
        </View>
        </ScrollView>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleImage: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    marginLeft: '35%',
  },
  fieldsContainer: {
    flex: 0.85,
  },
  submitButton: {
    width: 100,
    marginLeft: 117,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  backgroundcolor: {
    backgroundColor: '#93774030',
  },
  week: {
    height: 220,
    width: 100,
  },

  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  appTitleTextLight: {
    color: 'black',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: 'black',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'black',
    fontFamily: 'Bubblegum-Sans',
  },
  dropdownLabel: {
    color: 'black',
    fontFamily: 'Bubblegum-Sans',
  },
  dropdownLabelLight: {
    color: 'black',
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
